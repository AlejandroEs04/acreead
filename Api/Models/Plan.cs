namespace acreeadApi.Models;

public class Plan
{
    public int PlanId { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public decimal Price { get; set; }
    public decimal? StartPrice { get; set; }
    public bool Active { get; set; }
}