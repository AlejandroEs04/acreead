namespace acreeadApi.Views;
public class UserVw
{
    public int UserId { get; set; }
    public string Name { get; set; } = "";
    public string LastName { get; set; } = "";
    public string PhoneNumber { get; set; } = "";
    public string Email { get; set; } = "";
    public string CompanyName { get; set; } = "";
    public string Rol { get; set; } = "";
    public bool Active { get; set; }
}