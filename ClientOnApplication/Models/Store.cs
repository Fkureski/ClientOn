namespace ClientOnApplication.Models
{
    public class Store
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Cnpj { get; set; }
        public string Password { get; set; } //Hashed password
        public string Email { get; set; }
        public string FantasyName { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}