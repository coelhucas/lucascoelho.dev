import {
  blog_default
} from "/build/_shared/chunk-E3QJNBTY.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-RDYF4RHT.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/lucascosta/hacking/remix-blog/app/routes/blog/index.tsx?browser
init_react();

// app/routes/blog/index.tsx
init_react();
var meta = () => {
  return {
    title: "Lucas Coelho - coelhucas",
    description: "Welcome to my place :)"
  };
};
var links = () => {
  return [{ rel: "stylesheet", href: blog_default }];
};
function Posts() {
  const posts = useLoaderData();
  console.log(posts);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Posts"), /* @__PURE__ */ React.createElement("ul", null, [...posts].sort((a, b) => a.date > b.date ? -1 : 1).map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.slug
  }, post.title)))));
}
export {
  Posts as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/blog/index-XSVYLU3Q.js.map
