using acreeadApi.Data;
using acreeadApi.Dtos;
using acreeadApi.Models;
using acreeadApi.Utils;
using acreeadApi.Views;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace acreeadApi.Controllers;
[Authorize]
[ApiController]
[Route("[controller]")]
public class AuthController(IConfiguration config) : ControllerBase
{
    private readonly DataContextDapper _dapper = new (config);
    private readonly AuthHelper _authHelper = new (config);

    [AllowAnonymous]
    [HttpPost]
    public IActionResult Login(AuthLoginDto userLogin)
    {
        string queryLogin = "SELECT user_id, passwordHash, passwordSalt FROM [User] WHERE email = @email";
        User? user = _dapper.QuerySingle<User>(queryLogin, new { userLogin.Email });

        if(user == null) return StatusCode(404, "User not found");

        byte[] passwordHash = _authHelper.GetPasswordHash(userLogin.Password, user.PasswordSalt);

        for(int i = 0; i < passwordHash.Length; i++)
        {
            if(passwordHash[i] != user.PasswordHash[i])
            {
                return StatusCode(401, "Incorrect Password");
            }
        }

        return Ok(new Dictionary<string, string> {
            {"token", _authHelper.CreateToken(user.User_id)}
        });
    }

    [HttpGet("GetAuth")]
    public UserVw GetAuth()
    {
        string userId = User.FindFirst("userId")?.Value + "";
        string userIdSql = @"SELECT * FROM [UserVw] WHERE user_id = @user_id";

        UserVw? user = _dapper.QuerySingle<UserVw>(userIdSql, new { @user_id = userId }) ?? throw new Exception("User not found");
        return user;
    }

    [HttpGet("RefreshToken")]
    public IActionResult RefreshToken()
    {
        string userId = User.FindFirst("userId")?.Value + "";

        string userIdSql = @"SELECT user_id FROM [User] WHERE user_id = @user_id";

        int userIdFromDB = _dapper.QuerySingle<int>(userIdSql, new { @user_id = userId });

        return Ok(new Dictionary<string, string> {
            {"token", _authHelper.CreateToken(userIdFromDB)}
        });
    }
}