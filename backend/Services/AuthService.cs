using ClientOnApplication.DTOs;
using System.Security.Authentication;

namespace ClientOnApplication.Services
{
    public class AuthService
    {
        private readonly Supabase.Client _supabaseClient;

        public AuthService(Supabase.Client supabaseClient)
        {
            _supabaseClient = supabaseClient;
        }
        public async Task<AuthResponseDto> LoginAsync(LoginRequestDto loginRequest)
        {
            var session = await _supabaseClient.Auth.SignIn(loginRequest.Email, loginRequest.Password);
            if (session.User == null || session.AccessToken == null)
            {
                throw new InvalidCredentialException("Invalid email or password.");
            }

            return new AuthResponseDto
            {
                Token = session.AccessToken,
                Expiration = DateTime.UtcNow.AddSeconds(session.ExpiresIn)
            };
        }
    }
}
