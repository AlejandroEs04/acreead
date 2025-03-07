namespace acreeadApi.Models;
public class Project 
{
    public int ProjectId { get; set; }
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public int? CustomerId { get; set; }
    public string Url { get; set; } = "";
    public DateTime StartDate { get; set; }
    public DateTime? EndDate { get; set;}
    public int StatusId { get; set; }
    public bool Active { get; set; }
    public virtual IEnumerable<ProjectImage> Images { get; set; } = [];
}