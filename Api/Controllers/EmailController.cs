using acreeadApi.Data;
using acreeadApi.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;

namespace acreeadApi.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class EmailController(IConfiguration config) : ControllerBase
{
    private readonly DataContextDapper _dapper = new (config);

    [AllowAnonymous]
    [HttpPost("ContactUs")]
    public async Task<IActionResult> ContactUs (ContactUs form)
    {
        string service = "N/A";
        if(string.IsNullOrEmpty(form.Email)) return StatusCode(401, "Email is required");

        if(form.ServiceId != 0) service = _dapper.QuerySingle<string>($"SELECT name FROM Service WHERE service_id = @serviceId", new { @serviceId = form.ServiceId})!;

        var emailSettings = config.GetSection("EmailSettings");

        string message = $"Buenos días, se ha enviado una solicitud de contacto por parte de {form.LastName} {form.Name}<br/>Su información de contacto es la siguiente:<br/>Email: {form.Email}<br/>Número de contacto: {form.PhoneNumber}<br/>Servicio de interes: {service}<br/><br/>El mensaje es el siguiente: {form.Message}";

        var email = new MimeMessage();
        email.From.Add(new MailboxAddress(form.Name, form.Email));
        email.To.Add(new MailboxAddress(emailSettings["SenderName"], emailSettings["SenderEmail"]));
        email.Subject = "Solicitud de contacto de acreead";

        var bodyBuilder = new BodyBuilder { HtmlBody = message };
        email.Body = bodyBuilder.ToMessageBody();

        using var smtp = new SmtpClient();

        try
        {
            await smtp.ConnectAsync(emailSettings["SmtpServer"], int.Parse(emailSettings["SmtpPort"]!), SecureSocketOptions.StartTls);
            await smtp.AuthenticateAsync(emailSettings["SenderUserName"], emailSettings["SenderPassword"]);
            await smtp.SendAsync(email);
            await smtp.DisconnectAsync(true);

            return Ok(new { message = "Correo enviado correctamente" });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { error = "Error al enviar el correo", details = ex.Message });
        }
    }

    [AllowAnonymous]
    [HttpPost("Contract")]
    public async Task<IActionResult> Contract (ContractEmailDto form)
    {
        string service = "N/A";
        string plan = "N/A";

        if(string.IsNullOrEmpty(form.Email)) return StatusCode(401, "Email is required");

        if(form.ServiceId != 0) service = _dapper.QuerySingle<string>($"SELECT name FROM Service WHERE service_id = @serviceId", new { @serviceId = form.ServiceId})!;
        if(form.PlanId != 0) plan = _dapper.QuerySingle<string>($"SELECT name FROM [Plan] WHERE plan_id = @planId", new { @planId = form.PlanId })!;

        var emailSettings = config.GetSection("EmailSettings");

        string message = $"Buenos días, se ha enviado una solicitud de contacto por parte de {form.LastName} {form.Name}<br/>Su información de contacto es la siguiente:<br/>Email: {form.Email}<br/>Número de contacto: {form.PhoneNumber}<br/>Compañia: {form.Company}<br/>Servicio de interes: {service} con el plan {plan}<br/><br/>Día de la junta: {form.MeetingDate}";

        var email = new MimeMessage();
        email.From.Add(new MailboxAddress(form.Name, form.Email));
        email.To.Add(new MailboxAddress(emailSettings["SenderName"], emailSettings["SenderEmail"]));
        email.Subject = "Solicitud de contacto de acreead";

        var bodyBuilder = new BodyBuilder { HtmlBody = message };
        email.Body = bodyBuilder.ToMessageBody();

        using var smtp = new SmtpClient();

        try
        {
            await smtp.ConnectAsync(emailSettings["SmtpServer"], int.Parse(emailSettings["SmtpPort"]!), SecureSocketOptions.StartTls);
            await smtp.AuthenticateAsync(emailSettings["SenderUserName"], emailSettings["SenderPassword"]);
            await smtp.SendAsync(email);
            await smtp.DisconnectAsync(true);

            return Ok(new { message = "Correo enviado correctamente" });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { error = "Error al enviar el correo", details = ex.Message });
        }
    }
}