using ClientOnApp.Models;
using ClientOnApp.Models;

namespace ClientOnApplication.Data;

public interface IStoreRepository
{
    Task<Store> CreateStoreAsync(CreateStoreRequest request);
}