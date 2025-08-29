using ClientOnApplication.Repositories;
using ClientOnApplication.Services.Store;
using ClientOnApplication.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace ClientOnApplication.Controllers.Store
{
    [ApiController]
    [Route("api/[controller]")] 
    public class CreateStoreController : ControllerBase
    {
        private readonly IStoreService _storeService;
        public CreateStoreController(IStoreService storeService)
        {
            _storeService = storeService;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterStore([FromBody] CreateStoreRequestDto createStoreDto)
        {
            var newStore = await _storeService.RegisterStoreAsync(createStoreDto);

            var response = new StoreResponse
            {
                Id = newStore.Id,
                Name = newStore.Name,
                Cnpj = newStore.Cnpj,
                Email = newStore.Email,
                FantasyName = newStore.FantasyName,
                CreatedAt = newStore.CreatedAt
            };

            if (response == null)
            {
                return BadRequest("Store registration failed.");
            }

            return Ok(response);
        }
    }
}
