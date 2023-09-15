import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";

export default function Example() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div
        className="absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56"
        aria-hidden="true"
      >
        <div
          className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Protect your information
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Privacy Policy & Permissions
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            At Convo, we are committed to protecting your privacy and ensuring
            the security of your personal information. This Privacy Policy
            explains how we collect, use, and safeguard your data when you use
            our website and services. By accessing or using our services, you
            consent to the practices described in this Privacy Policy.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <svg
              className="absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e87443c8-56e4-4c20-9111-55b82fa704e3"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M0.5 0V200M200 0.5L0 0.499983" />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill="url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
              />
            </svg>
            <figure className="border-l border-indigo-600 pl-8">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>
                  “Thanks to Convo, my son can call home more often. It means
                  the world to us.” -
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <img
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                  className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">
                    Jin, Viatnam
                  </div>
                  <div className="text-gray-600">@jin</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p className="text-gray-900 font-semibold">
              Information We Collect
            </p>
            <p>
              When you sign up for our services or contact us for support, we
              may collect the following types of information:
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <ArrowRightCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Personal Information:
                  </strong>{" "}
                  This may include your name, email address, phone number, and
                  billing information. We collect this information to set up and
                  manage your account, process payments, and provide customer
                  support. However we do not hold any credit card details or
                  information. This is all managed by the third party payments
                  platform Stripe.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowRightCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Communication Data:
                  </strong>{" "}
                  We may collect data related to your interactions with our
                  services, such as call logs, message records, and customer
                  support communications. This helps us address your inquiries,
                  improve our services, and ensure quality and compliance.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowRightCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Website Usage Information:
                  </strong>{" "}
                  We may collect non-personally identifiable information about
                  your use of our website, such as IP address, browser type,
                  device information, and pages visited. This data is collected
                  for analytics purposes and to enhance your website experience.
                </span>
              </li>
            </ul>
            <p className="text-gray-900 mt-8 font-semibold">
              Cookies and Tracking Technologies
            </p>
            <p>
              Our website may use cookies or other tracking technologies to
              enhance your browsing experience. By using our website, you
              consent to the use of cookies in accordance with our Cookie
              Policy. You can manage your cookie preferences and learn more
              about our use of cookies by visiting our Cookie Policy page.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              How We Use Your Information
            </h2>
            <p className="mt-6">We use the information we collect to:</p>
            <ul className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <ArrowRightCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Better Our Customer Experience:
                  </strong>{" "}
                  We use the information to provide and improve our services,
                  including connecting your loved ones in correctional
                  facilities and facilitating communication.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowRightCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Provide Our Service:
                  </strong>{" "}
                  Process payments and manage your account, including sending
                  invoices, notifications, and important service updates.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowRightCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Customer Service:
                  </strong>{" "}
                  Respond to your inquiries, support requests, and customer
                  service needs.
                </span>
              </li>
              <li className="flex gap-x-3">
                <ArrowRightCircleIcon
                  className="mt-1 h-5 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Improve Our Service Offering:
                  </strong>{" "}
                  Understand how our services are used, analyze trends, and
                  enhance our website and offerings.
                </span>
              </li>
            </ul>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Data Security
            </h2>
            <p className="mt-6">
              We implement robust security measures to protect your personal
              information from unauthorized access, alteration, disclosure, or
              destruction. We use industry-standard encryption protocols and
              regularly update our security practices to maintain the integrity
              and confidentiality of your data.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Third-Party Disclosure
            </h2>
            <p className="mt-6">
              We may share your information with trusted third-party service
              providers who assist us in delivering our services, processing
              payments, and improving our website. These providers are
              contractually obligated to protect your information and use it
              solely for the purposes specified by us.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Data Retention
            </h2>
            <p className="mt-6">
              We will retain your personal information only for as long as
              necessary to fulfill the purposes outlined in this Privacy Policy,
              unless a longer retention period is required or permitted by law.
              After this period, your personal information will be securely
              deleted or anonymized.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Data Transfers
            </h2>
            <p className="mt-6">
              Your personal information may be transferred to and processed in
              countries outside of your country of residence. By using our
              services, you consent to the transfer of your personal information
              to these countries, which may have different data protection laws.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Children's Privacy
            </h2>
            <p className="mt-6">
              Our services are not intended for use by individuals under the age
              of 18. We do not knowingly collect personal information from
              children. If you are a parent or guardian and believe that your
              child has provided personal information to us, please contact us
              immediately, and we will take steps to remove such information
              from our systems.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Marketing Communications
            </h2>
            <p className="mt-6">
              If you have provided your consent, we may send you marketing
              communications or newsletters about our services. You can opt out
              of receiving these communications at any time by following the
              instructions provided in the communication or by contacting us
              directly.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Data Breach Notification
            </h2>
            <p className="mt-6">
              In the event of a data breach that compromises the security of
              your personal information, we will take appropriate measures to
              notify affected users in accordance with applicable laws. We will
              also notify relevant authorities and regulatory bodies as
              required.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Links to Third-Party Websites
            </h2>
            <p className="mt-6">
              Our website may contain links to third-party websites or services.
              Please note that this Privacy Policy does not apply to those
              websites or services. We encourage you to review the privacy
              policies of any third-party sites you visit.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Updates to the Privacy Policy
            </h2>
            <p className="mt-6">
              We reserve the right to update this Privacy Policy as needed to
              reflect changes in our practices or applicable laws. We will
              notify you of any material updates by posting the revised Privacy
              Policy on our website. We encourage you to review this page
              periodically for any changes. Your continued use of our services
              after any modifications to the Privacy Policy constitutes your
              acceptance of the updated terms.
            </p>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
              Contact Us
            </h2>
            <p className="mt-6">Email: privacy@convo.com</p>
            <p className="mt-2">Phone: XXX-XXX-XXXX</p>

            <p className="mt-6">
              We value your privacy and are dedicated to protecting your
              personal information in accordance with applicable privacy laws
              and best practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
