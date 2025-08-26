using ClientOnApplication.Repositories;
using ClientOnApplication.Utils;
using ClientOnApplication.Services.Store;


namespace ClientOnApplication.Services.Store
{
    public class StoreService : IStoreService
    {
        private readonly IStoreRepository _storeRepository;
        public StoreService(IStoreRepository storeRepository)
        {
            _storeRepository = storeRepository;
        }
        public async Task<Models.Store> RegisterStoreAsync(DTOs.CreateStoreRequestDto createStoreDto)
        {
            if (!CnpjUtils.IsValid(createStoreDto.Cnpj))
            {
                throw new ArgumentException("Invalid CNPJ.");
            }
            var cleanedCnpj = CnpjUtils.GetNumbersOnly(createStoreDto.Cnpj);

            var hashedPassword = BCrypt.Net.BCrypt.HashPassword(createStoreDto.Password);

            var newStore = new Models.Store
            {
                Name = createStoreDto.Name,
                Cnpj = cleanedCnpj,
                Password = hashedPassword,
                Email = createStoreDto.Email,
                FantasyName = createStoreDto.FantasyName
            };

           var createdStore = await _storeRepository.CreateStoreAsync(newStore);
            return createdStore;
        }
    }
}
