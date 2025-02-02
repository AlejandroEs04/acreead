namespace acreeadApi.Views;

public class ServicePlanVw
{
    public int Plan_id { get; set; }
    public int Service_id { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public decimal Price { get; set; }
    public decimal StartPrice { get; set; }

}