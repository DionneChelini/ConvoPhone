/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div>
      <div className="mt-2 flex rounded-md shadow-sm">
        <div className="relative border rounded-lg flex flex-grow items-stretch focus-within:z-10">
          <div className="pointer-events-none px-4 max-w-3xl justify-center inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-96 rounded-none border-l-0 rounded-l-md border-0 py-4 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Choose Prison Location "
          />
        </div>
      </div>
    </div>
  );
}
