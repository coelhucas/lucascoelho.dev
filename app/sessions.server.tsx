// [Sessions](https://remix.run/docs/en/main/utils/sessions)

import { createCookieSessionStorage } from "@remix-run/node";
import { createThemeSessionResolver } from "remix-themes";

const productionVariables = {
  domain: "lucascoelho.dev",
  secure: true,
};

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__theme",
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    ...(process.env.NODE_ENV === "production" && productionVariables),
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
