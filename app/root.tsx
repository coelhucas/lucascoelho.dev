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
import Link from "~/components/Link";
import globalStylesUrl from "~/styles/global.css";

import React, { useEffect, useState } from "react";
import Icon from "./components/Icon";
import ThemeButton from "./components/ThemeButton";
import { ThemeProvider } from "./misc/ThemeProvider";
import globalMeta from "./utils/global-meta";
import { pageview } from "./utils/gtag";

export let links = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    // {
    //   rel: "stylesheet",
    //   href: darkStylesUrl,
    //   media: "(prefers-color-scheme: dark)",
    // },
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
    // {
    //   rel: "preload",
    //   as: "style",
    //   href: "https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap",
    // },
  ];
};

const navLinks = [
  {
    title: "GitHub",
    path: "https://github.com/coelhucas",
    icon: "github",
  },
  {
    title: "LinkedIn",
    path: "https://www.linkedin.com/in/lucascoelhoc",
    icon: "linkedin",
  },
] as const;

export default function App() {
  const location = useLocation();
  const { gaTrackingId } = useLoaderData<typeof loader>();
  const [lastLocation, setLastLocation] = useState(location?.pathname);

  useEffect(() => {
    if (gaTrackingId && lastLocation !== location?.pathname) {
      pageview(location.pathname, gaTrackingId);
      setLastLocation(location?.pathname);
    }
  }, [location, gaTrackingId, lastLocation]);

  return (
    <Document>
      <Layout>
        <Outlet />
        <Meta />
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
              `,
              }}
            />
          </>
        )}
      </Layout>
    </Document>
  );
}

export const loader = async () => {
  return { gaTrackingId: process.env.GA_TRACKING_ID };
};

export const meta = () => {
  return globalMeta;
};

export function ErrorBoundary() {
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

      // throw new Error(error.data || error.statusText);
    }
    return (
      <Document title="Error!">
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
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
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
    <ThemeProvider>
      <main>
        <nav>
          <div className="navigation-links">
            <Link to="/">./</Link>
            <Link to="/blog">/blog.html</Link>
          </div>

          <ul className="media-links">
            {navLinks.map(({ path, title, icon }) => (
              <li key={title}>
                <Link className="icon-anchor" name={title} anchor to={path}>
                  <Icon as={icon} />
                </Link>
              </li>
            ))}
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
    </ThemeProvider>
  );
}
