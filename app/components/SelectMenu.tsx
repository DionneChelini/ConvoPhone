import {Fragment, useState} from 'react';
import {Listbox, Transition} from '@headlessui/react';
import InputNumberField from '../components/InputNumberBox';
import {
  CheckIcon,
  ChevronUpDownIcon,
  ArrowDownIcon,
} from '@heroicons/react/20/solid';

const prisons = [
  {id: 1, name: 'Port Phillip'},
  {id: 2, name: 'Ravenhall'},
  {id: 3, name: 'Devon Webb'},
  {id: 4, name: 'Tom Cook'},
  {id: 5, name: 'Tanya Fox'},
  {id: 6, name: 'Hellen Schmidt'},
  {id: 7, name: 'Caroline Schultz'},
  {id: 8, name: 'Mason Heaney'},
  {id: 9, name: 'Claudie Smitham'},
  {id: 10, name: 'Emil Schaefer'},
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selected, setSelected] = useState(prisons[0]);

  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        {({open}) => (
          <>
            <div className="bg-blue-50 p-1 rounded-full m-1"></div>
            <div className="bg-blue-50 p-1 rounded-full m-1"></div>
            <div className="bg-blue-50 p-1 rounded-full m-1"></div>
            <div className="bg-blue-50 p-1 rounded-full m-1 mb-4"></div>
            <Listbox.Label className="block text-2xl font-black mb-4 leading-6 text-gray-800">
              Which Prison?
            </Listbox.Label>
            <div className="relative mt-2 w-3/4 px-4">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                <span className="block truncate">{selected.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {prisons.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      className={({active}) =>
                        classNames(
                          active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9',
                        )
                      }
                      value={person}
                    >
                      {({selected, active}) => (
                        <>
                          <span
                            className={classNames(
                              selected ? 'font-semibold' : 'font-normal',
                              'block truncate',
                            )}
                          >
                            {person.name}
                          </span>

                          {selected ? (
                            <span
                              className={classNames(
                                active ? 'text-white' : 'text-indigo-600',
                                'absolute inset-y-0 right-0 flex items-center pr-4',
                              )}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
      <div className="bg-blue-50 p-1 rounded-full mt-9 mb-1"></div>
      <div className="bg-blue-50 p-1 rounded-full m-1"></div>
      <div className="bg-blue-50 p-1 rounded-full m-1"></div>
      <div className="bg-blue-50 p-1 rounded-full m-1"></div>
      <div className="bg-blue-50 p-1 rounded-full m-1"></div>
      <div className="bg-blue-50 p-1 rounded-full mt-1 mb-9"></div>

      <div>
        <h1 className="block text-2xl font-black mb-4 text-center leading-6 text-gray-800">
          {' '}
          Your Number?
        </h1>
        <InputNumberField />
      </div>
    </>
  );
}
