namespace ClientOnApp.Models;

public record CreateStoreRequest(
    string Name,
    string Cnpj,
    string Email,
    string FantasyName,
    string Password
);
