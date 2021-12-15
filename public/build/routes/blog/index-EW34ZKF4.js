import {
  shared_default
} from "/build/_shared/chunk-G4BLAUXO.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-RDYF4RHT.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/lucascosta/hacking/coelhucas.github.io/app/routes/blog/index.tsx?browser
init_react();

// app/routes/blog/index.tsx
init_react();

// app/styles/blog/posts-list.css
var posts_list_default = "/build/_assets/posts-list-A3EAVI5Z.css";

// app/routes/blog/index.tsx
var meta = () => {
  return {
    title: "Blog - lucascoelho.dev",
    description: "Some random thoughts and stuff that I learn and share."
  };
};
var links = () => {
  return [{ rel: "stylesheet", href: shared_default }, { rel: "stylesheet", href: posts_list_default }];
};
function PostCard({ slug, title }) {
  return /* @__PURE__ */ React.createElement(Link, {
    className: "post-card",
    to: slug
  }, title);
}
function Posts() {
  const posts = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("h1", null, "Posts"), /* @__PURE__ */ React.createElement("ul", {
    className: "list"
  }, [...posts].sort((a, b) => a.date > b.date ? -1 : 1).map((post) => /* @__PURE__ */ React.createElement("li", {
    className: "list-item",
    key: post.slug
  }, /* @__PURE__ */ React.createElement(PostCard, {
    slug: post.slug,
    title: post.title
  })))));
}
export {
  Posts as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/blog/index-EW34ZKF4.js.map
