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

// browser-route-module:/Users/lucascosta/hacking/remix-blog/app/routes/blog/$slug.tsx?browser
init_react();

// app/routes/blog/$slug.tsx
init_react();
var meta = ({ data }) => {
  return {
    title: `${data.title} | Blog - lucascoelho.dev`,
    description: "Some random thoughts and stuff that I learn and share."
  };
};
var links = () => {
  return [{ rel: "stylesheet", href: blog_default }];
};
function PostSlug() {
  const post = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(Link, {
    to: "/blog"
  }, "all posts")), /* @__PURE__ */ React.createElement("h1", null, post.title), /* @__PURE__ */ React.createElement("p", {
    className: "post-date"
  }, "Published in ", post.date), /* @__PURE__ */ React.createElement("div", {
    className: "test",
    dangerouslySetInnerHTML: { __html: post.html }
  }));
}
export {
  PostSlug as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/blog/$slug-S46UQWMC.js.map
