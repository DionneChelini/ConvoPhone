import Hero from "app/components/hero/hero";
import Lottie from "lottie-react";
import loader from "../../public/loader.json";
import test from "../../public/test.json";
import Navbar from "app/layouts/Navigation";

export function meta() {
  return [
    { title: "Connect Families with Incarcerated Individuals | Convo Phone" },
    { description: "Discover a Convenient Solution for Connecting Families with Incarcerated Individuals. Our web browser application simplifies communication by allowing families to register a local telephone number, providing affordable and frequent contact with prisoners. Explore our services today and experience the ease of staying connected with your loved ones behind bars." },
  ];
}

export default function Example() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="relative isolate pt-14">
        <div className="md:mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
          <div className="lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <Hero />

            <div className="hidden lg:block">
              <div className="mx-auto md:mt-48  mb-20 max-w-7xl h-20 flex items-center justify-center border-t-2 border-b-2 border-solid py-0 px-10">
                <nav className="lg:grid grid-cols-[min-content,1fr,min-content] lg:items-center h-16 lg:gap-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="14" width="22" className="text-gray-500 cursor-pointer">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 2L4 8L10 14" />
                  </svg>
                  <div className="overflow-hidden">
                    <ul className="flex gap-6 transition-transform duration-500 ease-in-out uppercase font-dinround text-custom-sm text-gray-500">
                      <li>🇺🇸 English</li>
                      <li>🇨🇳 Chinese</li>
                      <li>🇻🇳 Vietnamese</li>
                    </ul>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="14" width="22" className="text-gray-500 cursor-pointer">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 2L12 8L6 14" />
                  </svg>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className="md:mx-auto max-w-7xl mx-4 pt-24 lg:flex lg:items-center lg:gap-x-10 xl:gap-x-10 lg:px-8">
            <div className="lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <h2 className="text-4xl md:text-5xl md:text-start text-center text-green-500 max-w-2xl font-feather font-bold">Cheap. easy. friendly.</h2>
              <p className="text-gray-500 font-dinround text-custom-sm md:text-start text-center max-w-2xl lg:max-w-md pt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium nihil numquam cumque corrupti tempora maxime molestias, cum porro totam magnam commodi!</p>
            </div>
            <Lottie animationData={test} className="bottom-10 md:w-96" />
          </div>
          <div className="md:mx-auto max-w-7xl mx-4 md:pt-24 lg:flex lg:items-center lg:gap-x-10 xl:gap-x-10 lg:px-8">
            <div className="lg:mt-0 lg:flex-shrink-0 lg:flex-grow order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl md:text-start text-center text-green-500 max-w-2xl font-feather font-bold">Unlock Efficiency</h2>
              <p className="text-gray-500 font-dinround text-custom-sm md:text-start text-center max-w-2xl lg:max-w-md pt-4">Streamlined Prison Number Management at Your Fingertips! Streamlined Prison Number Management at Your Fingertips! Streamlined Prison Number Management!</p>
            </div>
            <Lottie animationData={test} className="bottom-10 md:w-96 order-2 md:order-1" />
          </div>
          <div className="md:mx-auto max-w-7xl mx-4 md:pt-24 lg:flex lg:items-center lg:gap-x-10 xl:gap-x-10 lg:px-8">
            <div className="lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <h2 className="text-4xl md:text-5xl md:text-start text-center text-green-500 max-w-2xl font-feather font-bold">Spend Less, Achieve More!</h2>
              <p className="text-gray-500  font-dinround text-custom-sm md:text-start text-center max-w-2xl lg:max-w-xl pt-4">The Smart Approach to Prison Number Configuration! The Smart Approach to Prison Number Configuration! The Smart Approach!</p>
            </div>
            <Lottie animationData={test} className="bottom-10 md:w-96" />
          </div>
          <div className="md:mx-auto max-w-7xl mx-4 md:pt-24 lg:flex lg:items-center lg:gap-x-10 xl:gap-x-10 lg:px-8">
            <div className="lg:mt-0 lg:flex-shrink-0 lg:flex-grow order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl md:text-start text-center  text-green-500 max-w-2xl font-feather font-bold">Every Word Counts</h2>
              <p className="text-gray-500 font-dinround text-custom-sm md:text-start text-center max-w-2xl lg:max-w-md pt-4">Making Family Conversations Affordable and Accessible! Making Family Conversations Affordable and Accessible Making Family Conversations Affordable and Accessible Making Family!</p>
            </div>
            <Lottie animationData={test} className="bottom-10 md:w-96 order-2 md:order-1" />
          </div>
          <div className="bg-sky-50 md:mt-20 flex flex-col items-center">
            <div className="mx-auto max-w-7xl pt-24 lg:flex lg:items-center lg:gap-x-10 xl:gap-x-10 lg:px-8">
              <h2 className=" max-w-md md:m-20 mb-20 text-color-manta-ray text-custom-lg md:text-6xl text-center font-feather font-bold">Call anytime, anywhere</h2>
            </div>
            <div className="flex flex-col md:flex-row  gap-4 mb-20">
              <button className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-200 selection:font-dinround text-gray-700 border-2 border-solid border-neutral-300 drop-shadow-md rounded-md">
                <svg viewBox="0 0 37 37" height="34" width="34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>badge-app-store</title>
                  <path
                    d="M26.9039 19.1188C26.9363 16.611 28.2528 14.2945 30.3922 12.981C29.0364 11.0473 26.8469 9.86522 24.4843 9.7914C21.9986 9.53084 19.5888 11.2768 18.3221 11.2768C17.0309 11.2768 15.0807 9.81727 12.9806 9.86042C10.2174 9.94957 7.7038 11.4804 6.35946 13.8929C3.49663 18.8428 5.63205 26.1174 8.3744 30.1184C9.74645 32.0776 11.35 34.2661 13.4482 34.1885C15.5014 34.1035 16.2682 32.881 18.7466 32.881C21.202 32.881 21.9215 34.1885 24.0623 34.1392C26.2655 34.1035 27.6536 32.1713 28.9775 30.1935C29.9633 28.7975 30.7219 27.2546 31.2252 25.622C28.6084 24.5167 26.907 21.9562 26.9039 19.1188V19.1188Z"
                    fill="currentColor"></path>
                  <path d="M22.8604 7.16005C24.0617 5.71991 24.6535 3.86887 24.5102 2C22.6749 2.1925 20.9796 3.06846 19.7621 4.45334C18.5599 5.81971 17.9508 7.60728 18.0691 9.42235C19.929 9.44147 21.6949 8.60765 22.8604 7.16005V7.16005Z" fill="currentColor"></path>
                </svg>
                <span className="grid font-semibold font-dinround text-color-eel-always-light">
                  <span className="text-sm">Download on the</span>
                  <span className="text-custom-sm font-bold">App Store</span>
                </span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-200 font-dinround text-gray-700 border-2 border-solid border-neutral-300 drop-shadow-md rounded-md">
                <svg viewBox="0 0 37 37" height="34" width="34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <title>badge-app-store</title>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.80942 4.3203C3.80942 4.09554 3.82731 3.88521 3.86151 3.69016L17.8617 18.4703L3.83906 33.2741C3.81952 33.1218 3.80942 32.961 3.80942 32.792V4.3203ZM5.35237 35.0876C5.86758 35.1708 6.47838 35.0454 7.13188 34.6805L24.1811 25.1417L19.4773 20.1758L5.35237 35.0876ZM21.0928 18.4703L26.2937 23.9609L32.63 20.4164C34.4567 19.393 34.4567 17.7194 32.63 16.6985L26.1861 13.0933L21.0928 18.4703ZM24.0742 11.9117L7.13188 2.43299C6.60625 2.13818 6.10808 1.99915 5.66613 1.99915C5.60892 1.99915 5.55264 2.00146 5.49734 2.00606L19.4773 16.7648L24.0742 11.9117Z"
                    fill="currentColor"></path>
                </svg>
                <span className="grid font-semibold font-dinround text-color-eel-always-light">
                  <span className="text-sm">Get it on</span>
                  <span className="text-custom-sm font-bold">Google Play</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
