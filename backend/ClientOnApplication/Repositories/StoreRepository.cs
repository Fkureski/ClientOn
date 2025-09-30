using ClientOnApplication.Models;
using Dapper;
using Npgsql;

namespace ClientOnApplication.Repositories
{
    public class StoreRepository : IStoreRepository
    {
        private readonly IConfiguration _configuration;

        public StoreRepository(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<Store> CreateStoreAsync(Store store)
        {
            var sql = @"
                INSERT INTO stores (name, cnpj, password, email, fantasy_name)
                VALUES (@Name, @Cnpj, @Password, @Email, @FantasyName)
                RETURNING id, name, cnpj, password, email, fantasy_name AS FantasyName, created_at AS CreatedAtd;
            ";
            await using var connection = new NpgsqlConnection(_configuration.GetConnectionString("DefaultConnection"));
            var newStore = await connection.QuerySingleAsync<Store>(sql, store);
            return newStore;
        }
    }
}
