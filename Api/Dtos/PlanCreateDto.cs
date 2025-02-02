namespace acreeadApi.Dtos;

public class PlanCreateDto
{
    public string Name { get; set; } = "";
    public string Description { get; set; } = "";
    public decimal Price { get; set; }
    public decimal? StartPrice { get; set; }
}