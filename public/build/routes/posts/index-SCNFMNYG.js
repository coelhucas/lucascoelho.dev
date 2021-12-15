import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-RDYF4RHT.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/lucascosta/hacking/remix-blog/app/routes/posts/index.tsx?browser
init_react();

// app/routes/posts/index.tsx
init_react();
function Posts() {
  const posts = useLoaderData();
  console.log(posts);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "Posts"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.slug
  }, post.title)))));
}
export {
  Posts as default
};
//# sourceMappingURL=/build/routes/posts/index-SCNFMNYG.js.map
