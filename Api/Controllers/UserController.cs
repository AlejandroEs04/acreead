using System.Security.Cryptography;
using acreeadApi.Data;
using acreeadApi.Dtos;
using acreeadApi.Utils;
using acreeadApi.Views;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace acreeadApi.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class UserController(IConfiguration config) : ControllerBase
{
    private readonly DataContextDapper _dapper = new (config);
    private readonly AuthHelper _authHelper = new (config);

    [HttpGet]
    public IEnumerable<UserVw> GetUsers()
    {
        string query = "SELECT * FROM UserVw";
        return _dapper.Query<UserVw>(query);
    }

    [AllowAnonymous]
    [HttpPost]
    public IActionResult RegisterUser (UserCreateDto newuser)
    {
        try
        {
            VerifyExistsUser(newuser.Email, newuser.PhoneNumber);

            var passwordSalt = GetSalt();
            byte[] passwordHash = _authHelper.GetPasswordHash(newuser.Password, passwordSalt);

            string queryInsert = @"
                INSERT INTO [User] (name, lastName, email, phoneNumber, passwordHash, passwordSalt, companyName, rol_id)
                VALUES (@name, @lastName, @email, @phoneNumber, @passwordHash, @passwordSalt, @companyName, 1)
            ";

            var sqlParams = new {
                @name = newuser.Name,
                @lastName = newuser.LastName,
                @email = newuser.Email,
                @phoneNumber = newuser.PhoneNumber,
                @companyName = newuser.CompanyName,
                passwordHash, 
                passwordSalt,
            };

            _dapper.ExecuteSql(queryInsert, sqlParams);

            return Ok();
        }
        catch (Exception ex)
        {
            return StatusCode(401, ex.Message);
        }
    }

    protected static byte[] GetSalt()
    {
        byte[] salt = new byte[129 / 8];
        using RandomNumberGenerator rng = RandomNumberGenerator.Create();
        rng.GetNonZeroBytes(salt);
        return salt;
    }

    protected private void VerifyExistsUser(string email, string phoneNumber)
    {
        string queryExistsUser = @"SELECT
            COALESCE(
                (SELECT email FROM [User] WHERE email = @email),
                NULL
            ) AS email,
            COALESCE(
                (SELECT phoneNumber FROM [User] WHERE phoneNumber = @phoneNumber),
                NULL
            ) AS phoneNumber;
        ";
        
        UserExistsDto? userExists = _dapper.QuerySingle<UserExistsDto>(queryExistsUser, new { email, phoneNumber });

        if(userExists != null)
        {
            if(!string.IsNullOrEmpty(userExists.Email) && !string.IsNullOrEmpty(userExists.PhoneNumber))
            {
                throw new InvalidOperationException("Email and Phone Number are already used");
            }
            else if(!string.IsNullOrEmpty(userExists.Email))
            {
                throw new InvalidOperationException("Email is already used");
            }
            else if(!string.IsNullOrEmpty(userExists.PhoneNumber))
            {
                throw new InvalidOperationException("Phone Number is already used");
            }
        }
    }
}