import { useEffect } from "react";
import { useOnboardData } from "./onboard";
import BottomNav from "app/components/navbar/BottomNavbar";
import PricingPage from "../components/paymentOption/PricingPage";
import type { LoaderFunction } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { getAuth } from "@clerk/remix/ssr.server";
import clerk from "@clerk/clerk-sdk-node";
import { getCustomerSubscription } from "../customerSubscription";
export function meta() {
  return [
    { title: "Home - Convo Local Numbers" },
    { description: "Connecting Prisoners with Families" },
  ];
}
export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);

  if (!userId) {
    return redirect("/");
  }
  const response = await clerk.users.getUser(userId);

  try {
    const customerSubscription = await getCustomerSubscription(
      response.emailAddresses[0].emailAddress
    );
    // Process the customer subscription details
    if (customerSubscription[0].plan.active === false) {
      return json({
        status: false,
        message: "Subscription is invalid",
      });

      //Make the request to DID WW here - this is the endpoint to get the stock keeping units SKU ID

      //https://{{Host-Sandbox}}/v3/did_groups?filter[city.id]=bba735f9-7c37-499b-8998-94a5fca5d158&include=stock_keeping_units

      //Create an order using the SKU id
      //https://{{Host-Sandbox}}/v3/orders

      //Pass in the body
      /*
{
"data": {
"type": "orders",
"attributes": {
"allow_back_ordering": false,
"items": [
{
"type": "did_order_items",
"attributes": {
"available_did_id": "3ccba0c4-fe36-4818-bbee-6b7994c4ed00", //when the did_id is supplied you don't need to add a qty and you get back the specifc number associated with did
"sku_id": "5c6f00cd-cfca-441f-9322-5d000458b44f"
}
}
]
}
}
}
      
*/

      return json({ subscription: customerSubscription });
    }
    return json({ subscription: customerSubscription });
  } catch (error) {
    console.error(error);
    return json(
      { error: "Failed to fetch customer subscription details" },
      500
    );
  }
};

export default function AccountRegister() {
  const { setOnboardData, onboardData } = useOnboardData();

  useEffect(() => {
    setOnboardData({
      ...onboardData,
      progressBar: { completed: 4, total: 4 },
    });
  }, []);

  return (
    <div className="bg-white">
      {onboardData.progressBar.completed === 4 ? (
        <p className="mt-6 text-4xl max-w-5xl mx-auto font-bold tracking-tight text-gray-900 sm:text-5xl text-center">
          Congratulations you have Successfully subscribed
        </p>
      ) : (
        <PricingPage />
      )}

      {onboardData.progressBar.completed === 4 && (
        <BottomNav
          link="/dashboard"
          completed={onboardData.progressBar.completed}
        />
      )}
    </div>
  );
}
