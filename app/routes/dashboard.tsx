import { Outlet } from "@remix-run/react";
import Sidebar from "../layouts/Sidebar";
import { SignedIn } from "@clerk/remix";
import { getCustomerSubscription } from "../customerSubscription";
import { getAuth } from "@clerk/remix/ssr.server";
import type { LoaderFunction } from "@remix-run/node";
import { redirect, json } from "@remix-run/server-runtime";
import clerk from "@clerk/clerk-sdk-node";
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
    console.log(customerSubscription);
    return json({ subscription: customerSubscription });
  } catch (error) {
    console.error(error);
    return json(
      { error: "Failed to fetch customer subscription details" },
      500
    );
  }
};

export default function Example() {
  //Have access to the data fetched on login or signup routes with the use of these two hooks

  return (
    <SignedIn>
      <Sidebar />
      <Outlet />
    </SignedIn>
  );
}
