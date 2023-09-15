import { SignIn } from "@clerk/remix";
import { useLoaderData } from "@remix-run/react";
import { type LoaderFunction, json } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  //Users can be ACTIVE || PAUSED || CANCELLED || UNSUBSCRIBED
  const user = "UNSUBSCRIBED";
  //Reach out to Stripe and see if the user exists
  return json({
    user,
  });

  //If the user does not exist
};

export default function SignInPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-14 flex h-sceen">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <SignIn routing={"path"} path={"/sign-in"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
