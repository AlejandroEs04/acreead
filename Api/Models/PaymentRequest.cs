namespace acreeadApi.Models;

public class PaymentRequest 
{
    public long Amount { get; set; }
    public string Currency { get; set; } = "MX";
}