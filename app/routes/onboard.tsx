import {
  Outlet,
  useOutletContext,
  useLocation,
} from "@remix-run/react";
import { useEffect, useState } from "react";
import Progressbar from "../components/progressbars/progressbar";
import { motion } from "framer-motion";
import type { OnboardDataType } from "../types/onboard";

export function meta() {
  return [
    { title: "Home - Convo Local Numbers" },
    { description: "Connecting Prisoners with Families" },
  ];
}

export function useOnboardData() {
  return useOutletContext<OnboardDataType>();
}

function getDefaultOnboardData() {
  return {
    selectedPrison: null,
    prefix: null,
    prisonId: null,
    forwardingNumber: null,
    localNumber: null,
    email: null,
    name: null,
    progressBar: {
      completed: 0,
      total: 4,
    },
  };
}

export default function Example() {
  const [onboardData, setOnboardData] = useState<
    OnboardDataType["onboardData"]
  >(() => {
    // Load onboardData from localStorage if it exists, otherwise use default initial value
    if (typeof localStorage !== "undefined") {
      const storedData = localStorage.getItem("onboardData");
      return storedData
        ? JSON.parse(storedData)
        : getDefaultOnboardData();
    } else {
      // Handle the case when localStorage is not available (e.g., in server-side rendering)
      return getDefaultOnboardData();
    }
  });

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      // Save onboardData to localStorage whenever it changes
      localStorage.setItem(
        "onboardData",
        JSON.stringify(onboardData)
      );
      console.log("item is set", localStorage.getItem("onboardData"));
    }
  }, [onboardData]);

  const location = useLocation();
  const isOnMainScreen =
    location.pathname === "/onboard/select-location";
  console.log("pathname", location.pathname);

  useEffect(() => {
    const clearLocalStorage = () => {
      if (typeof localStorage !== "undefined") {
        localStorage.removeItem("onboardData");
        console.log("localStorage cleared");
        setOnboardData(getDefaultOnboardData());
      }
    };

    if (isOnMainScreen) {
      clearLocalStorage();
    }
  }, [isOnMainScreen]);

  return (
    <div className="h-screen">
      <motion.div
        initial={{ opacity: 0, x: "30px" }}
        animate={{ opacity: 1, x: "0px" }}
        transition={{ duration: 1 }}
        className="bg-white max-w-3xl mx-auto">
        <Progressbar
          completed={onboardData.progressBar.completed}
          total={onboardData.progressBar.total}
        />
      </motion.div>

      <div className="mt-16 mx-auto max-w-7xl  sm:mt-32 lg:flex-shrink-0 lg:flex-grow">
        <Outlet context={{ onboardData, setOnboardData }} />
      </div>
    </div>
  );
}
