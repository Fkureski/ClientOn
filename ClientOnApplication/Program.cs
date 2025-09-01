using ClientOnApplication.Repositories;
using ClientOnApplication.Services.Store;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

//Jwt Bearer configurations
//Add Services to the container.
builder.Services.AddControllers();
//Add authentication and jwt bearer
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        //Configuration for validation Token
        //Issuer (Who created the token)
        ValidateIssuer = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],

        //Audience (Who is the token intended for)
        ValidateAudience = true,
        ValidAudience = builder.Configuration["Jwt:Audience"],

        //Lifetime (Is the token still valid)
        ValidateLifetime = true,
        ClockSkew = TimeSpan.Zero,

        //SigningKey (How to verify the token's signature)
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
    };
});

//Add authorization services
builder.Services.AddAuthorization();


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

//Add authorization and authentication middlewares
app.UseAuthentication();
app.UseAuthorization();