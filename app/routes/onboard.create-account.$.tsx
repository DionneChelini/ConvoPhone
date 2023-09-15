import { useEffect } from "react";
import { useOnboardData } from "./onboard";
import { SignUp, useAuth, useSignUp } from "@clerk/remix";
import { motion } from "framer-motion";
import { Form } from "@remix-run/react";
import { Tooltip } from "react-tooltip";

export function meta() {
  return [
    { title: "Home - Convo Local Numbers" },
    { description: "Connecting Prisoners with Families" },
  ];
}
export default function AccountRegister() {
  return (
    <div className="bg-white">
      <motion.div
        initial={{ opacity: 0, x: "30px" }}
        animate={{ opacity: 1, x: "0px" }}
        transition={{ duration: 1 }}
        className="relative  isolate flex flex-col items-center ">
        <Tooltip
          anchorSelect=".tooltip-step-1"
          place="top"
          className="bg-white"
          isOpen>
          <h1 className="font-semibold sm:text-lg text-center">
            STEP 3:{" "}
            <span className="font-light">
              Create an account or use social login
            </span>
          </h1>
        </Tooltip>
        <img
          src="https://connnvo.vercel.app/Step1.png"
          alt="man"
          className="bg-white  h-32 sm:h-48 border-0 tooltip-step-1"
          data-tooltip-html=""
        />

        <Form>
          <SignUp
            appearance={{
              elements: {
                main: "mx-6 -mb-4",
                card: "shadow-none  border p-0",
                logoBox: "hidden",
                header: "hidden",

                formFieldInput:
                  "h-12 rounded-full text-gray-800 pl-8 text-lg sm:text-2xl",

                emailAddressField: "Email",
                formButtonPrimary: "h-12 rounded-full btn",
                footer: "hidden",
                formFieldHintText: "hidden",
              },
            }}
            redirectUrl="/onboard/select-option"
            path="/onboard/create-account"
            routing="hash"
          />
        </Form>
      </motion.div>
    </div>
  );
}
