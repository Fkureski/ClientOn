namespace ClientOnApplication.DTOs
{
    public class CreateStoreRequestDto
    {
        public string Name { get; set; }
        public string Cnpj { get; set; }
        public string Password { get; set; } 
        public string Email { get; set; }
        public string FantasyName { get; set; }
    }
}
