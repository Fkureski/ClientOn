using ClientOnApp.Models;
using ClientOnApplication.Data;

namespace ClientOnApp.EndPoints;

public static class StoreEndpoints
{
    public static void MapStoreEndpoints(this IEndpointRouteBuilder app)
    {
        app.MapPost("/stores", async (CreateStoreRequest request, IStoreRepository repository) =>
        {
            var newStore = await repository.CreateStoreAsync(request);
            return Results.Created($"/stores/{newStore.Id}", newStore);
        });
    }
}