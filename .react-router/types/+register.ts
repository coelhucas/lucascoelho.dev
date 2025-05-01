import "react-router";

declare module "react-router" {
  interface Register {
    params: Params;
  }
}

type Params = {
  "/": {};
  "/games": {};
  "/blog": {};
  "/blog/:slug": {
    "slug": string;
  };
  "/kop": {};
  "/rss.xml": {};
  "/speaker": {};
};