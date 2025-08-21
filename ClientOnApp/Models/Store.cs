namespace ClientOnApp.Models;

// This represents the data as it is in our database table.
public record Store(
    int Id,
    string Name,
    string Cnpj,
    string Email,
    string FantasyName,
    string PasswordHash
);