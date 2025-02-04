namespace acreeadApi.Dtos;
public class ContractEmailDto
{
    public string Name { get; set; } = "";
    public string LastName { get; set; } = "";
    public string Email { get; set; } = "";
    public string PhoneNumber { get; set; } = "";
    public string Company { get; set; } = "";
    public int ServiceId { get; set; }
    public int PlanId { get; set; }
    public DateTime? MeetingDate { get; set; }
}