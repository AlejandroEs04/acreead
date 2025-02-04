namespace acreeadApi.Dtos;
public class ContactUs 
{
    public string Name { get; set; } = "";
    public string LastName { get; set; } = "";
    public string Email { get; set; } = "";
    public string PhoneNumber { get; set; } = "";
    public string Message { get; set; } = "";
    public int ServiceId { get; set; }
}