var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// node_modules/highlight.js/styles/github.css
var require_github = __commonJS({
  "node_modules/highlight.js/styles/github.css"(exports, module2) {
    module2.exports = "/build/_assets/github-YKSSOEAU.css";
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/lucascosta/hacking/netlify-website/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
init_react();
var import_remix3 = __toModule(require_remix());

// app/styles/global.css
var global_default = "/build/_assets/global-UG2FDQ7X.css";

// app/styles/shared.css
var shared_default = "/build/_assets/shared-RX7JQ2VL.css";

// app/styles/dark.css
var dark_default = "/build/_assets/dark-APYDFYJA.css";

// route-module:/Users/lucascosta/hacking/netlify-website/app/root.tsx
var import_github = __toModule(require_github());

// app/components/Link/index.tsx
init_react();
var import_react = __toModule(require("react"));
var import_remix2 = __toModule(require_remix());
var weightClasses = {
  thin: "link--thin",
  regular: "link--regular",
  bold: "link--bold"
};
var noUnderline = "no-underline";
var getClassNames = ({ weight, omitUnderline, className, highlight: highlight2 }) => {
  const classes = ["link", weightClasses[weight], className, highlight2 ? "highlight" : null];
  if (omitUnderline)
    classes.push(noUnderline);
  return classes.filter(Boolean).join(" ");
};
function Link({
  weight = "thin",
  omitUnderline = false,
  children,
  anchor = false,
  className,
  highlight: highlight2 = false,
  tags,
  to
}) {
  const resolvedTags = tags ? `[${tags.join(", ")}]` : "";
  const sharedProps = {
    className: getClassNames({ weight, omitUnderline, className, highlight: highlight2 }),
    "data-tags": resolvedTags
  };
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, anchor ? /* @__PURE__ */ import_react.default.createElement("a", __spreadValues({
    target: "_blank",
    href: to
  }, sharedProps), children) : /* @__PURE__ */ import_react.default.createElement(import_remix2.Link, __spreadValues({
    to
  }, sharedProps), children));
}
var Link_default = Link;

// route-module:/Users/lucascosta/hacking/netlify-website/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    {
      rel: "stylesheet",
      href: dark_default,
      media: "(prefers-color-scheme: dark)"
    },
    {
      rel: "stylesheet",
      href: import_github.default
    },
    {
      rel: "stylesheet",
      href: shared_default
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement(Document, null, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(import_remix3.Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ React.createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", null, "There was an error"), /* @__PURE__ */ React.createElement("p", null, error.message), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  let caught = (0, import_remix3.useCatch)();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ React.createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist. \u{1F648}");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ React.createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement("h1", null, caught.status, ": ", caught.statusText), message, /* @__PURE__ */ React.createElement(Link_default, {
    to: "/"
  }, "Return home")));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ React.createElement("title", null, title) : null, /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("main", null, children), /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("p", null, "SyntaxError: Unexpected EOF")));
}

// route-module:/Users/lucascosta/hacking/netlify-website/app/routes/blog/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug,
  links: () => links2,
  loader: () => loader,
  meta: () => meta
});
init_react();
var import_remix4 = __toModule(require_remix());

// app/post.ts
init_react();
var import_path = __toModule(require("path"));
var import_promises = __toModule(require("fs/promises"));
var import_front_matter = __toModule(require("front-matter"));
var import_tiny_invariant = __toModule(require("tiny-invariant"));
var import_marked = __toModule(require("marked"));
var import_highlight = __toModule(require("highlight.js"));
var postsPath = import_path.default.join(process.cwd(), "posts");
var renderer = new import_marked.Renderer();
renderer.heading = (text, level) => {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");
  return `
          <h${level}>
            <a name="${escapedText}" class="anchor anchor--no-decoration" href="#${escapedText}">
              <span class="header-link">#</span>
            </a>
            ${text}
          </h${level}>`;
};
renderer.link = (href, _, text) => `<a class="anchor" href=${href}>${text}</a>`;
renderer.image = (href, _, text) => {
  return `<img class="post-image" src=${href} alt=${text} />`;
};
var highlight = (code, lang) => {
  const language = import_highlight.default.getLanguage(lang) ? lang : "plaintext";
  return import_highlight.default.highlight(code, { language }).value;
};
var options = { renderer, langPrefix: "hljs language-", highlight };
function isValidPostAttributes(attributes) {
  return attributes == null ? void 0 : attributes.title;
}
async function getPosts() {
  const dir = await import_promises.default.readdir(postsPath);
  return Promise.all(dir.map(async (filename) => {
    const file = await import_promises.default.readFile(import_path.default.join(postsPath, filename));
    const { attributes } = (0, import_front_matter.default)(file.toString());
    (0, import_tiny_invariant.default)(isValidPostAttributes(attributes), `${filename} has bad meta data!`);
    return {
      slug: filename.replace(/\.md$/, ""),
      title: attributes.title,
      date: attributes.date
    };
  }));
}
async function getPost(slug) {
  const filepath = import_path.default.join(postsPath, slug + ".md");
  const file = await import_promises.default.readFile(filepath);
  const { attributes, body } = (0, import_front_matter.default)(file.toString());
  (0, import_tiny_invariant.default)(isValidPostAttributes(attributes), `Post ${filepath} is missing attributes`);
  import_marked.marked.use({ renderer });
  const html = import_marked.marked.parse(body, options);
  return { slug, title: attributes.title, date: attributes.date, html };
}

// route-module:/Users/lucascosta/hacking/netlify-website/app/routes/blog/$slug.tsx
var import_tiny_invariant2 = __toModule(require("tiny-invariant"));

// app/styles/blog/shared.css
var shared_default2 = "/build/_assets/shared-IPWVNZP3.css";

// route-module:/Users/lucascosta/hacking/netlify-website/app/routes/blog/$slug.tsx
var meta = ({ data }) => {
  return {
    title: `${data.title} | Blog - lucascoelho.dev`,
    description: "Some random thoughts and stuff that I learn and share."
  };
};
var links2 = () => {
  return [{ rel: "stylesheet", href: shared_default2 }];
};
var loader = async ({
  params
}) => {
  (0, import_tiny_invariant2.default)(params.slug, "expected params.slug");
  return getPost(params.slug);
};
function PostSlug() {
  const post = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement(Link_default, {
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(Link_default, {
    to: "/blog"
  }, "all posts")), /* @__PURE__ */ React.createElement("h1", null, post.title), /* @__PURE__ */ React.createElement("p", {
    className: "post-date"
  }, "Published in ", post.date), /* @__PURE__ */ React.createElement("div", {
    className: "post-container",
    dangerouslySetInnerHTML: { __html: post.html }
  }));
}

// route-module:/Users/lucascosta/hacking/netlify-website/app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Posts,
  links: () => links3,
  loader: () => loader2,
  meta: () => meta2
});
init_react();
var import_remix5 = __toModule(require_remix());

// app/styles/blog/posts-list.css
var posts_list_default = "/build/_assets/posts-list-RA7E4PWZ.css";

// route-module:/Users/lucascosta/hacking/netlify-website/app/routes/blog/index.tsx
var meta2 = () => {
  return {
    title: "Blog - lucascoelho.dev",
    description: "Some random thoughts and stuff that I learn and share."
  };
};
var links3 = () => {
  return [{ rel: "stylesheet", href: shared_default2 }, { rel: "stylesheet", href: posts_list_default }];
};
var loader2 = () => {
  return getPosts();
};
function PostCard({ slug, title, date }) {
  return /* @__PURE__ */ React.createElement(Link_default, {
    omitUnderline: true,
    to: slug
  }, /* @__PURE__ */ React.createElement("div", {
    className: "post-card"
  }, title, /* @__PURE__ */ React.createElement("span", {
    className: "date"
  }, date)));
}
function Posts() {
  const posts = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement(Link_default, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("h1", null, "Posts"), /* @__PURE__ */ React.createElement("ul", {
    className: "list"
  }, [...posts].sort((a, b) => a.date > b.date ? -1 : 1).map((post) => /* @__PURE__ */ React.createElement("li", {
    className: "list-item",
    key: post.slug
  }, /* @__PURE__ */ React.createElement(PostCard, {
    slug: post.slug,
    title: post.title,
    date: post.date
  })))));
}

// route-module:/Users/lucascosta/hacking/netlify-website/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  loader: () => loader3,
  meta: () => meta3
});
init_react();
var import_remix6 = __toModule(require_remix());

// app/components/Icon/index.tsx
init_react();
var icons = {
  github: /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("title", null, "Github icon"), /* @__PURE__ */ React.createElement("path", {
    d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
  })),
  linkedin: /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("title", null, "LinkedIn icon"), /* @__PURE__ */ React.createElement("path", {
    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
  })),
  youtube: /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M10 9.333l5.333 2.662-5.333 2.672v-5.334zm14-4.333v14c0 2.761-2.238 5-5 5h-14c-2.761 0-5-2.239-5-5v-14c0-2.761 2.239-5 5-5h14c2.762 0 5 2.239 5 5zm-4 7c-.02-4.123-.323-5.7-2.923-5.877-2.403-.164-7.754-.163-10.153 0-2.598.177-2.904 1.747-2.924 5.877.02 4.123.323 5.7 2.923 5.877 2.399.163 7.75.164 10.153 0 2.598-.177 2.904-1.747 2.924-5.877z"
  }), /* @__PURE__ */ React.createElement("title", null, "Youtube icon")),
  blog: /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 64 64"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "#010002",
    d: "M49.325 17.554c-.785-3.31-4.095-5.663-7.467-5.382v-.642c0-.575-.251-1.118-.708-1.527-1.41-1.266-4.614-1.068-5.925-.927l-19.072 2.08-2.603-1.465 21.055-2.187a1.5 1.5 0 10-.31-2.984L10.023 7.041c-.124-.32-.344-.6-.653-.774l-.564-.317L30.37 3.606a1.5 1.5 0 10-.324-2.982L3.407 3.52c-.33.036-.62.18-.847.388C1.162 4.43 0 5.915 0 8.563v27.45c0 3.296 1.903 6.947 4.331 8.313l3.567 2.007c.229.128.482.192.735.192.04 0 .078-.013.118-.016.75 1.271 1.708 2.337 2.783 2.941l3.566 2.006a1.502 1.502 0 002.235-1.308v-26.56l5.291 25.796c.649 3.166 3.207 5.553 5.949 5.553.23 0 .461-.017.692-.05l3.951-.577c.016-.002.03-.009.045-.012.014-.002.028-.001.042-.004l17.173-3.556a6.315 6.315 0 004.084-2.804 6.315 6.315 0 00.812-4.891l-6.049-25.489zM7.134 42.461l-1.332-.749C4.31 40.873 3 38.21 3 36.013V8.563c0-1.056.325-1.883.739-1.883.157 0 .367.07.593.197l2.802 1.575v34.009zm7.202 5.125l-1.331-.749c-1.493-.84-2.802-3.503-2.802-5.699v-27.45c0-1.056.325-1.883.739-1.883.157 0 .368.069.592.196l2.802 1.576v34.009zm3-27.809v-5.731l18.213-1.986c1.626-.175 2.759-.05 3.309.091v.398l-13.686 1.785c-.043.006-.083.02-.125.029-.034.008-.068.009-.102.018l-3.817 1.113c-1.894.554-3.271 2.216-3.792 4.283zm11.497 32.141c-1.415.202-2.882-1.252-3.269-3.138l-5.36-26.134c-.394-1.921.414-3.877 1.764-4.271l2.256-.658 6.985 33.854-2.376.347zm23.199-5.595a3.339 3.339 0 01-2.162 1.478l-15.703 3.251L27.162 17.1l14.785-1.929c1.957-.256 4.003 1.152 4.459 3.077l6.05 25.489c.213.902.063 1.82-.424 2.586z"
  }), /* @__PURE__ */ React.createElement("path", {
    fill: "#010002",
    d: "M43.929 19.242a1.498 1.498 0 00-1.712-1.108l-11.48 2.006a1.498 1.498 0 00-1.212 1.772l1.561 7.802a1.5 1.5 0 001.706 1.187l11.926-1.895a1.5 1.5 0 001.219-1.85l-2.008-7.914zm-10.186 8.469l-.976-4.881 8.596-1.502 1.261 4.973-8.881 1.41z"
  })),
  twitter: /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("title", null, "Twitter icon"), /* @__PURE__ */ React.createElement("path", {
    d: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
  }))
};
function Icon({ as }) {
  if (!as) {
    return null;
  }
  const Component = () => icons[as];
  return /* @__PURE__ */ React.createElement(Component, null);
}
var Icon_default = Icon;

// route-module:/Users/lucascosta/hacking/netlify-website/app/routes/index.tsx
var loader3 = () => {
  let data = {
    navLinks: [
      {
        title: "GitHub",
        path: "https://github.com/coelhucas",
        icon: "github"
      },
      {
        title: "Twitter",
        path: "https://twitter.com/coelhucass",
        icon: "twitter"
      },
      {
        title: "Blog",
        path: "/blog",
        icon: "blog",
        anchor: false
      },
      {
        title: "LinkedIn",
        path: "https://github.com/coelhucas",
        icon: "linkedin"
      },
      {
        title: "Youtube",
        path: "https://github.com/coelhucas",
        icon: "youtube"
      }
    ],
    projects: [
      {
        title: "yoga",
        path: "https://github.com/gympass/yoga",
        tags: ["JS"]
      },
      {
        title: "pixel",
        path: "https://github.com/coelhucas/pixel",
        tags: ["JS"]
      },
      {
        title: "mini-styled",
        path: "https://github.com/coelhucas/mini-styled",
        tags: ["JS"]
      },
      {
        title: "outline me",
        path: "https://github.com/coelhucas/outline-me",
        tags: ["JS"]
      },
      {
        title: "king of parties",
        path: "/kop",
        anchor: false,
        tags: ["GDScript"]
      },
      {
        title: "hitbox editor",
        path: "https://github.com/coelhucas/hitbox-editor/",
        tags: ["GDScript"]
      },
      {
        title: "rgba based map generator",
        path: "https://github.com/coelhucas/unity-rgba-level-generator",
        tags: ["C#"]
      },
      {
        title: "see more \u2304",
        path: "https://github.com/coelhucas/",
        props: {
          omitUnderline: true
        }
      }
    ]
  };
  return (0, import_remix6.json)(data);
};
var meta3 = () => {
  return {
    title: "Lucas Coelho - coelhucas",
    description: "Welcome to my place :)"
  };
};
function Index() {
  let data = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h1", null, "Lucas Coelho"), /* @__PURE__ */ React.createElement("h2", null, "Software Engineer at ", /* @__PURE__ */ React.createElement(Link_default, {
    anchor: true,
    highlight: true,
    weight: "bold",
    to: "https://gympass.com/"
  }, "Gympass")), /* @__PURE__ */ React.createElement("p", null, "I've been working on ", /* @__PURE__ */ React.createElement(Link_default, {
    anchor: true,
    highlight: true,
    weight: "regular",
    to: "https://github.com/gympass/yoga"
  }, "Yoga"), ", Gympass' open source design system, as well as some other DX initiatives inside our Platform Engineering Experience Team. I'm interested in learning how some stuff works under the covers and creating tools for other developers.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "Been studying Rust lately \u{1F980}"), /* @__PURE__ */ React.createElement("hr", null), /* @__PURE__ */ React.createElement("nav", null, /* @__PURE__ */ React.createElement("ul", {
    className: "media-links"
  }, data.navLinks.map(({ anchor = true, path: path2, title, icon }) => /* @__PURE__ */ React.createElement("li", {
    key: title
  }, /* @__PURE__ */ React.createElement(Link_default, {
    className: "icon-anchor",
    anchor,
    to: path2
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    as: icon
  }), title)))))), /* @__PURE__ */ React.createElement("section", {
    className: "projects-container"
  }, /* @__PURE__ */ React.createElement("b", null, "Projects"), /* @__PURE__ */ React.createElement("ul", null, data.projects.map(({ title, path: path2, anchor = true, tags, props }) => /* @__PURE__ */ React.createElement("li", {
    key: title
  }, /* @__PURE__ */ React.createElement(Link_default, __spreadValues({
    highlight: true,
    anchor,
    to: path2,
    tags
  }, props), title))))));
}

// route-module:/Users/lucascosta/hacking/netlify-website/app/routes/kop.tsx
var kop_exports = {};
__export(kop_exports, {
  default: () => KingOfParties,
  links: () => links4,
  meta: () => meta4
});
init_react();
var meta4 = () => {
  return {
    title: "Blog - lucascoelho.dev",
    description: "Some random thoughts and stuff that I learn and share."
  };
};
var links4 = () => {
  return [{ rel: "stylesheet", href: shared_default2 }, { rel: "stylesheet", href: posts_list_default }];
};
function KingOfParties() {
  return /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement(Link_default, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("h1", null, "King of Parties"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("b", null, "Links"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link_default, {
    anchor: true,
    to: "https://github.com/coelhucas/kop"
  }, "Official Repository")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link_default, {
    anchor: true,
    to: "https://www.youtube.com/watch?v=etAaMHgi8a0"
  }, "[PT-BR] Apresenta\xE7\xE3o (Youtube)")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link_default, {
    anchor: true,
    to: "https://github.com/coelhucas/mp-game-pck/archive/master.zip"
  }, "Download - Windows \u{1F5D1}\uFE0F")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link_default, {
    anchor: true,
    to: "https://github.com/coelhucas/mp-game-pck/archive/linux.zip"
  }, "Download - Linux \u{1F427}")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(Link_default, {
    anchor: true,
    to: "https://github.com/coelhucas/mp-game-pck/archive/macos.zip"
  }, "Download - MacOS \u{1F34F}"))), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("h2", null, "About"), /* @__PURE__ */ React.createElement("p", null, "King of Parties is an online multiplayer game where one of the players, the birthday person, which is the ", /* @__PURE__ */ React.createElement("i", null, "King of the Party"), ", mad with the surprise party, has to kill all their guests before the party is over. And the guests need to survive by hiding and running away from the shots of the King."), /* @__PURE__ */ React.createElement("p", null, "The project is licensed over the ", /* @__PURE__ */ React.createElement("b", null, /* @__PURE__ */ React.createElement(Link_default, {
    anchor: true,
    to: "http://www.wtfpl.net/about/"
  }, "WTFPL"), " license.")), /* @__PURE__ */ React.createElement("h2", null, "Gameplay"), /* @__PURE__ */ React.createElement("iframe", {
    width: "560",
    height: "315",
    src: "https://www.youtube.com/embed/FMZOk2F4W_w",
    frameBorder: "0",
    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
    allowFullScreen: true
  }), /* @__PURE__ */ React.createElement("p", null, "Made by ", /* @__PURE__ */ React.createElement(Link_default, {
    to: "/"
  }, "Lucas Coelho")));
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: true,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/kop": {
    id: "routes/kop",
    parentId: "root",
    path: "kop",
    index: void 0,
    caseSensitive: void 0,
    module: kop_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9sdWNhc2Nvc3RhL2hhY2tpbmcvbmV0bGlmeS13ZWJzaXRlL2FwcC9yb290LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9MaW5rL2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2x1Y2FzY29zdGEvaGFja2luZy9uZXRsaWZ5LXdlYnNpdGUvYXBwL3JvdXRlcy9ibG9nLyRzbHVnLnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvcG9zdC50cyIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2x1Y2FzY29zdGEvaGFja2luZy9uZXRsaWZ5LXdlYnNpdGUvYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL2x1Y2FzY29zdGEvaGFja2luZy9uZXRsaWZ5LXdlYnNpdGUvYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSWNvbi9pbmRleC50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy9sdWNhc2Nvc3RhL2hhY2tpbmcvbmV0bGlmeS13ZWJzaXRlL2FwcC9yb3V0ZXMva29wLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjFcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4xXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2x1Y2FzY29zdGEvaGFja2luZy9uZXRsaWZ5LXdlYnNpdGUvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2x1Y2FzY29zdGEvaGFja2luZy9uZXRsaWZ5LXdlYnNpdGUvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9sdWNhc2Nvc3RhL2hhY2tpbmcvbmV0bGlmeS13ZWJzaXRlL2FwcC9yb3V0ZXMvYmxvZy8kc2x1Zy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL2x1Y2FzY29zdGEvaGFja2luZy9uZXRsaWZ5LXdlYnNpdGUvYXBwL3JvdXRlcy9ibG9nL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUzIGZyb20gXCIvVXNlcnMvbHVjYXNjb3N0YS9oYWNraW5nL25ldGxpZnktd2Vic2l0ZS9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU0IGZyb20gXCIvVXNlcnMvbHVjYXNjb3N0YS9oYWNraW5nL25ldGxpZnktd2Vic2l0ZS9hcHAvcm91dGVzL2tvcC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL2Jsb2cvJHNsdWdcIjoge1xuICAgIGlkOiBcInJvdXRlcy9ibG9nLyRzbHVnXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYmxvZy86c2x1Z1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2Jsb2cvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9ibG9nL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYmxvZ1wiLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMva29wXCI6IHtcbiAgICBpZDogXCJyb3V0ZXMva29wXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwia29wXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTRcbiAgfVxufTsiLCAiaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tIFwicmVhY3QtZG9tL3NlcnZlclwiO1xuaW1wb3J0IHsgUmVtaXhTZXJ2ZXIgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgbGV0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGlua3MsXG4gIExpdmVSZWxvYWQsXG4gIE1ldGEsXG4gIE91dGxldCxcbiAgU2NyaXB0cyxcbiAgU2Nyb2xsUmVzdG9yYXRpb24sXG4gIHVzZUNhdGNoXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBnbG9iYWxTdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL2dsb2JhbC5jc3NcIjtcbmltcG9ydCBzaGFyZWRTdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL3NoYXJlZC5jc3NcIjtcbmltcG9ydCBkYXJrU3R5bGVzVXJsIGZyb20gXCJ+L3N0eWxlcy9kYXJrLmNzc1wiO1xuaW1wb3J0IGhpZ2hsaWdodFN0eWxlcyBmcm9tICdoaWdobGlnaHQuanMvc3R5bGVzL2dpdGh1Yi5jc3MnO1xuaW1wb3J0IExpbmsgZnJvbSBcIn4vY29tcG9uZW50cy9MaW5rXCI7XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9hcHAjbGlua3NcbmV4cG9ydCBsZXQgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBnbG9iYWxTdHlsZXNVcmwgfSxcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogZGFya1N0eWxlc1VybCxcbiAgICAgIG1lZGlhOiBcIihwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaylcIlxuICAgIH0sIHtcbiAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICBocmVmOiBoaWdobGlnaHRTdHlsZXMsXG4gICAgfSxcbiAgICB7XG4gICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgaHJlZjogc2hhcmVkU3R5bGVzVXJsLFxuICAgIH1cbiAgXTtcbn07XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9jb252ZW50aW9ucyNkZWZhdWx0LWV4cG9ydFxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI3JvdXRlLWZpbGVuYW1lc1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICByZXR1cm4gKFxuICAgIDxEb2N1bWVudD5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2RvY3MvZW4vdjEvYXBpL2NvbnZlbnRpb25zI2Vycm9yYm91bmRhcnlcbmV4cG9ydCBmdW5jdGlvbiBFcnJvckJvdW5kYXJ5KHsgZXJyb3IgfTogeyBlcnJvcjogRXJyb3IgfSkge1xuICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgcmV0dXJuIChcbiAgICA8RG9jdW1lbnQgdGl0bGU9XCJFcnJvciFcIj5cbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgxPlRoZXJlIHdhcyBhbiBlcnJvcjwvaDE+XG4gICAgICAgICAgPHA+e2Vycm9yLm1lc3NhZ2V9PC9wPlxuICAgICAgICAgIDxociAvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgSGV5LCBkZXZlbG9wZXIsIHlvdSBzaG91bGQgcmVwbGFjZSB0aGlzIHdpdGggd2hhdCB5b3Ugd2FudCB5b3VyXG4gICAgICAgICAgICB1c2VycyB0byBzZWUuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIDwvRG9jdW1lbnQ+XG4gICk7XG59XG5cbi8vIGh0dHBzOi8vcmVtaXgucnVuL2RvY3MvZW4vdjEvYXBpL2NvbnZlbnRpb25zI2NhdGNoYm91bmRhcnlcbmV4cG9ydCBmdW5jdGlvbiBDYXRjaEJvdW5kYXJ5KCkge1xuICBsZXQgY2F1Z2h0ID0gdXNlQ2F0Y2goKTtcblxuICBsZXQgbWVzc2FnZTtcbiAgc3dpdGNoIChjYXVnaHQuc3RhdHVzKSB7XG4gICAgY2FzZSA0MDE6XG4gICAgICBtZXNzYWdlID0gKFxuICAgICAgICA8cD5cbiAgICAgICAgICBPb3BzISBMb29rcyBsaWtlIHlvdSB0cmllZCB0byB2aXNpdCBhIHBhZ2UgdGhhdCB5b3UgZG8gbm90IGhhdmUgYWNjZXNzXG4gICAgICAgICAgdG8uXG4gICAgICAgIDwvcD5cbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDQwNDpcbiAgICAgIG1lc3NhZ2UgPSAoXG4gICAgICAgIDxwPk9vcHMhIExvb2tzIGxpa2UgeW91IHRyaWVkIHRvIHZpc2l0IGEgcGFnZSB0aGF0IGRvZXMgbm90IGV4aXN0LiBcdUQ4M0RcdURFNDg8L3A+XG4gICAgICApO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IEVycm9yKGNhdWdodC5kYXRhIHx8IGNhdWdodC5zdGF0dXNUZXh0KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPERvY3VtZW50IHRpdGxlPXtgJHtjYXVnaHQuc3RhdHVzfSAke2NhdWdodC5zdGF0dXNUZXh0fWB9PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPGgxPlxuICAgICAgICAgIHtjYXVnaHQuc3RhdHVzfToge2NhdWdodC5zdGF0dXNUZXh0fVxuICAgICAgICA8L2gxPlxuICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgPExpbmsgdG89XCIvXCI+UmV0dXJuIGhvbWU8L0xpbms+XG4gICAgICA8L0xheW91dD5cbiAgICA8L0RvY3VtZW50PlxuICApO1xufVxuXG5mdW5jdGlvbiBEb2N1bWVudCh7XG4gIGNoaWxkcmVuLFxuICB0aXRsZVxufToge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xuICB0aXRsZT86IHN0cmluZztcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIHt0aXRsZSA/IDx0aXRsZT57dGl0bGV9PC90aXRsZT4gOiBudWxsfVxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG5cbmZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L21haW4+XG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8cD5TeW50YXhFcnJvcjogVW5leHBlY3RlZCBFT0Y8L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gUmVtaXhMb2dvKCkge1xuICByZXR1cm4gKFxuICAgIDxzdmdcbiAgICAgIHZpZXdCb3g9XCIwIDAgNjU5IDE2NVwiXG4gICAgICB2ZXJzaW9uPVwiMS4xXCJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgeG1sbnNYbGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIlxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwicmVtaXgtcnVuLWxvZ28tdGl0bGVcIlxuICAgICAgcm9sZT1cImltZ1wiXG4gICAgICB3aWR0aD1cIjEwNlwiXG4gICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICA+XG4gICAgICA8dGl0bGUgaWQ9XCJyZW1peC1ydW4tbG9nby10aXRsZVwiPlJlbWl4IExvZ288L3RpdGxlPlxuICAgICAgPHBhdGggZD1cIk0wIDE2MVYxMzZINDUuNTQxNkM1My4xNDg2IDEzNiA1NC44MDAzIDE0MS42MzggNTQuODAwMyAxNDVWMTYxSDBaIE0xMzMuODUgMTI0LjE2QzEzNS4zIDE0Mi43NjIgMTM1LjMgMTUxLjQ4MiAxMzUuMyAxNjFIOTIuMjI4M0M5Mi4yMjgzIDE1OC45MjcgOTIuMjY1MyAxNTcuMDMgOTIuMzAyOCAxNTUuMTA3QzkyLjQxOTUgMTQ5LjEyOCA5Mi41NDExIDE0Mi44OTQgOTEuNTcxNyAxMzAuMzA0QzkwLjI5MDUgMTExLjg3MiA4Mi4zNDczIDEwNy43NzYgNjcuNzQxOSAxMDcuNzc2SDU0LjgwMjFIMFY3NC4yNEg2OS43OTE4Qzg4LjI0MDcgNzQuMjQgOTcuNDY1MSA2OC42MzIgOTcuNDY1MSA1My43ODRDOTcuNDY1MSA0MC43MjggODguMjQwNyAzMi44MTYgNjkuNzkxOCAzMi44MTZIMFYwSDc3LjQ3ODhDMTE5LjI0NSAwIDE0MCAxOS43MTIgMTQwIDUxLjJDMTQwIDc0Ljc1MiAxMjUuMzk1IDkwLjExMiAxMDUuNjY1IDkyLjY3MkMxMjIuMzIgOTYgMTMyLjA1NyAxMDUuNDcyIDEzMy44NSAxMjQuMTZaXCIgLz5cbiAgICAgIDxwYXRoIGQ9XCJNMjI5LjQzIDEyMC41NzZDMjI1LjU5IDEyOS41MzYgMjE4LjQyMiAxMzMuMzc2IDIwNy4xNTggMTMzLjM3NkMxOTQuNjE0IDEzMy4zNzYgMTg0LjM3NCAxMjYuNzIgMTgzLjM1IDExMi42NEgyNjMuNDc4VjEwMS4xMkMyNjMuNDc4IDcwLjE0MzcgMjQzLjI1NCA0NC4wMzE3IDIwNS4xMSA0NC4wMzE3QzE2OS41MjYgNDQuMDMxNyAxNDIuOTAyIDY5Ljg4NzcgMTQyLjkwMiAxMDUuOTg0QzE0Mi45MDIgMTQyLjMzNiAxNjkuMDE0IDE2NC4zNTIgMjA1LjYyMiAxNjQuMzUyQzIzNS44MyAxNjQuMzUyIDI1Ni44MjIgMTQ5Ljc2IDI2Mi43MSAxMjMuNjQ4TDIyOS40MyAxMjAuNTc2Wk0xODMuODYyIDkyLjY3MTdDMTg1LjM5OCA4MS45MTk3IDE5MS4yODYgNzMuNzI3NyAyMDQuNTk4IDczLjcyNzdDMjE2Ljg4NiA3My43Mjc3IDIyMy41NDIgODIuNDMxNyAyMjQuMDU0IDkyLjY3MTdIMTgzLjg2MlpcIiAvPlxuICAgICAgPHBhdGggZD1cIk0zODUuMjU2IDY2LjU1OTdDMzgwLjM5MiA1My4yNDc3IDM2OS44OTYgNDQuMDMxNyAzNDkuNjcyIDQ0LjAzMTdDMzMyLjUyIDQ0LjAzMTcgMzIwLjIzMiA1MS43MTE3IDMxNC4wODggNjQuMjU1N1Y0Ny4xMDM3SDI3Mi42MTZWMTYxLjI4SDMxNC4wODhWMTA1LjIxNkMzMTQuMDg4IDg4LjA2MzggMzE4Ljk1MiA3Ni43OTk3IDMzMi41MiA3Ni43OTk3QzM0NS4wNjQgNzYuNzk5NyAzNDguMTM2IDg0Ljk5MTcgMzQ4LjEzNiAxMDAuNjA4VjE2MS4yOEgzODkuNjA4VjEwNS4yMTZDMzg5LjYwOCA4OC4wNjM4IDM5NC4yMTYgNzYuNzk5NyA0MDguMDQgNzYuNzk5N0M0MjAuNTg0IDc2Ljc5OTcgNDIzLjQgODQuOTkxNyA0MjMuNCAxMDAuNjA4VjE2MS4yOEg0NjQuODcyVjg5LjU5OTdDNDY0Ljg3MiA2NS43OTE3IDQ1NS42NTYgNDQuMDMxNyA0MjQuMTY4IDQ0LjAzMTdDNDA0Ljk2OCA0NC4wMzE3IDM5MS40IDUzLjc1OTcgMzg1LjI1NiA2Ni41NTk3WlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTQ3OC40MzYgNDcuMTA0VjE2MS4yOEg1MTkuOTA4VjQ3LjEwNEg0NzguNDM2Wk00NzguMTggMzYuMzUySDUyMC4xNjRWMEg0NzguMThWMzYuMzUyWlwiIC8+XG4gICAgICA8cGF0aCBkPVwiTTY1NC41NCA0Ny4xMDM1SDYxMS43ODhMNTkyLjMzMiA3NC4yMzk1TDU3My4zODggNDcuMTAzNUg1MjcuNTY0TDU2OC43OCAxMDMuMTY4TDUyMy45OCAxNjEuMjhINTY2LjczMkw1ODkuNTE2IDEzMC4zMDRMNjEyLjMgMTYxLjI4SDY1OC4xMjRMNjEzLjA2OCAxMDEuMzc2TDY1NC41NCA0Ny4xMDM1WlwiIC8+XG4gICAgPC9zdmc+XG4gICk7XG59XG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIGFzIFJlbWl4TGluayB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XG5cbnR5cGUgRm9udFdlaWdodCA9ICd0aGluJyB8ICdyZWd1bGFyJyB8ICdib2xkJztcblxudHlwZSBMaW5rUHJvcHMgPSB7XG4gIHdlaWdodD86IEZvbnRXZWlnaHQ7XG4gIG9taXRVbmRlcmxpbmU/OiBib29sZWFuO1xuICBhbmNob3I/OiBib29sZWFuO1xuICB0YWdzPzogc3RyaW5nW107XG4gIHRvOiBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgaGlnaGxpZ2h0PzogYm9vbGVhbjtcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxudHlwZSBDbGFzc09wdGlvbnMgPSB7XG4gIHdlaWdodDogRm9udFdlaWdodDtcbiAgb21pdFVuZGVybGluZTogYm9vbGVhbjtcbiAgaGlnaGxpZ2h0OiBib29sZWFuO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHdlaWdodENsYXNzZXMgPSB7XG4gIHRoaW46ICdsaW5rLS10aGluJyxcbiAgcmVndWxhcjogJ2xpbmstLXJlZ3VsYXInLFxuICBib2xkOiAnbGluay0tYm9sZCcsXG59XG5cbmNvbnN0IG5vVW5kZXJsaW5lID0gJ25vLXVuZGVybGluZSc7XG5cbmNvbnN0IGdldENsYXNzTmFtZXMgPSAoeyB3ZWlnaHQsIG9taXRVbmRlcmxpbmUsIGNsYXNzTmFtZSwgaGlnaGxpZ2h0IH06IENsYXNzT3B0aW9ucykgPT4ge1xuICBjb25zdCBjbGFzc2VzID0gWydsaW5rJywgd2VpZ2h0Q2xhc3Nlc1t3ZWlnaHRdLCBjbGFzc05hbWUsIGhpZ2hsaWdodCA/ICdoaWdobGlnaHQnIDogbnVsbF07XG4gIGlmIChvbWl0VW5kZXJsaW5lKSBjbGFzc2VzLnB1c2gobm9VbmRlcmxpbmUpO1xuICByZXR1cm4gY2xhc3Nlcy5maWx0ZXIoQm9vbGVhbikuam9pbignICcpO1xufVxuXG5mdW5jdGlvbiBMaW5rKHtcbiAgd2VpZ2h0ID0gJ3RoaW4nLFxuICBvbWl0VW5kZXJsaW5lID0gZmFsc2UsXG4gIGNoaWxkcmVuLFxuICBhbmNob3IgPSBmYWxzZSxcbiAgY2xhc3NOYW1lLFxuICBoaWdobGlnaHQgPSBmYWxzZSxcbiAgdGFncyxcbiAgdG9cbn06IExpbmtQcm9wcyAmIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPEhUTUxBbmNob3JFbGVtZW50Pikge1xuICBjb25zdCByZXNvbHZlZFRhZ3MgPSB0YWdzID8gYFske3RhZ3Muam9pbignLCAnKX1dYCA6ICcnO1xuICBjb25zdCBzaGFyZWRQcm9wcyA9IHtcbiAgICBjbGFzc05hbWU6IGdldENsYXNzTmFtZXMoeyB3ZWlnaHQsIG9taXRVbmRlcmxpbmUsIGNsYXNzTmFtZSwgaGlnaGxpZ2h0IH0pLFxuICAgICdkYXRhLXRhZ3MnOiByZXNvbHZlZFRhZ3MsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2FuY2hvciA/XG4gICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e3RvfSB7Li4uc2hhcmVkUHJvcHN9PntjaGlsZHJlbn08L2E+XG4gICAgICAgIDpcbiAgICAgICAgPFJlbWl4TGluayB0bz17dG99IHsuLi5zaGFyZWRQcm9wc30+e2NoaWxkcmVufTwvUmVtaXhMaW5rPlxuICAgICAgfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgTGlua3NGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBnZXRQb3N0IH0gZnJvbSBcIn4vcG9zdFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJ+L2NvbXBvbmVudHMvTGlua1wiO1xuXG5pbXBvcnQgc3R5bGVzVXJsIGZyb20gXCJ+L3N0eWxlcy9ibG9nL3NoYXJlZC5jc3NcIjtcblxuZXhwb3J0IGxldCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogYCR7ZGF0YS50aXRsZX0gfCBCbG9nIC0gbHVjYXNjb2VsaG8uZGV2YCxcbiAgICBkZXNjcmlwdGlvbjogXCJTb21lIHJhbmRvbSB0aG91Z2h0cyBhbmQgc3R1ZmYgdGhhdCBJIGxlYXJuIGFuZCBzaGFyZS5cIixcbiAgfTtcbn07XG5cbmV4cG9ydCBsZXQgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gIHBhcmFtc1xufSkgPT4ge1xuICBpbnZhcmlhbnQocGFyYW1zLnNsdWcsIFwiZXhwZWN0ZWQgcGFyYW1zLnNsdWdcIik7XG4gIHJldHVybiBnZXRQb3N0KHBhcmFtcy5zbHVnKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3RTbHVnKCkge1xuICBjb25zdCBwb3N0ID0gdXNlTG9hZGVyRGF0YSgpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgPG5hdj5cbiAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICA8TGluayB0bz1cIi9ibG9nXCI+YWxsIHBvc3RzPC9MaW5rPlxuICAgIDwvbmF2PlxuICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxuICAgIDxwIGNsYXNzTmFtZT1cInBvc3QtZGF0ZVwiPlB1Ymxpc2hlZCBpbiB7cG9zdC5kYXRlfTwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY29udGFpbmVyXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwb3N0Lmh0bWwgfX0gLz5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGZzIGZyb20gXCJmcy9wcm9taXNlc1wiO1xuaW1wb3J0IHBhcnNlRnJvbnRNYXR0ZXIgZnJvbSBcImZyb250LW1hdHRlclwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCB7IG1hcmtlZCwgUmVuZGVyZXIgfSBmcm9tIFwibWFya2VkXCI7XG5pbXBvcnQgaGxqcyBmcm9tICdoaWdobGlnaHQuanMnO1xuXG5leHBvcnQgdHlwZSBQb3N0ID0ge1xuICBzbHVnOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFBvc3RNYXJrZG93bkF0dHJpYnV0ZXMgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRhdGU6IHN0cmluZztcbn07XG5cbmNvbnN0IHBvc3RzUGF0aCA9XG4gIHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncG9zdHMnKTtcblxuY29uc3QgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcbnJlbmRlcmVyLmhlYWRpbmcgPSAodGV4dDogc3RyaW5nLCBsZXZlbDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IGVzY2FwZWRUZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teXFx3XSsvZywgJy0nKTtcblxuICByZXR1cm4gYFxuICAgICAgICAgIDxoJHtsZXZlbH0+XG4gICAgICAgICAgICA8YSBuYW1lPVwiJHtlc2NhcGVkVGV4dH1cIiBjbGFzcz1cImFuY2hvciBhbmNob3ItLW5vLWRlY29yYXRpb25cIiBocmVmPVwiIyR7ZXNjYXBlZFRleHR9XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGVhZGVyLWxpbmtcIj4jPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgJHt0ZXh0fVxuICAgICAgICAgIDwvaCR7bGV2ZWx9PmA7XG5cbn07XG5cbnJlbmRlcmVyLmxpbmsgPSAoaHJlZjogc3RyaW5nLCBfOiBzdHJpbmcsIHRleHQ6IHN0cmluZykgPT4gYDxhIGNsYXNzPVwiYW5jaG9yXCIgaHJlZj0ke2hyZWZ9PiR7dGV4dH08L2E+YDtcblxucmVuZGVyZXIuaW1hZ2UgPSAoaHJlZjogc3RyaW5nLCBfLCB0ZXh0OiBzdHJpbmcpID0+IHtcbiAgcmV0dXJuIGA8aW1nIGNsYXNzPVwicG9zdC1pbWFnZVwiIHNyYz0ke2hyZWZ9IGFsdD0ke3RleHR9IC8+YDtcbn1cblxuY29uc3QgaGlnaGxpZ2h0ID0gKGNvZGU6IHN0cmluZywgbGFuZzogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGxhbmd1YWdlID0gaGxqcy5nZXRMYW5ndWFnZShsYW5nKSA/IGxhbmcgOiAncGxhaW50ZXh0JztcbiAgcmV0dXJuIGhsanMuaGlnaGxpZ2h0KGNvZGUsIHsgbGFuZ3VhZ2UgfSkudmFsdWU7XG59XG5cbmNvbnN0IG9wdGlvbnMgPSB7IHJlbmRlcmVyLCBsYW5nUHJlZml4OiAnaGxqcyBsYW5ndWFnZS0nLCBoaWdobGlnaHQgfTtcblxuZnVuY3Rpb24gaXNWYWxpZFBvc3RBdHRyaWJ1dGVzKFxuICBhdHRyaWJ1dGVzOiBhbnlcbik6IGF0dHJpYnV0ZXMgaXMgUG9zdE1hcmtkb3duQXR0cmlidXRlcyB7XG4gIHJldHVybiBhdHRyaWJ1dGVzPy50aXRsZTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3RzKCkge1xuICBjb25zdCBkaXIgPSBhd2FpdCBmcy5yZWFkZGlyKHBvc3RzUGF0aCk7XG4gIHJldHVybiBQcm9taXNlLmFsbChcbiAgICBkaXIubWFwKGFzeW5jIGZpbGVuYW1lID0+IHtcbiAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCBmcy5yZWFkRmlsZShcbiAgICAgICAgcGF0aC5qb2luKHBvc3RzUGF0aCwgZmlsZW5hbWUpXG4gICAgICApO1xuICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSBwYXJzZUZyb250TWF0dGVyKFxuICAgICAgICBmaWxlLnRvU3RyaW5nKClcbiAgICAgICk7XG4gICAgICBpbnZhcmlhbnQoXG4gICAgICAgIGlzVmFsaWRQb3N0QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSxcbiAgICAgICAgYCR7ZmlsZW5hbWV9IGhhcyBiYWQgbWV0YSBkYXRhIWBcbiAgICAgICk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzbHVnOiBmaWxlbmFtZS5yZXBsYWNlKC9cXC5tZCQvLCBcIlwiKSxcbiAgICAgICAgdGl0bGU6IGF0dHJpYnV0ZXMudGl0bGUsXG4gICAgICAgIGRhdGU6IGF0dHJpYnV0ZXMuZGF0ZSxcbiAgICAgIH07XG4gICAgfSlcbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBvc3Qoc2x1Zzogc3RyaW5nKSB7XG4gIGNvbnN0IGZpbGVwYXRoID0gcGF0aC5qb2luKHBvc3RzUGF0aCwgc2x1ZyArIFwiLm1kXCIpO1xuICBjb25zdCBmaWxlID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZXBhdGgpO1xuICBjb25zdCB7IGF0dHJpYnV0ZXMsIGJvZHkgfSA9IHBhcnNlRnJvbnRNYXR0ZXIoZmlsZS50b1N0cmluZygpKTtcbiAgaW52YXJpYW50KFxuICAgIGlzVmFsaWRQb3N0QXR0cmlidXRlcyhhdHRyaWJ1dGVzKSxcbiAgICBgUG9zdCAke2ZpbGVwYXRofSBpcyBtaXNzaW5nIGF0dHJpYnV0ZXNgXG4gICk7XG5cbiAgbWFya2VkLnVzZSh7IHJlbmRlcmVyIH0pO1xuICBjb25zdCBodG1sID0gbWFya2VkLnBhcnNlKGJvZHksIG9wdGlvbnMpO1xuICByZXR1cm4geyBzbHVnLCB0aXRsZTogYXR0cmlidXRlcy50aXRsZSwgZGF0ZTogYXR0cmlidXRlcy5kYXRlLCBodG1sIH07XG59XG5cbiIsICJpbXBvcnQgeyB1c2VMb2FkZXJEYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgZ2V0UG9zdHMgfSBmcm9tIFwifi9wb3N0XCI7XG5pbXBvcnQgdHlwZSB7IFBvc3QgfSBmcm9tIFwifi9wb3N0XCI7XG5pbXBvcnQgc2hhcmVkU3R5bGVzVXJsIGZyb20gXCJ+L3N0eWxlcy9ibG9nL3NoYXJlZC5jc3NcIjtcbmltcG9ydCBzdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL2Jsb2cvcG9zdHMtbGlzdC5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gJ34vY29tcG9uZW50cy9MaW5rJztcblxuZXhwb3J0IGxldCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgdGl0bGU6IFwiQmxvZyAtIGx1Y2FzY29lbGhvLmRldlwiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgcmFuZG9tIHRob3VnaHRzIGFuZCBzdHVmZiB0aGF0IEkgbGVhcm4gYW5kIHNoYXJlLlwiLFxuICB9O1xufTtcblxuZXhwb3J0IGxldCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHNoYXJlZFN0eWxlc1VybCB9LCB7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyID0gKCkgPT4ge1xuICByZXR1cm4gZ2V0UG9zdHMoKTtcbn07XG5cbnR5cGUgUG9zdENhcmRQcm9wcyA9IHtcbiAgc2x1Zzogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICBkYXRlOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIFBvc3RDYXJkKHsgc2x1ZywgdGl0bGUsIGRhdGUgfTogUG9zdENhcmRQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIG9taXRVbmRlcmxpbmUgdG89e3NsdWd9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNhcmRcIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+e2RhdGV9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9MaW5rPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdHMoKSB7XG4gIGNvbnN0IHBvc3RzID0gdXNlTG9hZGVyRGF0YTxQb3N0W10+KCk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxuYXY+XG4gICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICA8L25hdj5cbiAgICAgIDxoMT5Qb3N0czwvaDE+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxuICAgICAgICB7Wy4uLnBvc3RzXS5zb3J0KChhLCBiKSA9PiBhLmRhdGUgPiBiLmRhdGUgPyAtMSA6IDEpLm1hcChwb3N0ID0+IChcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCIga2V5PXtwb3N0LnNsdWd9PlxuICAgICAgICAgICAgPFBvc3RDYXJkXG4gICAgICAgICAgICAgIHNsdWc9e3Bvc3Quc2x1Z31cbiAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgIGRhdGU9e3Bvc3QuZGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgTWV0YUZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSwganNvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIn4vY29tcG9uZW50cy9MaW5rXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwifi9jb21wb25lbnRzL0ljb25cIjtcbmltcG9ydCB0eXBlIHsgSWNvbk5hbWVzIH0gZnJvbSBcIn4vY29tcG9uZW50cy9JY29uXCI7XG5cbnR5cGUgTmF2aWdhdGlvbkxpbmsgPSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHBhdGg6IHN0cmluZztcbiAgYW5jaG9yPzogYm9vbGVhbjtcbiAgdGFncz86IHN0cmluZ1tdO1xuICBpY29uPzogSWNvbk5hbWVzO1xuICBwcm9wcz86IGFueTtcbn1cblxudHlwZSBJbmRleERhdGEgPSB7XG4gIG5hdkxpbmtzOiBOYXZpZ2F0aW9uTGlua1tdO1xuICBwcm9qZWN0czogTmF2aWdhdGlvbkxpbmtbXTtcbn07XG5cbi8vIExvYWRlcnMgcHJvdmlkZSBkYXRhIHRvIGNvbXBvbmVudHMgYW5kIGFyZSBvbmx5IGV2ZXIgY2FsbGVkIG9uIHRoZSBzZXJ2ZXIsIHNvXG4vLyB5b3UgY2FuIGNvbm5lY3QgdG8gYSBkYXRhYmFzZSBvciBydW4gYW55IHNlcnZlciBzaWRlIGNvZGUgeW91IHdhbnQgcmlnaHQgbmV4dFxuLy8gdG8gdGhlIGNvbXBvbmVudCB0aGF0IHJlbmRlcnMgaXQuXG4vLyBodHRwczovL3JlbWl4LnJ1bi9hcGkvY29udmVudGlvbnMjbG9hZGVyXG5leHBvcnQgbGV0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSAoKSA9PiB7XG4gIGxldCBkYXRhOiBJbmRleERhdGEgPSB7XG4gICAgbmF2TGlua3M6IFtcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdHaXRIdWInLFxuICAgICAgICBwYXRoOiAnaHR0cHM6Ly9naXRodWIuY29tL2NvZWxodWNhcycsXG4gICAgICAgIGljb246ICdnaXRodWInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdUd2l0dGVyJyxcbiAgICAgICAgcGF0aDogJ2h0dHBzOi8vdHdpdHRlci5jb20vY29lbGh1Y2FzcycsXG4gICAgICAgIGljb246ICd0d2l0dGVyJyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnQmxvZycsXG4gICAgICAgIHBhdGg6ICcvYmxvZycsXG4gICAgICAgIGljb246ICdibG9nJyxcbiAgICAgICAgYW5jaG9yOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAnTGlua2VkSW4nLFxuICAgICAgICBwYXRoOiAnaHR0cHM6Ly9naXRodWIuY29tL2NvZWxodWNhcycsXG4gICAgICAgIGljb246ICdsaW5rZWRpbicsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ1lvdXR1YmUnLFxuICAgICAgICBwYXRoOiAnaHR0cHM6Ly9naXRodWIuY29tL2NvZWxodWNhcycsXG4gICAgICAgIGljb246ICd5b3V0dWJlJyxcbiAgICAgIH0sXG5cbiAgICBdLFxuICAgIHByb2plY3RzOiBbXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAneW9nYScsXG4gICAgICAgIHBhdGg6ICdodHRwczovL2dpdGh1Yi5jb20vZ3ltcGFzcy95b2dhJyxcbiAgICAgICAgdGFnczogWydKUyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdwaXhlbCcsXG4gICAgICAgIHBhdGg6ICdodHRwczovL2dpdGh1Yi5jb20vY29lbGh1Y2FzL3BpeGVsJyxcbiAgICAgICAgdGFnczogWydKUyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdtaW5pLXN0eWxlZCcsXG4gICAgICAgIHBhdGg6ICdodHRwczovL2dpdGh1Yi5jb20vY29lbGh1Y2FzL21pbmktc3R5bGVkJyxcbiAgICAgICAgdGFnczogWydKUyddLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICdvdXRsaW5lIG1lJyxcbiAgICAgICAgcGF0aDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jb2VsaHVjYXMvb3V0bGluZS1tZScsXG4gICAgICAgIHRhZ3M6IFsnSlMnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAna2luZyBvZiBwYXJ0aWVzJyxcbiAgICAgICAgcGF0aDogJy9rb3AnLFxuICAgICAgICBhbmNob3I6IGZhbHNlLFxuICAgICAgICB0YWdzOiBbJ0dEU2NyaXB0J10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ2hpdGJveCBlZGl0b3InLFxuICAgICAgICBwYXRoOiAnaHR0cHM6Ly9naXRodWIuY29tL2NvZWxodWNhcy9oaXRib3gtZWRpdG9yLycsXG4gICAgICAgIHRhZ3M6IFsnR0RTY3JpcHQnXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAncmdiYSBiYXNlZCBtYXAgZ2VuZXJhdG9yJyxcbiAgICAgICAgcGF0aDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jb2VsaHVjYXMvdW5pdHktcmdiYS1sZXZlbC1nZW5lcmF0b3InLFxuICAgICAgICB0YWdzOiBbJ0MjJ10sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ3NlZSBtb3JlIFx1MjMwNCcsXG4gICAgICAgIHBhdGg6ICdodHRwczovL2dpdGh1Yi5jb20vY29lbGh1Y2FzLycsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgb21pdFVuZGVybGluZTogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgXVxuICB9O1xuXG4gIC8vIGh0dHBzOi8vcmVtaXgucnVuL2FwaS9yZW1peCNqc29uXG4gIHJldHVybiBqc29uKGRhdGEpO1xufTtcblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vYXBpL2NvbnZlbnRpb25zI21ldGFcbmV4cG9ydCBsZXQgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIkx1Y2FzIENvZWxobyAtIGNvZWxodWNhc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIldlbGNvbWUgdG8gbXkgcGxhY2UgOilcIlxuICB9O1xufTtcblxuLy8gaHR0cHM6Ly9yZW1peC5ydW4vZ3VpZGVzL3JvdXRpbmcjaW5kZXgtcm91dGVzXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgbGV0IGRhdGEgPSB1c2VMb2FkZXJEYXRhPEluZGV4RGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgPD5cbiAgICA8c2VjdGlvbj5cbiAgICAgIDxoMT5MdWNhcyBDb2VsaG88L2gxPlxuICAgICAgPGgyPlNvZnR3YXJlIEVuZ2luZWVyIGF0IDxMaW5rIGFuY2hvciBoaWdobGlnaHQgd2VpZ2h0PVwiYm9sZFwiIHRvPVwiaHR0cHM6Ly9neW1wYXNzLmNvbS9cIj5HeW1wYXNzPC9MaW5rPjwvaDI+XG4gICAgICA8cD5JJ3ZlIGJlZW4gd29ya2luZyBvbiA8TGluayBhbmNob3IgaGlnaGxpZ2h0IHdlaWdodD1cInJlZ3VsYXJcIiB0bz1cImh0dHBzOi8vZ2l0aHViLmNvbS9neW1wYXNzL3lvZ2FcIj5Zb2dhPC9MaW5rPiwgR3ltcGFzcycgb3BlbiBzb3VyY2VcbiAgICAgICAgZGVzaWduIHN5c3RlbSxcbiAgICAgICAgYXMgd2VsbCBhcyBzb21lIG90aGVyIERYIGluaXRpYXRpdmVzIGluc2lkZSBvdXIgUGxhdGZvcm0gRW5naW5lZXJpbmcgRXhwZXJpZW5jZSBUZWFtLiBJJ20gaW50ZXJlc3RlZCBpbiBsZWFybmluZ1xuICAgICAgICBob3cgc29tZSBzdHVmZiB3b3JrcyB1bmRlciB0aGUgY292ZXJzIGFuZCBjcmVhdGluZyB0b29scyBmb3Igb3RoZXIgZGV2ZWxvcGVycy5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxiciAvPlxuICAgICAgICBCZWVuIHN0dWR5aW5nIFJ1c3QgbGF0ZWx5IFx1RDgzRVx1REQ4MFxuICAgICAgPC9wPlxuICAgICAgPGhyIC8+XG4gICAgICA8bmF2PlxuXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibWVkaWEtbGlua3NcIj5cbiAgICAgICAge2RhdGEubmF2TGlua3MubWFwKCh7IGFuY2hvciA9IHRydWUsIHBhdGgsIHRpdGxlLCBpY29uIH0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXt0aXRsZX0+XG4gICAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJpY29uLWFuY2hvclwiIGFuY2hvcj17YW5jaG9yfSB0bz17cGF0aH0+XG4gICAgICAgICAgICAgIDxJY29uIGFzPXtpY29ufSAvPlxuICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG5cbiAgICA8L3NlY3Rpb24+XG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvamVjdHMtY29udGFpbmVyXCI+XG4gICAgICA8Yj5Qcm9qZWN0czwvYj5cbiAgICAgIDx1bD5cbiAgICAgICAge2RhdGEucHJvamVjdHMubWFwKCh7IHRpdGxlLCBwYXRoLCBhbmNob3IgPSB0cnVlLCB0YWdzLCBwcm9wcyB9KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17dGl0bGV9PlxuICAgICAgICAgICAgPExpbmsgaGlnaGxpZ2h0IGFuY2hvcj17YW5jaG9yfSB0bz17cGF0aH0gdGFncz17dGFnc30gey4uLnByb3BzfT57dGl0bGV9PC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L3NlY3Rpb24+XG4gIDwvPlxuICApO1xufVxuIiwgImNvbnN0IGljb25zID0ge1xuICBnaXRodWI6IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8dGl0bGU+R2l0aHViIGljb248L3RpdGxlPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTEyIDBjLTYuNjI2IDAtMTIgNS4zNzMtMTIgMTIgMCA1LjMwMiAzLjQzOCA5LjggOC4yMDcgMTEuMzg3LjU5OS4xMTEuNzkzLS4yNjEuNzkzLS41Nzd2LTIuMjM0Yy0zLjMzOC43MjYtNC4wMzMtMS40MTYtNC4wMzMtMS40MTYtLjU0Ni0xLjM4Ny0xLjMzMy0xLjc1Ni0xLjMzMy0xLjc1Ni0xLjA4OS0uNzQ1LjA4My0uNzI5LjA4My0uNzI5IDEuMjA1LjA4NCAxLjgzOSAxLjIzNyAxLjgzOSAxLjIzNyAxLjA3IDEuODM0IDIuODA3IDEuMzA0IDMuNDkyLjk5Ny4xMDctLjc3NS40MTgtMS4zMDUuNzYyLTEuNjA0LTIuNjY1LS4zMDUtNS40NjctMS4zMzQtNS40NjctNS45MzEgMC0xLjMxMS40NjktMi4zODEgMS4yMzYtMy4yMjEtLjEyNC0uMzAzLS41MzUtMS41MjQuMTE3LTMuMTc2IDAgMCAxLjAwOC0uMzIyIDMuMzAxIDEuMjMuOTU3LS4yNjYgMS45ODMtLjM5OSAzLjAwMy0uNDA0IDEuMDIuMDA1IDIuMDQ3LjEzOCAzLjAwNi40MDQgMi4yOTEtMS41NTIgMy4yOTctMS4yMyAzLjI5Ny0xLjIzLjY1MyAxLjY1My4yNDIgMi44NzQuMTE4IDMuMTc2Ljc3Ljg0IDEuMjM1IDEuOTExIDEuMjM1IDMuMjIxIDAgNC42MDktMi44MDcgNS42MjQtNS40NzkgNS45MjEuNDMuMzcyLjgyMyAxLjEwMi44MjMgMi4yMjJ2My4yOTNjMCAuMzE5LjE5Mi42OTQuODAxLjU3NiA0Ljc2NS0xLjU4OSA4LjE5OS02LjA4NiA4LjE5OS0xMS4zODYgMC02LjYyNy01LjM3My0xMi0xMi0xMnpcIiAvPlxuICA8L3N2Zz4sXG4gIGxpbmtlZGluOiA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgPHRpdGxlPkxpbmtlZEluIGljb248L3RpdGxlPlxuICAgIDxwYXRoXG4gICAgICBkPVwiTTE5IDBoLTE0Yy0yLjc2MSAwLTUgMi4yMzktNSA1djE0YzAgMi43NjEgMi4yMzkgNSA1IDVoMTRjMi43NjIgMCA1LTIuMjM5IDUtNXYtMTRjMC0yLjc2MS0yLjIzOC01LTUtNXptLTExIDE5aC0zdi0xMWgzdjExem0tMS41LTEyLjI2OGMtLjk2NiAwLTEuNzUtLjc5LTEuNzUtMS43NjRzLjc4NC0xLjc2NCAxLjc1LTEuNzY0IDEuNzUuNzkgMS43NSAxLjc2NC0uNzgzIDEuNzY0LTEuNzUgMS43NjR6bTEzLjUgMTIuMjY4aC0zdi01LjYwNGMwLTMuMzY4LTQtMy4xMTMtNCAwdjUuNjA0aC0zdi0xMWgzdjEuNzY1YzEuMzk2LTIuNTg2IDctMi43NzcgNyAyLjQ3NnY2Ljc1OXpcIiAvPlxuICA8L3N2Zz4sXG4gIHlvdXR1YmU6IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0xMCA5LjMzM2w1LjMzMyAyLjY2Mi01LjMzMyAyLjY3MnYtNS4zMzR6bTE0LTQuMzMzdjE0YzAgMi43NjEtMi4yMzggNS01IDVoLTE0Yy0yLjc2MSAwLTUtMi4yMzktNS01di0xNGMwLTIuNzYxIDIuMjM5LTUgNS01aDE0YzIuNzYyIDAgNSAyLjIzOSA1IDV6bS00IDdjLS4wMi00LjEyMy0uMzIzLTUuNy0yLjkyMy01Ljg3Ny0yLjQwMy0uMTY0LTcuNzU0LS4xNjMtMTAuMTUzIDAtMi41OTguMTc3LTIuOTA0IDEuNzQ3LTIuOTI0IDUuODc3LjAyIDQuMTIzLjMyMyA1LjcgMi45MjMgNS44NzcgMi4zOTkuMTYzIDcuNzUuMTY0IDEwLjE1MyAwIDIuNTk4LS4xNzcgMi45MDQtMS43NDcgMi45MjQtNS44Nzd6XCIgLz5cbiAgICA8dGl0bGU+WW91dHViZSBpY29uPC90aXRsZT5cbiAgPC9zdmc+LFxuICBibG9nOiA8c3ZnXG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgd2lkdGg9XCIyNFwiXG4gICAgaGVpZ2h0PVwiMjRcIlxuICAgIHZpZXdCb3g9XCIwIDAgNjQgNjRcIlxuICA+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9XCIjMDEwMDAyXCJcbiAgICAgIGQ9XCJNNDkuMzI1IDE3LjU1NGMtLjc4NS0zLjMxLTQuMDk1LTUuNjYzLTcuNDY3LTUuMzgydi0uNjQyYzAtLjU3NS0uMjUxLTEuMTE4LS43MDgtMS41MjctMS40MS0xLjI2Ni00LjYxNC0xLjA2OC01LjkyNS0uOTI3bC0xOS4wNzIgMi4wOC0yLjYwMy0xLjQ2NSAyMS4wNTUtMi4xODdhMS41IDEuNSAwIDEwLS4zMS0yLjk4NEwxMC4wMjMgNy4wNDFjLS4xMjQtLjMyLS4zNDQtLjYtLjY1My0uNzc0bC0uNTY0LS4zMTdMMzAuMzcgMy42MDZhMS41IDEuNSAwIDEwLS4zMjQtMi45ODJMMy40MDcgMy41MmMtLjMzLjAzNi0uNjIuMTgtLjg0Ny4zODhDMS4xNjIgNC40MyAwIDUuOTE1IDAgOC41NjN2MjcuNDVjMCAzLjI5NiAxLjkwMyA2Ljk0NyA0LjMzMSA4LjMxM2wzLjU2NyAyLjAwN2MuMjI5LjEyOC40ODIuMTkyLjczNS4xOTIuMDQgMCAuMDc4LS4wMTMuMTE4LS4wMTYuNzUgMS4yNzEgMS43MDggMi4zMzcgMi43ODMgMi45NDFsMy41NjYgMi4wMDZhMS41MDIgMS41MDIgMCAwMDIuMjM1LTEuMzA4di0yNi41Nmw1LjI5MSAyNS43OTZjLjY0OSAzLjE2NiAzLjIwNyA1LjU1MyA1Ljk0OSA1LjU1My4yMyAwIC40NjEtLjAxNy42OTItLjA1bDMuOTUxLS41NzdjLjAxNi0uMDAyLjAzLS4wMDkuMDQ1LS4wMTIuMDE0LS4wMDIuMDI4LS4wMDEuMDQyLS4wMDRsMTcuMTczLTMuNTU2YTYuMzE1IDYuMzE1IDAgMDA0LjA4NC0yLjgwNCA2LjMxNSA2LjMxNSAwIDAwLjgxMi00Ljg5MWwtNi4wNDktMjUuNDg5ek03LjEzNCA0Mi40NjFsLTEuMzMyLS43NDlDNC4zMSA0MC44NzMgMyAzOC4yMSAzIDM2LjAxM1Y4LjU2M2MwLTEuMDU2LjMyNS0xLjg4My43MzktMS44ODMuMTU3IDAgLjM2Ny4wNy41OTMuMTk3bDIuODAyIDEuNTc1djM0LjAwOXptNy4yMDIgNS4xMjVsLTEuMzMxLS43NDljLTEuNDkzLS44NC0yLjgwMi0zLjUwMy0yLjgwMi01LjY5OXYtMjcuNDVjMC0xLjA1Ni4zMjUtMS44ODMuNzM5LTEuODgzLjE1NyAwIC4zNjguMDY5LjU5Mi4xOTZsMi44MDIgMS41NzZ2MzQuMDA5em0zLTI3LjgwOXYtNS43MzFsMTguMjEzLTEuOTg2YzEuNjI2LS4xNzUgMi43NTktLjA1IDMuMzA5LjA5MXYuMzk4bC0xMy42ODYgMS43ODVjLS4wNDMuMDA2LS4wODMuMDItLjEyNS4wMjktLjAzNC4wMDgtLjA2OC4wMDktLjEwMi4wMThsLTMuODE3IDEuMTEzYy0xLjg5NC41NTQtMy4yNzEgMi4yMTYtMy43OTIgNC4yODN6bTExLjQ5NyAzMi4xNDFjLTEuNDE1LjIwMi0yLjg4Mi0xLjI1Mi0zLjI2OS0zLjEzOGwtNS4zNi0yNi4xMzRjLS4zOTQtMS45MjEuNDE0LTMuODc3IDEuNzY0LTQuMjcxbDIuMjU2LS42NTggNi45ODUgMzMuODU0LTIuMzc2LjM0N3ptMjMuMTk5LTUuNTk1YTMuMzM5IDMuMzM5IDAgMDEtMi4xNjIgMS40NzhsLTE1LjcwMyAzLjI1MUwyNy4xNjIgMTcuMWwxNC43ODUtMS45MjljMS45NTctLjI1NiA0LjAwMyAxLjE1MiA0LjQ1OSAzLjA3N2w2LjA1IDI1LjQ4OWMuMjEzLjkwMi4wNjMgMS44Mi0uNDI0IDIuNTg2elwiXG4gICAgPjwvcGF0aD5cbiAgICA8cGF0aFxuICAgICAgZmlsbD1cIiMwMTAwMDJcIlxuICAgICAgZD1cIk00My45MjkgMTkuMjQyYTEuNDk4IDEuNDk4IDAgMDAtMS43MTItMS4xMDhsLTExLjQ4IDIuMDA2YTEuNDk4IDEuNDk4IDAgMDAtMS4yMTIgMS43NzJsMS41NjEgNy44MDJhMS41IDEuNSAwIDAwMS43MDYgMS4xODdsMTEuOTI2LTEuODk1YTEuNSAxLjUgMCAwMDEuMjE5LTEuODVsLTIuMDA4LTcuOTE0em0tMTAuMTg2IDguNDY5bC0uOTc2LTQuODgxIDguNTk2LTEuNTAyIDEuMjYxIDQuOTczLTguODgxIDEuNDF6XCJcbiAgICA+PC9wYXRoPlxuICA8L3N2Zz4sXG4gIHR3aXR0ZXI6IDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICA8dGl0bGU+VHdpdHRlciBpY29uPC90aXRsZT5cbiAgICA8cGF0aFxuICAgICAgZD1cIk0yNCA0LjU1N2MtLjg4My4zOTItMS44MzIuNjU2LTIuODI4Ljc3NSAxLjAxNy0uNjA5IDEuNzk4LTEuNTc0IDIuMTY1LTIuNzI0LS45NTEuNTY0LTIuMDA1Ljk3NC0zLjEyNyAxLjE5NS0uODk3LS45NTctMi4xNzgtMS41NTUtMy41OTQtMS41NTUtMy4xNzkgMC01LjUxNSAyLjk2Ni00Ljc5NyA2LjA0NS00LjA5MS0uMjA1LTcuNzE5LTIuMTY1LTEwLjE0OC01LjE0NC0xLjI5IDIuMjEzLS42NjkgNS4xMDggMS41MjMgNi41NzQtLjgwNi0uMDI2LTEuNTY2LS4yNDctMi4yMjktLjYxNi0uMDU0IDIuMjgxIDEuNTgxIDQuNDE1IDMuOTQ5IDQuODktLjY5My4xODgtMS40NTIuMjMyLTIuMjI0LjA4NC42MjYgMS45NTYgMi40NDQgMy4zNzkgNC42IDMuNDE5LTIuMDcgMS42MjMtNC42NzggMi4zNDgtNy4yOSAyLjA0IDIuMTc5IDEuMzk3IDQuNzY4IDIuMjEyIDcuNTQ4IDIuMjEyIDkuMTQyIDAgMTQuMzA3LTcuNzIxIDEzLjk5NS0xNC42NDYuOTYyLS42OTUgMS43OTctMS41NjIgMi40NTctMi41NDl6XCIgLz5cbiAgPC9zdmc+XG59XG5cbmV4cG9ydCB0eXBlIEljb25OYW1lcyA9ICdnaXRodWInIHwgJ2xpbmtlZGluJyB8ICd0d2l0dGVyJyB8ICd5b3V0dWJlJyB8ICdibG9nJztcblxudHlwZSBJY29uUHJvcHMgPSB7XG4gIGFzPzogSWNvbk5hbWVzO1xufVxuXG5mdW5jdGlvbiBJY29uKHsgYXMgfTogSWNvblByb3BzKSB7XG4gIGlmICghYXMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IENvbXBvbmVudCA9ICgpID0+IGljb25zW2FzXTtcbiAgcmV0dXJuIDxDb21wb25lbnQgLz47XG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb247XG4iLCAiaW1wb3J0IHsgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBzaGFyZWRTdHlsZXNVcmwgZnJvbSBcIn4vc3R5bGVzL2Jsb2cvc2hhcmVkLmNzc1wiO1xuaW1wb3J0IHN0eWxlc1VybCBmcm9tIFwifi9zdHlsZXMvYmxvZy9wb3N0cy1saXN0LmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSAnfi9jb21wb25lbnRzL0xpbmsnO1xuXG5leHBvcnQgbGV0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogXCJCbG9nIC0gbHVjYXNjb2VsaG8uZGV2XCIsXG4gICAgZGVzY3JpcHRpb246IFwiU29tZSByYW5kb20gdGhvdWdodHMgYW5kIHN0dWZmIHRoYXQgSSBsZWFybiBhbmQgc2hhcmUuXCIsXG4gIH07XG59O1xuXG5leHBvcnQgbGV0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc2hhcmVkU3R5bGVzVXJsIH0sIHsgcmVsOiAnc3R5bGVzaGVldCcsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEtpbmdPZlBhcnRpZXMoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24+XG4gICAgICA8cD5cbiAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgIDwvcD5cbiAgICAgIDxoMT5LaW5nIG9mIFBhcnRpZXM8L2gxPlxuICAgICAgPHVsPjxiPkxpbmtzPC9iPlxuICAgICAgICA8bGk+PExpbmsgYW5jaG9yIHRvPVwiaHR0cHM6Ly9naXRodWIuY29tL2NvZWxodWNhcy9rb3BcIj5PZmZpY2lhbCBSZXBvc2l0b3J5PC9MaW5rPjwvbGk+XG4gICAgICAgIDxsaT48TGluayBhbmNob3IgdG89XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWV0QWFNSGdpOGEwXCI+W1BULUJSXSBBcHJlc2VudGFcdTAwRTdcdTAwRTNvIChZb3V0dWJlKTwvTGluaz48L2xpPlxuICAgICAgICA8bGk+PExpbmsgYW5jaG9yIHRvPVwiaHR0cHM6Ly9naXRodWIuY29tL2NvZWxodWNhcy9tcC1nYW1lLXBjay9hcmNoaXZlL21hc3Rlci56aXBcIj5Eb3dubG9hZCAtIFdpbmRvd3MgXHVEODNEXHVEREQxXHVGRTBGPC9MaW5rPjwvbGk+XG4gICAgICAgIDxsaT48TGluayBhbmNob3IgdG89XCJodHRwczovL2dpdGh1Yi5jb20vY29lbGh1Y2FzL21wLWdhbWUtcGNrL2FyY2hpdmUvbGludXguemlwXCI+RG93bmxvYWQgLSBMaW51eCBcdUQ4M0RcdURDMjc8L0xpbms+PC9saT5cbiAgICAgICAgPGxpPjxMaW5rIGFuY2hvciB0bz1cImh0dHBzOi8vZ2l0aHViLmNvbS9jb2VsaHVjYXMvbXAtZ2FtZS1wY2svYXJjaGl2ZS9tYWNvcy56aXBcIj5Eb3dubG9hZCAtIE1hY09TIFx1RDgzQ1x1REY0RjwvTGluaz48L2xpPlxuICAgICAgPC91bD5cbiAgICAgIDxiciAvPlxuICAgICAgPGgyPkFib3V0PC9oMj5cbiAgICAgIDxwPlxuICAgICAgICBLaW5nIG9mIFBhcnRpZXMgaXMgYW4gb25saW5lIG11bHRpcGxheWVyIGdhbWUgd2hlcmUgb25lIG9mIHRoZSBwbGF5ZXJzLCB0aGUgYmlydGhkYXkgcGVyc29uLCB3aGljaCBpcyB0aGUgPGk+S2luZyBvZiB0aGUgUGFydHk8L2k+LFxuICAgICAgICBtYWQgd2l0aCB0aGUgc3VycHJpc2UgcGFydHksIGhhcyB0byBraWxsIGFsbCB0aGVpciBndWVzdHMgYmVmb3JlIHRoZSBwYXJ0eSBpcyBvdmVyLiBBbmQgdGhlIGd1ZXN0cyBuZWVkIHRvIHN1cnZpdmUgYnkgaGlkaW5nIGFuZFxuICAgICAgICBydW5uaW5nIGF3YXkgZnJvbSB0aGUgc2hvdHMgb2YgdGhlIEtpbmcuXG4gICAgICA8L3A+XG4gICAgICA8cD5UaGUgcHJvamVjdCBpcyBsaWNlbnNlZCBvdmVyIHRoZSA8Yj48TGluayBhbmNob3IgdG89XCJodHRwOi8vd3d3Lnd0ZnBsLm5ldC9hYm91dC9cIj5XVEZQTDwvTGluaz4gbGljZW5zZS48L2I+PC9wPlxuICAgICAgPGgyPkdhbWVwbGF5PC9oMj5cbiAgICAgIDxpZnJhbWUgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9GTVpPazJGNFdfd1wiIGZyYW1lQm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93RnVsbFNjcmVlbj48L2lmcmFtZT5cbiAgICAgIDxwPk1hZGUgYnkgPExpbmsgdG89XCIvXCI+THVjYXMgQ29lbGhvPC9MaW5rPjwvcD5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFT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
