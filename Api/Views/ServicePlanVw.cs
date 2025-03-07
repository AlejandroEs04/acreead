namespace acreeadApi.Views;

public class ServicePlanVw
{
    public int PlanId { get; set; }
    public int ServiceId { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public decimal Price { get; set; }
    public decimal StartPrice { get; set; }

}