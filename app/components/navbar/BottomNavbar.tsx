import React from "react";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function BottomNavbar({ link, completed }: { link: string; completed: number }) {
  return (
    <motion.div initial={{ y: "100px" }} animate={{ y: "0px" }} className="fixed bottom-0 py-4 left-0 bg-green-200 w-full">
      <div className="container mx-auto flex items-center justify-between max-w-4xl">
        <div className="flex items-center"></div>

        <motion.div whileHover={{ scale: 1.02, y: "-3px" }} className="flex w-full sm:w-auto">
          <Link to={link} className={classNames(completed > 0 ? "pointer-events-auto btn text-white" : " bg-gray-200 text-gray-800 cursor-not-allowed inactive", "py-4 px-8 mx-4  sm:m-0 w-full  rounded-xl text-lg font-semibold text-center")}>
            CONTINUE
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
