using acreeadApi.Views;

namespace acreeadApi.Models;

public class Service 
{
    public int ServiceId { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public virtual IEnumerable<ServicePlanVw> Plans { get; set; } = [];
}