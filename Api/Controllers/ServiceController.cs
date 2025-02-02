using acreeadApi.Data;
using Microsoft.AspNetCore.Mvc;
using acreeadApi.Models;
using acreeadApi.Dtos;
using acreeadApi.Views;
using Microsoft.AspNetCore.Authorization;

namespace acreeadApi.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class ServiceController(IConfiguration config) : ControllerBase
{
    private readonly DataContextDapper _dapper = new (config);

    [AllowAnonymous]
    [HttpGet]
    public IEnumerable<Service> GetServices()
    {
        string query = "SELECT * FROM [Service]";
        IEnumerable<Service> services = _dapper.Query<Service>(query);

        string queryPlans = "SELECT * FROM ServicePlanVw";

        IEnumerable<ServicePlanVw> plans = _dapper.Query<ServicePlanVw>(queryPlans);

        foreach(Service service in services)
        {
            service.Plans = plans.Where(p => p.Service_id == service.Service_id);
        }

        return services;
    }

    [HttpPost]
    public IActionResult RegisterService(ServiceCreateDto newService)
    {
        if(newService.Name == "") throw new Exception("Name is required");

        try
        {
            string queryInsert = "INSERT INTO [Service] (name, description) VALUES (@name, @description)";
            _dapper.ExecuteSql(queryInsert, new { @name = newService.Name, @description = newService.Description });

            return Ok();
        }
        catch(Exception)
        {
            throw;
        }
        
    }

    [HttpPut("{id:int}")]
    public IActionResult UpdateService(int id, Service updateService)
    {
        if(id == 0) throw new Exception("ID is required");
        if(updateService.Name == "") throw new Exception("Name is required");

        try
        {
            string queryUpdate = @"
                UPDATE [Service]
                    SET 
                        name = @name, 
                        description = @description
                WHERE service_id = @service_id";

            _dapper.ExecuteSql(queryUpdate, new { @name = updateService.Name, @description = updateService.Description, @service_id = id });
            return Ok();
        }
        catch (Exception)
        {
            throw;
        }
    }

    [HttpDelete("{id:int}")]
    public IActionResult DeleteService (int id)
    {
        if(id == 0) throw new Exception("ID is required");

        try
        {
            string queryDelete = "DELETE FROM [Service] WHERE service_id = @service_id";

            _dapper.ExecuteSql(queryDelete, new { @service_id = id });
            return Ok();
        }
        catch (Exception)
        {
            throw;
        }
    }

    [HttpPost("{id:int}/Plan")]
    public IActionResult AddPlan (int id, int plan_id)
    {
        try
        {
            string queryAddPlan = "INSERT INTO [ServicePlan] (service_id, plan_id) VALUES (@service_id, @plan_id)";

            _dapper.ExecuteSql(queryAddPlan, new { plan_id, @service_id = id });
            return Ok();
        }
        catch (Exception)
        {
            throw;
        }
    }
}