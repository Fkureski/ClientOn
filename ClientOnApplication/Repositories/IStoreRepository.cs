using ClientOnApplication.Models;

namespace ClientOnApplication.Repositories
{
    public interface IStoreRepository
    {
        Task<Store> CreateStoreAsync(Store store);
    }
}
