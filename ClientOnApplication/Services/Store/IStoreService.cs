namespace ClientOnApplication.Services.Store
{
    public interface IStoreService
    {
        Task<Models.Store> RegisterStoreAsync(DTOs.CreateStoreRequestDto createStoreDto);
    }
}
