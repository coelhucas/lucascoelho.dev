import {
  useLoaderData
} from "/build/_shared/chunk-RDYF4RHT.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-E7VMOUYL.js";

// browser-route-module:/Users/lucascosta/hacking/remix-blog/app/routes/posts/$slug.tsx?browser
init_react();

// app/routes/posts/$slug.tsx
init_react();
function PostSlug() {
  const post = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    dangerouslySetInnerHTML: { __html: post.html }
  });
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/posts/$slug-DG7ZY43D.js.map
