import { LoaderFunction } from "@remix-run/node";
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "@remix-run/react";
import highlightStyles from "highlight.js/styles/github.css";
import { ThemeProvider } from "remix-themes";
import globalStylesUrl from "~/styles/global.css";
import { themeSessionResolver } from "./sessions.server";

export const loader: LoaderFunction = async ({ request }) => {
  const { getTheme } = await themeSessionResolver(request);
  return { gaTrackingId: process.env.GA_TRACKING_ID, theme: getTheme() };
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

export default function App() {
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider
      specifiedTheme={data.theme}
      themeAction="/action/set-theme"

      disableTransitionOnThemeChange
    >
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </ThemeProvider>
  );
}
