import { useOnboardData } from "./onboard";
import { useState, forwardRef, useEffect } from "react";
import BottomNav from "../components/navbar/BottomNavbar";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-number-input";
import { useActionData, Form, useNavigation } from "@remix-run/react";
import { json } from "@remix-run/node";
import Lottie from "lottie-react";
import loader from "../../public/loader.json";
import type { ActionFunction } from "@remix-run/server-runtime";
import { Tooltip } from "react-tooltip";

export function meta() {
  return [
    { title: "Forward Your Number for Inmate Calls | Convo Phone" },
    { keywords: "Beechworth Local VoiP Number, Prisoners" },
    {
      description:
        "Forward Your Number to Receive Calls from Incarcerated Individuals. Simplify the communication process by forwarding a personal number to receive calls from prisoners. Our service ensures affordable rates and streamlined connections, empowering families to stay connected effortlessly. Take advantage of our secure platform and enhance the frequency and convenience of communication with your incarcerated loved ones.",
    },
  ];
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
export const action: ActionFunction = async ({ request }) => {
  // Download the helper library from https://www.twilio.com/docs/node/install
  // Find your Account SID and Auth Token at twilio.com/console
  // and set the environment variables. See http://twil.io/secureß
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require("twilio")(accountSid, authToken);
  let formData = await request.formData();
  let values = Object.fromEntries(formData);

  const response = await client.lookups.v2
    .phoneNumbers(values.number)
    .fetch()
    .then((phone_number: any) => phone_number);

  //Query DID API HERE and check to see if their is an available number using the prefix available in form data.
  const delay = (ms: number) =>
    new Promise((res) => setTimeout(res, ms));
  await delay(3000);

  return json({
    response,
  });
};

const InputText = forwardRef((props, ref: any) => {
  const navigation = useNavigation();
  return (
    <Form method="post" className="flex">
      <input
        name="number"
        ref={ref}
        {...props}
        className="sm:w-80 sm:text-2xl pl-4 caret-green-800 text-gray-900 focus:outline-none placeholder:text-gray-400 border-r-0"
      />
      <button
        disabled={navigation.state === "submitting"}
        type="submit"
        className="PhoneInputButton border-l  border-black  relative shadow-lg -ml-px inline-flex bg-green-400 px-6 items-center py-2 sm:text-2xl font-semibold text-black hover:bg-green-500 transition-all tracking-wider">
        Verify
      </button>
    </Form>
  );
});

type Response = {
  response: {
    valid: boolean;
  };
};

export default function ChooseLocation() {
  const { setOnboardData, onboardData } = useOnboardData();
  const [value, setValue] = useState<any>("");
  const response = useActionData<Response>();
  console.log(response?.response.valid);
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  useEffect(() => {
    if (response?.response.valid) {
      setOnboardData({
        ...onboardData,
        progressBar: { completed: 2, total: 4 },
        forwardingNumber: value,
      });
    }
  }, [isSubmitting]);
  return (
    <div>
      <motion.div
        className="bg-white"
        initial={{ opacity: 0, x: "30px" }}
        animate={{ opacity: 1, x: "0px" }}
        transition={{ duration: 1 }}>
        <div className=" w-full  items-center justify-center flex-col ">
          <Tooltip
            anchorSelect=".tooltip-step-2"
            place="top"
            className="bg-white"
            isOpen>
            <div className="w-72">
              <h1 className="font-semibold sm:text-lg text-center">
                STEP 2:{" "}
                <span className="font-light ">
                  Enter the phone number where you want to receive the
                  calls.
                </span>
              </h1>
            </div>
          </Tooltip>
        </div>
        <img
          src="https://connnvo.vercel.app/Step1.png"
          alt="man"
          className="bg-white mx-auto h-32 sm:h-48 border-0 tooltip-step-2"
          data-tooltip-html=""
        />

        <div className="flex justify-center">
          {/* Input box starts here */}

          <PhoneInput
            name="number"
            inputComponent={InputText}
            placeholder="Forwarding number"
            defaultCountry="AU"
            withCountryCallingCode
            international
            value={value}
            onChange={setValue}
          />
        </div>
      </motion.div>
      <div className="flex justify-center">
        <div>
          <motion.p
            initial={{ opacity: 0.7, scale: 1.3 }}
            animate={{ opacity: 1, scale: 1 }}
            className={classNames(
              response?.response.valid
                ? ""
                : response?.response.valid === false
                ? "p-1 w-80 mx-auto rounded text-red-600 bg-red-50"
                : "p-3",
              "text text-green-800 text-center bg-blue-50 tracking-wide mt-4"
            )}>
            {response?.response.valid === true
              ? "The number " +
                onboardData.forwardingNumber +
                " is verified"
              : response?.response.valid === false && (
                  <p>Sorry, this number is not valid </p>
                )}
          </motion.p>
          <motion.p
            initial={{ opacity: 0.7, scale: 1.3 }}
            animate={{ opacity: 1, scale: 1 }}
            className={classNames(
              response?.response.valid
                ? ""
                : response?.response.valid === false
                ? "p-1 w-full"
                : "p-3 w-96",
              "mx-auto  rounded ",
              "text-sm text-green-800 bg-yellow-50 rounded p-1 text-center  tracking-wide mt-4 "
            )}>
            {response?.response.valid ? (
              <p>
                Click{" "}
                <span className="font-semibold underline">
                  {" "}
                  CONTINUE
                </span>{" "}
                to approve all calls <br /> on the local prison number
                to be received on the telephone number above.
              </p>
            ) : (
              response?.response.valid === false && (
                <p>
                  Provide a valid number and{" "}
                  <span className="font-semibold underline">TRY</span>{" "}
                  again
                </p>
              )
            )}
          </motion.p>
        </div>
      </div>
      {isSubmitting && (
        <div className="flex justify-center items-center flex-col">
          <p className="text-sm text-gray-800 text-center animate-pulse tracking-wide mt-4">
            Verifying
          </p>
          <Lottie
            animationData={loader}
            className="relative bottom-10 mt-4"
            style={{ height: "70px" }}
          />
        </div>
      )}
      {onboardData.progressBar.completed === 2 ? (
        <BottomNav
          link="/onboard/create-account"
          completed={onboardData.progressBar.completed}
        />
      ) : (
        <div className=" absolute bottom-0 py-8 left-0 w-full">
          <div className="max-w-4xl container mx-auto sm:flex items-center justify-between">
            <div className="flex items-center"></div>

            <div>
              <Tooltip
                anchorSelect=".disabled-button-tooltip"
                place="top"
              />

              <p
                data-tooltip-content="Please complete the second step to enable this button."
                data-tooltip-variant="warning"
                className="cursor-not-allowed disabled-button-tooltip py-4 px-8 bg-gray-400 text-gray-200 mx-4  sm:m-0  opacity-30 rounded-xl text-lg font-semibold text-center">
                CONTINUE
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
