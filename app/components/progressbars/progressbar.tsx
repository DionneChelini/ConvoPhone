import { motion } from "framer-motion";
import { CheckBadgeIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Lottie from "lottie-react";
import bubbles from "../../../public/bubbles.json";
import { useEffect } from "react";
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example({ completed, total }: { completed: number; total: number }) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (completed > 0) {
      setTimeout(() => {
        setPlay(true);
      }, 200);

      setTimeout(() => {
        setPlay(false);
      }, 1200);
    }
  }, [completed]);

  return (
    <div className="sm:mt-12 container px-6 mx-auto">
      <div className="mt-8" aria-hidden="true">
        <div className="overflow-hidden flex rounded-full bg-gray-200">
          <motion.div initial={{ width: `${(0 / total) * 100}%` }} animate={{ width: `${(completed / total) * 100}%` }} transition={{ type: "spring", damping: 15 }} className={classNames(completed ? "bg-gray-900" : "", "h-2 py-2 rounded-full flex  bg-gray-200")}>
            {completed > 0 && <div className="mx-3 rounded w-full mb-1 relative bottom-1 py-1 bg-gray-800 "></div>}
            <div className={classNames(play ? "flex items-end justify-end w-full" : "hidden", "")}>
              <Lottie animationData={bubbles} loop={play ? true : false} className="z-60 absolute" style={{ height: "55px" }} />
            </div>
          </motion.div>
        </div>
        <div className="mt-6 hidden  sm:flex justify-between text-sm font-medium text-gray-300 ">
          <motion.div animate={{ color: completed >= 1 ? "rgb(22 101 52)" : "#cccccc" }} className="text-gray-300 flex items-center">
            {completed >= 1 ? <CheckBadgeIcon className="h-7 pr-1" /> : <XCircleIcon className="h-7 pr-1" />} Choose Location
          </motion.div>
          <motion.div animate={{ color: completed >= 2 ? "rgb(22 101 52)" : "#cccccc" }} className="text-gray-300 flex items-center">
            {completed >= 2 ? <CheckBadgeIcon className="h-7 pr-1" /> : <XCircleIcon className="h-7 pr-1" />} Your Number
          </motion.div>
          <motion.div animate={{ color: completed >= 3 ? "rgb(22 101 52)" : "#cccccc" }} className="text-gray-300 flex items-center">
            {completed >= 3 ? <CheckBadgeIcon className="h-7 pr-1" /> : <XCircleIcon className="h-7 pr-1" />} Account Setup
          </motion.div>
          <motion.div animate={{ color: completed >= 4 ? "rgb(22 101 52)" : "#cccccc" }} className="text-gray-300 flex items-center">
            {completed >= 4 ? <CheckBadgeIcon className="h-7 pr-1" /> : <XCircleIcon className="h-7 pr-1" />} Complete Payment
          </motion.div>
        </div>
      </div>
    </div>
  );
}
