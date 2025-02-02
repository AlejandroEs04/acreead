namespace acreeadApi.Models;

public class User 
{
    public int User_id { get; set; }
    public string Name { get; set; } = "";
    public string LastName { get; set; } = "";
    public string PhoneNumber { get; set; } = "";
    public string Email { get; set; } = "";
    public byte[] PasswordHash { get; set; } = [];
    public byte[] PasswordSalt { get; set; } = [];
    public string CompanyName { get; set; } = "";
    public int Rol_id { get; set; }
    public bool Active { get; set; }
}