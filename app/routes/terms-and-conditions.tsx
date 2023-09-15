import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import Navbar from "app/layouts/Navigation";
export default function Example() {
  return (
    <div>
      <Navbar />

      <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
        <div className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56" aria-hidden="true">
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath: "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Welcome to Convo!</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Terms & Conditions</h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">These terms and conditions outline the rules and regulations for the use of Convo’s website and services. By accessing this website or using our services, you agree to be bound by these terms and conditions. If you disagree with any part of these terms and conditions, please do not use our website or services.</p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="relative lg:order-last lg:col-span-5">
              <svg className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]" aria-hidden="true">
                <defs>
                  <pattern id="e87443c8-56e4-4c20-9111-55b82fa704e3" width={200} height={200} patternUnits="userSpaceOnUse">
                    <path d="M0.5 0V200M200 0.5L0 0.499983" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" />
              </svg>
              <figure className="border-l border-indigo-600 pl-8">
                <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  <p>“With Connnvo, my husband can finally afford to ring us every day. It’s made such a difference for us and our kids.” -</p>
                </blockquote>
                <figcaption className="mt-8 flex gap-x-4">
                  <img src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <div className="font-semibold text-gray-900">Sarah, Melbourne, Victoria</div>
                    <div className="text-gray-600">@sarah</div>
                  </div>
                </figcaption>
              </figure>
            </div>
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
              <ul className="mt-8 max-w-xl space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Intellectual Property.</strong> The content of this website, including but not limited to text, graphics, logos, images, and software, is the property of Convo and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, modify, or distribute any content on this website without our prior
                    written consent.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Use of Services.</strong> Our services are intended for personal and non-commercial use only. You may not use our services for any illegal or unauthorized purpose or in any way that violates these terms and conditions. We reserve the right to terminate your access to our services if you engage in any prohibited activity.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Privacy Policy.</strong> Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal information.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Disclaimer of Warranties.</strong> We provide our services “as is” and without warranty of any kind. We do not guarantee that our services will be error-free or uninterrupted or that any defects will be corrected. We are not responsible for any loss or damage resulting from the use of our services.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Limitation of Liability.</strong> To the extent permitted by law, we will not be liable for any indirect, consequential, or incidental damages arising out of the use or inability to use our services, even if we have been advised of the possibility of such damages.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Indemnification.</strong> You agree to indemnify and hold us harmless from any claim or demand, including reasonable attorneys’ fees, arising out of your use of our services, your violation of these terms and conditions, or your violation of any rights of another.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Changes to Terms and Conditions.</strong> We reserve the right to modify these terms and conditions at any time without prior notice. By continuing to use our services after we post any such changes, you accept the modified terms and conditions.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Governing Law.</strong> These terms and conditions shall be governed by and construed in accordance with the laws of [State/Country], without regard to its conflict of law provisions.
                  </span>
                </li>
              </ul>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Contact Us</h2>
              <p className="mt-6">If you have any questions or concerns about these terms and conditions, please contact us at [contact information].</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
