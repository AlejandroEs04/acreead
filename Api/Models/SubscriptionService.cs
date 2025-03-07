using Stripe;

namespace acreeadApi.Models;

public class SubscriptionService
{
    public string CreateSuscription(string customerId, string priceId)
    {
        var options = new SubscriptionCreateOptions
        {
            Customer = customerId, 
            Items =
            [
                new SubscriptionItemOptions { Price = priceId }
            ]
        };

        var service = new Stripe.SubscriptionService();
        var subscription = service.Create(options);
        return subscription.Id;
    }
}