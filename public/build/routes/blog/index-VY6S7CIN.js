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
    title: "Blog - lucascoelho.dev",
    description: "Some random thoughts and stuff that I learn and share."
  };
};
var links = () => {
  return [{ rel: "stylesheet", href: blog_default }];
};
function PostCard({ slug, title }) {
  return /* @__PURE__ */ React.createElement(Link, {
    to: post.slug
  }, title);
}
function Posts() {
  const posts = useLoaderData();
  console.log(posts);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Posts"), /* @__PURE__ */ React.createElement("ul", null, [...posts].sort((a, b) => a.date > b.date ? -1 : 1).map((post2) => /* @__PURE__ */ React.createElement("li", {
    key: post2.slug
  }, /* @__PURE__ */ React.createElement(PostCard, {
    slug: post2.slug,
    title: post2.title
  }), /* @__PURE__ */ React.createElement(Link, {
    to: post2.slug
  }, post2.title)))));
}
export {
  Posts as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/blog/index-VY6S7CIN.js.map
