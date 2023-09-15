import { Link } from "@remix-run/react";

import { PlusIcon } from "@heroicons/react/24/outline";
export default function Example() {
  return (
    <Link to="/dashboard/add-new-number">
      <div className="sm:w-1/3 opacity-60">
        <div className="text-center">
          <button
            type="button"
            className="relative block w-full h-96 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <PlusIcon
              className="h-16 mx-auto w-16 text-gray-400"
              aria-hidden="true"
            />
            <span className="mt-2 block text-xl font-semibold text-gray-700">
              Buy Local Number
            </span>
          </button>
        </div>
      </div>
    </Link>
  );
}
