//import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { Link } from "@remix-run/react";

export default function Example() {
  return (
    <div className="bg-white">
      <div>
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-x-10 lg:px-8 ">
          <iframe
            title="Animation6220"
            src="https://embed.lottiefiles.com/animation/6220"></iframe>

          <div className="mx-auto max-w-[656px] lg:mx-0 flex flex-col">
            <h1 className="mt-10 max-w-[656px] self-center md:max-w-md text-2xl text-center font-semibold tracking-tight text-color-eel-always-light sm:text-custom-3xl font-dinround">
              The cheaper, easier way to setup prison numbers!
            </h1>

            <div className="mt-10 flex-col flex items-center gap-x-6 text-custom-xs">
              <Link
                to="/onboard/select-location"
                className="bg-duo px-3.5 py-2.5 flex justify-center text-white font-dinround uppercase font-bold text-color-snow border-b-4 border-color-tree-frog-always-light rounded-xl hover:bg-color-owl-always-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-owl-always-light transition duration-300 ease-in-out md:w-2/3 w-11/12">
                GET STARTED
              </Link>
              <Link
                to="/sign-up"
                className="bg-color-snow px-3.5 py-2.5 flex justify-center font-dinround uppercase font-bold text-color-macaw-always-light mt-4 border-x-2 border-t-2 border-b-4 border-color-swan-always-light hover:border-x-2 hover:border-t-2 hover:border-b-4 hover:border-s-color-swan-always-light hover:bg-color-swan-always-light hover:bg-opacity-50 rounded-xl transition duration-300 ease-in-out md:w-2/3 w-11/12 h-12 overflow-hidden whitespace-nowrap overflow-ellipsis">
                I ALREADY HAVE AN ACCOUNT
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"></div>
      </div>
    </div>
  );
}
