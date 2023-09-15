import ActiveCard from "app/components/cards/ActiveCard";
import AddNumberEmptyState from "../components/emptystates/AddNumber";
import { type LoaderFunction, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = () => {
  //USER STRIPE STATUS = UNDEFINED || ACTIVE || CANCELLED || PAUSED
  let user = "ACTIVE";

  //Reach out to Stripe API to see if user exists.

  //If user does not exist
  if (user === undefined) {
    return json({
      user_status: undefined,
    });
  }
  //If user has active subscription
  if (user === "ACTIVE") {
    return json({
      user_status: "ACTIVE",
    });
  }
  //If user has paused subscription
  if (user === "PAUSED") {
    return json({
      user_status: "PAUSED",
    });
  }
  //If user has cancelled subscription
  if (user === "CANCELLED") {
    return json({
      user_status: "CANCELLED",
    });
  }
  return;
};
export default function AddNewNumber() {
  const { user_status } = useLoaderData();

  return (
    <main className="py-10 lg:pl-72">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Your content */}
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Your content */}
          {user_status === undefined ? (
            <AddNumberEmptyState />
          ) : user_status === "ACTIVE" ? (
            <ActiveCard />
          ) : user_status === "PAUSED" ? (
            "DISPLAY PAUSED"
          ) : (
            user_status === "CANCELLED" && "DISPLAY CANCELLED"
          )}
        </div>
      </div>
    </main>
  );
}
