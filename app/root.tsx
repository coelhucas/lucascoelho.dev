import type { LoaderFunction } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
  useRouteError,
} from "@remix-run/react";
import highlightStyles from "highlight.js/styles/github.css";
import React, { useEffect } from "react";
import {
  PreventFlashOnWrongTheme,
  ThemeProvider,
  useTheme,
  type Theme,
} from "remix-themes";
import Icon, { type IconNames } from "~/components/Icon";
import Link from "~/components/Link";
import globalStylesUrl from "~/styles/global.css";
import ThemeButton from "./components/ThemeButton";
import { themeSessionResolver } from "./sessions.server";
import globalMeta from "./utils/global-meta";
import { pageview } from "./utils/gtag.client";

type LinkProps = {
  title: string;
  path: string;
  icon: IconNames;
  rel?: string;
};

export let links = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    {
      rel: "stylesheet",
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

const navLinks = [
  {
    title: "Email",
    path: "mailto:contact@lucascoelho.dev",
    icon: "email",
  },
  {
    title: "GitHub",
    path: "https://github.com/coelhucas",
    icon: "github",
  },
  {
    title: "Mastodon",
    path: "https://mastodon.gamedev.place/@cuca",
    icon: "mastodon",
    rel: "me",
  },
] as LinkProps[];

function App() {
  const location = useLocation();
  const { gaTrackingId } = useLoaderData<typeof loader>();
  const data = useLoaderData();
  const [theme] = useTheme();

  useEffect(() => {
    if (gaTrackingId?.length) {
      pageview(location.pathname, gaTrackingId);
    }
  }, [location, gaTrackingId]);

  return (
    <Document dataTheme={theme ?? ""}>
      <Layout>
        <Outlet />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data.theme)} />
        {gaTrackingId && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <script
              async
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}

                gtag('js', new Date());

                gtag('config', '${gaTrackingId}', {
                  page_path: window.location.pathname,
                });
              `,
              }}
            />
          </>
        )}
      </Layout>
    </Document>
  );
}

export const loader: LoaderFunction = async ({ request }) => {
  const { getTheme } = await themeSessionResolver(request);
  return { gaTrackingId: process.env.GA_TRACKING_ID, theme: getTheme() };
};

export const meta = () => {
  return globalMeta;
};

const ErrorDisplay = () => {
  const [theme] = useTheme();
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    let message;
    switch (error.status) {
      case 401:
        message =
          "Looks like you tried to visit a page that you do not have access to.";
        break;
      case 404:
        message = "404: 👀 It looks like this page that does not exist.";
        break;

      default:
        message = `Ops! Guess I didn't treated this error 🤦‍♂️. Status: ${error.status}`;
    }

    return (
      <Document title="Error!" dataTheme={theme ?? ""}>
        <Layout>
          <div>
            <h1>Unable to load page</h1>
            <h2>{message}</h2>
            <hr />
            <p>
              Was it supposed to be working?{" "}
              <a href="mailto:lucascoelhodacosta@gmail.com">Contact me</a>
            </p>
          </div>
        </Layout>
      </Document>
    );
  }
  return null;
};

export function ErrorBoundary() {
  const data = useLoaderData();
  return (
    <ThemeProvider
      specifiedTheme={data?.theme}
      themeAction="/action/set-theme"
      disableTransitionOnThemeChange
    >
      <ErrorDisplay />
    </ThemeProvider>
  );
}

function Document({
  children,
  title,
  dataTheme,
}: {
  children: React.ReactNode;
  dataTheme: Theme | string;
  title?: string;
}) {
  return (
    <html lang="en" data-theme={dataTheme ?? ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%22-24 8 84 84%22><text y=%22.9em%22 font-size=%2290%22>&lambda;</text></svg>"
        ></link>

        {title ? <title>{title}</title> : null}
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <nav>
          <div className="navigation-links">
            <Link to="/">./</Link>
            <Link to="/blog">/blog</Link>
            <Link to="/speaker">/speaker</Link>
          </div>

          <ul className="media-links">
            {navLinks.map(({ path, title, icon, rel }) => {
              const resolvedRel = rel ? { rel } : {};
              return (
                <li key={title}>
                  <Link
                    className="icon-anchor"
                    name={title}
                    anchor
                    to={path}
                    {...resolvedRel}
                  >
                    <Icon as={icon} />
                  </Link>
                </li>
              );
            })}
            <li>
              <ThemeButton />
            </li>
          </ul>
        </nav>
        {children}
      </main>
      <footer>
        <hr />
        <p>The footer is a lie.</p>
      </footer>
    </>
  );
}

export default function WrappedApp() {
  const data = useLoaderData();
  return (
    <ThemeProvider
      specifiedTheme={data.theme}
      themeAction="/action/set-theme"
      disableTransitionOnThemeChange
    >
      <App />
    </ThemeProvider>
  );
}
