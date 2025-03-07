using acreeadApi.Data;
using acreeadApi.Dtos;
using acreeadApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace acreeadApi.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class ProjectController(IConfiguration config) : ControllerBase
{
    private readonly DataContextDapper _dapper = new (config);

    [AllowAnonymous]
    [HttpGet]
    public IEnumerable<Project> GetProjects()
    {
        string query = "SELECT * FROM Project";
        IEnumerable<Project> projects = _dapper.Query<Project>(query);

        string queryImages = "SELECT * FROM ProjectImage";
        IEnumerable<ProjectImage> images = _dapper.Query<ProjectImage>(queryImages);

        foreach(Project project in projects)
        {
            project.Images = images.Where(i => i.ProjectId == project.ProjectId);
        }

        return projects;
    }

    [HttpPost]
    public IActionResult RegisterProject(ProjectCreateDto project)
    {
        try
        {
            string queryInsert = "INSERT INTO Project (name, description, customerId, url) VALUES (@name, @description, @customerId, @url)";
            _dapper.ExecuteSql(queryInsert, new { @name = project.Name, @description = project.Description, @customerId = project.CustomerId, @url = project.Url });
        
            return Ok();
        }
        catch (Exception)
        {
            throw;
        }
    }

    [HttpPut]
    public IActionResult UpdateProject(Project project)
    {
        try
        {
            return Ok();
        }
        catch (Exception)
        {
            throw;
        }
    }

    [HttpPost("Image")]
    public IActionResult AddImage(ProjectImage image)
    {
        try
        {
            string queryInsert = "INSERT INTO ProjectImage (projectId, imageUrl) VALUES (@projectId, @imageUrl)";
            _dapper.ExecuteSql(queryInsert, new { @projectId = image.ProjectId, @imageUrl = image.ImageUrl });

            return Ok();
        }
        catch (Exception)
        {
            throw;
        }
    }
}