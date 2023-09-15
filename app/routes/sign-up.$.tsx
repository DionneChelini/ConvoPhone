import { SignUp } from "@clerk/remix";

export default function SignInPage() {
  return (
    <div className="bg-white">
      <div className="relative isolate pt-14 flex">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 justify-center lg:flex lg:flex-auto">
            <div className="flex">
              <SignUp path="/sign-up" routing="path" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
