namespace ClientOnApplication.DTOs
{
    public class StoreResponseDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Cnpj { get; set; }
        public string Email { get; set; }
        public string FantasyName { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}
