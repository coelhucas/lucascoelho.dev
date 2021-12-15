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

// app/styles/blog/index.css
var blog_default = "/build/_assets/index-LPR7ZS32.css";

// app/routes/blog/$slug.tsx
var links = () => {
  return [{ rel: "stylesheet", href: blog_default }];
};
function PostSlug() {
  const post = useLoaderData();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement(Link, {
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(Link, {
    to: "/blog"
  }, "all posts")), /* @__PURE__ */ React.createElement("h1", null, post.title), /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: post.html }
  }), /* @__PURE__ */ React.createElement("p", {
    className: "post-date"
  }, "Originally written in ", post.date));
}
export {
  PostSlug as default,
  links
};
//# sourceMappingURL=/build/routes/blog/$slug-WI76VQPJ.js.map
