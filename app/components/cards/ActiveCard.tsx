import React from "react";
import { PhoneIcon } from "@heroicons/react/20/solid";
const customer = {
  name: "Jane Cooper",
  numberLocation: "Loddon Correctional Center",
  role: "Active Subscription",
  email: "janecooper@example.com",
  nominatedNumber: "0433 442 444",
  localnumber: "03 223 448",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const ActiveCard = () => {
  return (
    <div className="sm:w-1/3 mr-6">
      <div
        key={customer.email}
        className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
      >
        <div className="flex flex-1 flex-col p-8">
          <img
            className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
            src={customer.imageUrl}
            alt=""
          />
          <h3 className="mt-6 text-sm font-medium text-gray-900">
            Location by Area
          </h3>
          <dl className="mt-1 flex flex-grow flex-col justify-between">
            <dt className="sr-only">Number Location</dt>
            <dd className="text-sm text-gray-500">{customer.numberLocation}</dd>
            <dt className="sr-only">Role</dt>
            <dd className="mt-3">
              <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                {customer.role}
              </span>
            </dd>
          </dl>
        </div>
        <div>
          <div className="-mt-px flex divide-x divide-gray-200">
            <div className="flex w-0 flex-1">
              <p className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                {customer.nominatedNumber}
              </p>
            </div>
            <div className="flex px-2 justify-center items-center">
              {" "}
              <PhoneIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </div>
            <div className="-ml-px flex w-0 flex-1">
              <p className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
                {customer.localnumber}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveCard;
