import {
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
var blog_default = "/build/_assets/index-RKOIKXCX.css";

// app/routes/blog/$slug.tsx
var links = () => {
  return [{ rel: "stylesheet", href: blog_default }];
};
function PostSlug() {
  const post = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: post.html }
  });
}
export {
  PostSlug as default,
  links
};
//# sourceMappingURL=/build/routes/blog/$slug-YPDS4AWZ.js.map
