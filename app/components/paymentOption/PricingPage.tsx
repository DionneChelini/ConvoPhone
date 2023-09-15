import { useOnboardData } from "../../routes/onboard";
import { useState, useEffect } from "react";

import { RadioGroup } from "@headlessui/react";
import { useAuth } from "@clerk/remix";
import BottomNav from "app/components/navbar/BottomNavbar";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Loader from "../../../public/loader.json";

import { CheckIcon } from "@heroicons/react/20/solid";
import { Link, useFetcher, useNavigation } from "@remix-run/react";
import { useUser } from "@clerk/remix";

const frequencies = [
  {
    value: "monthly",
    label: "Monthly",
    priceSuffix: "/month",
  },
  {
    value: "annually",
    label: "Annually",
    priceSuffix: "/year",
  },
];
const tiers = [
  {
    name: "Pay Monthly",
    priceId: "price_1NKYwMLS6zBJNnGQssLWSDEB",
    id: "tier-monthly",
    href: "#",
    price: { monthly: "$29.95", annually: "$359.40" },
    description:
      "Local number registration and call forwarding to customers",
    features: [
      "1 * local telephone number",
      "Flexible call forwarding",
      "Customer support",
      "Easy to use interface",
    ],
    mostPopular: false,
  },
  {
    name: "Pay Annually",
    priceId: "price_1NKYwMLS6zBJNnGQsQKrrTMK",
    id: "tier-annual",
    href: "#",
    price: { monthly: "$23.95", annually: "$287.40" },
    description:
      "Pay annually and put $72.00 back in your wallet. It's the cheaper option",
    features: [
      "1 * local telephone number",
      "Flexible call forwarding",
      "Customer support",
      "Easy to use interface",
    ],
    mostPopular: true,
  },
];
export function meta() {
  return [
    { title: "Home - Convo Local Numbers" },
    { description: "Connecting Prisoners with Families" },
  ];
}
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectOption() {
  const [frequency, setFrequency] = useState(frequencies[0]);
  const subscriptionFetcher = useFetcher();
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className="bg-white">
      <motion.div
        initial={{ opacity: 0, x: "30px" }}
        animate={{ opacity: 1, x: "0px" }}
        transition={{ duration: 1 }}
        className="relative  isolate items-center flex justify-center ">
        <div className="bg-white pb-40">
          <div className="mx-auto max-w-7xl  px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Choose a plan&nbsp;to register your&nbsp;local
                number&nbsp;
              </p>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-6 text-gray-600">
              Choose between our monthly or annual plan to stay
              connected with your prisoner friend
            </p>
            <div className="mt-16 flex   justify-center">
              <RadioGroup
                value={frequency}
                onChange={setFrequency}
                className="grid grid-cols-2 gap-x-1  rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200">
                <RadioGroup.Label className="sr-only">
                  Payment frequency
                </RadioGroup.Label>
                {frequencies.map((option) => (
                  <RadioGroup.Option
                    key={option.value}
                    value={option}
                    className={({ checked }) =>
                      classNames(
                        checked
                          ? "bg-indigo-600 text-white"
                          : "text-gray-500",
                        "cursor-pointer rounded-full px-2.5 py-1"
                      )
                    }>
                    <span>{option.label}</span>
                  </RadioGroup.Option>
                ))}
              </RadioGroup>
            </div>
            <div className="isolate mx-auto mt-10 max-w-3xl gap-6 sm:flex">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "ring-2 ring-indigo-600"
                      : "ring-1 ring-gray-200",
                    "rounded-3xl p-8 mb-4"
                  )}>
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? "text-indigo-600"
                        : "text-gray-900",
                      "text-lg font-semibold leading-8"
                    )}>
                    {tier.name}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-gray-900">
                      {tier.price[frequency.value]}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-gray-600">
                      {frequency.priceSuffix}
                    </span>
                  </p>
                  <a
                    href={tier.href}
                    onClick={() => {
                      if (isSignedIn) {
                        subscriptionFetcher.submit(
                          {
                            priceId: tier.priceId,
                            userEmail: user?.primaryEmailAddress
                              ?.emailAddress
                              ? user?.primaryEmailAddress
                                  ?.emailAddress
                              : "",
                          },
                          { method: "post" }
                        );
                      } //else{
                      //   navigate('/sign-in');
                      // }
                    }}
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500"
                        : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                      "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    )}>
                    Buy plan
                  </a>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          className="h-6 w-5 flex-none text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
