import {
  Links,
  Meta,
  Outlet,
  LiveReload,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { type LoaderFunction } from "@remix-run/node";
import { Elements } from "@stripe/react-stripe-js";
import { ClerkApp, ClerkCatchBoundary } from "@clerk/remix";

import tailwind from "./tailwind.css";
import favicon from "../public/favicon.svg";
import tooltip from "react-tooltip/dist/react-tooltip.css";

export const links = () => {
  return [
    { rel: "stylesheet", href: tailwind },
    { rel: "stylesheet", href: tooltip },

    { rel: "icon", type: "image/svg+xml", href: favicon },
  ];
};
export const meta = () => [
  {
    charset: "utf-8",
    title: "New Remix App",
    description:
      "Discover a Convenient Solution for Connecting Families with Incarcerated Individuals. Our web browser application simplifies communication by allowing families to register a local telephone number, providing affordable and frequent contact with prisoners. Explore our services today and experience the ease of staying connected with your loved ones behind bars.",
    viewport: "width=device-width,initial-scale=1",
  },
];
export const loader: LoaderFunction = (args) => rootAuthLoader(args);
export const CatchBoundary = ClerkCatchBoundary();

function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
        />

        <Meta />
        <Links />
      </head>
      <body>
        <LiveReload />

        <Outlet />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default ClerkApp(App);
