import { json, LoaderFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "@remix-run/react";
import highlightStyles from "highlight.js/styles/github.css?url";
import { ReactNode } from "react";
import globalStylesUrl from "~/styles/global.css?url";
import CustomErrorBoundary from "./components/CustomErrorBoundary";
import Navigation from "./components/Navigation";

export const loader: LoaderFunction = async () => {
  return json({ gaTrackingId: process.env.GA_TRACKING_ID });
};

export const links = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    {
      rel: "stylesheet",
      // TODO: Move to blog/[slug]
      href: highlightStyles,
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
      as: "font",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      href: "https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap",
      rel: "stylesheet",
    },
  ];
};

export function ErrorBoundary() {
  return (
    <Providers>
      <CustomErrorBoundary />
    </Providers>
  );
}

function Providers({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>;
}

function Layout({ children }: { children: ReactNode }) {
  const data = useRouteLoaderData<typeof loader>("root");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%22-24 8 84 84%22><text y=%22.9em%22 font-size=%2290%22>&lambda;</text></svg>"
        ></link>
        <Meta />
        <Links />
      </head>
      <body>
        <Navigation />
        {children}
        <ScrollRestoration />
        <Scripts />
        <footer>
          <hr />
          <p>The footer is a lie.</p>
        </footer>
      </body>
    </html>
  );
}

export default function App() {
  const data = useRouteLoaderData<typeof loader>("root");
  return (
    <Providers>
      <Outlet />
    </Providers>
  );
}
