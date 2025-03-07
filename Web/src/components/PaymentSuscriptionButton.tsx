import { loadStripe } from "@stripe/stripe-js"
import { useState } from "react"

const stripePromise = loadStripe("sk_test_51Qv9s9FtisSrMTV1NmbazTgW1sBugXRn3QmocsMdivkfkzNZByhoRz8zU6cMcSArOd5EGZqiZeh9jvn2gCpFQMFK00vPObOWf4")

export default function PaymentSuscriptionButton() {
    const [sessionId, setSessionId] = useState<string | null>(null);

    return (
        <div>PaymentSuscriptionButton</div>
    )
}
