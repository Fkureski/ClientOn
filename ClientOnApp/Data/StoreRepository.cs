using ClientOnApp.Models;
using Npgsql;
using Dapper;
using System.Transactions;
using ClientOnApplication.Data;


namespace ClientOnApp.Data;

public class StoreRepository : IStoreRepository
{
    private readonly NpgsqlConnection _connection;
    public StoreRepository(NpgsqlConnection connection)
    {
        _connection = connection;
    }

    public async Task<Store> CreateStoreAsync (CreateStoreRequest request)
    {
        await using var transaction = await _connection.BeginTransactionAsync();

        try
        {
            var passwordHash = BCrypt.Net.BCrypt.HashPassword(request.Password);
            var storeSql = @"
                INSERT INTO public.store (name, cnpj, email, fantasy_name, password_hash)
                VALUES (@Name, @Cnpj, @Email, @FantasyName, @PasswordHash)
                RETURNING id;";

            var storeId = await _connection.ExecuteScalarAsync<int>(storeSql, new { /* ... params ... */ }, transaction);

            var addressSql = @"
                NSERT INTO public.adress (store_id, street, number, neighborhood, cep, complement)
                VALUES (@StoreId, @Street, @Number, @Neighborhood, @Cep, @Complement);";

            await _connection.ExecuteAsync(addressSql, new { /* ... params ... */ }, transaction);
            await transaction.CommitAsync();

            return new Store(storeId, request.Name, request.Cnpj, request.Email, request.FantasyName, passwordHash);
        }
        catch (Exception ex)
        {
            await transaction.RollbackAsync();
            throw new Exception("An error occurred while creating the store.", ex);
        }
    }
}