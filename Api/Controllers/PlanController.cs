using acreeadApi.Data;
using acreeadApi.Dtos;
using acreeadApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace acreeadApi.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class PlanController(IConfiguration config) : ControllerBase
{
    private readonly DataContextDapper _dapper = new (config);

    [AllowAnonymous]
    [HttpGet]
    public IEnumerable<Plan> GetPlans()
    {
        string query = "SELECT * FROM [Plan]";
        return _dapper.Query<Plan>(query);
    }

    [HttpPost]
    public IActionResult RegisterPlan(PlanCreateDto newPlan)
    {
        if(newPlan.Name == "") throw new Exception("Name es required");
        if(newPlan.Price == 0) throw new Exception("Price es required");

        try
        {
            string queryInsert = "INSERT INTO [Plan] (name, description, price, startPrice) VALUES (@name, @description, @price, @startPrice)";

            _dapper.ExecuteSql(queryInsert, 
                new { @name = newPlan.Name, @description = newPlan.Description, @price = newPlan.Price, @startPrice = newPlan.StartPrice });

            return Ok();
        }
        catch (Exception)
        {
            throw;
        }
    }

    [HttpPut("{id:int}")]
    public IActionResult UpdatePlan(int id, Plan updatePlan)
    {
        if(id == 0) throw new Exception("ID is required");
        if(updatePlan.Name == "") throw new Exception("Name is required");
        if(updatePlan.Price == 0) throw new Exception("Price es required");

        Console.WriteLine(updatePlan.Price);

        try
        {
            string queryUpdate = @"
                UPDATE [Plan]
                    SET 
                        name = @name, 
                        description = @description,
                        price = @price,
                        startPrice = @startPrice,
                        active = @active
                WHERE planId = @planId";

            _dapper.ExecuteSql(queryUpdate, 
                new { 
                    @name = updatePlan.Name, 
                    @description = updatePlan.Description, 
                    @price = updatePlan.Price, 
                    @startPrice = updatePlan.StartPrice, 
                    @active = updatePlan.Active, 
                    @planId = id 
                });
            return Ok();
        }
        catch (Exception)
        {
            throw;
        }
    }

    [HttpDelete("{id:int}")]
    public IActionResult DeletePlan (int id)
    {
        if(id == 0) throw new Exception("ID is required");

        try
        {
            string queryDelete = "DELETE FROM [Plan] WHERE planId = @planId";

            _dapper.ExecuteSql(queryDelete, new { @planId = id });
            return Ok();
        }
        catch (Exception)
        {
            throw;
        }
    }
}
