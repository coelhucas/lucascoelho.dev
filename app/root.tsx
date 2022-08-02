import highlightStyles from 'highlight.js/styles/github.css';
import { json, Links, LiveReload, LoaderFunction, Meta, Outlet, Scripts, ScrollRestoration, useCatch, useLoaderData } from 'remix';
import Link from '~/components/Link';
import darkStylesUrl from '~/styles/dark.css';
import globalStylesUrl from '~/styles/global.css';
import sharedStylesUrl from '~/styles/shared.css';

import React from 'react';
import type { LinksFunction } from "remix";
import Icon from './components/Icon';
export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    {
      rel: "stylesheet",
      href: darkStylesUrl,
      media: "(prefers-color-scheme: dark)"
    }, {
      rel: "stylesheet",
      href: highlightStyles,
    },
    {
      rel: "stylesheet",
      href: sharedStylesUrl,
    }
  ];
};

const navLinks = [
  {
    title: 'GitHub',
    path: 'https://github.com/coelhucas',
    icon: 'github',
  },
  {
    title: 'Twitter',
    path: 'https://twitter.com/coelhucass',
    icon: 'twitter',
  },
  {
    title: 'LinkedIn',
    path: 'https://www.linkedin.com/in/lucascoelhoc',
    icon: 'linkedin',
  },
] as const;

export default function App() {
  let data = useLoaderData();
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <Document title="Error!">
      <Layout>
        <div>
          <h1>There was an error</h1>
          <p>{error.message}</p>
          <hr />
          <p>
            Hey, developer, you should replace this with what you want your
            users to see.
          </p>
        </div>
      </Layout>
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  let caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist. 🙈</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {message}
        <Link to="/">Return home</Link>
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
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
            <Link to="/blog">/blog.html</Link>
          </div>

          <ul className="media-links">
            {navLinks.map(({ path, title, icon }) => (
              <li key={title}>
                <Link className="icon-anchor" anchor to={path}>
                  <Icon as={icon} />
                </Link>
              </li>
            ))}
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
