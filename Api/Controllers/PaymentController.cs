using acreeadApi.Data;
using acreeadApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace acreeadApi.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class PaymentController(IConfiguration config) : ControllerBase
{
    private readonly DataContextDapper _dapper = new (config);

    [HttpPost("create-payment-intent")]
    public IActionResult CreatePaymentIntent([FromBody] PaymentRequest request)
    {
        var paymentService = new PaymentService();
        var clientSecret = paymentService.CreatePaymentIntent(request.Amount, request.Currency);
        return Ok(new { clientSecret });
    }

    [HttpPost("create-suscription")]
    public IActionResult CreateSubscription([FromBody] SubscriptionRequest request)
    {
        var subscriptionService = new SubscriptionService();
        var subscriptionId = subscriptionService.CreateSuscription(request.CustomerId, request.PriceId.ToString());
        return Ok(new { subscriptionId });
    }
}