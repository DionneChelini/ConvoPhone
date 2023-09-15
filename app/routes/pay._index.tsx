import { Form, useSubmit } from "@remix-run/react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";

export default function Success() {
  const elements = useElements();
  const stripe = useStripe();
  const submit = useSubmit();
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (stripe && elements) {
      stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:3000/pay/success",
        },
      });
    }
    return submit(e.currentTarget);
  };

  return (
    <Form onSubmit={(e: any) => handleSubmit(e)}>
      <h1 className="text-2xl mb-2">Payment Form Outlet</h1>

      <PaymentElement />
      <button type="submit" className="mt-3 bg-indigo-100 p-3 rounded">
        Pay
      </button>
    </Form>
  );
}
