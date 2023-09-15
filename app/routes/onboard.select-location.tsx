import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useOnboardData } from "./onboard";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { Combobox } from "@headlessui/react";
import { json } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/server-runtime";
import BottomNav from "../components/navbar/BottomNavbar";
import { Tooltip } from "react-tooltip";
import Lottie from "lottie-react";
import Loader from "../../public/loader.json";
import { BASE_URL } from "app/config";

const prisons = [
  // { location: "Barwon Prison", prefix: "61342", name: "Lara", id: "3cc2671e-f208-40bb-84d2-5d0b14444a88" },
  {
    location: "Barwon Prison",
    prefix: "61342",
    name: "Lara",
    id: "bba735f9-7c37-499b-8998-94a5fca5d158",
  },
  {
    location: "Beechworth Prison",
    prefix: "61347",
    name: "Beechworth",
    id: "4b8174d9-b9b4-4281-adce-a565e5d07aea",
  },
  {
    location: "Dame Phyllis Frost Center",
    prefix: "61373",
    name: "Ravenhall",
    id: "2c074dbb-fc42-4600-a4ff-6c68e01d91f3",
  },
  {
    location: "Dhurringle Prison",
    prefix: "6134",
    name: "Tatura",
    id: "997cd199-6e57-4fb6-ba8f-7e3181b11e71",
  },
  {
    location: "Hopkins Prison",
    prefix: "61353",
    name: "Ararat",
    id: "03415ddf-398b-4947-a48f-ae66740f6c83",
  },
  {
    location: "Langi Kal Kal Prison",
    prefix: "61343",
    name: "Beaufort",
    id: "03034b2-9522-4eb2-88e5-d44523e89503",
  },
  {
    location: "Loddon Prison",
    prefix: "6134",
    name: "Castlemaine",
    id: "dc9ebd5e-2fa8-42a4-8cea-a7d47fb6018e",
  },
  {
    location: "Marngoneet Prison",
    prefix: "61342",
    name: "Lara",
    id: "3cc2671e-f208-40bb-84d2-5d0b14444a88",
  },
  {
    location: "Melbourne Assessment Prison",
    prefix: "6138",
    name: "West Melbourne",
    id: "2d717d1d-2764-40f2-b5b6-42de7036aee5",
  },
  {
    location: "Middleton Prison",
    prefix: "6134",
    name: "Castlemaine",
    id: "dc9ebd5e-2fa8-42a4-8cea-a7d47fb6018e",
  },
  {
    location: "Port Phillip Prison",
    prefix: "6186",
    name: "Laverton",
    id: "",
  },
  {
    location: "Tarrengower Prison",
    prefix: "61344",
    name: "Maldon",
    id: "cc4a1d19-d079-40e3-bc94-580826c243f7",
  },
  {
    location: "Fulham Prison",
    prefix: "61341",
    name: "Sale",
    id: "731c083a-9697-4212-9731-3f4c48a203b1",
  },
];

export function meta() {
  return [
    { title: "Choose Your Local Prison Number | Convo Phone" },
    {
      description:
        "Choose Your Local Prison Number for Seamless Communication. Select from a range of local telephone numbers tailored to specific prison locations. Our user-friendly interface makes it effortless for you to find and reserve a number, enabling direct and cost-effective connections with your incarcerated loved ones. Start connecting today and bridge the communication gap.",
    },
  ];
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const action: ActionFunction = async ({ request }) => {
  let formData = await request.formData();
  let values = Object.fromEntries(formData) as Record<string, string>;
  const filters = JSON.parse(values.data);

  //console.log(filters)
  //let prefix = 87;
  //Query DID API HERE and check to see if their is an available number using the prefix available in form data.
  if (filters?.prisonId) {
    const apiUrl = `${BASE_URL}/available_dids?filter[city.id]=${filters.prisonId}&include=did_group.stock_keeping_units`;

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/json",
        "Api-Key": "kpz3jtasmgthwa3r7wzesnm4fst4aeu2",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data.includeds);

    if (data.meta.total_count === 0) {
      return json({
        status: false,
        message: "Not Located",
      });
    }
    //console.log("did_group", data)
    //const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
    //await delay(4000);
    //console.log("Waited 5s");

    return json({
      status: true,
      message: data.data[0].attributes.number,
      number: data.data[0],
    });
  }
  return json({
    status: false,
    message: "Please Select Location",
  });
};
export default function ChooseLocation() {
  const [location, setLocation] = useState(null);
  const { setOnboardData, onboardData } = useOnboardData();
  const navigation = useNavigation();
  const response = useActionData<typeof action>();
  console.log(response);
  const filteredprison = !onboardData.selectedPrison
    ? prisons
    : prisons.filter(
        (prison) =>
          onboardData.selectedPrison &&
          prison.location
            .toLowerCase()
            .includes(onboardData.selectedPrison.toLowerCase())
      );

  const clickHandler = (prison: any) => {
    console.log("here :", prison);
    //const found = prisons.find((item) => item.location === prison.location && item);
    //if (found) {
    setOnboardData({
      ...onboardData,
      selectedPrison: prison.location,
      prisonId: prison.id,
      prefix: null,
    });
    //}
  };

  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (response?.status === true) {
      setOnboardData({
        ...onboardData,
        localNumber: response.number,
        progressBar: { completed: 1, total: 4 },
      });
    }
    if (response?.status === false) {
      setOnboardData({
        ...onboardData,
        localNumber: response.number,
        progressBar: { completed: 1, total: 4 },
      });
    }
  }, [isSubmitting]);

  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, x: "30px" }}
        animate={{ opacity: 1, x: "0px" }}
        transition={{ duration: 1 }}>
        {/* Input box starts here */}
        <Form method="post" className=" w-full mt-32">
          <div className="items-center flex flex-col">
            <Tooltip
              anchorSelect=".tooltip-step-1"
              place="top"
              className="bg-white"
              isOpen>
              <h1 className="font-semibold sm:text-lg text-center">
                STEP 1:{" "}
                <span className="font-light ">
                  Select prison location
                </span>
              </h1>
            </Tooltip>
            <img
              src="https://connnvo.vercel.app/Step1.png"
              alt="man"
              className="bg-white h-32 sm:h-48 border-0 tooltip-step-1"
              data-tooltip-html=""
            />
            <Combobox value={location} onChange={setLocation}>
              <div className="rounded-full flex">
                <div>
                  <Combobox.Input
                    onChange={(event) =>
                      setOnboardData({
                        ...onboardData,
                        selectedPrison: event.target.value,
                      })
                    }
                    className="block shadow-lg  h-16 rounded-l-full py-1.5 pl-10 text-gray-900 border-black border-1 border ring-1 focus:outline-green-600 placeholder:text-gray-400 sm:text-2xl sm:leading-6 sm:w-96 active:ring-none remove_border caret-green-600"
                    placeholder="Start Typing..."
                  />
                  <input
                    type="hidden"
                    name="data"
                    value={JSON.stringify({
                      prefix: onboardData.prefix,
                      prisonId: onboardData.prisonId,
                    })}
                  />
                  <Combobox.Options className=" absolute z-50 mt-1 max-h-60  overflow-auto rounded-lg bg-white py-1  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredprison?.map((prison: any) => (
                      <Combobox.Option
                        key={prison.id}
                        value={prison.location}
                        onClick={() => clickHandler(prison)}
                        className={({ active }) =>
                          classNames(
                            active ? "bg-green-200" : "text-gray-900",
                            "cursor-default flex  items-center select-none py-2 pl-3 pr-9"
                          )
                        }>
                        <span className="inline-block h-2 w-2  bg-green-300   mr-3 flex-shrink-0 rounded-full" />
                        {prison.location}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
                </div>
                <button
                  disabled={navigation.state === "submitting"}
                  type="submit"
                  className="relative shadow-lg -ml-px inline-flex bg-green-400 px-6 rounded-r-full items-center gap-x-1.5  py-2 sm:text-2xl font-semibold text-black ring-1 ring-inset ring-gray-800 hover:bg-green-500 transition-all tracking-wider">
                  Submit
                </button>
              </div>
            </Combobox>

            {isSubmitting ? (
              <div className="flex justify-center items-center flex-col">
                <p className="text-sm text-gray-800 text-center animate-pulse tracking-wide mt-4">
                  Searching
                </p>
                <Lottie
                  animationData={Loader}
                  className="relative bottom-10 mt-4"
                  style={{ height: "70px" }}
                />
              </div>
            ) : (
              response && (
                <motion.p
                  initial={{ opacity: 0.7, scale: 1.3 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-sm text-green-800 text-center  tracking-wide mt-4">
                  {/* Number located: +{response.message} */}
                  {response.message}
                </motion.p>
              )
            )}
          </div>
        </Form>
      </motion.div>

      {onboardData.progressBar.completed === 1 ? (
        <BottomNav
          link="/onboard/provide-number"
          completed={onboardData.progressBar.completed}
        />
      ) : (
        <div className=" -z-40 absolute bottom-0 py-4 bg-white left-0 w-full">
          <div className="max-w-4xl container mx-auto sm:flex items-center justify-between">
            <div className="flex items-center"></div>

            <div>
              <Tooltip
                anchorSelect=".disabled-button-tooltip"
                place="top"
              />

              <p
                data-tooltip-content="Please complete the first step to enable this button."
                data-tooltip-variant="warning"
                className="cursor-not-allowed disabled-button-tooltip py-4 px-8 z-0  bg-gray-400 text-gray-200 mx-4  sm:m-0  opacity-30 rounded-xl text-lg font-semibold text-center">
                CONTINUE
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
