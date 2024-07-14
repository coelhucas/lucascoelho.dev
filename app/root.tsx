import { json, LoaderFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteLoaderData,
} from "@remix-run/react";
import highlightStyles from "highlight.js/styles/github.css?url";
import { ReactNode } from "react";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import globalStylesUrl from "~/styles/global.css?url";
import CustomErrorBoundary from "./components/CustomErrorBoundary";
import Navigation from "./components/Navigation";
import { themeSessionResolver } from "./sessions.server";

export const loader: LoaderFunction = async ({ request }) => {
  const { getTheme } = await themeSessionResolver(request);
  return json({ gaTrackingId: process.env.GA_TRACKING_ID, theme: getTheme() });
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
  const data = useLoaderData<typeof loader>();
  return (
    <ThemeProvider specifiedTheme={data?.theme} themeAction="/action/set-theme">
      <Layout>{children}</Layout>
    </ThemeProvider>
  );
}

function Layout({ children }: { children: ReactNode }) {
  const data = useRouteLoaderData<typeof loader>("root");
  const [theme] = useTheme();
  return (
    <html lang="en" data-theme={theme}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navigation />
        {children}
        <ScrollRestoration />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data?.theme)} />
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
