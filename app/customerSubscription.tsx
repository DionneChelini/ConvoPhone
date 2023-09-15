import axios from "axios";

const stripeSecretKey = "sk_test_51IjLitLS6zBJNnGQEM5DrXgvnFY6tdrwQTYt01rmcHFvvFvPqDofh7cb7pCq2S8g29enS5XZvZS92pObSfVVUhGK00LfNj7RYW";

export async function getCustomerSubscription(email: any) {
  try {
    const response = await axios.get(`https://api.stripe.com/v1/customers?email=${email}`, {
      headers: {
        Authorization: `Bearer ${stripeSecretKey}`,
      },
    });
    const customer = response.data.data[0];
    if (!customer) {
      throw new Error("Customer not found");
    }

    const customerId = customer.id;

    const subscriptionResponse = await axios.get(`https://api.stripe.com/v1/subscriptions?customer=${customerId}`, {
      headers: {
        Authorization: `Bearer ${stripeSecretKey}`,
      },
    });
    const subscriptions = subscriptionResponse.data.data;
    if (!subscriptions || subscriptions.length === 0) {
      throw new Error("Customer has no subscriptions");
    }
    return subscriptions;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch customer subscription details");
  }
}
