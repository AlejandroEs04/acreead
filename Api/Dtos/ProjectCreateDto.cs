namespace acreeadApi.Dtos;
public class ProjectCreateDto 
{
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public int CustomerId { get; set; }
    public string Url { get; set; } = "";
}