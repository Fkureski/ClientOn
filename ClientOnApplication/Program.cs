using ClientOnApplication.Repositories;
using ClientOnApplication.Services.Store;

var builder = WebApplication.CreateBuilder(args);

//CORS configuration
var myAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: myAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:3000")
                                .AllowAnyHeader()
                                .AllowAnyMethod();
                      });
});

// This tells .NET: "When a class asks for IStoreService, give it an instance of StoreService."
builder.Services.AddScoped<IStoreService, StoreService>();

// This tells .NET: "When a class asks for IStoreRepository, give it an instance of StoreRepository."
builder.Services.AddScoped<IStoreRepository, StoreRepository>();

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(myAllowSpecificOrigins);

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();