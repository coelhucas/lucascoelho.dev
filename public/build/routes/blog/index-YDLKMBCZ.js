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
var links = () => {
  return [{ rel: "stylesheet", href: blog_default }];
};
function Posts() {
  const posts = useLoaderData();
  console.log(posts);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Posts"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.slug
  }, "[", post.date, "]: ", post.title)))));
}
export {
  Posts as default,
  links
};
//# sourceMappingURL=/build/routes/blog/index-YDLKMBCZ.js.map
