using Stripe;

namespace acreeadApi.Models;

public class PaymentService
{
    public PaymentService()
    {
        StripeConfiguration.ApiKey = "sk_test_51Qv9s9FtisSrMTV1NmbazTgW1sBugXRn3QmocsMdivkfkzNZByhoRz8zU6cMcSArOd5EGZqiZeh9jvn2gCpFQMFK00vPObOWf4";
    }

    public string CreatePaymentIntent(decimal amount, string currency)
    {
        var options = new PaymentIntentCreateOptions
        {
            Amount = (long)(amount * 100), 
            Currency = currency, 
            PaymentMethodTypes = ["card"]
        };

        var service = new PaymentIntentService();
        var paymentIntent = service.Create(options);
        return paymentIntent.ClientSecret;
    }
}