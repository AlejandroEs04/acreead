namespace acreeadApi.Models;
public class Project 
{
    public int Project_id { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public int? Customer_id { get; set; }
    public string Url { get; set; } = "";
    public DateTime Start_date { get; set; }
    public DateTime? End_date { get; set;}
    public int Status_id { get; set; }
    public bool Active { get; set; }
    public virtual IEnumerable<ProjectImage> Images { get; set; } = [];
}