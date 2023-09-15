var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx
var entry_server_react_stream_exports = {};
__export(entry_server_react_stream_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/node/entry.server.react-stream.tsx",
          lineNumber: 91,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  default: () => root_default,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react2 = require("@remix-run/react"), import_ssr = require("@clerk/remix/ssr.server"), import_remix = require("@clerk/remix");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-TOIX3D5T.css";

// public/favicon.svg
var favicon_default = "/build/_assets/favicon-BQSC376H.svg";

// node_modules/react-tooltip/dist/react-tooltip.min.css
var react_tooltip_min_default = "/build/_assets/react-tooltip.min-OFLSRLWV.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: react_tooltip_min_default },
  { rel: "icon", type: "image/svg+xml", href: favicon_default }
], meta = () => [
  {
    charset: "utf-8",
    title: "New Remix App",
    description: "Discover a Convenient Solution for Connecting Families with Incarcerated Individuals. Our web browser application simplifies communication by allowing families to register a local telephone number, providing affordable and frequent contact with prisoners. Explore our services today and experience the ease of staying connected with your loved ones behind bars.",
    viewport: "width=device-width,initial-scale=1"
  }
], loader = (args) => (0, import_ssr.rootAuthLoader)(args), CatchBoundary = (0, import_remix.ClerkCatchBoundary)();
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "meta",
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 45,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
var root_default = (0, import_remix.ClerkApp)(App);

// app/routes/dashboard.account_.billing.tsx
var dashboard_account_billing_exports = {};
__export(dashboard_account_billing_exports, {
  default: () => AddNewNumber
});
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function AddNewNumber() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("main", { className: "py-10 lg:pl-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { children: "Billing" }, void 0, !1, {
    fileName: "app/routes/dashboard.account_.billing.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.account_.billing.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.account_.billing.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.account_.profile.tsx
var dashboard_account_profile_exports = {};
__export(dashboard_account_profile_exports, {
  default: () => AddNewNumber2
});
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function AddNewNumber2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("main", { className: "py-10 lg:pl-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "divide-y divide-white/5", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-gray-500", children: "Personal Information" }, void 0, !1, {
          fileName: "app/routes/dashboard.account_.profile.tsx",
          lineNumber: 11,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-800", children: "Use a permanent address where you can receive mail." }, void 0, !1, {
          fileName: "app/routes/dashboard.account_.profile.tsx",
          lineNumber: 14,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.account_.profile.tsx",
        lineNumber: 10,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { className: "md:col-span-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "col-span-full flex items-center gap-x-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "img",
              {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                alt: "",
                className: "h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 22,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "button",
                {
                  type: "button",
                  className: "rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-gray-500 shadow-sm hover:bg-white/20",
                  children: "Change avatar"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboard.account_.profile.tsx",
                  lineNumber: 28,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-2 text-xs leading-5 text-gray-800", children: "JPG, GIF or PNG. 1MB max." }, void 0, !1, {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 34,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.account_.profile.tsx",
              lineNumber: 27,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.account_.profile.tsx",
            lineNumber: 21,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sm:col-span-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "label",
              {
                htmlFor: "first-name",
                className: "block text-sm font-medium leading-6 text-gray-500",
                children: "First name"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 41,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "input",
              {
                type: "text",
                name: "first-name",
                id: "first-name",
                autoComplete: "given-name",
                className: "block w-full rounded-md border-1 border bg-white/5 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 48,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/dashboard.account_.profile.tsx",
              lineNumber: 47,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.account_.profile.tsx",
            lineNumber: 40,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "sm:col-span-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "label",
              {
                htmlFor: "last-name",
                className: "block text-sm font-medium leading-6 text-gray-500",
                children: "Last name"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 59,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "input",
              {
                type: "text",
                name: "last-name",
                id: "last-name",
                autoComplete: "family-name",
                className: "block w-full rounded-md border-1 border bg-white/5 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 66,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/dashboard.account_.profile.tsx",
              lineNumber: 65,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.account_.profile.tsx",
            lineNumber: 58,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "col-span-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "label",
              {
                htmlFor: "email",
                className: "block text-sm font-medium leading-6 text-gray-500",
                children: "Email address"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 77,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                autoComplete: "email",
                className: "block w-full rounded-md border-1 border bg-white/5 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 84,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/dashboard.account_.profile.tsx",
              lineNumber: 83,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.account_.profile.tsx",
            lineNumber: 76,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "col-span-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "label",
              {
                htmlFor: "username",
                className: "block text-sm font-medium leading-6 text-gray-500",
                children: "Username"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 95,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex rounded-md bg-white/5 ring-1 ring-inset ring-white/10 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "flex select-none items-center pl-3 text-gray-800 sm:text-sm", children: "example.com/" }, void 0, !1, {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 103,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "input",
                {
                  type: "text",
                  name: "username",
                  id: "username",
                  autoComplete: "username",
                  className: "flex-1 border-1 border bg-transparent py-1.5 pl-1 text-gray-500 focus:ring-0 sm:text-sm sm:leading-6",
                  placeholder: "janesmith"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/dashboard.account_.profile.tsx",
                  lineNumber: 106,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/routes/dashboard.account_.profile.tsx",
              lineNumber: 102,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/dashboard.account_.profile.tsx",
              lineNumber: 101,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.account_.profile.tsx",
            lineNumber: 94,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "col-span-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "label",
              {
                htmlFor: "timezone",
                className: "block text-sm font-medium leading-6 text-gray-500",
                children: "Timezone"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 119,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "select",
              {
                id: "timezone",
                name: "timezone",
                className: "block w-full rounded-md border-1 border bg-white/5 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { children: "Pacific Standard Time" }, void 0, !1, {
                    fileName: "app/routes/dashboard.account_.profile.tsx",
                    lineNumber: 131,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { children: "Eastern Standard Time" }, void 0, !1, {
                    fileName: "app/routes/dashboard.account_.profile.tsx",
                    lineNumber: 132,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("option", { children: "Greenwich Mean Time" }, void 0, !1, {
                    fileName: "app/routes/dashboard.account_.profile.tsx",
                    lineNumber: 133,
                    columnNumber: 23
                  }, this)
                ]
              },
              void 0,
              !0,
              {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 126,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/dashboard.account_.profile.tsx",
              lineNumber: 125,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.account_.profile.tsx",
            lineNumber: 118,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.account_.profile.tsx",
          lineNumber: 20,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-8 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
            children: "Save"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard.account_.profile.tsx",
            lineNumber: 140,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/dashboard.account_.profile.tsx",
          lineNumber: 139,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.account_.profile.tsx",
        lineNumber: 19,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.account_.profile.tsx",
      lineNumber: 9,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-gray-500", children: "Change password" }, void 0, !1, {
          fileName: "app/routes/dashboard.account_.profile.tsx",
          lineNumber: 152,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-800", children: "Update your password associated with your account." }, void 0, !1, {
          fileName: "app/routes/dashboard.account_.profile.tsx",
          lineNumber: 155,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.account_.profile.tsx",
        lineNumber: 151,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { className: "md:col-span-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "col-span-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "label",
              {
                htmlFor: "current-password",
                className: "block text-sm font-medium leading-6 text-gray-500",
                children: "Current password"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 163,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "input",
              {
                id: "current-password",
                name: "current_password",
                type: "password",
                autoComplete: "current-password",
                className: "block w-full rounded-md border-1 border bg-white/5 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 170,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/dashboard.account_.profile.tsx",
              lineNumber: 169,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.account_.profile.tsx",
            lineNumber: 162,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "col-span-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "label",
              {
                htmlFor: "new-password",
                className: "block text-sm font-medium leading-6 text-gray-500",
                children: "New password"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 181,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "input",
              {
                id: "new-password",
                name: "new_password",
                type: "password",
                autoComplete: "new-password",
                className: "block w-full rounded-md border-1 border bg-white/5 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 188,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/dashboard.account_.profile.tsx",
              lineNumber: 187,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.account_.profile.tsx",
            lineNumber: 180,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "col-span-full", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "label",
              {
                htmlFor: "confirm-password",
                className: "block text-sm font-medium leading-6 text-gray-500",
                children: "Confirm password"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 199,
                columnNumber: 19
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "input",
              {
                id: "confirm-password",
                name: "confirm_password",
                type: "password",
                autoComplete: "new-password",
                className: "block w-full rounded-md border-1 border bg-white/5 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/dashboard.account_.profile.tsx",
                lineNumber: 206,
                columnNumber: 21
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/dashboard.account_.profile.tsx",
              lineNumber: 205,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/dashboard.account_.profile.tsx",
            lineNumber: 198,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.account_.profile.tsx",
          lineNumber: 161,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-8 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
            children: "Save"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard.account_.profile.tsx",
            lineNumber: 218,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/dashboard.account_.profile.tsx",
          lineNumber: 217,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.account_.profile.tsx",
        lineNumber: 160,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.account_.profile.tsx",
      lineNumber: 150,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-gray-500", children: "Log out other sessions" }, void 0, !1, {
          fileName: "app/routes/dashboard.account_.profile.tsx",
          lineNumber: 230,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-800", children: "Please enter your password to confirm you would like to log out of your other sessions across all of your devices." }, void 0, !1, {
          fileName: "app/routes/dashboard.account_.profile.tsx",
          lineNumber: 233,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.account_.profile.tsx",
        lineNumber: 229,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { className: "md:col-span-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "col-span-full", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "label",
            {
              htmlFor: "logout-password",
              className: "block text-sm font-medium leading-6 text-gray-500",
              children: "Your password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard.account_.profile.tsx",
              lineNumber: 242,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "input",
            {
              id: "logout-password",
              name: "password",
              type: "password",
              autoComplete: "current-password",
              className: "block w-full rounded-md border-1 border bg-white/5 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/dashboard.account_.profile.tsx",
              lineNumber: 249,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/dashboard.account_.profile.tsx",
            lineNumber: 248,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/dashboard.account_.profile.tsx",
          lineNumber: 241,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/dashboard.account_.profile.tsx",
          lineNumber: 240,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-8 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "button",
          {
            type: "submit",
            className: "rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500",
            children: "Log out other sessions"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/dashboard.account_.profile.tsx",
            lineNumber: 261,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/dashboard.account_.profile.tsx",
          lineNumber: 260,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.account_.profile.tsx",
        lineNumber: 239,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.account_.profile.tsx",
      lineNumber: 228,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-base font-semibold leading-7 text-gray-500", children: "Delete account" }, void 0, !1, {
          fileName: "app/routes/dashboard.account_.profile.tsx",
          lineNumber: 273,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "mt-1 text-sm leading-6 text-gray-800", children: "No longer want to use our service? You can delete your account here. This action is not reversible. All information related to this account will be deleted permanently." }, void 0, !1, {
          fileName: "app/routes/dashboard.account_.profile.tsx",
          lineNumber: 276,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/dashboard.account_.profile.tsx",
        lineNumber: 272,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("form", { className: "flex items-start md:col-span-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm hover:bg-red-800",
          children: "Yes, delete my account"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/dashboard.account_.profile.tsx",
          lineNumber: 284,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/dashboard.account_.profile.tsx",
        lineNumber: 283,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard.account_.profile.tsx",
      lineNumber: 271,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.account_.profile.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.account_.profile.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.account_.profile.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/frequently-asked-questions.tsx
var frequently_asked_questions_exports = {};
__export(frequently_asked_questions_exports, {
  default: () => Example
});
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  }
  // More questions...
];
function Example() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "text-2xl font-bold leading-10 tracking-tight text-gray-900", children: "Frequently asked questions" }, void 0, !1, {
      fileName: "app/routes/frequently-asked-questions.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("dl", { className: "mt-10 space-y-8 divide-y divide-gray-900/10", children: faqs.map((faq) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "pt-8 lg:grid lg:grid-cols-12 lg:gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("dt", { className: "text-base font-semibold leading-7 text-gray-900 lg:col-span-5", children: faq.question }, void 0, !1, {
        fileName: "app/routes/frequently-asked-questions.tsx",
        lineNumber: 21,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("dd", { className: "mt-4 lg:col-span-7 lg:mt-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "text-base leading-7 text-gray-600", children: faq.answer }, void 0, !1, {
        fileName: "app/routes/frequently-asked-questions.tsx",
        lineNumber: 25,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/frequently-asked-questions.tsx",
        lineNumber: 24,
        columnNumber: 15
      }, this)
    ] }, faq.id, !0, {
      fileName: "app/routes/frequently-asked-questions.tsx",
      lineNumber: 20,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/frequently-asked-questions.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/frequently-asked-questions.tsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/frequently-asked-questions.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.add-new-number.tsx
var dashboard_add_new_number_exports = {};
__export(dashboard_add_new_number_exports, {
  default: () => AddNewNumber3
});
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function AddNewNumber3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "py-10 lg:pl-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-2xl mb-8", children: "Add New Number" }, void 0, !1, {
      fileName: "app/routes/dashboard.add-new-number.tsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "sm:w-2/4" }, void 0, !1, {
      fileName: "app/routes/dashboard.add-new-number.tsx",
      lineNumber: 9,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.add-new-number.tsx",
    lineNumber: 6,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.add-new-number.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.add-new-number.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.add-new-number.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.manage_numbers.tsx
var dashboard_manage_numbers_exports = {};
__export(dashboard_manage_numbers_exports, {
  default: () => AddNewNumber4,
  loader: () => loader2
});

// app/components/cards/ActiveCard.tsx
var import_solid = require("@heroicons/react/20/solid"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), customer = {
  name: "Jane Cooper",
  numberLocation: "Loddon Correctional Center",
  role: "Active Subscription",
  email: "janecooper@example.com",
  nominatedNumber: "0433 442 444",
  localnumber: "03 223 448",
  imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
}, ActiveCard = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "sm:w-1/3 mr-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
  "div",
  {
    className: "col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-1 flex-col p-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "img",
          {
            className: "mx-auto h-32 w-32 flex-shrink-0 rounded-full",
            src: customer.imageUrl,
            alt: ""
          },
          void 0,
          !1,
          {
            fileName: "app/components/cards/ActiveCard.tsx",
            lineNumber: 21,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h3", { className: "mt-6 text-sm font-medium text-gray-900", children: "Location by Area" }, void 0, !1, {
          fileName: "app/components/cards/ActiveCard.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("dl", { className: "mt-1 flex flex-grow flex-col justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("dt", { className: "sr-only", children: "Number Location" }, void 0, !1, {
            fileName: "app/components/cards/ActiveCard.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("dd", { className: "text-sm text-gray-500", children: customer.numberLocation }, void 0, !1, {
            fileName: "app/components/cards/ActiveCard.tsx",
            lineNumber: 31,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("dt", { className: "sr-only", children: "Role" }, void 0, !1, {
            fileName: "app/components/cards/ActiveCard.tsx",
            lineNumber: 32,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("dd", { className: "mt-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20", children: customer.role }, void 0, !1, {
            fileName: "app/components/cards/ActiveCard.tsx",
            lineNumber: 34,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/cards/ActiveCard.tsx",
            lineNumber: 33,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/cards/ActiveCard.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/cards/ActiveCard.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "-mt-px flex divide-x divide-gray-200", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex w-0 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900", children: customer.nominatedNumber }, void 0, !1, {
          fileName: "app/components/cards/ActiveCard.tsx",
          lineNumber: 43,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/cards/ActiveCard.tsx",
          lineNumber: 42,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex px-2 justify-center items-center", children: [
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_solid.PhoneIcon, { className: "h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0, !1, {
            fileName: "app/components/cards/ActiveCard.tsx",
            lineNumber: 49,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/cards/ActiveCard.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "-ml-px flex w-0 flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900", children: customer.localnumber }, void 0, !1, {
          fileName: "app/components/cards/ActiveCard.tsx",
          lineNumber: 52,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/cards/ActiveCard.tsx",
          lineNumber: 51,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/cards/ActiveCard.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/cards/ActiveCard.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this)
    ]
  },
  customer.email,
  !0,
  {
    fileName: "app/components/cards/ActiveCard.tsx",
    lineNumber: 16,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/components/cards/ActiveCard.tsx",
  lineNumber: 15,
  columnNumber: 5
}, this), ActiveCard_default = ActiveCard;

// app/components/emptystates/AddNumber.tsx
var import_react3 = require("@remix-run/react"), import_outline = require("@heroicons/react/24/outline"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Example2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react3.Link, { to: "/dashboard/add-new-number", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "sm:w-1/3 opacity-60", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    "button",
    {
      type: "button",
      className: "relative block w-full h-96 rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          import_outline.PlusIcon,
          {
            className: "h-16 mx-auto w-16 text-gray-400",
            "aria-hidden": "true"
          },
          void 0,
          !1,
          {
            fileName: "app/components/emptystates/AddNumber.tsx",
            lineNumber: 13,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("span", { className: "mt-2 block text-xl font-semibold text-gray-700", children: "Buy Local Number" }, void 0, !1, {
          fileName: "app/components/emptystates/AddNumber.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/emptystates/AddNumber.tsx",
      lineNumber: 9,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/emptystates/AddNumber.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/emptystates/AddNumber.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/emptystates/AddNumber.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.manage_numbers.tsx
var import_node2 = require("@remix-run/node"), import_react4 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader2 = () => {
  let user = "ACTIVE";
  if (user === void 0)
    return (0, import_node2.json)({
      user_status: void 0
    });
  if (user === "ACTIVE")
    return (0, import_node2.json)({
      user_status: "ACTIVE"
    });
  if (user === "PAUSED")
    return (0, import_node2.json)({
      user_status: "PAUSED"
    });
  if (user === "CANCELLED")
    return (0, import_node2.json)({
      user_status: "CANCELLED"
    });
};
function AddNewNumber4() {
  let { user_status } = (0, import_react4.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { className: "py-10 lg:pl-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: user_status === void 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Example2, {}, void 0, !1, {
    fileName: "app/routes/dashboard.manage_numbers.tsx",
    lineNumber: 48,
    columnNumber: 13
  }, this) : user_status === "ACTIVE" ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ActiveCard_default, {}, void 0, !1, {
    fileName: "app/routes/dashboard.manage_numbers.tsx",
    lineNumber: 50,
    columnNumber: 13
  }, this) : user_status === "PAUSED" ? "DISPLAY PAUSED" : user_status === "CANCELLED" && "DISPLAY CANCELLED" }, void 0, !1, {
    fileName: "app/routes/dashboard.manage_numbers.tsx",
    lineNumber: 45,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.manage_numbers.tsx",
    lineNumber: 43,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.manage_numbers.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}

// app/routes/onboard.create-account.$.tsx
var onboard_create_account_exports = {};
__export(onboard_create_account_exports, {
  default: () => AccountRegister,
  meta: () => meta2
});
var import_remix2 = require("@clerk/remix"), import_framer_motion = require("framer-motion"), import_react5 = require("@remix-run/react"), import_react_tooltip2 = require("react-tooltip"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function meta2() {
  return [
    { title: "Home - Convo Local Numbers" },
    { description: "Connecting Prisoners with Families" }
  ];
}
function AccountRegister() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    import_framer_motion.motion.div,
    {
      initial: { opacity: 0, x: "30px" },
      animate: { opacity: 1, x: "0px" },
      transition: { duration: 1 },
      className: "relative  isolate flex flex-col items-center ",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          import_react_tooltip2.Tooltip,
          {
            anchorSelect: ".tooltip-step-1",
            place: "top",
            className: "bg-white",
            isOpen: !0,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "font-semibold sm:text-lg text-center", children: [
              "STEP 3:",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("span", { className: "font-light", children: "Create an account or use social login" }, void 0, !1, {
                fileName: "app/routes/onboard.create-account.$.tsx",
                lineNumber: 29,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/onboard.create-account.$.tsx",
              lineNumber: 27,
              columnNumber: 11
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/onboard.create-account.$.tsx",
            lineNumber: 22,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          "img",
          {
            src: "https://connnvo.vercel.app/Step1.png",
            alt: "man",
            className: "bg-white  h-32 sm:h-48 border-0 tooltip-step-1",
            "data-tooltip-html": ""
          },
          void 0,
          !1,
          {
            fileName: "app/routes/onboard.create-account.$.tsx",
            lineNumber: 34,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_react5.Form, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          import_remix2.SignUp,
          {
            appearance: {
              elements: {
                main: "mx-6 -mb-4",
                card: "shadow-none  border p-0",
                logoBox: "hidden",
                header: "hidden",
                formFieldInput: "h-12 rounded-full text-gray-800 pl-8 text-lg sm:text-2xl",
                emailAddressField: "Email",
                formButtonPrimary: "h-12 rounded-full btn",
                footer: "hidden",
                formFieldHintText: "hidden"
              }
            },
            redirectUrl: "/onboard/select-option",
            path: "/onboard/create-account",
            routing: "hash"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/onboard.create-account.$.tsx",
            lineNumber: 42,
            columnNumber: 11
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/onboard.create-account.$.tsx",
          lineNumber: 41,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/onboard.create-account.$.tsx",
      lineNumber: 17,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/onboard.create-account.$.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.account_.plan.tsx
var dashboard_account_plan_exports = {};
__export(dashboard_account_plan_exports, {
  default: () => AddNewNumber5
});
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function AddNewNumber5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { className: "py-10 lg:pl-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "Plan" }, void 0, !1, {
    fileName: "app/routes/dashboard.account_.plan.tsx",
    lineNumber: 6,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.account_.plan.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.account_.plan.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/onboard.select-location.tsx
var onboard_select_location_exports = {};
__export(onboard_select_location_exports, {
  action: () => action,
  default: () => ChooseLocation,
  meta: () => meta4
});
var import_react11 = require("react"), import_framer_motion5 = require("framer-motion");

// app/routes/onboard.tsx
var onboard_exports = {};
__export(onboard_exports, {
  default: () => Example4,
  meta: () => meta3,
  useOnboardData: () => useOnboardData
});
var import_react8 = require("@remix-run/react"), import_react9 = require("react");

// app/components/progressbars/progressbar.tsx
var import_framer_motion2 = require("framer-motion"), import_outline2 = require("@heroicons/react/24/outline"), import_react6 = require("react"), import_lottie_react = __toESM(require("lottie-react"));

// public/bubbles.json
var bubbles_default = {
  nm: "PB_explode - EXPORT",
  ddd: 0,
  h: 230,
  w: 225,
  meta: { g: "@lottiefiles/toolkit-js 0.26.1" },
  layers: [
    {
      ty: 4,
      nm: "Shape Layer 1",
      sr: 1,
      st: -156.102942742537,
      op: 7436.81175677115,
      ip: -56,
      hd: !1,
      ddd: 0,
      bm: 0,
      hasMask: !1,
      ao: 0,
      ks: {
        a: { a: 0, k: [0, 0, 0], ix: 1 },
        s: {
          a: 1,
          k: [
            {
              o: { x: 0.203, y: 0.608 },
              i: { x: 0.473, y: 1 },
              s: [32, 32, 100],
              t: -0.999
            },
            { s: [183, 183, 100], t: 34.0005719661713 }
          ],
          ix: 6
        },
        sk: { a: 0, k: 0 },
        p: { a: 0, k: [116.5, 108, 0], ix: 2 },
        r: { a: 0, k: 0, ix: 10 },
        sa: { a: 0, k: 0 },
        o: {
          a: 1,
          k: [
            {
              o: { x: 0.025, y: 0.762 },
              i: { x: 0.667, y: 1 },
              s: [0],
              t: -0.999
            },
            {
              o: { x: 1, y: 0 },
              i: { x: 0.833, y: 1 },
              s: [50],
              t: 22.805
            },
            { s: [0], t: 56.8814322574633 }
          ],
          ix: 11
        }
      },
      ef: [],
      shapes: [
        {
          ty: "el",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Shape - Ellipse",
          nm: "Ellipse Path 1",
          d: 1,
          p: { a: 0, k: [0, 0], ix: 3 },
          s: { a: 0, k: [100, 100], ix: 2 }
        },
        {
          ty: "st",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Graphic - Stroke",
          nm: "Stroke 1",
          lc: 1,
          lj: 1,
          ml: 4,
          o: { a: 0, k: 100, ix: 4 },
          w: {
            a: 1,
            k: [
              {
                o: { x: 0.09, y: 0.554 },
                i: { x: 0.667, y: 1 },
                s: [65],
                t: -0.999
              },
              { s: [0], t: 34.0005719661713 }
            ],
            ix: 5
          },
          c: { a: 0, k: [0, 0, 0], ix: 3 }
        }
      ],
      ind: 1
    },
    {
      ty: 0,
      nm: "FAIRY DUST V4",
      sr: 1,
      st: -8.53285293386816,
      op: 241.467147066132,
      ip: -0.01345355152462,
      hd: !1,
      ddd: 0,
      bm: 0,
      hasMask: !1,
      ao: 0,
      ks: {
        a: { a: 0, k: [414, 736, 0], ix: 1 },
        s: { a: 0, k: [135, 135, 100], ix: 6 },
        sk: { a: 0, k: 0 },
        p: { a: 0, k: [469.5, 113, 0], ix: 2 },
        r: { a: 0, k: 0, ix: 10 },
        sa: { a: 0, k: 0 },
        o: { a: 0, k: 100, ix: 11 }
      },
      ef: [],
      w: 828,
      h: 1472,
      refId: "comp_0",
      ind: 2
    },
    {
      ty: 0,
      nm: "FAIRY DUST V3",
      sr: 1,
      st: -0.01345355152462,
      op: 249.986546448475,
      ip: 10.6357956764048,
      hd: !1,
      ddd: 0,
      bm: 0,
      hasMask: !1,
      ao: 0,
      ks: {
        a: { a: 0, k: [188, 716, 0], ix: 1 },
        s: { a: 0, k: [143, 143, 100], ix: 6 },
        sk: { a: 0, k: 0 },
        p: { a: 0, k: [101.5, 132, 0], ix: 2 },
        r: { a: 0, k: 154, ix: 10 },
        sa: { a: 0, k: 0 },
        o: { a: 0, k: 100, ix: 11 }
      },
      ef: [],
      w: 828,
      h: 1472,
      refId: "comp_1",
      ind: 3
    },
    {
      ty: 0,
      nm: "FAIRY DUST V2",
      sr: 1,
      st: -0.01345355152462,
      op: 249.986546448475,
      ip: -0.01345355152462,
      hd: !1,
      ddd: 0,
      bm: 0,
      hasMask: !1,
      ao: 0,
      ks: {
        a: { a: 0, k: [414, 736, 0], ix: 1 },
        s: { a: 0, k: [140, 140, 100], ix: 6 },
        sk: { a: 0, k: 0 },
        p: { a: 0, k: [478.5, 135, 0], ix: 2 },
        r: { a: 0, k: 0, ix: 10 },
        sa: { a: 0, k: 0 },
        o: { a: 0, k: 61, ix: 11 }
      },
      ef: [],
      w: 828,
      h: 1472,
      refId: "comp_2",
      ind: 4
    }
  ],
  v: "5.6.4",
  fr: 60,
  op: 90,
  ip: 0,
  assets: [
    {
      nm: "",
      id: "comp_0",
      layers: [
        {
          ty: 4,
          nm: "Shape Layer 5",
          sr: 1,
          st: 0,
          op: 250,
          ip: 0,
          hd: !1,
          ddd: 0,
          bm: 0,
          hasMask: !1,
          ao: 0,
          ks: {
            a: { a: 0, k: [0, 0, 0], ix: 1 },
            s: {
              a: 1,
              k: [
                {
                  o: { x: 0.333, y: 0 },
                  i: { x: 0.833, y: 1 },
                  s: [21, 21, 100],
                  t: 5
                },
                {
                  o: { x: 0.167, y: 0 },
                  i: { x: 0.833, y: 1 },
                  s: [8, 8, 100],
                  t: 12
                },
                {
                  o: { x: 0.167, y: 0 },
                  i: { x: 0.833, y: 1 },
                  s: [17, 17, 100],
                  t: 19
                },
                {
                  o: { x: 0.167, y: 0 },
                  i: { x: 0.583, y: 1.35 },
                  s: [5, 5, 100],
                  t: 26
                },
                {
                  o: { x: 0.417, y: 0.318 },
                  i: { x: 0.833, y: 1 },
                  s: [10, 10, 100],
                  t: 33
                },
                { s: [-1, -1, 100], t: 47 }
              ],
              ix: 6
            },
            sk: { a: 0, k: 0 },
            p: {
              s: !0,
              x: {
                a: 1,
                k: [
                  {
                    o: { x: 0.646, y: 0.63 },
                    i: { x: 0.792, y: 0.778 },
                    s: [133],
                    t: 5
                  },
                  {
                    o: { x: 0.33, y: 0.392 },
                    i: { x: 0.772, y: 1 },
                    s: [115.234],
                    t: 15
                  },
                  { s: [77], t: 39 }
                ],
                ix: 3
              },
              y: {
                a: 1,
                k: [
                  {
                    o: { x: 0.027, y: 0.726 },
                    i: { x: 0.661, y: 0.873 },
                    s: [712],
                    t: 5
                  },
                  { s: [797], t: 39 }
                ],
                ix: 4
              },
              z: { a: 0, k: 0 }
            },
            r: { a: 0, k: 0, ix: 10 },
            sa: { a: 0, k: 0 },
            o: {
              a: 1,
              k: [
                {
                  o: { x: 0.333, y: 0 },
                  i: { x: 0.667, y: 0.803 },
                  s: [100],
                  t: 5
                },
                {
                  o: { x: 0.333, y: 1.014 },
                  i: { x: 0.667, y: -2.059 },
                  s: [80.686],
                  t: 12
                },
                {
                  o: { x: 0.333, y: 0.405 },
                  i: { x: 0.667, y: 0.501 },
                  s: [76.941],
                  t: 19
                },
                {
                  o: { x: 0.333, y: -2.136 },
                  i: { x: 0.667, y: 2.615 },
                  s: [48.653],
                  t: 26
                },
                {
                  o: { x: 0.333, y: 0.386 },
                  i: { x: 0.667, y: 1 },
                  s: [55.258],
                  t: 33
                },
                { s: [0], t: 47 }
              ],
              ix: 11
            }
          },
          ef: [],
          shapes: [
            {
              ty: "el",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Ellipse",
              nm: "Ellipse Path 1",
              d: 1,
              p: { a: 0, k: [0, 0], ix: 3 },
              s: { a: 0, k: [100, 100], ix: 2 }
            },
            {
              ty: "fl",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Graphic - Fill",
              nm: "Fill 1",
              c: { a: 0, k: [0, 0, 0], ix: 4 },
              r: 1,
              o: { a: 0, k: 100, ix: 5 }
            }
          ],
          ind: 1
        }
      ]
    },
    {
      nm: "",
      id: "comp_1",
      layers: [
        {
          ty: 4,
          nm: "Shape Layer 4",
          sr: 1,
          st: 0,
          op: 250,
          ip: 0,
          hd: !1,
          ddd: 0,
          bm: 0,
          hasMask: !1,
          ao: 0,
          ks: {
            a: { a: 0, k: [0, 0, 0], ix: 1 },
            s: {
              a: 1,
              k: [
                {
                  o: { x: 0.333, y: 0 },
                  i: { x: 0.833, y: 1 },
                  s: [30, 30, 100],
                  t: 9
                },
                {
                  o: { x: 0.167, y: 0 },
                  i: { x: 0.833, y: 1 },
                  s: [17, 17, 100],
                  t: 16
                },
                {
                  o: { x: 0.167, y: 0 },
                  i: { x: 0.833, y: 1 },
                  s: [26, 26, 100],
                  t: 22
                },
                {
                  o: { x: 0.167, y: 0 },
                  i: { x: 0.583, y: 1.3 },
                  s: [14, 14, 100],
                  t: 27
                },
                {
                  o: { x: 0.417, y: 0.318 },
                  i: { x: 0.833, y: 1 },
                  s: [19, 19, 100],
                  t: 33
                },
                { s: [8, 8, 100], t: 47 }
              ],
              ix: 6
            },
            sk: { a: 0, k: 0 },
            p: {
              s: !0,
              x: {
                a: 1,
                k: [
                  {
                    o: { x: 0.31, y: 2.238 },
                    i: { x: 0.814, y: 1 },
                    s: [170],
                    t: 9
                  },
                  { s: [154], t: 39 }
                ],
                ix: 3
              },
              y: {
                a: 1,
                k: [
                  {
                    o: { x: 0.027, y: 0.955 },
                    i: { x: 0.661, y: 0.833 },
                    s: [712],
                    t: 9
                  },
                  { s: [769], t: 39 }
                ],
                ix: 4
              },
              z: { a: 0, k: 0 }
            },
            r: { a: 0, k: 0, ix: 10 },
            sa: { a: 0, k: 0 },
            o: {
              a: 1,
              k: [
                {
                  o: { x: 0.333, y: 0 },
                  i: { x: 0.667, y: 0.803 },
                  s: [100],
                  t: 9
                },
                {
                  o: { x: 0.333, y: 0.869 },
                  i: { x: 0.667, y: -1.622 },
                  s: [80.686],
                  t: 16
                },
                {
                  o: { x: 0.333, y: 0.289 },
                  i: { x: 0.667, y: 0.644 },
                  s: [76.941],
                  t: 22
                },
                {
                  o: { x: 0.333, y: -1.831 },
                  i: { x: 0.667, y: 2.384 },
                  s: [48.653],
                  t: 27
                },
                {
                  o: { x: 0.333, y: 0.386 },
                  i: { x: 0.667, y: 1 },
                  s: [55.258],
                  t: 33
                },
                { s: [0], t: 47 }
              ],
              ix: 11
            }
          },
          ef: [],
          shapes: [
            {
              ty: "el",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Ellipse",
              nm: "Ellipse Path 1",
              d: 1,
              p: { a: 0, k: [0, 0], ix: 3 },
              s: { a: 0, k: [100, 100], ix: 2 }
            },
            {
              ty: "fl",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Graphic - Fill",
              nm: "Fill 1",
              c: { a: 0, k: [0, 0, 0], ix: 4 },
              r: 1,
              o: { a: 0, k: 100, ix: 5 }
            }
          ],
          ind: 1
        }
      ]
    },
    {
      nm: "",
      id: "comp_2",
      layers: [
        {
          ty: 4,
          nm: "Shape Layer 3",
          sr: 1,
          st: 0,
          op: 250,
          ip: 0,
          hd: !1,
          ddd: 0,
          bm: 0,
          hasMask: !1,
          ao: 0,
          ks: {
            a: { a: 0, k: [0, 0, 0], ix: 1 },
            s: {
              a: 1,
              k: [
                {
                  o: { x: 0.333, y: 0 },
                  i: { x: 0.833, y: 1 },
                  s: [38, 38, 100],
                  t: 0
                },
                {
                  o: { x: 0.167, y: 0 },
                  i: { x: 0.833, y: 1 },
                  s: [25, 25, 100],
                  t: 7
                },
                {
                  o: { x: 0.167, y: 0 },
                  i: { x: 0.833, y: 1 },
                  s: [34, 34, 100],
                  t: 13
                },
                {
                  o: { x: 0.167, y: 0 },
                  i: { x: 0.583, y: 1.3 },
                  s: [22, 22, 100],
                  t: 18
                },
                {
                  o: { x: 0.417, y: 0.318 },
                  i: { x: 0.833, y: 1 },
                  s: [27, 27, 100],
                  t: 24
                },
                { s: [16, 16, 100], t: 38 }
              ],
              ix: 6
            },
            sk: { a: 0, k: 0 },
            p: {
              s: !0,
              x: {
                a: 1,
                k: [
                  {
                    o: { x: 0.584, y: 0 },
                    i: { x: 0.98, y: 0.833 },
                    s: [139],
                    t: 0
                  },
                  { s: [129], t: 30 }
                ],
                ix: 3
              },
              y: {
                a: 1,
                k: [
                  {
                    o: { x: 0.049, y: 0.486 },
                    i: { x: 0.455, y: 0.916 },
                    s: [712],
                    t: 0
                  },
                  { s: [779], t: 30 }
                ],
                ix: 4
              },
              z: { a: 0, k: 0 }
            },
            r: { a: 0, k: 0, ix: 10 },
            sa: { a: 0, k: 0 },
            o: {
              a: 1,
              k: [
                {
                  o: { x: 0.333, y: 0 },
                  i: { x: 0.667, y: 0.803 },
                  s: [100],
                  t: 0
                },
                {
                  o: { x: 0.333, y: 0.869 },
                  i: { x: 0.667, y: -1.622 },
                  s: [80.686],
                  t: 7
                },
                {
                  o: { x: 0.333, y: 0.289 },
                  i: { x: 0.667, y: 0.644 },
                  s: [76.941],
                  t: 13
                },
                {
                  o: { x: 0.333, y: -1.831 },
                  i: { x: 0.667, y: 2.384 },
                  s: [48.653],
                  t: 18
                },
                {
                  o: { x: 0.333, y: 0.386 },
                  i: { x: 0.667, y: 1 },
                  s: [55.258],
                  t: 24
                },
                { s: [0], t: 38 }
              ],
              ix: 11
            }
          },
          ef: [],
          shapes: [
            {
              ty: "el",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Ellipse",
              nm: "Ellipse Path 1",
              d: 1,
              p: { a: 0, k: [0, 0], ix: 3 },
              s: { a: 0, k: [100, 100], ix: 2 }
            },
            {
              ty: "fl",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Graphic - Fill",
              nm: "Fill 1",
              c: { a: 0, k: [0.0784, 0.0157, 0.0157], ix: 4 },
              r: 1,
              o: { a: 0, k: 100, ix: 5 }
            }
          ],
          ind: 1
        }
      ]
    }
  ]
};

// app/components/progressbars/progressbar.tsx
var import_react7 = require("react"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Example3({ completed, total }) {
  let [play, setPlay] = (0, import_react6.useState)(!1);
  return (0, import_react7.useEffect)(() => {
    completed > 0 && (setTimeout(() => {
      setPlay(!0);
    }, 200), setTimeout(() => {
      setPlay(!1);
    }, 1200));
  }, [completed]), /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "sm:mt-12 container px-6 mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-8", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "overflow-hidden flex rounded-full bg-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_framer_motion2.motion.div, { initial: { width: `${0 / total * 100}%` }, animate: { width: `${completed / total * 100}%` }, transition: { type: "spring", damping: 15 }, className: classNames(completed ? "bg-gray-900" : "", "h-2 py-2 rounded-full flex  bg-gray-200"), children: [
      completed > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mx-3 rounded w-full mb-1 relative bottom-1 py-1 bg-gray-800 " }, void 0, !1, {
        fileName: "app/components/progressbars/progressbar.tsx",
        lineNumber: 31,
        columnNumber: 31
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: classNames(play ? "flex items-end justify-end w-full" : "hidden", ""), children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_lottie_react.default, { animationData: bubbles_default, loop: !!play, className: "z-60 absolute", style: { height: "55px" } }, void 0, !1, {
        fileName: "app/components/progressbars/progressbar.tsx",
        lineNumber: 33,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/progressbars/progressbar.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/progressbars/progressbar.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/progressbars/progressbar.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "mt-6 hidden  sm:flex justify-between text-sm font-medium text-gray-300 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_framer_motion2.motion.div, { animate: { color: completed >= 1 ? "rgb(22 101 52)" : "#cccccc" }, className: "text-gray-300 flex items-center", children: [
        completed >= 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_outline2.CheckBadgeIcon, { className: "h-7 pr-1" }, void 0, !1, {
          fileName: "app/components/progressbars/progressbar.tsx",
          lineNumber: 39,
          columnNumber: 31
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_outline2.XCircleIcon, { className: "h-7 pr-1" }, void 0, !1, {
          fileName: "app/components/progressbars/progressbar.tsx",
          lineNumber: 39,
          columnNumber: 73
        }, this),
        " Choose Location"
      ] }, void 0, !0, {
        fileName: "app/components/progressbars/progressbar.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_framer_motion2.motion.div, { animate: { color: completed >= 2 ? "rgb(22 101 52)" : "#cccccc" }, className: "text-gray-300 flex items-center", children: [
        completed >= 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_outline2.CheckBadgeIcon, { className: "h-7 pr-1" }, void 0, !1, {
          fileName: "app/components/progressbars/progressbar.tsx",
          lineNumber: 42,
          columnNumber: 31
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_outline2.XCircleIcon, { className: "h-7 pr-1" }, void 0, !1, {
          fileName: "app/components/progressbars/progressbar.tsx",
          lineNumber: 42,
          columnNumber: 73
        }, this),
        " Your Number"
      ] }, void 0, !0, {
        fileName: "app/components/progressbars/progressbar.tsx",
        lineNumber: 41,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_framer_motion2.motion.div, { animate: { color: completed >= 3 ? "rgb(22 101 52)" : "#cccccc" }, className: "text-gray-300 flex items-center", children: [
        completed >= 3 ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_outline2.CheckBadgeIcon, { className: "h-7 pr-1" }, void 0, !1, {
          fileName: "app/components/progressbars/progressbar.tsx",
          lineNumber: 45,
          columnNumber: 31
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_outline2.XCircleIcon, { className: "h-7 pr-1" }, void 0, !1, {
          fileName: "app/components/progressbars/progressbar.tsx",
          lineNumber: 45,
          columnNumber: 73
        }, this),
        " Account Setup"
      ] }, void 0, !0, {
        fileName: "app/components/progressbars/progressbar.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_framer_motion2.motion.div, { animate: { color: completed >= 4 ? "rgb(22 101 52)" : "#cccccc" }, className: "text-gray-300 flex items-center", children: [
        completed >= 4 ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_outline2.CheckBadgeIcon, { className: "h-7 pr-1" }, void 0, !1, {
          fileName: "app/components/progressbars/progressbar.tsx",
          lineNumber: 48,
          columnNumber: 31
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_outline2.XCircleIcon, { className: "h-7 pr-1" }, void 0, !1, {
          fileName: "app/components/progressbars/progressbar.tsx",
          lineNumber: 48,
          columnNumber: 73
        }, this),
        " Complete Payment"
      ] }, void 0, !0, {
        fileName: "app/components/progressbars/progressbar.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/progressbars/progressbar.tsx",
      lineNumber: 37,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/progressbars/progressbar.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/progressbars/progressbar.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/onboard.tsx
var import_framer_motion3 = require("framer-motion"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function meta3() {
  return [
    { title: "Home - Convo Local Numbers" },
    { description: "Connecting Prisoners with Families" }
  ];
}
function useOnboardData() {
  return (0, import_react8.useOutletContext)();
}
function getDefaultOnboardData() {
  return {
    selectedPrison: null,
    prefix: null,
    prisonId: null,
    forwardingNumber: null,
    localNumber: null,
    email: null,
    name: null,
    progressBar: {
      completed: 0,
      total: 4
    }
  };
}
function Example4() {
  let [onboardData, setOnboardData] = (0, import_react9.useState)(() => {
    if (typeof localStorage < "u") {
      let storedData = localStorage.getItem("onboardData");
      return storedData ? JSON.parse(storedData) : getDefaultOnboardData();
    } else
      return getDefaultOnboardData();
  });
  (0, import_react9.useEffect)(() => {
    typeof localStorage < "u" && (localStorage.setItem(
      "onboardData",
      JSON.stringify(onboardData)
    ), console.log("item is set", localStorage.getItem("onboardData")));
  }, [onboardData]);
  let location = (0, import_react8.useLocation)(), isOnMainScreen = location.pathname === "/onboard/select-location";
  return console.log("pathname", location.pathname), (0, import_react9.useEffect)(() => {
    isOnMainScreen && (() => {
      typeof localStorage < "u" && (localStorage.removeItem("onboardData"), console.log("localStorage cleared"), setOnboardData(getDefaultOnboardData()));
    })();
  }, [isOnMainScreen]), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "h-screen", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      import_framer_motion3.motion.div,
      {
        initial: { opacity: 0, x: "30px" },
        animate: { opacity: 1, x: "0px" },
        transition: { duration: 1 },
        className: "bg-white max-w-3xl mx-auto",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
          Example3,
          {
            completed: onboardData.progressBar.completed,
            total: onboardData.progressBar.total
          },
          void 0,
          !1,
          {
            fileName: "app/routes/onboard.tsx",
            lineNumber: 91,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/onboard.tsx",
        lineNumber: 86,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-16 mx-auto max-w-7xl  sm:mt-32 lg:flex-shrink-0 lg:flex-grow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_react8.Outlet, { context: { onboardData, setOnboardData } }, void 0, !1, {
      fileName: "app/routes/onboard.tsx",
      lineNumber: 98,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/onboard.tsx",
      lineNumber: 97,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/onboard.tsx",
    lineNumber: 85,
    columnNumber: 5
  }, this);
}

// app/routes/onboard.select-location.tsx
var import_react12 = require("@remix-run/react"), import_react13 = require("@headlessui/react"), import_node3 = require("@remix-run/node");

// app/components/navbar/BottomNavbar.tsx
var import_framer_motion4 = require("framer-motion"), import_react10 = require("@remix-run/react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function classNames2(...classes) {
  return classes.filter(Boolean).join(" ");
}
function BottomNavbar({ link, completed }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_framer_motion4.motion.div, { initial: { y: "100px" }, animate: { y: "0px" }, className: "fixed bottom-0 py-4 left-0 bg-green-200 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "container mx-auto flex items-center justify-between max-w-4xl", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex items-center" }, void 0, !1, {
      fileName: "app/components/navbar/BottomNavbar.tsx",
      lineNumber: 13,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_framer_motion4.motion.div, { whileHover: { scale: 1.02, y: "-3px" }, className: "flex w-full sm:w-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react10.Link, { to: link, className: classNames2(completed > 0 ? "pointer-events-auto btn text-white" : " bg-gray-200 text-gray-800 cursor-not-allowed inactive", "py-4 px-8 mx-4  sm:m-0 w-full  rounded-xl text-lg font-semibold text-center"), children: "CONTINUE" }, void 0, !1, {
      fileName: "app/components/navbar/BottomNavbar.tsx",
      lineNumber: 16,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/navbar/BottomNavbar.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/navbar/BottomNavbar.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/navbar/BottomNavbar.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/onboard.select-location.tsx
var import_react_tooltip3 = require("react-tooltip"), import_lottie_react2 = __toESM(require("lottie-react"));

// public/loader.json
var loader_default = { v: "5.7.11", fr: 60, ip: 0, op: 81, w: 1920, h: 1080, nm: "Loading Dots", ddd: 0, assets: [], layers: [{ ddd: 0, ind: 1, ty: 4, nm: "Dot4", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 25, s: [25] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 39, s: [100] }, { t: 55, s: [25] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 25, s: [1142, 540, 0], to: [0, -6.667, 0], ti: [0, 0, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 39, s: [1142, 500, 0], to: [0, 0, 0], ti: [0, -6.667, 0] }, { t: 55, s: [1142, 540, 0] }], ix: 2, l: 2 }, a: { a: 0, k: [-284, 92, 0], ix: 1, l: 2 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 25, s: [50, 50, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 39, s: [75, 75, 100] }, { t: 55, s: [50, 50, 100] }], ix: 6, l: 2 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [120, 120], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.40784313725490196, 0.40784313725490196, 0.40784313725490196, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-284, 92], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 360, st: 0, bm: 0 }, { ddd: 0, ind: 2, ty: 4, nm: "Dot3", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 17, s: [25] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 31, s: [100] }, { t: 47, s: [25] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 17, s: [1022, 540, 0], to: [0, -6.667, 0], ti: [0, 0, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 31, s: [1022, 500, 0], to: [0, 0, 0], ti: [0, -6.667, 0] }, { t: 47, s: [1022, 540, 0] }], ix: 2, l: 2 }, a: { a: 0, k: [-284, 92, 0], ix: 1, l: 2 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 17, s: [50, 50, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 31, s: [75, 75, 100] }, { t: 47, s: [50, 50, 100] }], ix: 6, l: 2 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [120, 120], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.40784313725490196, 0.40784313725490196, 0.40784313725490196, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-284, 92], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 360, st: 0, bm: 0 }, { ddd: 0, ind: 3, ty: 4, nm: "Dot2", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 9, s: [25] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 23, s: [100] }, { t: 39, s: [25] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 9, s: [902, 540, 0], to: [0, -6.667, 0], ti: [0, 0, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 23, s: [902, 500, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { t: 39, s: [902, 540, 0] }], ix: 2, l: 2 }, a: { a: 0, k: [-284, 92, 0], ix: 1, l: 2 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 9, s: [50, 50, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 23, s: [75, 75, 100] }, { t: 39, s: [50, 50, 100] }], ix: 6, l: 2 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [120, 120], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.40784313725490196, 0.40784313725490196, 0.40784313725490196, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-284, 92], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 360, st: 0, bm: 0 }, { ddd: 0, ind: 4, ty: 4, nm: "Dot1", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [25] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 14, s: [100] }, { t: 30, s: [25] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 0, s: [782, 540, 0], to: [0, -6.667, 0], ti: [0, 0, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 14, s: [782, 500, 0], to: [0, 0, 0], ti: [0, -6.667, 0] }, { t: 30, s: [782, 540, 0] }], ix: 2, l: 2 }, a: { a: 0, k: [-284, 92, 0], ix: 1, l: 2 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 0, s: [50, 50, 100] }, { i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 14, s: [75, 75, 100] }, { t: 30, s: [50, 50, 100] }], ix: 6, l: 2 } }, ao: 0, shapes: [{ ty: "gr", it: [{ d: 1, ty: "el", s: { a: 0, k: [120, 120], ix: 2 }, p: { a: 0, k: [0, 0], ix: 3 }, nm: "Ellipse Path 1", mn: "ADBE Vector Shape - Ellipse", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.40784313725490196, 0.40784313725490196, 0.40784313725490196, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [-284, 92], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Ellipse 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 360, st: 0, bm: 0 }], markers: [] };

// app/config.ts
var BASE_URL = "https://sandbox-api.didww.com/v3";

// app/routes/onboard.select-location.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), prisons = [
  // { location: "Barwon Prison", prefix: "61342", name: "Lara", id: "3cc2671e-f208-40bb-84d2-5d0b14444a88" },
  {
    location: "Barwon Prison",
    prefix: "61342",
    name: "Lara",
    id: "bba735f9-7c37-499b-8998-94a5fca5d158"
  },
  {
    location: "Beechworth Prison",
    prefix: "61347",
    name: "Beechworth",
    id: "4b8174d9-b9b4-4281-adce-a565e5d07aea"
  },
  {
    location: "Dame Phyllis Frost Center",
    prefix: "61373",
    name: "Ravenhall",
    id: "2c074dbb-fc42-4600-a4ff-6c68e01d91f3"
  },
  {
    location: "Dhurringle Prison",
    prefix: "6134",
    name: "Tatura",
    id: "997cd199-6e57-4fb6-ba8f-7e3181b11e71"
  },
  {
    location: "Hopkins Prison",
    prefix: "61353",
    name: "Ararat",
    id: "03415ddf-398b-4947-a48f-ae66740f6c83"
  },
  {
    location: "Langi Kal Kal Prison",
    prefix: "61343",
    name: "Beaufort",
    id: "03034b2-9522-4eb2-88e5-d44523e89503"
  },
  {
    location: "Loddon Prison",
    prefix: "6134",
    name: "Castlemaine",
    id: "dc9ebd5e-2fa8-42a4-8cea-a7d47fb6018e"
  },
  {
    location: "Marngoneet Prison",
    prefix: "61342",
    name: "Lara",
    id: "3cc2671e-f208-40bb-84d2-5d0b14444a88"
  },
  {
    location: "Melbourne Assessment Prison",
    prefix: "6138",
    name: "West Melbourne",
    id: "2d717d1d-2764-40f2-b5b6-42de7036aee5"
  },
  {
    location: "Middleton Prison",
    prefix: "6134",
    name: "Castlemaine",
    id: "dc9ebd5e-2fa8-42a4-8cea-a7d47fb6018e"
  },
  {
    location: "Port Phillip Prison",
    prefix: "6186",
    name: "Laverton",
    id: ""
  },
  {
    location: "Tarrengower Prison",
    prefix: "61344",
    name: "Maldon",
    id: "cc4a1d19-d079-40e3-bc94-580826c243f7"
  },
  {
    location: "Fulham Prison",
    prefix: "61341",
    name: "Sale",
    id: "731c083a-9697-4212-9731-3f4c48a203b1"
  }
];
function meta4() {
  return [
    { title: "Choose Your Local Prison Number | Convo Phone" },
    {
      description: "Choose Your Local Prison Number for Seamless Communication. Select from a range of local telephone numbers tailored to specific prison locations. Our user-friendly interface makes it effortless for you to find and reserve a number, enabling direct and cost-effective connections with your incarcerated loved ones. Start connecting today and bridge the communication gap."
    }
  ];
}
function classNames3(...classes) {
  return classes.filter(Boolean).join(" ");
}
var action = async ({ request }) => {
  let formData = await request.formData(), values2 = Object.fromEntries(formData), filters = JSON.parse(values2.data);
  if (filters != null && filters.prisonId) {
    let apiUrl = `${BASE_URL}/available_dids?filter[city.id]=${filters.prisonId}&include=did_group.stock_keeping_units`, response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/json",
        "Api-Key": "kpz3jtasmgthwa3r7wzesnm4fst4aeu2"
      }
    });
    if (!response.ok)
      throw new Error("Failed to fetch data");
    let data = await response.json();
    return console.log(data.includeds), data.meta.total_count === 0 ? (0, import_node3.json)({
      status: !1,
      message: "Not Located"
    }) : (0, import_node3.json)({
      status: !0,
      message: data.data[0].attributes.number,
      number: data.data[0]
    });
  }
  return (0, import_node3.json)({
    status: !1,
    message: "Please Select Location"
  });
};
function ChooseLocation() {
  let [location, setLocation] = (0, import_react11.useState)(null), { setOnboardData, onboardData } = useOnboardData(), navigation2 = (0, import_react12.useNavigation)(), response = (0, import_react12.useActionData)();
  console.log(response);
  let filteredprison = onboardData.selectedPrison ? prisons.filter(
    (prison) => onboardData.selectedPrison && prison.location.toLowerCase().includes(onboardData.selectedPrison.toLowerCase())
  ) : prisons, clickHandler = (prison) => {
    console.log("here :", prison), setOnboardData({
      ...onboardData,
      selectedPrison: prison.location,
      prisonId: prison.id,
      prefix: null
    });
  }, isSubmitting = navigation2.state === "submitting";
  return (0, import_react11.useEffect)(() => {
    (response == null ? void 0 : response.status) === !0 && setOnboardData({
      ...onboardData,
      localNumber: response.number,
      progressBar: { completed: 1, total: 4 }
    }), (response == null ? void 0 : response.status) === !1 && setOnboardData({
      ...onboardData,
      localNumber: response.number,
      progressBar: { completed: 1, total: 4 }
    });
  }, [isSubmitting]), /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      import_framer_motion5.motion.div,
      {
        initial: { opacity: 0, x: "30px" },
        animate: { opacity: 1, x: "0px" },
        transition: { duration: 1 },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Form, { method: "post", className: " w-full mt-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "items-center flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            import_react_tooltip3.Tooltip,
            {
              anchorSelect: ".tooltip-step-1",
              place: "top",
              className: "bg-white",
              isOpen: !0,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { className: "font-semibold sm:text-lg text-center", children: [
                "STEP 1:",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "font-light ", children: "Select prison location" }, void 0, !1, {
                  fileName: "app/routes/onboard.select-location.tsx",
                  lineNumber: 222,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/onboard.select-location.tsx",
                lineNumber: 220,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/onboard.select-location.tsx",
              lineNumber: 215,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            "img",
            {
              src: "https://connnvo.vercel.app/Step1.png",
              alt: "man",
              className: "bg-white h-32 sm:h-48 border-0 tooltip-step-1",
              "data-tooltip-html": ""
            },
            void 0,
            !1,
            {
              fileName: "app/routes/onboard.select-location.tsx",
              lineNumber: 227,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react13.Combobox, { value: location, onChange: setLocation, children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "rounded-full flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                import_react13.Combobox.Input,
                {
                  onChange: (event) => setOnboardData({
                    ...onboardData,
                    selectedPrison: event.target.value
                  }),
                  className: "block shadow-lg  h-16 rounded-l-full py-1.5 pl-10 text-gray-900 border-black border-1 border ring-1 focus:outline-green-600 placeholder:text-gray-400 sm:text-2xl sm:leading-6 sm:w-96 active:ring-none remove_border caret-green-600",
                  placeholder: "Start Typing..."
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/onboard.select-location.tsx",
                  lineNumber: 236,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                "input",
                {
                  type: "hidden",
                  name: "data",
                  value: JSON.stringify({
                    prefix: onboardData.prefix,
                    prisonId: onboardData.prisonId
                  })
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/onboard.select-location.tsx",
                  lineNumber: 246,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react13.Combobox.Options, { className: " absolute z-50 mt-1 max-h-60  overflow-auto rounded-lg bg-white py-1  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm", children: filteredprison == null ? void 0 : filteredprison.map((prison) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                import_react13.Combobox.Option,
                {
                  value: prison.location,
                  onClick: () => clickHandler(prison),
                  className: ({ active }) => classNames3(
                    active ? "bg-green-200" : "text-gray-900",
                    "cursor-default flex  items-center select-none py-2 pl-3 pr-9"
                  ),
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "inline-block h-2 w-2  bg-green-300   mr-3 flex-shrink-0 rounded-full" }, void 0, !1, {
                      fileName: "app/routes/onboard.select-location.tsx",
                      lineNumber: 266,
                      columnNumber: 25
                    }, this),
                    prison.location
                  ]
                },
                prison.id,
                !0,
                {
                  fileName: "app/routes/onboard.select-location.tsx",
                  lineNumber: 256,
                  columnNumber: 23
                },
                this
              )) }, void 0, !1, {
                fileName: "app/routes/onboard.select-location.tsx",
                lineNumber: 254,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/onboard.select-location.tsx",
              lineNumber: 235,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              "button",
              {
                disabled: navigation2.state === "submitting",
                type: "submit",
                className: "relative shadow-lg -ml-px inline-flex bg-green-400 px-6 rounded-r-full items-center gap-x-1.5  py-2 sm:text-2xl font-semibold text-black ring-1 ring-inset ring-gray-800 hover:bg-green-500 transition-all tracking-wider",
                children: "Submit"
              },
              void 0,
              !1,
              {
                fileName: "app/routes/onboard.select-location.tsx",
                lineNumber: 272,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/onboard.select-location.tsx",
            lineNumber: 234,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/onboard.select-location.tsx",
            lineNumber: 233,
            columnNumber: 13
          }, this),
          isSubmitting ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex justify-center items-center flex-col", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "text-sm text-gray-800 text-center animate-pulse tracking-wide mt-4", children: "Searching" }, void 0, !1, {
              fileName: "app/routes/onboard.select-location.tsx",
              lineNumber: 283,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              import_lottie_react2.default,
              {
                animationData: loader_default,
                className: "relative bottom-10 mt-4",
                style: { height: "70px" }
              },
              void 0,
              !1,
              {
                fileName: "app/routes/onboard.select-location.tsx",
                lineNumber: 286,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/routes/onboard.select-location.tsx",
            lineNumber: 282,
            columnNumber: 15
          }, this) : response && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            import_framer_motion5.motion.p,
            {
              initial: { opacity: 0.7, scale: 1.3 },
              animate: { opacity: 1, scale: 1 },
              className: "text-sm text-green-800 text-center  tracking-wide mt-4",
              children: response.message
            },
            void 0,
            !1,
            {
              fileName: "app/routes/onboard.select-location.tsx",
              lineNumber: 294,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/onboard.select-location.tsx",
          lineNumber: 214,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/onboard.select-location.tsx",
          lineNumber: 213,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/routes/onboard.select-location.tsx",
        lineNumber: 208,
        columnNumber: 7
      },
      this
    ),
    onboardData.progressBar.completed === 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
      BottomNavbar,
      {
        link: "/onboard/provide-number",
        completed: onboardData.progressBar.completed
      },
      void 0,
      !1,
      {
        fileName: "app/routes/onboard.select-location.tsx",
        lineNumber: 308,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: " -z-40 absolute bottom-0 py-4 bg-white left-0 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "max-w-4xl container mx-auto sm:flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex items-center" }, void 0, !1, {
        fileName: "app/routes/onboard.select-location.tsx",
        lineNumber: 315,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          import_react_tooltip3.Tooltip,
          {
            anchorSelect: ".disabled-button-tooltip",
            place: "top"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/onboard.select-location.tsx",
            lineNumber: 318,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
          "p",
          {
            "data-tooltip-content": "Please complete the first step to enable this button.",
            "data-tooltip-variant": "warning",
            className: "cursor-not-allowed disabled-button-tooltip py-4 px-8 z-0  bg-gray-400 text-gray-200 mx-4  sm:m-0  opacity-30 rounded-xl text-lg font-semibold text-center",
            children: "CONTINUE"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/onboard.select-location.tsx",
            lineNumber: 323,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/onboard.select-location.tsx",
        lineNumber: 317,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/onboard.select-location.tsx",
      lineNumber: 314,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/onboard.select-location.tsx",
      lineNumber: 313,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/onboard.select-location.tsx",
    lineNumber: 207,
    columnNumber: 5
  }, this);
}

// app/routes/onboard.provide-number.tsx
var onboard_provide_number_exports = {};
__export(onboard_provide_number_exports, {
  action: () => action2,
  default: () => ChooseLocation2,
  meta: () => meta5
});
var import_react14 = require("react");
var import_framer_motion6 = require("framer-motion"), import_react_phone_number_input = __toESM(require("react-phone-number-input")), import_react15 = require("@remix-run/react"), import_node4 = require("@remix-run/node"), import_lottie_react3 = __toESM(require("lottie-react"));
var import_react_tooltip4 = require("react-tooltip"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function meta5() {
  return [
    { title: "Forward Your Number for Inmate Calls | Convo Phone" },
    { keywords: "Beechworth Local VoiP Number, Prisoners" },
    {
      description: "Forward Your Number to Receive Calls from Incarcerated Individuals. Simplify the communication process by forwarding a personal number to receive calls from prisoners. Our service ensures affordable rates and streamlined connections, empowering families to stay connected effortlessly. Take advantage of our secure platform and enhance the frequency and convenience of communication with your incarcerated loved ones."
    }
  ];
}
function classNames4(...classes) {
  return classes.filter(Boolean).join(" ");
}
var action2 = async ({ request }) => {
  let accountSid = process.env.TWILIO_ACCOUNT_SID, authToken = process.env.TWILIO_AUTH_TOKEN, client = require("twilio")(accountSid, authToken), formData = await request.formData(), values2 = Object.fromEntries(formData), response = await client.lookups.v2.phoneNumbers(values2.number).fetch().then((phone_number) => phone_number);
  return await ((ms) => new Promise((res) => setTimeout(res, ms)))(3e3), (0, import_node4.json)({
    response
  });
}, InputText = (0, import_react14.forwardRef)((props, ref) => {
  let navigation2 = (0, import_react15.useNavigation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.Form, { method: "post", className: "flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "input",
      {
        name: "number",
        ref,
        ...props,
        className: "sm:w-80 sm:text-2xl pl-4 caret-green-800 text-gray-900 focus:outline-none placeholder:text-gray-400 border-r-0"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/onboard.provide-number.tsx",
        lineNumber: 55,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      "button",
      {
        disabled: navigation2.state === "submitting",
        type: "submit",
        className: "PhoneInputButton border-l  border-black  relative shadow-lg -ml-px inline-flex bg-green-400 px-6 items-center py-2 sm:text-2xl font-semibold text-black hover:bg-green-500 transition-all tracking-wider",
        children: "Verify"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/onboard.provide-number.tsx",
        lineNumber: 61,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/onboard.provide-number.tsx",
    lineNumber: 54,
    columnNumber: 5
  }, this);
});
function ChooseLocation2() {
  let { setOnboardData, onboardData } = useOnboardData(), [value, setValue] = (0, import_react14.useState)(""), response = (0, import_react15.useActionData)();
  console.log(response == null ? void 0 : response.response.valid);
  let isSubmitting = (0, import_react15.useNavigation)().state === "submitting";
  return (0, import_react14.useEffect)(() => {
    response != null && response.response.valid && setOnboardData({
      ...onboardData,
      progressBar: { completed: 2, total: 4 },
      forwardingNumber: value
    });
  }, [isSubmitting]), /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      import_framer_motion6.motion.div,
      {
        className: "bg-white",
        initial: { opacity: 0, x: "30px" },
        animate: { opacity: 1, x: "0px" },
        transition: { duration: 1 },
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: " w-full  items-center justify-center flex-col ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            import_react_tooltip4.Tooltip,
            {
              anchorSelect: ".tooltip-step-2",
              place: "top",
              className: "bg-white",
              isOpen: !0,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "w-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "font-semibold sm:text-lg text-center", children: [
                "STEP 2:",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "font-light ", children: "Enter the phone number where you want to receive the calls." }, void 0, !1, {
                  fileName: "app/routes/onboard.provide-number.tsx",
                  lineNumber: 109,
                  columnNumber: 17
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/onboard.provide-number.tsx",
                lineNumber: 107,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/routes/onboard.provide-number.tsx",
                lineNumber: 106,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/routes/onboard.provide-number.tsx",
              lineNumber: 101,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/onboard.provide-number.tsx",
            lineNumber: 100,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            "img",
            {
              src: "https://connnvo.vercel.app/Step1.png",
              alt: "man",
              className: "bg-white mx-auto h-32 sm:h-48 border-0 tooltip-step-2",
              "data-tooltip-html": ""
            },
            void 0,
            !1,
            {
              fileName: "app/routes/onboard.provide-number.tsx",
              lineNumber: 117,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            import_react_phone_number_input.default,
            {
              name: "number",
              inputComponent: InputText,
              placeholder: "Forwarding number",
              defaultCountry: "AU",
              withCountryCallingCode: !0,
              international: !0,
              value,
              onChange: setValue
            },
            void 0,
            !1,
            {
              fileName: "app/routes/onboard.provide-number.tsx",
              lineNumber: 127,
              columnNumber: 11
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/onboard.provide-number.tsx",
            lineNumber: 124,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/onboard.provide-number.tsx",
        lineNumber: 95,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_framer_motion6.motion.p,
        {
          initial: { opacity: 0.7, scale: 1.3 },
          animate: { opacity: 1, scale: 1 },
          className: classNames4(
            response != null && response.response.valid ? "" : (response == null ? void 0 : response.response.valid) === !1 ? "p-1 w-80 mx-auto rounded text-red-600 bg-red-50" : "p-3",
            "text text-green-800 text-center bg-blue-50 tracking-wide mt-4"
          ),
          children: (response == null ? void 0 : response.response.valid) === !0 ? "The number " + onboardData.forwardingNumber + " is verified" : (response == null ? void 0 : response.response.valid) === !1 && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: "Sorry, this number is not valid " }, void 0, !1, {
            fileName: "app/routes/onboard.provide-number.tsx",
            lineNumber: 157,
            columnNumber: 19
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/onboard.provide-number.tsx",
          lineNumber: 141,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_framer_motion6.motion.p,
        {
          initial: { opacity: 0.7, scale: 1.3 },
          animate: { opacity: 1, scale: 1 },
          className: classNames4(
            response != null && response.response.valid ? "" : (response == null ? void 0 : response.response.valid) === !1 ? "p-1 w-full" : "p-3 w-96",
            "mx-auto  rounded ",
            "text-sm text-green-800 bg-yellow-50 rounded p-1 text-center  tracking-wide mt-4 "
          ),
          children: response != null && response.response.valid ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: [
            "Click",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "font-semibold underline", children: [
              " ",
              "CONTINUE"
            ] }, void 0, !0, {
              fileName: "app/routes/onboard.provide-number.tsx",
              lineNumber: 175,
              columnNumber: 17
            }, this),
            " ",
            "to approve all calls ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("br", {}, void 0, !1, {
              fileName: "app/routes/onboard.provide-number.tsx",
              lineNumber: 179,
              columnNumber: 38
            }, this),
            " on the local prison number to be received on the telephone number above."
          ] }, void 0, !0, {
            fileName: "app/routes/onboard.provide-number.tsx",
            lineNumber: 173,
            columnNumber: 15
          }, this) : (response == null ? void 0 : response.response.valid) === !1 && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { children: [
            "Provide a valid number and",
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "font-semibold underline", children: "TRY" }, void 0, !1, {
              fileName: "app/routes/onboard.provide-number.tsx",
              lineNumber: 186,
              columnNumber: 19
            }, this),
            " ",
            "again"
          ] }, void 0, !0, {
            fileName: "app/routes/onboard.provide-number.tsx",
            lineNumber: 184,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/onboard.provide-number.tsx",
          lineNumber: 160,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/onboard.provide-number.tsx",
      lineNumber: 140,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/onboard.provide-number.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this),
    isSubmitting && /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex justify-center items-center flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("p", { className: "text-sm text-gray-800 text-center animate-pulse tracking-wide mt-4", children: "Verifying" }, void 0, !1, {
        fileName: "app/routes/onboard.provide-number.tsx",
        lineNumber: 196,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        import_lottie_react3.default,
        {
          animationData: loader_default,
          className: "relative bottom-10 mt-4",
          style: { height: "70px" }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/onboard.provide-number.tsx",
          lineNumber: 199,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/onboard.provide-number.tsx",
      lineNumber: 195,
      columnNumber: 9
    }, this),
    onboardData.progressBar.completed === 2 ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
      BottomNavbar,
      {
        link: "/onboard/create-account",
        completed: onboardData.progressBar.completed
      },
      void 0,
      !1,
      {
        fileName: "app/routes/onboard.provide-number.tsx",
        lineNumber: 207,
        columnNumber: 9
      },
      this
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: " absolute bottom-0 py-8 left-0 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "max-w-4xl container mx-auto sm:flex items-center justify-between", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex items-center" }, void 0, !1, {
        fileName: "app/routes/onboard.provide-number.tsx",
        lineNumber: 214,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          import_react_tooltip4.Tooltip,
          {
            anchorSelect: ".disabled-button-tooltip",
            place: "top"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/onboard.provide-number.tsx",
            lineNumber: 217,
            columnNumber: 15
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          "p",
          {
            "data-tooltip-content": "Please complete the second step to enable this button.",
            "data-tooltip-variant": "warning",
            className: "cursor-not-allowed disabled-button-tooltip py-4 px-8 bg-gray-400 text-gray-200 mx-4  sm:m-0  opacity-30 rounded-xl text-lg font-semibold text-center",
            children: "CONTINUE"
          },
          void 0,
          !1,
          {
            fileName: "app/routes/onboard.provide-number.tsx",
            lineNumber: 222,
            columnNumber: 15
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/routes/onboard.provide-number.tsx",
        lineNumber: 216,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/onboard.provide-number.tsx",
      lineNumber: 213,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/onboard.provide-number.tsx",
      lineNumber: 212,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/onboard.provide-number.tsx",
    lineNumber: 94,
    columnNumber: 5
  }, this);
}

// app/routes/onboard.select-option.tsx
var onboard_select_option_exports = {};
__export(onboard_select_option_exports, {
  action: () => action3,
  default: () => SelectOption2,
  meta: () => meta6,
  stripe: () => stripe,
  stripeCheckout: () => stripeCheckout
});

// app/components/paymentOption/PricingPage.tsx
var import_react16 = require("react"), import_react17 = require("@headlessui/react"), import_framer_motion7 = require("framer-motion"), import_solid2 = require("@heroicons/react/20/solid"), import_react18 = require("@remix-run/react"), import_remix3 = require("@clerk/remix"), import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), frequencies = [
  {
    value: "monthly",
    label: "Monthly",
    priceSuffix: "/month"
  },
  {
    value: "annually",
    label: "Annually",
    priceSuffix: "/year"
  }
], tiers = [
  {
    name: "Pay Monthly",
    priceId: "price_1NKYwMLS6zBJNnGQssLWSDEB",
    id: "tier-monthly",
    href: "#",
    price: { monthly: "$29.95", annually: "$359.40" },
    description: "Local number registration and call forwarding to customers",
    features: [
      "1 * local telephone number",
      "Flexible call forwarding",
      "Customer support",
      "Easy to use interface"
    ],
    mostPopular: !1
  },
  {
    name: "Pay Annually",
    priceId: "price_1NKYwMLS6zBJNnGQsQKrrTMK",
    id: "tier-annual",
    href: "#",
    price: { monthly: "$23.95", annually: "$287.40" },
    description: "Pay annually and put $72.00 back in your wallet. It's the cheaper option",
    features: [
      "1 * local telephone number",
      "Flexible call forwarding",
      "Customer support",
      "Easy to use interface"
    ],
    mostPopular: !0
  }
];
function classNames5(...classes) {
  return classes.filter(Boolean).join(" ");
}
function SelectOption() {
  let [frequency, setFrequency] = (0, import_react16.useState)(frequencies[0]), subscriptionFetcher = (0, import_react18.useFetcher)(), { isLoaded, isSignedIn, user } = (0, import_remix3.useUser)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
    import_framer_motion7.motion.div,
    {
      initial: { opacity: 0, x: "30px" },
      animate: { opacity: 1, x: "0px" },
      transition: { duration: 1 },
      className: "relative  isolate items-center flex justify-center ",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "bg-white pb-40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mx-auto max-w-7xl  px-6 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mx-auto max-w-4xl text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl", children: "Choose a plan\xA0to register your\xA0local number\xA0" }, void 0, !1, {
          fileName: "app/components/paymentOption/PricingPage.tsx",
          lineNumber: 86,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/components/paymentOption/PricingPage.tsx",
          lineNumber: 85,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "mx-auto mt-6 max-w-2xl text-center text-lg leading-6 text-gray-600", children: "Choose between our monthly or annual plan to stay connected with your prisoner friend" }, void 0, !1, {
          fileName: "app/components/paymentOption/PricingPage.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "mt-16 flex   justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          import_react17.RadioGroup,
          {
            value: frequency,
            onChange: setFrequency,
            className: "grid grid-cols-2 gap-x-1  rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react17.RadioGroup.Label, { className: "sr-only", children: "Payment frequency" }, void 0, !1, {
                fileName: "app/components/paymentOption/PricingPage.tsx",
                lineNumber: 100,
                columnNumber: 17
              }, this),
              frequencies.map((option) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                import_react17.RadioGroup.Option,
                {
                  value: option,
                  className: ({ checked }) => classNames5(
                    checked ? "bg-indigo-600 text-white" : "text-gray-500",
                    "cursor-pointer rounded-full px-2.5 py-1"
                  ),
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { children: option.label }, void 0, !1, {
                    fileName: "app/components/paymentOption/PricingPage.tsx",
                    lineNumber: 115,
                    columnNumber: 21
                  }, this)
                },
                option.value,
                !1,
                {
                  fileName: "app/components/paymentOption/PricingPage.tsx",
                  lineNumber: 104,
                  columnNumber: 19
                },
                this
              ))
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/paymentOption/PricingPage.tsx",
            lineNumber: 96,
            columnNumber: 15
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/paymentOption/PricingPage.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { className: "isolate mx-auto mt-10 max-w-3xl gap-6 sm:flex", children: tiers.map((tier) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
          "div",
          {
            className: classNames5(
              tier.mostPopular ? "ring-2 ring-indigo-600" : "ring-1 ring-gray-200",
              "rounded-3xl p-8 mb-4"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                "h3",
                {
                  id: tier.id,
                  className: classNames5(
                    tier.mostPopular ? "text-indigo-600" : "text-gray-900",
                    "text-lg font-semibold leading-8"
                  ),
                  children: tier.name
                },
                void 0,
                !1,
                {
                  fileName: "app/components/paymentOption/PricingPage.tsx",
                  lineNumber: 130,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "mt-4 text-sm leading-6 text-gray-600", children: tier.description }, void 0, !1, {
                fileName: "app/components/paymentOption/PricingPage.tsx",
                lineNumber: 140,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("p", { className: "mt-6 flex items-baseline gap-x-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "text-4xl font-bold tracking-tight text-gray-900", children: tier.price[frequency.value] }, void 0, !1, {
                  fileName: "app/components/paymentOption/PricingPage.tsx",
                  lineNumber: 144,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("span", { className: "text-sm font-semibold leading-6 text-gray-600", children: frequency.priceSuffix }, void 0, !1, {
                  fileName: "app/components/paymentOption/PricingPage.tsx",
                  lineNumber: 147,
                  columnNumber: 21
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/paymentOption/PricingPage.tsx",
                lineNumber: 143,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                "a",
                {
                  href: tier.href,
                  onClick: () => {
                    var _a, _b;
                    isSignedIn && subscriptionFetcher.submit(
                      {
                        priceId: tier.priceId,
                        userEmail: (_a = user == null ? void 0 : user.primaryEmailAddress) != null && _a.emailAddress ? (_b = user == null ? void 0 : user.primaryEmailAddress) == null ? void 0 : _b.emailAddress : ""
                      },
                      { method: "post" }
                    );
                  },
                  "aria-describedby": tier.id,
                  className: classNames5(
                    tier.mostPopular ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500" : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300",
                    "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  ),
                  children: "Buy plan"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/paymentOption/PricingPage.tsx",
                  lineNumber: 151,
                  columnNumber: 19
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                "ul",
                {
                  role: "list",
                  className: "mt-8 space-y-3 text-sm leading-6 text-gray-600",
                  children: tier.features.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("li", { className: "flex gap-x-3", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
                      import_solid2.CheckIcon,
                      {
                        className: "h-6 w-5 flex-none text-indigo-600",
                        "aria-hidden": "true"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/paymentOption/PricingPage.tsx",
                        lineNumber: 184,
                        columnNumber: 25
                      },
                      this
                    ),
                    feature
                  ] }, feature, !0, {
                    fileName: "app/components/paymentOption/PricingPage.tsx",
                    lineNumber: 183,
                    columnNumber: 23
                  }, this))
                },
                void 0,
                !1,
                {
                  fileName: "app/components/paymentOption/PricingPage.tsx",
                  lineNumber: 179,
                  columnNumber: 19
                },
                this
              )
            ]
          },
          tier.id,
          !0,
          {
            fileName: "app/components/paymentOption/PricingPage.tsx",
            lineNumber: 122,
            columnNumber: 17
          },
          this
        )) }, void 0, !1, {
          fileName: "app/components/paymentOption/PricingPage.tsx",
          lineNumber: 120,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/paymentOption/PricingPage.tsx",
        lineNumber: 84,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/paymentOption/PricingPage.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/paymentOption/PricingPage.tsx",
      lineNumber: 78,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/paymentOption/PricingPage.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}

// app/routes/onboard.select-option.tsx
var import_stripe = __toESM(require("stripe")), import_server_runtime = require("@remix-run/server-runtime"), import_react19 = require("react");
var import_remix4 = require("@clerk/remix"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function meta6() {
  return [
    { title: "Home - Convo Local Numbers" },
    { description: "Connecting Prisoners with Families" }
  ];
}
var action3 = async ({ request }) => {
  let form = await request.formData(), priceId = form.get("priceId"), userEmail = form.get("userEmail"), url = await stripeCheckout(priceId, userEmail);
  return (0, import_server_runtime.redirect)(url);
}, stripe = new import_stripe.default(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15"
}), stripeCheckout = async (priceId, emailAddress) => {
  let lineItems = [
    {
      price: priceId,
      quantity: 1
    }
  ], customerData = {
    customer_email: emailAddress
  };
  return (await stripe.checkout.sessions.create({
    ...customerData,
    mode: "subscription",
    line_items: lineItems,
    success_url: "http://localhost:3000/onboard/success",
    cancel_url: "http://localhost:3000"
  })).url;
};
function SelectOption2() {
  let { setOnboardData, onboardData } = useOnboardData(), { sessionId } = (0, import_remix4.useAuth)();
  return (0, import_react19.useEffect)(() => {
    sessionId && setOnboardData({
      ...onboardData,
      progressBar: { completed: 3, total: 4 }
    });
  }, [sessionId]), /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(SelectOption, {}, void 0, !1, {
    fileName: "app/routes/onboard.select-option.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
}

// app/routes/terms-and-conditions.tsx
var terms_and_conditions_exports = {};
__export(terms_and_conditions_exports, {
  default: () => Example6
});
var import_solid4 = require("@heroicons/react/20/solid");

// app/layouts/Navigation.tsx
var import_outline3 = require("@heroicons/react/24/outline"), import_react22 = require("react"), import_react23 = require("@headlessui/react"), import_react24 = require("@remix-run/react"), import_uuid2 = require("uuid");

// app/components/dropdowns/dropdown.tsx
var import_react20 = require("react"), import_react21 = require("@headlessui/react"), import_solid3 = require("@heroicons/react/20/solid"), import_uuid = require("uuid"), import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function classNames6(...classes) {
  return classes.filter(Boolean).join(" ");
}
var lanaguages = [{ lanaguage: "ENGLISH" }, { lanaguage: "CHINEESE" }, { lanaguage: "VIETNAMESE" }];
function Example5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react21.Menu, { as: "div", className: "relative inline-block text-left", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react21.Menu.Button, { className: "inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-custom-xs font-semibold font-dinround text-color-hare-always-light shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50", children: [
      "SITE LANGUAGE ENGLISH",
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_solid3.ChevronDownIcon, { className: "-mr-1 h-5 w-5 text-gray-400", "aria-hidden": "true" }, void 0, !1, {
        fileName: "app/components/dropdowns/dropdown.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/dropdowns/dropdown.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/dropdowns/dropdown.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react21.Transition, { as: import_react20.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react21.Menu.Items, { className: "absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "py-1", children: lanaguages.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_react21.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: classNames6(active ? "bg-gray-100 text-gray-900" : "text-gray-700", "block px-4 py-2 text-custom-xs"), children: item.lanaguage }, void 0, !1, {
      fileName: "app/components/dropdowns/dropdown.tsx",
      lineNumber: 27,
      columnNumber: 63
    }, this) }, (0, import_uuid.v4)(), !1, {
      fileName: "app/components/dropdowns/dropdown.tsx",
      lineNumber: 27,
      columnNumber: 22
    }, this)) }, void 0, !1, {
      fileName: "app/components/dropdowns/dropdown.tsx",
      lineNumber: 25,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/dropdowns/dropdown.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/dropdowns/dropdown.tsx",
      lineNumber: 23,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/dropdowns/dropdown.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

// app/layouts/Navigation.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), navigation = [{ name: "", href: "/frequently-asked-questions" }], companyDetails = {
  name: "Convo"
};
function Navbar() {
  let [mobileMenuOpen, setMobileMenuOpen] = (0, import_react22.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("header", { className: "bg-white  max-w-5xl mx-auto inset-x-0 sticky top-0 z-30", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("nav", { className: "flex items-center justify-between px-6 lg:px-8", "aria-label": "Global", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex lg:flex-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react24.Link, { to: "#", className: "-m-1.5 p-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "sr-only", children: companyDetails.name }, void 0, !1, {
          fileName: "app/layouts/Navigation.tsx",
          lineNumber: 20,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("img", { className: "h-40 w-auto", src: "https://strapi342134.s3.amazonaws.com/logo-black.png", alt: "" }, void 0, !1, {
          fileName: "app/layouts/Navigation.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layouts/Navigation.tsx",
        lineNumber: 19,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/layouts/Navigation.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("button", { type: "button", className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700", onClick: () => setMobileMenuOpen(!0), children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "sr-only", children: "Open main menu" }, void 0, !1, {
          fileName: "app/layouts/Navigation.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_outline3.Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
          fileName: "app/layouts/Navigation.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layouts/Navigation.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/layouts/Navigation.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "hidden lg:flex lg:gap-x-12", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react24.Link, { to: item.href, className: "text-sm font-semibold leading-6 text-gray-900", children: item.name }, (0, import_uuid2.v4)(), !1, {
        fileName: "app/layouts/Navigation.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/layouts/Navigation.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "hidden lg:flex lg:flex-1 lg:justify-end items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Example5, {}, void 0, !1, {
        fileName: "app/layouts/Navigation.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/layouts/Navigation.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/layouts/Navigation.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react23.Dialog, { as: "div", className: "lg:hidden", open: mobileMenuOpen, onClose: setMobileMenuOpen, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "fixed inset-0 z-50" }, void 0, !1, {
        fileName: "app/layouts/Navigation.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react23.Dialog.Panel, { className: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react24.Link, { to: "#", className: "-m-1.5 p-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "sr-only", children: companyDetails.name }, void 0, !1, {
              fileName: "app/layouts/Navigation.tsx",
              lineNumber: 46,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("img", { className: "h-40 w-auto", src: "https://strapi342134.s3.amazonaws.com/logo-black.png", alt: "" }, void 0, !1, {
              fileName: "app/layouts/Navigation.tsx",
              lineNumber: 47,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/layouts/Navigation.tsx",
            lineNumber: 45,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("button", { type: "button", className: "-m-2.5 rounded-md p-2.5 text-gray-700", onClick: () => setMobileMenuOpen(!1), children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "sr-only", children: "Close menu" }, void 0, !1, {
              fileName: "app/layouts/Navigation.tsx",
              lineNumber: 50,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_outline3.XMarkIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/layouts/Navigation.tsx",
              lineNumber: 51,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/layouts/Navigation.tsx",
            lineNumber: 49,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/layouts/Navigation.tsx",
          lineNumber: 44,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "-my-6 divide-y divide-gray-500/10", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "space-y-2 py-6", children: navigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react24.Link, { to: item.href, className: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50", children: item.name }, (0, import_uuid2.v4)(), !1, {
            fileName: "app/layouts/Navigation.tsx",
            lineNumber: 58,
            columnNumber: 19
          }, this)) }, void 0, !1, {
            fileName: "app/layouts/Navigation.tsx",
            lineNumber: 56,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react24.Link, { to: "/sign-in", className: "-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50", children: "Log in" }, void 0, !1, {
            fileName: "app/layouts/Navigation.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/layouts/Navigation.tsx",
            lineNumber: 63,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "py-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react24.Link, { to: "/sign-up", className: "rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Buy Prison Number" }, void 0, !1, {
            fileName: "app/layouts/Navigation.tsx",
            lineNumber: 69,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/layouts/Navigation.tsx",
            lineNumber: 68,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/layouts/Navigation.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/layouts/Navigation.tsx",
          lineNumber: 54,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layouts/Navigation.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/layouts/Navigation.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layouts/Navigation.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/terms-and-conditions.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function Example6() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Navbar, {}, void 0, !1, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "relative isolate overflow-hidden bg-white py-24 sm:py-32", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "div",
        {
          className: "aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30",
          style: {
            clipPath: "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)"
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/terms-and-conditions.tsx",
          lineNumber: 10,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/terms-and-conditions.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:mx-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-lg font-semibold leading-8 tracking-tight text-indigo-600", children: "Welcome to Convo!" }, void 0, !1, {
            fileName: "app/routes/terms-and-conditions.tsx",
            lineNumber: 19,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl", children: "Terms & Conditions" }, void 0, !1, {
            fileName: "app/routes/terms-and-conditions.tsx",
            lineNumber: 20,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "mt-6 text-xl leading-8 text-gray-700", children: "These terms and conditions outline the rules and regulations for the use of Convo\u2019s website and services. By accessing this website or using our services, you agree to be bound by these terms and conditions. If you disagree with any part of these terms and conditions, please do not use our website or services." }, void 0, !1, {
            fileName: "app/routes/terms-and-conditions.tsx",
            lineNumber: 21,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/terms-and-conditions.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "relative lg:order-last lg:col-span-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("svg", { className: "absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]", "aria-hidden": "true", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("pattern", { id: "e87443c8-56e4-4c20-9111-55b82fa704e3", width: 200, height: 200, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("path", { d: "M0.5 0V200M200 0.5L0 0.499983" }, void 0, !1, {
                fileName: "app/routes/terms-and-conditions.tsx",
                lineNumber: 28,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/routes/terms-and-conditions.tsx",
                lineNumber: 27,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/terms-and-conditions.tsx",
                lineNumber: 26,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: "url(#e87443c8-56e4-4c20-9111-55b82fa704e3)" }, void 0, !1, {
                fileName: "app/routes/terms-and-conditions.tsx",
                lineNumber: 31,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/terms-and-conditions.tsx",
              lineNumber: 25,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("figure", { className: "border-l border-indigo-600 pl-8", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("blockquote", { className: "text-xl font-semibold leading-8 tracking-tight text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: "\u201CWith Connnvo, my husband can finally afford to ring us every day. It\u2019s made such a difference for us and our kids.\u201D -" }, void 0, !1, {
                fileName: "app/routes/terms-and-conditions.tsx",
                lineNumber: 35,
                columnNumber: 19
              }, this) }, void 0, !1, {
                fileName: "app/routes/terms-and-conditions.tsx",
                lineNumber: 34,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("figcaption", { className: "mt-8 flex gap-x-4", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("img", { src: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", alt: "", className: "mt-1 h-10 w-10 flex-none rounded-full bg-gray-50" }, void 0, !1, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 38,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-sm leading-6", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "font-semibold text-gray-900", children: "Sarah, Melbourne, Victoria" }, void 0, !1, {
                    fileName: "app/routes/terms-and-conditions.tsx",
                    lineNumber: 40,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "text-gray-600", children: "@sarah" }, void 0, !1, {
                    fileName: "app/routes/terms-and-conditions.tsx",
                    lineNumber: 41,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 39,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/terms-and-conditions.tsx",
                lineNumber: 37,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/terms-and-conditions.tsx",
              lineNumber: 33,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/terms-and-conditions.tsx",
            lineNumber: 24,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "max-w-xl text-base leading-7 text-gray-700 lg:col-span-7", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("ul", { className: "mt-8 max-w-xl space-y-8 text-gray-600", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { className: "flex gap-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_solid4.ArrowRightCircleIcon, { className: "mt-1 h-5 w-5 flex-none text-indigo-600", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 49,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Intellectual Property." }, void 0, !1, {
                    fileName: "app/routes/terms-and-conditions.tsx",
                    lineNumber: 51,
                    columnNumber: 21
                  }, this),
                  " The content of this website, including but not limited to text, graphics, logos, images, and software, is the property of Convo and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, modify, or distribute any content on this website without our prior written consent."
                ] }, void 0, !0, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 50,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/terms-and-conditions.tsx",
                lineNumber: 48,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { className: "flex gap-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_solid4.ArrowRightCircleIcon, { className: "mt-1 h-5 w-5 flex-none text-indigo-600", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 56,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Use of Services." }, void 0, !1, {
                    fileName: "app/routes/terms-and-conditions.tsx",
                    lineNumber: 58,
                    columnNumber: 21
                  }, this),
                  " Our services are intended for personal and non-commercial use only. You may not use our services for any illegal or unauthorized purpose or in any way that violates these terms and conditions. We reserve the right to terminate your access to our services if you engage in any prohibited activity."
                ] }, void 0, !0, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 57,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/terms-and-conditions.tsx",
                lineNumber: 55,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { className: "flex gap-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_solid4.ArrowRightCircleIcon, { className: "mt-1 h-5 w-5 flex-none text-indigo-600", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 62,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Privacy Policy." }, void 0, !1, {
                    fileName: "app/routes/terms-and-conditions.tsx",
                    lineNumber: 64,
                    columnNumber: 21
                  }, this),
                  " Your privacy is important to us. Please refer to our Privacy Policy for information on how we collect, use, and protect your personal information."
                ] }, void 0, !0, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 63,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/terms-and-conditions.tsx",
                lineNumber: 61,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { className: "flex gap-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_solid4.ArrowRightCircleIcon, { className: "mt-1 h-5 w-5 flex-none text-indigo-600", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 68,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Disclaimer of Warranties." }, void 0, !1, {
                    fileName: "app/routes/terms-and-conditions.tsx",
                    lineNumber: 70,
                    columnNumber: 21
                  }, this),
                  " We provide our services \u201Cas is\u201D and without warranty of any kind. We do not guarantee that our services will be error-free or uninterrupted or that any defects will be corrected. We are not responsible for any loss or damage resulting from the use of our services."
                ] }, void 0, !0, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 69,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/terms-and-conditions.tsx",
                lineNumber: 67,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { className: "flex gap-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_solid4.ArrowRightCircleIcon, { className: "mt-1 h-5 w-5 flex-none text-indigo-600", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 74,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Limitation of Liability." }, void 0, !1, {
                    fileName: "app/routes/terms-and-conditions.tsx",
                    lineNumber: 76,
                    columnNumber: 21
                  }, this),
                  " To the extent permitted by law, we will not be liable for any indirect, consequential, or incidental damages arising out of the use or inability to use our services, even if we have been advised of the possibility of such damages."
                ] }, void 0, !0, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 75,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/terms-and-conditions.tsx",
                lineNumber: 73,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { className: "flex gap-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_solid4.ArrowRightCircleIcon, { className: "mt-1 h-5 w-5 flex-none text-indigo-600", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 80,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Indemnification." }, void 0, !1, {
                    fileName: "app/routes/terms-and-conditions.tsx",
                    lineNumber: 82,
                    columnNumber: 21
                  }, this),
                  " You agree to indemnify and hold us harmless from any claim or demand, including reasonable attorneys\u2019 fees, arising out of your use of our services, your violation of these terms and conditions, or your violation of any rights of another."
                ] }, void 0, !0, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 81,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/terms-and-conditions.tsx",
                lineNumber: 79,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { className: "flex gap-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_solid4.ArrowRightCircleIcon, { className: "mt-1 h-5 w-5 flex-none text-indigo-600", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 86,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Changes to Terms and Conditions." }, void 0, !1, {
                    fileName: "app/routes/terms-and-conditions.tsx",
                    lineNumber: 88,
                    columnNumber: 21
                  }, this),
                  " We reserve the right to modify these terms and conditions at any time without prior notice. By continuing to use our services after we post any such changes, you accept the modified terms and conditions."
                ] }, void 0, !0, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 87,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/terms-and-conditions.tsx",
                lineNumber: 85,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("li", { className: "flex gap-x-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_solid4.ArrowRightCircleIcon, { className: "mt-1 h-5 w-5 flex-none text-indigo-600", "aria-hidden": "true" }, void 0, !1, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 92,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Governing Law." }, void 0, !1, {
                    fileName: "app/routes/terms-and-conditions.tsx",
                    lineNumber: 94,
                    columnNumber: 21
                  }, this),
                  " These terms and conditions shall be governed by and construed in accordance with the laws of [State/Country], without regard to its conflict of law provisions."
                ] }, void 0, !0, {
                  fileName: "app/routes/terms-and-conditions.tsx",
                  lineNumber: 93,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/terms-and-conditions.tsx",
                lineNumber: 91,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/terms-and-conditions.tsx",
              lineNumber: 47,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { className: "mt-16 text-2xl font-bold tracking-tight text-gray-900", children: "Contact Us" }, void 0, !1, {
              fileName: "app/routes/terms-and-conditions.tsx",
              lineNumber: 99,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "mt-6", children: "If you have any questions or concerns about these terms and conditions, please contact us at [contact information]." }, void 0, !1, {
              fileName: "app/routes/terms-and-conditions.tsx",
              lineNumber: 100,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/terms-and-conditions.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/terms-and-conditions.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/terms-and-conditions.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/terms-and-conditions.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/terms-and-conditions.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard._index.tsx
var dashboard_index_exports = {};
__export(dashboard_index_exports, {
  default: () => Example11
});

// app/components/headings/withLable.tsx
var import_solid5 = require("@heroicons/react/20/solid"), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function Example7() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "relative border-1 border isolate overflow-hidden bg-gray-100 py-12 mx-6 rounded-lg", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      "div",
      {
        className: "aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#631bdf] to-[#776fff] opacity-20",
        style: {
          clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/headings/withLable.tsx",
        lineNumber: 32,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/headings/withLable.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(
      "div",
      {
        className: "aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#5118ee] to-[#776fff] opacity-20",
        style: {
          clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }
      },
      void 0,
      !1,
      {
        fileName: "app/components/headings/withLable.tsx",
        lineNumber: 41,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/headings/withLable.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: " max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:mx-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h2", { className: "text-4xl font-bold tracking-tight text-grey-900 sm:text-6xl", children: "Dashboard" }, void 0, !1, {
        fileName: "app/components/headings/withLable.tsx",
        lineNumber: 51,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-800", children: "Welcome to the new Connnvo User Panel, Dionne!" }, void 0, !1, {
        fileName: "app/components/headings/withLable.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/headings/withLable.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/headings/withLable.tsx",
      lineNumber: 49,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/headings/withLable.tsx",
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

// app/components/cards/PaymentCard.tsx
var import_react25 = require("react"), import_react26 = require("@headlessui/react"), import_solid6 = require("@heroicons/react/20/solid"), import_react27 = require("@remix-run/react"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime"), statuses = {
  Paid: "text-green-700 bg-green-50 ring-green-600/20",
  Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Overdue: "text-red-700 bg-red-50 ring-red-600/10"
}, clients = [
  {
    id: 1,
    name: "Your Last Payment",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_solid6.CreditCardIcon, { className: "h-8 w-8 text-indigo-500", "aria-hidden": "true" }, void 0, !1, {
      fileName: "app/components/cards/PaymentCard.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      amount: "$30.00",
      status: "Paid"
    }
  }
];
function classNames7(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Example8() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("ul", { className: " m-4", children: clients.map((client) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
    "li",
    {
      className: "overflow-hidden rounded-xl border border-gray-200",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6", children: [
          client.icon,
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "text-sm font-medium leading-6 text-gray-900", children: client.name }, void 0, !1, {
            fileName: "app/components/cards/PaymentCard.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react26.Menu, { as: "div", className: "relative ml-auto", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react26.Menu.Button, { className: "-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "sr-only", children: "Open options" }, void 0, !1, {
                fileName: "app/components/cards/PaymentCard.tsx",
                lineNumber: 65,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                import_solid6.EllipsisHorizontalIcon,
                {
                  className: "h-5 w-5",
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/cards/PaymentCard.tsx",
                  lineNumber: 66,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/cards/PaymentCard.tsx",
              lineNumber: 64,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
              import_react26.Transition,
              {
                as: import_react25.Fragment,
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react26.Menu.Items, { className: "absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react26.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                    import_react27.Link,
                    {
                      to: "#",
                      className: classNames7(
                        active ? "bg-gray-50" : "",
                        "block px-3 py-1 text-sm leading-6 text-gray-900"
                      ),
                      children: [
                        "View",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "sr-only", children: [
                          ", ",
                          client.name
                        ] }, void 0, !0, {
                          fileName: "app/components/cards/PaymentCard.tsx",
                          lineNumber: 90,
                          columnNumber: 29
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/components/cards/PaymentCard.tsx",
                      lineNumber: 83,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/cards/PaymentCard.tsx",
                    lineNumber: 81,
                    columnNumber: 19
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_react26.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                    import_react27.Link,
                    {
                      to: "#",
                      className: classNames7(
                        active ? "bg-gray-50" : "",
                        "block px-3 py-1 text-sm leading-6 text-gray-900"
                      ),
                      children: [
                        "Edit",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("span", { className: "sr-only", children: [
                          ", ",
                          client.name
                        ] }, void 0, !0, {
                          fileName: "app/components/cards/PaymentCard.tsx",
                          lineNumber: 103,
                          columnNumber: 29
                        }, this)
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/components/cards/PaymentCard.tsx",
                      lineNumber: 96,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/components/cards/PaymentCard.tsx",
                    lineNumber: 94,
                    columnNumber: 19
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/cards/PaymentCard.tsx",
                  lineNumber: 80,
                  columnNumber: 17
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/cards/PaymentCard.tsx",
                lineNumber: 71,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/cards/PaymentCard.tsx",
            lineNumber: 63,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/cards/PaymentCard.tsx",
          lineNumber: 58,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("dl", { className: "-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex justify-between gap-x-4 py-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("dt", { className: "text-gray-500", children: "Last invoice" }, void 0, !1, {
              fileName: "app/components/cards/PaymentCard.tsx",
              lineNumber: 113,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("dd", { className: "text-gray-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("time", { dateTime: client.lastInvoice.dateTime, children: client.lastInvoice.date }, void 0, !1, {
              fileName: "app/components/cards/PaymentCard.tsx",
              lineNumber: 115,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/components/cards/PaymentCard.tsx",
              lineNumber: 114,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/cards/PaymentCard.tsx",
            lineNumber: 112,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "flex justify-between gap-x-4 py-3", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("dt", { className: "text-gray-500", children: "Amount" }, void 0, !1, {
              fileName: "app/components/cards/PaymentCard.tsx",
              lineNumber: 121,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("dd", { className: "flex items-start gap-x-2", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)("div", { className: "font-medium text-gray-900", children: client.lastInvoice.amount }, void 0, !1, {
                fileName: "app/components/cards/PaymentCard.tsx",
                lineNumber: 123,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(
                "div",
                {
                  className: classNames7(
                    statuses[client.lastInvoice.status],
                    "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset"
                  ),
                  children: client.lastInvoice.status
                },
                void 0,
                !1,
                {
                  fileName: "app/components/cards/PaymentCard.tsx",
                  lineNumber: 126,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/cards/PaymentCard.tsx",
              lineNumber: 122,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/cards/PaymentCard.tsx",
            lineNumber: 120,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/cards/PaymentCard.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this)
      ]
    },
    client.id,
    !0,
    {
      fileName: "app/components/cards/PaymentCard.tsx",
      lineNumber: 54,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/cards/PaymentCard.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

// app/components/cards/ActionCards.tsx
var import_outline4 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), actions = [
  {
    title: "Forward Number",
    href: "#",
    description: "Quickly change the forwarding number to receive calls from a different device",
    icon: import_outline4.ClockIcon,
    iconForeground: "text-teal-700",
    iconBackground: "bg-teal-50"
  },
  {
    title: "Buy Another Local Number",
    href: "#",
    description: "Quickly buy another local number",
    icon: import_outline4.CheckBadgeIcon,
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-50"
  },
  {
    title: "Account Information",
    href: "#",
    description: "View or edit account information - quickly change email address and contact info",
    icon: import_outline4.UsersIcon,
    iconForeground: "text-sky-700",
    iconBackground: "bg-sky-50"
  },
  {
    title: "Customer Support",
    href: "#",
    description: "Speak to a representative and resolve your problem",
    icon: import_outline4.BanknotesIcon,
    iconForeground: "text-yellow-700",
    iconBackground: "bg-yellow-50"
  },
  {
    title: "Documentation",
    href: "#",
    description: "We have plenty of documents to help you navigate our dashboard",
    icon: import_outline4.ReceiptRefundIcon,
    iconForeground: "text-rose-700",
    iconBackground: "bg-rose-50"
  },
  {
    title: "Cancel Subscription",
    href: "#",
    description: "Quickly cancle your subscription",
    icon: import_outline4.AcademicCapIcon,
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-50"
  }
];
function classNames8(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Example9() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "border-1 border m-6 overflow-hidden rounded-lg bg-gray-200 sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0", children: actions.map((action4, actionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
    "div",
    {
      className: classNames8(
        actionIdx === 0 ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none" : "",
        actionIdx === 1 ? "sm:rounded-tr-lg" : "",
        actionIdx === actions.length - 2 ? "sm:rounded-bl-lg" : "",
        actionIdx === actions.length - 1 ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none" : "",
        "group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500"
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          "span",
          {
            className: classNames8(
              action4.iconBackground,
              action4.iconForeground,
              "inline-flex rounded-lg p-3 ring-4 ring-white"
            ),
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(action4.icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/components/cards/ActionCards.tsx",
              lineNumber: 94,
              columnNumber: 15
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/cards/ActionCards.tsx",
            lineNumber: 87,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/cards/ActionCards.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", { className: "mt-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("h3", { className: "text-base font-semibold leading-6 text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("a", { href: action4.href, className: "focus:outline-none", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("span", { className: "absolute inset-0", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/components/cards/ActionCards.tsx",
              lineNumber: 101,
              columnNumber: 17
            }, this),
            action4.title
          ] }, void 0, !0, {
            fileName: "app/components/cards/ActionCards.tsx",
            lineNumber: 99,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/components/cards/ActionCards.tsx",
            lineNumber: 98,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("p", { className: "mt-2 text-sm text-gray-500", children: action4.description }, void 0, !1, {
            fileName: "app/components/cards/ActionCards.tsx",
            lineNumber: 105,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/cards/ActionCards.tsx",
          lineNumber: 97,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          "span",
          {
            className: "pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400",
            "aria-hidden": "true",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("svg", { className: "h-6 w-6", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("path", { d: "M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" }, void 0, !1, {
              fileName: "app/components/cards/ActionCards.tsx",
              lineNumber: 112,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/cards/ActionCards.tsx",
              lineNumber: 111,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/cards/ActionCards.tsx",
            lineNumber: 107,
            columnNumber: 11
          },
          this
        )
      ]
    },
    action4.title,
    !0,
    {
      fileName: "app/components/cards/ActionCards.tsx",
      lineNumber: 72,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/cards/ActionCards.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}

// app/components/cards/AddNumberCard.tsx
var import_react28 = require("react"), import_react29 = require("@headlessui/react"), import_solid7 = require("@heroicons/react/20/solid"), import_react30 = require("@remix-run/react"), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
var clients2 = [
  {
    id: 1,
    name: "Add Number",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_solid7.PlusCircleIcon, { className: "h-8 w-8 text-green-500", "aria-hidden": "true" }, void 0, !1, {
      fileName: "app/components/cards/AddNumberCard.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      amount: "$30.00",
      status: "Paid"
    }
  }
];
function classNames9(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Example10() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("ul", { className: "m-6 ", children: clients2.map((client) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    "li",
    {
      className: "overflow-hidden bg-green-100  rounded-xl border border-gray-200",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "flex items-center gap-x-4 border-b border-gray-900/5 p-6", children: [
        client.icon,
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("div", { className: "text-lg font-medium leading-6 text-gray-900", children: client.name }, void 0, !1, {
          fileName: "app/components/cards/AddNumberCard.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react29.Menu, { as: "div", className: "relative ml-auto", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react29.Menu.Button, { className: "-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "sr-only", children: "Open options" }, void 0, !1, {
              fileName: "app/components/cards/AddNumberCard.tsx",
              lineNumber: 66,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
              import_solid7.EllipsisHorizontalIcon,
              {
                className: "h-5 w-5",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/components/cards/AddNumberCard.tsx",
                lineNumber: 67,
                columnNumber: 17
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/cards/AddNumberCard.tsx",
            lineNumber: 65,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
            import_react29.Transition,
            {
              as: import_react28.Fragment,
              enter: "transition ease-out duration-100",
              enterFrom: "transform opacity-0 scale-95",
              enterTo: "transform opacity-100 scale-100",
              leave: "transition ease-in duration-75",
              leaveFrom: "transform opacity-100 scale-100",
              leaveTo: "transform opacity-0 scale-95",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react29.Menu.Items, { className: "absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react29.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                  import_react30.Link,
                  {
                    to: "#",
                    className: classNames9(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900"
                    ),
                    children: [
                      "View",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "sr-only", children: [
                        ", ",
                        client.name
                      ] }, void 0, !0, {
                        fileName: "app/components/cards/AddNumberCard.tsx",
                        lineNumber: 91,
                        columnNumber: 29
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/cards/AddNumberCard.tsx",
                    lineNumber: 84,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/cards/AddNumberCard.tsx",
                  lineNumber: 82,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(import_react29.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
                  import_react30.Link,
                  {
                    to: "#",
                    className: classNames9(
                      active ? "bg-gray-50" : "",
                      "block px-3 py-1 text-sm leading-6 text-gray-900"
                    ),
                    children: [
                      "Edit",
                      /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)("span", { className: "sr-only", children: [
                        ", ",
                        client.name
                      ] }, void 0, !0, {
                        fileName: "app/components/cards/AddNumberCard.tsx",
                        lineNumber: 104,
                        columnNumber: 29
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/cards/AddNumberCard.tsx",
                    lineNumber: 97,
                    columnNumber: 23
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/components/cards/AddNumberCard.tsx",
                  lineNumber: 95,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/cards/AddNumberCard.tsx",
                lineNumber: 81,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/cards/AddNumberCard.tsx",
              lineNumber: 72,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/cards/AddNumberCard.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/cards/AddNumberCard.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this)
    },
    client.id,
    !1,
    {
      fileName: "app/components/cards/AddNumberCard.tsx",
      lineNumber: 55,
      columnNumber: 9
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/cards/AddNumberCard.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard._index.tsx
var import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function Example11() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("main", { className: "py-10 lg:pl-72", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Example7, {}, void 0, !1, {
      fileName: "app/routes/dashboard._index.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)("div", { className: "flex", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Example10, {}, void 0, !1, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Example8, {}, void 0, !1, {
        fileName: "app/routes/dashboard._index.tsx",
        lineNumber: 13,
        columnNumber: 27
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/dashboard._index.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(Example9, {}, void 0, !1, {
      fileName: "app/routes/dashboard._index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard._index.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/onboard.success.tsx
var onboard_success_exports = {};
__export(onboard_success_exports, {
  default: () => AccountRegister2,
  loader: () => loader3,
  meta: () => meta7
});
var import_react31 = require("react");
var import_node5 = require("@remix-run/node"), import_ssr2 = require("@clerk/remix/ssr.server"), import_clerk_sdk_node = __toESM(require("@clerk/clerk-sdk-node"));

// app/customerSubscription.tsx
var import_axios = __toESM(require("axios")), stripeSecretKey = "sk_test_51IjLitLS6zBJNnGQEM5DrXgvnFY6tdrwQTYt01rmcHFvvFvPqDofh7cb7pCq2S8g29enS5XZvZS92pObSfVVUhGK00LfNj7RYW";
async function getCustomerSubscription(email) {
  try {
    let customer2 = (await import_axios.default.get(`https://api.stripe.com/v1/customers?email=${email}`, {
      headers: {
        Authorization: `Bearer ${stripeSecretKey}`
      }
    })).data.data[0];
    if (!customer2)
      throw new Error("Customer not found");
    let customerId = customer2.id, subscriptions = (await import_axios.default.get(`https://api.stripe.com/v1/subscriptions?customer=${customerId}`, {
      headers: {
        Authorization: `Bearer ${stripeSecretKey}`
      }
    })).data.data;
    if (!subscriptions || subscriptions.length === 0)
      throw new Error("Customer has no subscriptions");
    return subscriptions;
  } catch (error) {
    throw console.error(error), new Error("Failed to fetch customer subscription details");
  }
}

// app/routes/onboard.success.tsx
var import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function meta7() {
  return [
    { title: "Home - Convo Local Numbers" },
    { description: "Connecting Prisoners with Families" }
  ];
}
var loader3 = async (args) => {
  let { userId } = await (0, import_ssr2.getAuth)(args);
  if (!userId)
    return (0, import_node5.redirect)("/");
  let response = await import_clerk_sdk_node.default.users.getUser(userId);
  try {
    let customerSubscription = await getCustomerSubscription(
      response.emailAddresses[0].emailAddress
    );
    return customerSubscription[0].plan.active === !1 ? (0, import_node5.json)({
      status: !1,
      message: "Subscription is invalid"
    }) : (0, import_node5.json)({ subscription: customerSubscription });
  } catch (error) {
    return console.error(error), (0, import_node5.json)(
      { error: "Failed to fetch customer subscription details" },
      500
    );
  }
};
function AccountRegister2() {
  let { setOnboardData, onboardData } = useOnboardData();
  return (0, import_react31.useEffect)(() => {
    setOnboardData({
      ...onboardData,
      progressBar: { completed: 4, total: 4 }
    });
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("div", { className: "bg-white", children: [
    onboardData.progressBar.completed === 4 ? /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)("p", { className: "mt-6 text-4xl max-w-5xl mx-auto font-bold tracking-tight text-gray-900 sm:text-5xl text-center", children: "Congratulations you have Successfully subscribed" }, void 0, !1, {
      fileName: "app/routes/onboard.success.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(SelectOption, {}, void 0, !1, {
      fileName: "app/routes/onboard.success.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, this),
    onboardData.progressBar.completed === 4 && /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
      BottomNavbar,
      {
        link: "/dashboard",
        completed: onboardData.progressBar.completed
      },
      void 0,
      !1,
      {
        fileName: "app/routes/onboard.success.tsx",
        lineNumber: 97,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/onboard.success.tsx",
    lineNumber: 87,
    columnNumber: 5
  }, this);
}

// app/routes/not-authorised.tsx
var not_authorised_exports = {};
__export(not_authorised_exports, {
  default: () => Example12
});
var import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function Example12() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(import_jsx_dev_runtime28.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)("h1", { children: "Not authorised" }, void 0, !1, {
    fileName: "app/routes/not-authorised.tsx",
    lineNumber: 5,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/not-authorised.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/not-authorised.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/privacy-policy.tsx
var privacy_policy_exports = {};
__export(privacy_policy_exports, {
  default: () => Example13
});
var import_solid8 = require("@heroicons/react/20/solid"), import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function Example13() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "relative isolate overflow-hidden bg-white py-24 sm:py-32", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
      "div",
      {
        className: "absolute -top-80 left-[max(6rem,33%)] -z-10 transform-gpu blur-3xl sm:left-1/2 md:top-20 lg:ml-20 xl:top-3 xl:ml-56",
        "aria-hidden": "true",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
          "div",
          {
            className: "aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30",
            style: {
              clipPath: "polygon(63.1% 29.6%, 100% 17.2%, 76.7% 3.1%, 48.4% 0.1%, 44.6% 4.8%, 54.5% 25.4%, 59.8% 49.1%, 55.3% 57.9%, 44.5% 57.3%, 27.8% 48%, 35.1% 81.6%, 0% 97.8%, 39.3% 100%, 35.3% 81.5%, 97.2% 52.8%, 63.1% 29.6%)"
            }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 10,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/privacy-policy.tsx",
        lineNumber: 6,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:mx-0", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "text-lg font-semibold leading-8 tracking-tight text-indigo-600", children: "Protect your information" }, void 0, !1, {
          fileName: "app/routes/privacy-policy.tsx",
          lineNumber: 20,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h1", { className: "mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl", children: "Privacy Policy & Permissions" }, void 0, !1, {
          fileName: "app/routes/privacy-policy.tsx",
          lineNumber: 23,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "mt-6 text-xl leading-8 text-gray-700", children: "At Convo, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services. By accessing or using our services, you consent to the practices described in this Privacy Policy." }, void 0, !1, {
          fileName: "app/routes/privacy-policy.tsx",
          lineNumber: 26,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/privacy-policy.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "relative lg:order-last lg:col-span-5", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
            "svg",
            {
              className: "absolute -top-[40rem] left-1 -z-10 h-[64rem] w-[175.5rem] -translate-x-1/2 stroke-gray-900/10 [mask-image:radial-gradient(64rem_64rem_at_111.5rem_0%,white,transparent)]",
              "aria-hidden": "true",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                  "pattern",
                  {
                    id: "e87443c8-56e4-4c20-9111-55b82fa704e3",
                    width: 200,
                    height: 200,
                    patternUnits: "userSpaceOnUse",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("path", { d: "M0.5 0V200M200 0.5L0 0.499983" }, void 0, !1, {
                      fileName: "app/routes/privacy-policy.tsx",
                      lineNumber: 47,
                      columnNumber: 19
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/privacy-policy.tsx",
                    lineNumber: 41,
                    columnNumber: 17
                  },
                  this
                ) }, void 0, !1, {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 40,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                  "rect",
                  {
                    width: "100%",
                    height: "100%",
                    strokeWidth: 0,
                    fill: "url(#e87443c8-56e4-4c20-9111-55b82fa704e3)"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/privacy-policy.tsx",
                    lineNumber: 50,
                    columnNumber: 15
                  },
                  this
                )
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/routes/privacy-policy.tsx",
              lineNumber: 36,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("figure", { className: "border-l border-indigo-600 pl-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("blockquote", { className: "text-xl font-semibold leading-8 tracking-tight text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { children: "\u201CThanks to Convo, my son can call home more often. It means the world to us.\u201D -" }, void 0, !1, {
              fileName: "app/routes/privacy-policy.tsx",
              lineNumber: 59,
              columnNumber: 17
            }, this) }, void 0, !1, {
              fileName: "app/routes/privacy-policy.tsx",
              lineNumber: 58,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("figcaption", { className: "mt-8 flex gap-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                "img",
                {
                  src: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                  alt: "",
                  className: "mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 65,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "text-sm leading-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "font-semibold text-gray-900", children: "Jin, Viatnam" }, void 0, !1, {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 71,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "text-gray-600", children: "@jin" }, void 0, !1, {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 74,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/privacy-policy.tsx",
                lineNumber: 70,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/privacy-policy.tsx",
              lineNumber: 64,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 57,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/privacy-policy.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("div", { className: "max-w-xl text-base leading-7 text-gray-700 lg:col-span-7", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "text-gray-900 font-semibold", children: "Information We Collect" }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { children: "When you sign up for our services or contact us for support, we may collect the following types of information:" }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 83,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("ul", { role: "list", className: "mt-8 max-w-xl space-y-8 text-gray-600", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                import_solid8.ArrowRightCircleIcon,
                {
                  className: "mt-1 h-5 w-5 flex-none text-indigo-600",
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 89,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Personal Information:" }, void 0, !1, {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 94,
                  columnNumber: 19
                }, this),
                " ",
                "This may include your name, email address, phone number, and billing information. We collect this information to set up and manage your account, process payments, and provide customer support. However we do not hold any credit card details or information. This is all managed by the third party payments platform Stripe."
              ] }, void 0, !0, {
                fileName: "app/routes/privacy-policy.tsx",
                lineNumber: 93,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/privacy-policy.tsx",
              lineNumber: 88,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                import_solid8.ArrowRightCircleIcon,
                {
                  className: "mt-1 h-5 w-5 flex-none text-indigo-600",
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 106,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Communication Data:" }, void 0, !1, {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 111,
                  columnNumber: 19
                }, this),
                " ",
                "We may collect data related to your interactions with our services, such as call logs, message records, and customer support communications. This helps us address your inquiries, improve our services, and ensure quality and compliance."
              ] }, void 0, !0, {
                fileName: "app/routes/privacy-policy.tsx",
                lineNumber: 110,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/privacy-policy.tsx",
              lineNumber: 105,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                import_solid8.ArrowRightCircleIcon,
                {
                  className: "mt-1 h-5 w-5 flex-none text-indigo-600",
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 121,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Website Usage Information:" }, void 0, !1, {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 126,
                  columnNumber: 19
                }, this),
                " ",
                "We may collect non-personally identifiable information about your use of our website, such as IP address, browser type, device information, and pages visited. This data is collected for analytics purposes and to enhance your website experience."
              ] }, void 0, !0, {
                fileName: "app/routes/privacy-policy.tsx",
                lineNumber: 125,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/privacy-policy.tsx",
              lineNumber: 120,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 87,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "text-gray-900 mt-8 font-semibold", children: "Cookies and Tracking Technologies" }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 136,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { children: "Our website may use cookies or other tracking technologies to enhance your browsing experience. By using our website, you consent to the use of cookies in accordance with our Cookie Policy. You can manage your cookie preferences and learn more about our use of cookies by visiting our Cookie Policy page." }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 139,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "mt-16 text-2xl font-bold tracking-tight text-gray-900", children: "How We Use Your Information" }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 146,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "mt-6", children: "We use the information we collect to:" }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 149,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("ul", { className: "mt-8 max-w-xl space-y-8 text-gray-600", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                import_solid8.ArrowRightCircleIcon,
                {
                  className: "mt-1 h-5 w-5 flex-none text-indigo-600",
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 152,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Better Our Customer Experience:" }, void 0, !1, {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 157,
                  columnNumber: 19
                }, this),
                " ",
                "We use the information to provide and improve our services, including connecting your loved ones in correctional facilities and facilitating communication."
              ] }, void 0, !0, {
                fileName: "app/routes/privacy-policy.tsx",
                lineNumber: 156,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/privacy-policy.tsx",
              lineNumber: 151,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                import_solid8.ArrowRightCircleIcon,
                {
                  className: "mt-1 h-5 w-5 flex-none text-indigo-600",
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 166,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Provide Our Service:" }, void 0, !1, {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 171,
                  columnNumber: 19
                }, this),
                " ",
                "Process payments and manage your account, including sending invoices, notifications, and important service updates."
              ] }, void 0, !0, {
                fileName: "app/routes/privacy-policy.tsx",
                lineNumber: 170,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/privacy-policy.tsx",
              lineNumber: 165,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                import_solid8.ArrowRightCircleIcon,
                {
                  className: "mt-1 h-5 w-5 flex-none text-indigo-600",
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 179,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Customer Service:" }, void 0, !1, {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 184,
                  columnNumber: 19
                }, this),
                " ",
                "Respond to your inquiries, support requests, and customer service needs."
              ] }, void 0, !0, {
                fileName: "app/routes/privacy-policy.tsx",
                lineNumber: 183,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/privacy-policy.tsx",
              lineNumber: 178,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("li", { className: "flex gap-x-3", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
                import_solid8.ArrowRightCircleIcon,
                {
                  className: "mt-1 h-5 w-5 flex-none text-indigo-600",
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 192,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("span", { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("strong", { className: "font-semibold text-gray-900", children: "Improve Our Service Offering:" }, void 0, !1, {
                  fileName: "app/routes/privacy-policy.tsx",
                  lineNumber: 197,
                  columnNumber: 19
                }, this),
                " ",
                "Understand how our services are used, analyze trends, and enhance our website and offerings."
              ] }, void 0, !0, {
                fileName: "app/routes/privacy-policy.tsx",
                lineNumber: 196,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/privacy-policy.tsx",
              lineNumber: 191,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 150,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "mt-16 text-2xl font-bold tracking-tight text-gray-900", children: "Data Security" }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 205,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "mt-6", children: "We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. We use industry-standard encryption protocols and regularly update our security practices to maintain the integrity and confidentiality of your data." }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 208,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "mt-16 text-2xl font-bold tracking-tight text-gray-900", children: "Third-Party Disclosure" }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 215,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "mt-6", children: "We may share your information with trusted third-party service providers who assist us in delivering our services, processing payments, and improving our website. These providers are contractually obligated to protect your information and use it solely for the purposes specified by us." }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 218,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "mt-16 text-2xl font-bold tracking-tight text-gray-900", children: "Data Retention" }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 225,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "mt-6", children: "We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. After this period, your personal information will be securely deleted or anonymized." }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 228,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "mt-16 text-2xl font-bold tracking-tight text-gray-900", children: "Data Transfers" }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 235,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "mt-6", children: "Your personal information may be transferred to and processed in countries outside of your country of residence. By using our services, you consent to the transfer of your personal information to these countries, which may have different data protection laws." }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 238,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "mt-16 text-2xl font-bold tracking-tight text-gray-900", children: "Children's Privacy" }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 244,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "mt-6", children: "Our services are not intended for use by individuals under the age of 18. We do not knowingly collect personal information from children. If you are a parent or guardian and believe that your child has provided personal information to us, please contact us immediately, and we will take steps to remove such information from our systems." }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 247,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "mt-16 text-2xl font-bold tracking-tight text-gray-900", children: "Marketing Communications" }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 255,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "mt-6", children: "If you have provided your consent, we may send you marketing communications or newsletters about our services. You can opt out of receiving these communications at any time by following the instructions provided in the communication or by contacting us directly." }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 258,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "mt-16 text-2xl font-bold tracking-tight text-gray-900", children: "Data Breach Notification" }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 265,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "mt-6", children: "In the event of a data breach that compromises the security of your personal information, we will take appropriate measures to notify affected users in accordance with applicable laws. We will also notify relevant authorities and regulatory bodies as required." }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 268,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "mt-16 text-2xl font-bold tracking-tight text-gray-900", children: "Links to Third-Party Websites" }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 275,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "mt-6", children: "Our website may contain links to third-party websites or services. Please note that this Privacy Policy does not apply to those websites or services. We encourage you to review the privacy policies of any third-party sites you visit." }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 278,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "mt-16 text-2xl font-bold tracking-tight text-gray-900", children: "Updates to the Privacy Policy" }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 284,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "mt-6", children: "We reserve the right to update this Privacy Policy as needed to reflect changes in our practices or applicable laws. We will notify you of any material updates by posting the revised Privacy Policy on our website. We encourage you to review this page periodically for any changes. Your continued use of our services after any modifications to the Privacy Policy constitutes your acceptance of the updated terms." }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 287,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("h2", { className: "mt-16 text-2xl font-bold tracking-tight text-gray-900", children: "Contact Us" }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 296,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "mt-6", children: "Email: privacy@convo.com" }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 299,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "mt-2", children: "Phone: XXX-XXX-XXXX" }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 300,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)("p", { className: "mt-6", children: "We value your privacy and are dedicated to protecting your personal information in accordance with applicable privacy laws and best practices." }, void 0, !1, {
            fileName: "app/routes/privacy-policy.tsx",
            lineNumber: 302,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/privacy-policy.tsx",
          lineNumber: 79,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/privacy-policy.tsx",
        lineNumber: 34,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/privacy-policy.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/privacy-policy.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/contact-us.tsx
var contact_us_exports = {};
__export(contact_us_exports, {
  default: () => Example14
});
var import_outline5 = require("@heroicons/react/24/outline"), import_jsx_dev_runtime30 = require("react/jsx-dev-runtime");
function Example14() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "relative isolate bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(Navbar, {}, void 0, !1, {
      fileName: "app/routes/contact-us.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mx-auto max-w-xl lg:mx-0 lg:max-w-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("svg", { className: "absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("pattern", { id: "83fd4e5a-9d52-42fc-97b6-718e5d7ee527", width: 200, height: 200, x: "100%", y: -1, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("path", { d: "M130 200V.5M.5 .5H200", fill: "none" }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 15,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 14,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 13,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: "white" }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 18,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("svg", { x: "100%", y: -1, className: "overflow-visible fill-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("path", { d: "M-470.5 0h201v201h-201Z", strokeWidth: 0 }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 20,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 19,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: "url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" }, void 0, !1, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 22,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 12,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 11,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-gray-900", children: "Get in touch" }, void 0, !1, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 25,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-600", children: "We understand the importance of staying connected with your incarcerated loved ones, and we're here to provide you with the support and assistance you need. If you have any questions, concerns, or need help, please don't hesitate to reach out to us." }, void 0, !1, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("dl", { className: "mt-10 space-y-4 text-base leading-7 text-gray-600", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex gap-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("dt", { className: "flex-none", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "sr-only", children: "Address" }, void 0, !1, {
                fileName: "app/routes/contact-us.tsx",
                lineNumber: 30,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_outline5.BuildingOffice2Icon, { className: "h-7 w-6 text-gray-400", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/routes/contact-us.tsx",
                lineNumber: 31,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 29,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("dd", { children: [
              "545 Mavis Island",
              /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("br", {}, void 0, !1, {
                fileName: "app/routes/contact-us.tsx",
                lineNumber: 35,
                columnNumber: 19
              }, this),
              "Chicago, IL 99191"
            ] }, void 0, !0, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 33,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 28,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex gap-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("dt", { className: "flex-none", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "sr-only", children: "Telephone" }, void 0, !1, {
                fileName: "app/routes/contact-us.tsx",
                lineNumber: 41,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_outline5.PhoneIcon, { className: "h-7 w-6 text-gray-400", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/routes/contact-us.tsx",
                lineNumber: 42,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 40,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("dd", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("a", { className: "hover:text-gray-900", href: "tel:+1 (555) 234-5678", children: "+1 (555) 234-5678" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 45,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 44,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 39,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "flex gap-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("dt", { className: "flex-none", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { className: "sr-only", children: "Email" }, void 0, !1, {
                fileName: "app/routes/contact-us.tsx",
                lineNumber: 52,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_outline5.EnvelopeIcon, { className: "h-7 w-6 text-gray-400", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/routes/contact-us.tsx",
                lineNumber: 53,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 51,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("dd", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("a", { className: "hover:text-gray-900", href: "mailto:hello@example.com", children: "hello@example.com" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 56,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 55,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 27,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("h2", { className: "text-3xl mt-12 font-bold tracking-tight text-gray-900", children: "Sales enquiry" }, void 0, !1, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 62,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-600", children: "Our dedicated customer support team is here to listen and provide guidance. We know that navigating communication in these challenging circumstances can be overwhelming, but rest assured, we're here to help you every step of the way." }, void 0, !1, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 63,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-600", children: "If you have any sales-related inquiries or need information about our services, our patient and knowledgeable sales team is ready to assist you. We understand that finding the right communication solutions for your unique situation is important, and we're committed to helping you make informed decisions." }, void 0, !1, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 64,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-600", children: "We genuinely value your feedback, and we're continuously striving to improve our services to better serve you. If you have any suggestions, comments, or concerns, please share them with us. We appreciate your input and are committed to making your experience with us as smooth and positive as possible." }, void 0, !1, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 65,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-600", children: "We're here to assist you in any way we can. Please don't hesitate to get in touch with us. Your satisfaction and peace of mind are our top priorities." }, void 0, !1, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-600", children: "Or alternatively please fill out the contact form below, and we\u2019ll get back to you as soon as possible." }, void 0, !1, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 67,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact-us.tsx",
        lineNumber: 10,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/contact-us.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("form", { action: "#", method: "POST", className: "px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mx-auto max-w-xl lg:mr-0 lg:max-w-lg", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { htmlFor: "first-name", className: "block text-sm font-semibold leading-6 text-gray-900", children: "First name" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 74,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("input", { type: "text", name: "first-name", id: "first-name", autoComplete: "given-name", className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 78,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 77,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 73,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { htmlFor: "last-name", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Last name" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 82,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("input", { type: "text", name: "last-name", id: "last-name", autoComplete: "family-name", className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 86,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 85,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { htmlFor: "email", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Email" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 90,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("input", { type: "email", name: "email", id: "email", autoComplete: "email", className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 94,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 93,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { htmlFor: "phone-number", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Phone number" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 98,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("input", { type: "tel", name: "phone-number", id: "phone-number", autoComplete: "tel", className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 102,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 101,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 97,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "sm:col-span-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("label", { htmlFor: "message", className: "block text-sm font-semibold leading-6 text-gray-900", children: "Message" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 106,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mt-2.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("textarea", { name: "message", id: "message", rows: 4, className: "block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6", defaultValue: "" }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 110,
              columnNumber: 19
            }, this) }, void 0, !1, {
              fileName: "app/routes/contact-us.tsx",
              lineNumber: 109,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/contact-us.tsx",
            lineNumber: 105,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("div", { className: "mt-8 flex justify-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("button", { type: "submit", className: "rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", children: "Send message" }, void 0, !1, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 115,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/contact-us.tsx",
          lineNumber: 114,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/contact-us.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/contact-us.tsx",
        lineNumber: 70,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/contact-us.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/contact-us.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/pay._index.tsx
var pay_index_exports = {};
__export(pay_index_exports, {
  default: () => Success
});
var import_react32 = require("@remix-run/react"), import_react_stripe_js = require("@stripe/react-stripe-js"), import_jsx_dev_runtime31 = require("react/jsx-dev-runtime");
function Success() {
  let elements = (0, import_react_stripe_js.useElements)(), stripe2 = (0, import_react_stripe_js.useStripe)(), submit = (0, import_react32.useSubmit)(), handleSubmit = async (e) => (e.preventDefault(), stripe2 && elements && stripe2.confirmPayment({
    elements,
    confirmParams: {
      return_url: "http://localhost:3000/pay/success"
    }
  }), submit(e.currentTarget));
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react32.Form, { onSubmit: (e) => handleSubmit(e), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("h1", { className: "text-2xl mb-2", children: "Payment Form Outlet" }, void 0, !1, {
      fileName: "app/routes/pay._index.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_react_stripe_js.PaymentElement, {}, void 0, !1, {
      fileName: "app/routes/pay._index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)("button", { type: "submit", className: "mt-3 bg-indigo-100 p-3 rounded", children: "Pay" }, void 0, !1, {
      fileName: "app/routes/pay._index.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/pay._index.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Example16,
  loader: () => loader4
});
var import_react36 = require("@remix-run/react");

// app/layouts/Sidebar.tsx
var import_react33 = require("react"), import_react34 = require("@headlessui/react"), import_react35 = require("@remix-run/react"), import_outline6 = require("@heroicons/react/24/outline"), import_solid9 = require("@heroicons/react/20/solid"), import_jsx_dev_runtime32 = require("react/jsx-dev-runtime"), customerSupport = [
  { id: 1, name: "Telephone", href: "#", initial: "H", current: !1 },
  { id: 2, name: "Online chat", href: "#", initial: "T", current: !1 },
  { id: 3, name: "Email", href: "#", initial: "W", current: !1 }
], userNavigation = [
  { name: "Profile", href: "/dashboard/account/profile", current: !1 },
  { name: "Billing", href: "/dashboard/account/billing", current: !1 },
  { name: "Plan", href: "/dashboard/account/plan", current: !1 }
];
function classNames10(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Example15() {
  let [sidebarOpen, setSidebarOpen] = (0, import_react33.useState)(!1), [navigation2, setNavigation] = (0, import_react33.useState)([
    { name: "Dashboard", href: "/dashboard", icon: import_outline6.HomeIcon, current: !0 },
    {
      name: "Numbers",
      href: "/dashboard/add-new-number",
      icon: import_outline6.PlusIcon,
      current: !1
    },
    {
      name: "Manage Numbers",
      href: "/dashboard/manage_numbers",
      icon: import_outline6.HashtagIcon,
      current: !1
    }
  ]), handleClick = (link) => {
    let filtered = navigation2.map((item) => item.name !== link.name ? { ...item, current: !1 } : { ...link, current: !0 });
    setNavigation(filtered);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_jsx_dev_runtime32.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react34.Transition.Root, { show: sidebarOpen, as: import_react33.Fragment, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
      import_react34.Dialog,
      {
        as: "div",
        className: "relative z-50 lg:hidden",
        onClose: setSidebarOpen,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            import_react34.Transition.Child,
            {
              as: import_react33.Fragment,
              enter: "transition-opacity ease-linear duration-300",
              enterFrom: "opacity-0",
              enterTo: "opacity-100",
              leave: "transition-opacity ease-linear duration-300",
              leaveFrom: "opacity-100",
              leaveTo: "opacity-0",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "fixed inset-0 bg-gray-900/80" }, void 0, !1, {
                fileName: "app/layouts/Sidebar.tsx",
                lineNumber: 98,
                columnNumber: 15
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/layouts/Sidebar.tsx",
              lineNumber: 89,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "fixed inset-0 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            import_react34.Transition.Child,
            {
              as: import_react33.Fragment,
              enter: "transition ease-in-out duration-300 transform",
              enterFrom: "-translate-x-full",
              enterTo: "translate-x-0",
              leave: "transition ease-in-out duration-300 transform",
              leaveFrom: "translate-x-0",
              leaveTo: "-translate-x-full",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react34.Dialog.Panel, { className: "relative mr-16 flex w-full max-w-xs flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                  import_react34.Transition.Child,
                  {
                    as: import_react33.Fragment,
                    enter: "ease-in-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in-out duration-300",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "absolute left-full top-0 flex w-16 justify-center pt-5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                      "button",
                      {
                        type: "button",
                        className: "-m-2.5 p-2.5",
                        onClick: () => setSidebarOpen(!1),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "sr-only", children: "Close sidebar" }, void 0, !1, {
                            fileName: "app/layouts/Sidebar.tsx",
                            lineNumber: 127,
                            columnNumber: 25
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                            import_outline6.XMarkIcon,
                            {
                              className: "h-6 w-6 text-white",
                              "aria-hidden": "true"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/layouts/Sidebar.tsx",
                              lineNumber: 128,
                              columnNumber: 25
                            },
                            this
                          )
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/layouts/Sidebar.tsx",
                        lineNumber: 122,
                        columnNumber: 23
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/layouts/Sidebar.tsx",
                      lineNumber: 121,
                      columnNumber: 21
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/layouts/Sidebar.tsx",
                    lineNumber: 112,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                    "img",
                    {
                      className: "h-8 w-auto",
                      src: "https://tailwindui.com/img/logos/mark.svg?color=white",
                      alt: "Your Company"
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/layouts/Sidebar.tsx",
                      lineNumber: 138,
                      columnNumber: 23
                    },
                    this
                  ) }, void 0, !1, {
                    fileName: "app/layouts/Sidebar.tsx",
                    lineNumber: 137,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("ul", { className: "flex flex-1 flex-col gap-y-7", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("ul", { className: "-mx-2 space-y-1", children: navigation2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                      import_react35.Link,
                      {
                        onClick: () => handleClick(item),
                        to: item.href,
                        className: classNames10(
                          item.current ? "bg-indigo-700 text-white" : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                          "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                        ),
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                            item.icon,
                            {
                              className: classNames10(
                                item.current ? "text-white" : "text-indigo-200 group-hover:text-white",
                                "h-6 w-6 shrink-0"
                              ),
                              "aria-hidden": "true"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/layouts/Sidebar.tsx",
                              lineNumber: 160,
                              columnNumber: 35
                            },
                            this
                          ),
                          item.name
                        ]
                      },
                      void 0,
                      !0,
                      {
                        fileName: "app/layouts/Sidebar.tsx",
                        lineNumber: 150,
                        columnNumber: 33
                      },
                      this
                    ) }, item.name, !1, {
                      fileName: "app/layouts/Sidebar.tsx",
                      lineNumber: 149,
                      columnNumber: 31
                    }, this)) }, void 0, !1, {
                      fileName: "app/layouts/Sidebar.tsx",
                      lineNumber: 147,
                      columnNumber: 27
                    }, this) }, void 0, !1, {
                      fileName: "app/layouts/Sidebar.tsx",
                      lineNumber: 146,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("li", { children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-xs font-semibold leading-6 text-indigo-200", children: "Your teams" }, void 0, !1, {
                        fileName: "app/layouts/Sidebar.tsx",
                        lineNumber: 176,
                        columnNumber: 27
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("ul", { className: "-mx-2 mt-2 space-y-1", children: customerSupport.map((team2) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                        "a",
                        {
                          href: team2.href,
                          className: classNames10(
                            team2.current ? "bg-indigo-700 text-white" : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                            "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                          ),
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white", children: team2.initial }, void 0, !1, {
                              fileName: "app/layouts/Sidebar.tsx",
                              lineNumber: 191,
                              columnNumber: 35
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "truncate", children: team2.name }, void 0, !1, {
                              fileName: "app/layouts/Sidebar.tsx",
                              lineNumber: 194,
                              columnNumber: 35
                            }, this)
                          ]
                        },
                        void 0,
                        !0,
                        {
                          fileName: "app/layouts/Sidebar.tsx",
                          lineNumber: 182,
                          columnNumber: 33
                        },
                        this
                      ) }, team2.name, !1, {
                        fileName: "app/layouts/Sidebar.tsx",
                        lineNumber: 181,
                        columnNumber: 31
                      }, this)) }, void 0, !1, {
                        fileName: "app/layouts/Sidebar.tsx",
                        lineNumber: 179,
                        columnNumber: 27
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/layouts/Sidebar.tsx",
                      lineNumber: 175,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("li", { className: "mt-auto", children: "s" }, void 0, !1, {
                      fileName: "app/layouts/Sidebar.tsx",
                      lineNumber: 200,
                      columnNumber: 25
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/layouts/Sidebar.tsx",
                    lineNumber: 145,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/layouts/Sidebar.tsx",
                    lineNumber: 144,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/layouts/Sidebar.tsx",
                  lineNumber: 136,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/layouts/Sidebar.tsx",
                lineNumber: 111,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/layouts/Sidebar.tsx",
              lineNumber: 102,
              columnNumber: 15
            },
            this
          ) }, void 0, !1, {
            fileName: "app/layouts/Sidebar.tsx",
            lineNumber: 101,
            columnNumber: 13
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/layouts/Sidebar.tsx",
        lineNumber: 84,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/layouts/Sidebar.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex h-16 shrink-0 items-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
        "img",
        {
          className: "h-8 w-auto",
          src: "https://tailwindui.com/img/logos/mark.svg?color=white",
          alt: "Your Company"
        },
        void 0,
        !1,
        {
          fileName: "app/layouts/Sidebar.tsx",
          lineNumber: 215,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/layouts/Sidebar.tsx",
        lineNumber: 214,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("nav", { className: "flex flex-1 flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("ul", { className: "flex flex-1 flex-col gap-y-7", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("ul", { className: "-mx-2 space-y-1", children: navigation2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
          import_react35.Link,
          {
            onClick: () => handleClick(item),
            to: item.href,
            className: classNames10(
              item.current ? "bg-indigo-700 text-white" : "text-indigo-200 hover:text-white hover:bg-indigo-700",
              "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
            ),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                item.icon,
                {
                  className: classNames10(
                    item.current ? "text-white" : "text-indigo-200 group-hover:text-white",
                    "h-6 w-6 shrink-0"
                  ),
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/layouts/Sidebar.tsx",
                  lineNumber: 237,
                  columnNumber: 27
                },
                this
              ),
              item.name
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/layouts/Sidebar.tsx",
            lineNumber: 227,
            columnNumber: 25
          },
          this
        ) }, item.name, !1, {
          fileName: "app/layouts/Sidebar.tsx",
          lineNumber: 226,
          columnNumber: 23
        }, this)) }, void 0, !1, {
          fileName: "app/layouts/Sidebar.tsx",
          lineNumber: 224,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/layouts/Sidebar.tsx",
          lineNumber: 223,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "text-xs font-semibold leading-6 text-indigo-200", children: "Customer Support" }, void 0, !1, {
            fileName: "app/layouts/Sidebar.tsx",
            lineNumber: 253,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("ul", { className: "-mx-2 mt-2 space-y-1", children: customerSupport.map((support) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            "a",
            {
              href: support.href,
              className: classNames10(
                support.current ? "bg-indigo-700 text-white" : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
              ),
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white", children: support.initial }, void 0, !1, {
                  fileName: "app/layouts/Sidebar.tsx",
                  lineNumber: 268,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "truncate", children: support.name }, void 0, !1, {
                  fileName: "app/layouts/Sidebar.tsx",
                  lineNumber: 271,
                  columnNumber: 27
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/layouts/Sidebar.tsx",
              lineNumber: 259,
              columnNumber: 25
            },
            this
          ) }, support.name, !1, {
            fileName: "app/layouts/Sidebar.tsx",
            lineNumber: 258,
            columnNumber: 23
          }, this)) }, void 0, !1, {
            fileName: "app/layouts/Sidebar.tsx",
            lineNumber: 256,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/layouts/Sidebar.tsx",
          lineNumber: 252,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("li", { className: "mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react34.Menu, { as: "div", className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react34.Menu.Button, { className: "-m-1.5 flex items-center p-1.5", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-indigo-200 hover:bg-indigo-700 hover:text-white", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
              import_outline6.Cog6ToothIcon,
              {
                className: "h-6 w-6 shrink-0 text-indigo-200 group-hover:text-white",
                "aria-hidden": "true"
              },
              void 0,
              !1,
              {
                fileName: "app/layouts/Sidebar.tsx",
                lineNumber: 281,
                columnNumber: 25
              },
              this
            ),
            "Settings"
          ] }, void 0, !0, {
            fileName: "app/layouts/Sidebar.tsx",
            lineNumber: 280,
            columnNumber: 23
          }, this) }, void 0, !1, {
            fileName: "app/layouts/Sidebar.tsx",
            lineNumber: 279,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            import_react34.Transition,
            {
              as: import_react33.Fragment,
              enter: "transition ease-out duration-100",
              enterFrom: "transform opacity-0 scale-95",
              enterTo: "transform opacity-100 scale-100",
              leave: "transition ease-in duration-75",
              leaveFrom: "transform opacity-100 scale-100",
              leaveTo: "transform opacity-0 scale-95",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react34.Menu.Items, { className: "absolute right-0 bottom-16 z-10 mt-2.5 w-full origin-bottom-left rounded-md py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none", children: userNavigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react34.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                "a",
                {
                  href: item.href,
                  className: classNames10(
                    item.current ? "bg-indigo-700 text-white" : "text-indigo-200 hover:text-white hover:bg-indigo-700",
                    "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                  ),
                  children: item.name
                },
                void 0,
                !1,
                {
                  fileName: "app/layouts/Sidebar.tsx",
                  lineNumber: 301,
                  columnNumber: 31
                },
                this
              ) }, item.name, !1, {
                fileName: "app/layouts/Sidebar.tsx",
                lineNumber: 299,
                columnNumber: 27
              }, this)) }, void 0, !1, {
                fileName: "app/layouts/Sidebar.tsx",
                lineNumber: 297,
                columnNumber: 23
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/layouts/Sidebar.tsx",
              lineNumber: 288,
              columnNumber: 21
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/layouts/Sidebar.tsx",
          lineNumber: 278,
          columnNumber: 19
        }, this) }, void 0, !1, {
          fileName: "app/layouts/Sidebar.tsx",
          lineNumber: 277,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layouts/Sidebar.tsx",
        lineNumber: 222,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/layouts/Sidebar.tsx",
        lineNumber: 221,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/layouts/Sidebar.tsx",
      lineNumber: 213,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/layouts/Sidebar.tsx",
      lineNumber: 211,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "lg:pl-72", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
        "button",
        {
          type: "button",
          className: "-m-2.5 p-2.5 text-gray-700 lg:hidden",
          onClick: () => setSidebarOpen(!0),
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "sr-only", children: "Open sidebar" }, void 0, !1, {
              fileName: "app/layouts/Sidebar.tsx",
              lineNumber: 331,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_outline6.Bars3Icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
              fileName: "app/layouts/Sidebar.tsx",
              lineNumber: 332,
              columnNumber: 15
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/layouts/Sidebar.tsx",
          lineNumber: 326,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
        "div",
        {
          className: "h-6 w-px bg-gray-900/10 lg:hidden",
          "aria-hidden": "true"
        },
        void 0,
        !1,
        {
          fileName: "app/layouts/Sidebar.tsx",
          lineNumber: 335,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex flex-1 gap-x-4 justify-end self-stretch lg:gap-x-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { className: "flex items-center  gap-x-4 lg:gap-x-6", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
          "button",
          {
            type: "button",
            className: "-m-2.5 p-2.5 text-gray-400 hover:text-gray-500",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "sr-only", children: "View notifications" }, void 0, !1, {
                fileName: "app/layouts/Sidebar.tsx",
                lineNumber: 346,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_outline6.BellIcon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
                fileName: "app/layouts/Sidebar.tsx",
                lineNumber: 347,
                columnNumber: 19
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/layouts/Sidebar.tsx",
            lineNumber: 342,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
          "div",
          {
            className: "hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10",
            "aria-hidden": "true"
          },
          void 0,
          !1,
          {
            fileName: "app/layouts/Sidebar.tsx",
            lineNumber: 351,
            columnNumber: 17
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react34.Menu, { as: "div", className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react34.Menu.Button, { className: "-m-1.5 flex items-center p-1.5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "sr-only", children: "Open user menu" }, void 0, !1, {
              fileName: "app/layouts/Sidebar.tsx",
              lineNumber: 359,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
              "img",
              {
                className: "h-8 w-8 rounded-full bg-gray-50",
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
                alt: ""
              },
              void 0,
              !1,
              {
                fileName: "app/layouts/Sidebar.tsx",
                lineNumber: 360,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("span", { className: "hidden lg:flex lg:items-center", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                "span",
                {
                  className: "ml-4 text-sm font-semibold leading-6 text-gray-900",
                  "aria-hidden": "true",
                  children: "Tom Cook"
                },
                void 0,
                !1,
                {
                  fileName: "app/layouts/Sidebar.tsx",
                  lineNumber: 366,
                  columnNumber: 23
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                import_solid9.ChevronDownIcon,
                {
                  className: "ml-2 h-5 w-5 text-gray-400",
                  "aria-hidden": "true"
                },
                void 0,
                !1,
                {
                  fileName: "app/layouts/Sidebar.tsx",
                  lineNumber: 372,
                  columnNumber: 23
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/layouts/Sidebar.tsx",
              lineNumber: 365,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/layouts/Sidebar.tsx",
            lineNumber: 358,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
            import_react34.Transition,
            {
              as: import_react33.Fragment,
              enter: "transition ease-out duration-100",
              enterFrom: "transform opacity-0 scale-95",
              enterTo: "transform opacity-100 scale-100",
              leave: "transition ease-in duration-75",
              leaveFrom: "transform opacity-100 scale-100",
              leaveTo: "transform opacity-0 scale-95",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react34.Menu.Items, { className: "absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none", children: userNavigation.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_react34.Menu.Item, { children: ({ active }) => /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
                "a",
                {
                  href: item.href,
                  className: classNames10(
                    active ? "bg-gray-50" : "",
                    "block px-3 py-1 text-sm leading-6 text-gray-900"
                  ),
                  children: item.name
                },
                void 0,
                !1,
                {
                  fileName: "app/layouts/Sidebar.tsx",
                  lineNumber: 391,
                  columnNumber: 29
                },
                this
              ) }, item.name, !1, {
                fileName: "app/layouts/Sidebar.tsx",
                lineNumber: 389,
                columnNumber: 25
              }, this)) }, void 0, !1, {
                fileName: "app/layouts/Sidebar.tsx",
                lineNumber: 387,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/layouts/Sidebar.tsx",
              lineNumber: 378,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/layouts/Sidebar.tsx",
          lineNumber: 357,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/layouts/Sidebar.tsx",
        lineNumber: 341,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/layouts/Sidebar.tsx",
        lineNumber: 340,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/layouts/Sidebar.tsx",
      lineNumber: 325,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/layouts/Sidebar.tsx",
      lineNumber: 324,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/layouts/Sidebar.tsx",
    lineNumber: 82,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/layouts/Sidebar.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var import_remix5 = require("@clerk/remix");
var import_ssr3 = require("@clerk/remix/ssr.server"), import_server_runtime2 = require("@remix-run/server-runtime"), import_clerk_sdk_node2 = __toESM(require("@clerk/clerk-sdk-node")), import_jsx_dev_runtime33 = require("react/jsx-dev-runtime"), loader4 = async (args) => {
  let { userId } = await (0, import_ssr3.getAuth)(args);
  if (!userId)
    return (0, import_server_runtime2.redirect)("/");
  let response = await import_clerk_sdk_node2.default.users.getUser(userId);
  try {
    let customerSubscription = await getCustomerSubscription(
      response.emailAddresses[0].emailAddress
    );
    return console.log(customerSubscription), (0, import_server_runtime2.json)({ subscription: customerSubscription });
  } catch (error) {
    return console.error(error), (0, import_server_runtime2.json)(
      { error: "Failed to fetch customer subscription details" },
      500
    );
  }
};
function Example16() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_remix5.SignedIn, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(Example15, {}, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_react36.Outlet, {}, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

// app/routes/sign-in.$.tsx
var sign_in_exports = {};
__export(sign_in_exports, {
  default: () => SignInPage,
  loader: () => loader5
});
var import_remix6 = require("@clerk/remix"), import_node6 = require("@remix-run/node"), import_jsx_dev_runtime34 = require("react/jsx-dev-runtime"), loader5 = () => (0, import_node6.json)({
  user: "UNSUBSCRIBED"
});
function SignInPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "relative isolate pt-14 flex h-sceen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:mx-0 lg:flex-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(import_remix6.SignIn, { routing: "path", path: "/sign-in" }, void 0, !1, {
    fileName: "app/routes/sign-in.$.tsx",
    lineNumber: 23,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-in.$.tsx",
    lineNumber: 22,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-in.$.tsx",
    lineNumber: 21,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-in.$.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-in.$.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-in.$.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}

// app/routes/sign-up.$.tsx
var sign_up_exports = {};
__export(sign_up_exports, {
  default: () => SignInPage2
});
var import_remix7 = require("@clerk/remix"), import_jsx_dev_runtime35 = require("react/jsx-dev-runtime");
function SignInPage2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "relative isolate pt-14 flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:mx-0 justify-center lg:flex lg:flex-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_remix7.SignUp, { path: "/sign-up", routing: "path" }, void 0, !1, {
    fileName: "app/routes/sign-up.$.tsx",
    lineNumber: 10,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-up.$.tsx",
    lineNumber: 9,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-up.$.tsx",
    lineNumber: 8,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-up.$.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-up.$.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/sign-up.$.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/about-us.tsx
var about_us_exports = {};
__export(about_us_exports, {
  default: () => Example17
});
var import_jsx_dev_runtime36 = require("react/jsx-dev-runtime"), stats = [
  { label: "Transactions every 24 hours", value: "44 million" },
  { label: "Assets under holding", value: "$119 trillion" },
  { label: "New users annually", value: "46,000" }
], values = [
  {
    name: "Be world-class",
    description: "Aut illo quae. Ut et harum ea animi natus. Culpa maiores et sed sint et magnam exercitationem quia. Ullam voluptas nihil vitae dicta molestiae et. Aliquid velit porro vero."
  },
  {
    name: "Share everything you know",
    description: "Mollitia delectus a omnis. Quae velit aliquid. Qui nulla maxime adipisci illo id molestiae. Cumque cum ut minus rerum architecto magnam consequatur. Quia quaerat minima."
  },
  {
    name: "Always learning",
    description: "Aut repellendus et officiis dolor possimus. Deserunt velit quasi sunt fuga error labore quia ipsum. Commodi autem voluptatem nam. Quos voluptatem totam."
  },
  {
    name: "Be supportive",
    description: "Magnam provident veritatis odit. Vitae eligendi repellat non. Eum fugit impedit veritatis ducimus. Non qui aspernatur laudantium modi. Praesentium rerum error deserunt harum."
  },
  {
    name: "Take responsibility",
    description: "Sit minus expedita quam in ullam molestiae dignissimos in harum. Tenetur dolorem iure. Non nesciunt dolorem veniam necessitatibus laboriosam voluptas perspiciatis error."
  },
  {
    name: "Enjoy downtime",
    description: "Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio."
  }
], team = [
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
  }
  // More people...
], blogPosts = [
  {
    id: 1,
    title: "Vel expedita assumenda placeat aut nisi optio voluptates quas",
    href: "#",
    description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl: "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  }
  // More posts...
];
function Example17() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(Navbar, {}, void 0, !1, {
      fileName: "app/routes/about-us.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("main", { className: "isolate", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "relative isolate -z-10", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("svg", { className: "absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("pattern", { id: "1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84", width: 200, height: 200, x: "50%", y: -1, patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("path", { d: "M.5 200V.5H200", fill: "none" }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 70,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 69,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 68,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("svg", { x: "50%", y: -1, className: "overflow-visible fill-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("path", { d: "M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z", strokeWidth: 0 }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 74,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 73,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: "url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 76,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 67,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(
          "div",
          {
            className: "aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30",
            style: {
              clipPath: "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)"
            }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 79,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 78,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "w-full max-w-xl lg:shrink-0 xl:max-w-2xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h1", { className: "text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl", children: "We\u2019re changing the way people connect." }, void 0, !1, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 90,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none", children: "Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis cupidatat mollit aute velit. Et labore commodo nulla aliqua proident mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt mollit id pariatur in voluptate cillum. Eu voluptate tempor esse minim amet fugiat veniam occaecat aliqua." }, void 0, !1, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 91,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 89,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80", alt: "", className: "aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" }, void 0, !1, {
                fileName: "app/routes/about-us.tsx",
                lineNumber: 98,
                columnNumber: 23
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" }, void 0, !1, {
                fileName: "app/routes/about-us.tsx",
                lineNumber: 99,
                columnNumber: 23
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 97,
              columnNumber: 21
            }, this) }, void 0, !1, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 96,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "relative", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80", alt: "", className: "aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" }, void 0, !1, {
                  fileName: "app/routes/about-us.tsx",
                  lineNumber: 104,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" }, void 0, !1, {
                  fileName: "app/routes/about-us.tsx",
                  lineNumber: 105,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/about-us.tsx",
                lineNumber: 103,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "relative", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { src: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80", alt: "", className: "aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" }, void 0, !1, {
                  fileName: "app/routes/about-us.tsx",
                  lineNumber: 108,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" }, void 0, !1, {
                  fileName: "app/routes/about-us.tsx",
                  lineNumber: 109,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/about-us.tsx",
                lineNumber: 107,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 102,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "w-44 flex-none space-y-8 pt-32 sm:pt-0", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "relative", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { src: "https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80", alt: "", className: "aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" }, void 0, !1, {
                  fileName: "app/routes/about-us.tsx",
                  lineNumber: 114,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" }, void 0, !1, {
                  fileName: "app/routes/about-us.tsx",
                  lineNumber: 115,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/about-us.tsx",
                lineNumber: 113,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "relative", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { src: "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80", alt: "", className: "aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg" }, void 0, !1, {
                  fileName: "app/routes/about-us.tsx",
                  lineNumber: 118,
                  columnNumber: 23
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" }, void 0, !1, {
                  fileName: "app/routes/about-us.tsx",
                  lineNumber: 119,
                  columnNumber: 23
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/about-us.tsx",
                lineNumber: 117,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 112,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 95,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 88,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 86,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about-us.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:mx-0 lg:max-w-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl", children: "Our mission" }, void 0, !1, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 131,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "lg:w-full lg:max-w-2xl lg:flex-auto", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "text-xl leading-8 text-gray-600", children: "Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend egestas fringilla sapien." }, void 0, !1, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 134,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mt-10 max-w-xl text-base leading-7 text-gray-700", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { children: "Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id." }, void 0, !1, {
                fileName: "app/routes/about-us.tsx",
                lineNumber: 136,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "mt-10", children: "Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci." }, void 0, !1, {
                fileName: "app/routes/about-us.tsx",
                lineNumber: 137,
                columnNumber: 19
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 135,
              columnNumber: 17
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 133,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "lg:flex lg:flex-auto lg:justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("dl", { className: "w-64 space-y-8 xl:w-80", children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex flex-col-reverse gap-y-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("dt", { className: "text-base leading-7 text-gray-600", children: stat.label }, void 0, !1, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 144,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("dd", { className: "text-5xl font-semibold tracking-tight text-gray-900", children: stat.value }, void 0, !1, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 145,
              columnNumber: 23
            }, this)
          ] }, stat.label, !0, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 143,
            columnNumber: 21
          }, this)) }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 141,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 140,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 132,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about-us.tsx",
        lineNumber: 130,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/about-us.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80", alt: "", className: "aspect-[5/2] w-full object-cover xl:rounded-3xl" }, void 0, !1, {
        fileName: "app/routes/about-us.tsx",
        lineNumber: 156,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/about-us.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:mx-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl", children: "Our values" }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 162,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-600", children: "Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam." }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 163,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 161,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("dl", { className: "mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3", children: values.map((value) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("dt", { className: "font-semibold text-gray-900", children: value.name }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 168,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("dd", { className: "mt-1 text-gray-600", children: value.description }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 169,
            columnNumber: 17
          }, this)
        ] }, value.name, !0, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 167,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 165,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about-us.tsx",
        lineNumber: 160,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "relative isolate -z-10 mt-32 sm:mt-48", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("svg", { className: "h-[40rem] w-[80rem] flex-none stroke-gray-200", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("pattern", { id: "e9033f3e-f665-41a6-84ef-756f6778e6fe", width: 200, height: 200, x: "50%", y: "50%", patternUnits: "userSpaceOnUse", patternTransform: "translate(-100 0)", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("path", { d: "M.5 200V.5H200", fill: "none" }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 181,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 180,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 179,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("svg", { x: "50%", y: "50%", className: "overflow-visible fill-gray-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("path", { d: "M-300 0h201v201h-201Z M300 200h201v201h-201Z", strokeWidth: 0 }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 185,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 184,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("rect", { width: "100%", height: "100%", strokeWidth: 0, fill: "url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)" }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 187,
            columnNumber: 15
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 178,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 177,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h2", { className: "text-center text-lg font-semibold leading-8 text-gray-900", children: "Trusted by the world\u2019s most innovative teams" }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 191,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { className: "col-span-2 max-h-12 w-full object-contain lg:col-span-1", src: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg", alt: "Transistor", width: 158, height: 48 }, void 0, !1, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 193,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { className: "col-span-2 max-h-12 w-full object-contain lg:col-span-1", src: "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg", alt: "Reform", width: 158, height: 48 }, void 0, !1, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 194,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { className: "col-span-2 max-h-12 w-full object-contain lg:col-span-1", src: "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg", alt: "Tuple", width: 158, height: 48 }, void 0, !1, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 195,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { className: "col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1", src: "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg", alt: "SavvyCal", width: 158, height: 48 }, void 0, !1, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 196,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { className: "col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1", src: "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg", alt: "Statamic", width: 158, height: 48 }, void 0, !1, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 197,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 192,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 190,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about-us.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:mx-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl", children: "Our team" }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 205,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "mt-6 text-lg leading-8 text-gray-600", children: "Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus eos totam in dolorum. Nemo vel facere repellendus ut eos dolores similique." }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 206,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 204,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("ul", { role: "list", className: "mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6", children: team.map((person) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("li", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { className: "mx-auto h-24 w-24 rounded-full", src: person.imageUrl, alt: "" }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 211,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h3", { className: "mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900", children: person.name }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 212,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "text-sm leading-6 text-gray-600", children: person.role }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 213,
            columnNumber: 17
          }, this)
        ] }, person.name, !0, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 210,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 208,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about-us.tsx",
        lineNumber: 203,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mx-auto my-32 max-w-7xl px-6 sm:mt-40 lg:px-8", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:mx-0 lg:max-w-none", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl", children: "From the blog" }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 222,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("p", { className: "mt-2 text-lg leading-8 text-gray-600", children: "Vel dolorem qui facilis soluta sint aspernatur totam cumque." }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 223,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 221,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3", children: blogPosts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("article", { className: "relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { src: post.imageUrl, alt: "", className: "absolute inset-0 -z-10 h-full w-full object-cover" }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 228,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 229,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 230,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("time", { dateTime: post.datetime, className: "mr-8", children: post.date }, void 0, !1, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 233,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "-ml-4 flex items-center gap-x-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("svg", { viewBox: "0 0 2 2", className: "-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("circle", { cx: 1, cy: 1, r: 1 }, void 0, !1, {
                fileName: "app/routes/about-us.tsx",
                lineNumber: 238,
                columnNumber: 23
              }, this) }, void 0, !1, {
                fileName: "app/routes/about-us.tsx",
                lineNumber: 237,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("div", { className: "flex gap-x-2.5", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("img", { src: post.author.imageUrl, alt: "", className: "h-6 w-6 flex-none rounded-full bg-white/10" }, void 0, !1, {
                  fileName: "app/routes/about-us.tsx",
                  lineNumber: 241,
                  columnNumber: 23
                }, this),
                post.author.name
              ] }, void 0, !0, {
                fileName: "app/routes/about-us.tsx",
                lineNumber: 240,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 236,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 232,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("h3", { className: "mt-3 text-lg font-semibold leading-6 text-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("a", { href: post.href, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)("span", { className: "absolute inset-0" }, void 0, !1, {
              fileName: "app/routes/about-us.tsx",
              lineNumber: 248,
              columnNumber: 21
            }, this),
            post.title
          ] }, void 0, !0, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 247,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/routes/about-us.tsx",
            lineNumber: 246,
            columnNumber: 17
          }, this)
        ] }, post.id, !0, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 227,
          columnNumber: 15
        }, this)) }, void 0, !1, {
          fileName: "app/routes/about-us.tsx",
          lineNumber: 225,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/about-us.tsx",
        lineNumber: 220,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/about-us.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/about-us.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Example19,
  meta: () => meta8
});

// app/components/hero/hero.tsx
var import_react37 = require("@remix-run/react"), import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function Example18() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "bg-white", children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-x-10 lg:px-8 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
        "iframe",
        {
          title: "Animation6220",
          src: "https://embed.lottiefiles.com/animation/6220"
        },
        void 0,
        !1,
        {
          fileName: "app/components/hero/hero.tsx",
          lineNumber: 9,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "mx-auto max-w-[656px] lg:mx-0 flex flex-col", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("h1", { className: "mt-10 max-w-[656px] self-center md:max-w-md text-2xl text-center font-semibold tracking-tight text-color-eel-always-light sm:text-custom-3xl font-dinround", children: "The cheaper, easier way to setup prison numbers!" }, void 0, !1, {
          fileName: "app/components/hero/hero.tsx",
          lineNumber: 14,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "mt-10 flex-col flex items-center gap-x-6 text-custom-xs", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
            import_react37.Link,
            {
              to: "/onboard/select-location",
              className: "bg-duo px-3.5 py-2.5 flex justify-center text-white font-dinround uppercase font-bold text-color-snow border-b-4 border-color-tree-frog-always-light rounded-xl hover:bg-color-owl-always-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color-owl-always-light transition duration-300 ease-in-out md:w-2/3 w-11/12",
              children: "GET STARTED"
            },
            void 0,
            !1,
            {
              fileName: "app/components/hero/hero.tsx",
              lineNumber: 19,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
            import_react37.Link,
            {
              to: "/sign-up",
              className: "bg-color-snow px-3.5 py-2.5 flex justify-center font-dinround uppercase font-bold text-color-macaw-always-light mt-4 border-x-2 border-t-2 border-b-4 border-color-swan-always-light hover:border-x-2 hover:border-t-2 hover:border-b-4 hover:border-s-color-swan-always-light hover:bg-color-swan-always-light hover:bg-opacity-50 rounded-xl transition duration-300 ease-in-out md:w-2/3 w-11/12 h-12 overflow-hidden whitespace-nowrap overflow-ellipsis",
              children: "I ALREADY HAVE AN ACCOUNT"
            },
            void 0,
            !1,
            {
              fileName: "app/components/hero/hero.tsx",
              lineNumber: 24,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/hero/hero.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/hero/hero.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/hero/hero.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("div", { className: "mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow" }, void 0, !1, {
      fileName: "app/components/hero/hero.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/hero/hero.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/hero/hero.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var import_lottie_react4 = __toESM(require("lottie-react"));

// public/test.json
var test_default = {
  nm: "\u044D\u0442\u0430\u043F\u044B_desktop",
  ddd: 0,
  h: 227,
  w: 269,
  meta: { g: "LottieFiles AE 3.4.5" },
  layers: [
    {
      ty: 4,
      nm: "\u0441\u043C\u0430\u0439\u043B",
      sr: 1,
      st: 0,
      op: 300.00001221925,
      ip: 0,
      hd: !1,
      ddd: 0,
      bm: 0,
      hasMask: !1,
      ao: 0,
      ks: {
        a: { a: 0, k: [66.4, 95.419, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
        sk: { a: 0, k: 0 },
        p: { a: 0, k: [134, 113, 0], ix: 2 },
        r: { a: 0, k: 0, ix: 10 },
        sa: { a: 0, k: 0 },
        o: {
          a: 1,
          k: [
            { h: 1, s: [100], t: 0 },
            { s: [0], t: 30.0000012219251 }
          ],
          ix: 11
        }
      },
      ef: [],
      shapes: [
        {
          ty: "gr",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 1",
          ix: 1,
          cix: 2,
          np: 4,
          it: [
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 1",
              ix: 1,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [12.32, 0]
                  ],
                  o: [
                    [-2.1, 4.433],
                    [0, 0]
                  ],
                  v: [
                    [21.35, -6.65],
                    [-0.35, 6.65]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 2",
              ix: 2,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [-12.32, 0]
                  ],
                  o: [
                    [2.1, 4.433],
                    [0, 0]
                  ],
                  v: [
                    [-21.35, -6.65],
                    [0.35, 6.65]
                  ]
                },
                ix: 2
              }
            },
            { ty: "mm", bm: 0, hd: !1, mn: "ADBE Vector Filter - Merge", nm: "Merge Paths 1", mm: 1 },
            { ty: "st", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Stroke", nm: "Stroke 1", lc: 1, lj: 1, ml: 4, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 2, ix: 5 }, c: { a: 0, k: [0.1216, 0.1216, 0.1176], ix: 3 } },
            { ty: "tr", a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, sk: { a: 0, k: 0, ix: 4 }, p: { a: 0, k: [66.75, 109.769], ix: 2 }, r: { a: 0, k: 0, ix: 6 }, sa: { a: 0, k: 0, ix: 5 }, o: { a: 0, k: 100, ix: 7 } }
          ]
        },
        {
          ty: "gr",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 2",
          ix: 2,
          cix: 2,
          np: 2,
          it: [
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 1",
              ix: 1,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !0,
                  i: [
                    [-3.093, 0],
                    [0, -3.093],
                    [3.093, 0],
                    [0, 3.093]
                  ],
                  o: [
                    [3.093, 0],
                    [0, 3.093],
                    [-3.093, 0],
                    [0, -3.093]
                  ],
                  v: [
                    [0, -5.6],
                    [5.6, 0],
                    [0, 5.6],
                    [-5.6, 0]
                  ]
                },
                ix: 2
              }
            },
            { ty: "fl", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Fill", nm: "Fill 1", c: { a: 0, k: [0.1216, 0.1216, 0.1176], ix: 4 }, r: 1, o: { a: 0, k: 100, ix: 5 } },
            { ty: "tr", a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, sk: { a: 0, k: 0, ix: 4 }, p: { a: 0, k: [81.8, 84.219], ix: 2 }, r: { a: 0, k: 0, ix: 6 }, sa: { a: 0, k: 0, ix: 5 }, o: { a: 0, k: 100, ix: 7 } }
          ]
        },
        {
          ty: "gr",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 3",
          ix: 3,
          cix: 2,
          np: 2,
          it: [
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 1",
              ix: 1,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !0,
                  i: [
                    [-3.093, 0],
                    [0, -3.093],
                    [3.093, 0],
                    [0, 3.093]
                  ],
                  o: [
                    [3.093, 0],
                    [0, 3.093],
                    [-3.093, 0],
                    [0, -3.093]
                  ],
                  v: [
                    [0, -5.6],
                    [5.6, 0],
                    [0, 5.6],
                    [-5.6, 0]
                  ]
                },
                ix: 2
              }
            },
            { ty: "fl", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Fill", nm: "Fill 1", c: { a: 0, k: [0.1216, 0.1216, 0.1176], ix: 4 }, r: 1, o: { a: 0, k: 100, ix: 5 } },
            { ty: "tr", a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, sk: { a: 0, k: 0, ix: 4 }, p: { a: 0, k: [49.6, 84.219], ix: 2 }, r: { a: 0, k: 0, ix: 6 }, sa: { a: 0, k: 0, ix: 5 }, o: { a: 0, k: 100, ix: 7 } }
          ]
        },
        {
          ty: "gr",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 4",
          ix: 4,
          cix: 2,
          np: 3,
          it: [
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 1",
              ix: 1,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !0,
                  i: [
                    [-27.062, 0],
                    [0, -27.062],
                    [27.062, 0],
                    [0, 27.062]
                  ],
                  o: [
                    [27.062, 0],
                    [0, 27.062],
                    [-27.062, 0],
                    [0, -27.062]
                  ],
                  v: [
                    [0, -49],
                    [49, 0],
                    [0, 49],
                    [-49, 0]
                  ]
                },
                ix: 2
              }
            },
            { ty: "st", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Stroke", nm: "Stroke 1", lc: 1, lj: 1, ml: 4, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 2, ix: 5 }, c: { a: 0, k: [0.1216, 0.1216, 0.1176], ix: 3 } },
            { ty: "fl", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Fill", nm: "Fill 1", c: { a: 0, k: [0.1333, 0.7725, 0.3686], ix: 4 }, r: 1, o: { a: 0, k: 100, ix: 5 } },
            { ty: "tr", a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, sk: { a: 0, k: 0, ix: 4 }, p: { a: 0, k: [66.4, 95.419], ix: 2 }, r: { a: 0, k: 0, ix: 6 }, sa: { a: 0, k: 0, ix: 5 }, o: { a: 0, k: 100, ix: 7 } }
          ]
        }
      ],
      ind: 1
    },
    {
      ty: 4,
      nm: "\u0441\u0435\u0440\u0434\u0446\u0435",
      sr: 1,
      st: 0,
      op: 300.00001221925,
      ip: 0,
      hd: !1,
      ddd: 0,
      bm: 0,
      hasMask: !1,
      ao: 0,
      ks: {
        a: { a: 0, k: [336, 344.626, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
        sk: { a: 0, k: 0 },
        p: { a: 0, k: [134, 113, 0], ix: 2 },
        r: { a: 0, k: 0, ix: 10 },
        sa: { a: 0, k: 0 },
        o: {
          a: 1,
          k: [
            { h: 1, s: [0], t: 0 },
            { h: 1, s: [100], t: 30 },
            { s: [0], t: 60.0000024438501 }
          ],
          ix: 11
        }
      },
      ef: [],
      shapes: [
        {
          ty: "gr",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 1",
          ix: 1,
          cix: 2,
          np: 3,
          it: [
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 1",
              ix: 1,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !0,
                  i: [
                    [11.58, -12.854],
                    [0.047, -7.595],
                    [-18.929, -9.476],
                    [-0.154, 24.58],
                    [5.322, 5.411],
                    [8.497, -14.477]
                  ],
                  o: [
                    [-4.842, 5.374],
                    [-0.154, 24.67],
                    [18.966, -9.501],
                    [0.05, -7.92],
                    [-11.793, -11.992],
                    [-8.729, -14.873]
                  ],
                  v: [
                    [-40.366, -31.441],
                    [-47.947, -11.329],
                    [0.052, 44.296],
                    [48.051, -11.294],
                    [39.755, -32.27],
                    [0.052, -26.781]
                  ]
                },
                ix: 2
              }
            },
            { ty: "st", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Stroke", nm: "Stroke 1", lc: 1, lj: 1, ml: 4, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 2, ix: 5 }, c: { a: 0, k: [0.1216, 0.1216, 0.1176], ix: 3 } },
            { ty: "fl", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Fill", nm: "Fill 1", c: { a: 0, k: [0.1333, 0.7725, 0.3686], ix: 4 }, r: 1, o: { a: 0, k: 100, ix: 5 } },
            { ty: "tr", a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, sk: { a: 0, k: 0, ix: 4 }, p: { a: 0, k: [335.948, 342.331], ix: 2 }, r: { a: 0, k: 0, ix: 6 }, sa: { a: 0, k: 0, ix: 5 }, o: { a: 0, k: 100, ix: 7 } }
          ]
        }
      ],
      ind: 2
    },
    {
      ty: 4,
      nm: "\u0441\u043D\u0435\u0436\u0438\u043D\u043A\u0430",
      sr: 1,
      st: 0,
      op: 300.00001221925,
      ip: 0,
      hd: !1,
      ddd: 0,
      bm: 0,
      hasMask: !1,
      ao: 0,
      ks: {
        a: { a: 0, k: [577.243, 235.39, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
        sk: { a: 0, k: 0 },
        p: { a: 0, k: [134, 113, 0], ix: 2 },
        r: { a: 0, k: 0, ix: 10 },
        sa: { a: 0, k: 0 },
        o: {
          a: 1,
          k: [
            { h: 1, s: [0], t: 0 },
            { h: 1, s: [100], t: 60 },
            { s: [0], t: 90.0000036657751 }
          ],
          ix: 11
        }
      },
      ef: [],
      shapes: [
        {
          ty: "gr",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 1",
          ix: 1,
          cix: 2,
          np: 3,
          it: [
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 1",
              ix: 1,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !0,
                  i: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                  ],
                  v: [
                    [11.562, -46.5],
                    [-11.562, -46.5],
                    [-11.562, -19.805],
                    [-34.938, -33.152],
                    [-46.5, -13.348],
                    [-23.124, 0],
                    [-46.5, 13.348],
                    [-34.938, 33.152],
                    [-11.562, 19.805],
                    [-11.562, 46.5],
                    [11.562, 46.5],
                    [11.562, 19.805],
                    [34.938, 33.152],
                    [46.5, 13.348],
                    [23.124, 0],
                    [46.5, -13.348],
                    [34.938, -33.152],
                    [11.562, -19.805]
                  ]
                },
                ix: 2
              }
            },
            { ty: "st", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Stroke", nm: "Stroke 1", lc: 1, lj: 1, ml: 4, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 2, ix: 5 }, c: { a: 0, k: [0.1216, 0.1216, 0.1176], ix: 3 } },
            { ty: "fl", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Fill", nm: "Fill 1", c: { a: 0, k: [0.1333, 0.7725, 0.3686], ix: 4 }, r: 1, o: { a: 0, k: 100, ix: 5 } },
            { ty: "tr", a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, sk: { a: 0, k: 0, ix: 4 }, p: { a: 0, k: [577.243, 235.39], ix: 2 }, r: { a: 0, k: 0, ix: 6 }, sa: { a: 0, k: 0, ix: 5 }, o: { a: 0, k: 100, ix: 7 } }
          ]
        }
      ],
      ind: 3
    },
    {
      ty: 4,
      nm: "\u0440\u043E\u043A",
      sr: 1,
      st: 0,
      op: 300.00001221925,
      ip: 0,
      hd: !1,
      ddd: 0,
      bm: 0,
      hasMask: !1,
      ao: 0,
      ks: {
        a: { a: 0, k: [564.22, 75.32, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
        sk: { a: 0, k: 0 },
        p: { a: 0, k: [134.09, 116.32, 0], ix: 2 },
        r: { a: 0, k: 0, ix: 10 },
        sa: { a: 0, k: 0 },
        o: {
          a: 1,
          k: [
            { h: 1, s: [0], t: 0 },
            { h: 1, s: [100], t: 90 },
            { s: [0], t: 120.0000048877 }
          ],
          ix: 11
        }
      },
      ef: [],
      shapes: [
        {
          ty: "gr",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 1",
          ix: 1,
          cix: 2,
          np: 21,
          it: [
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 1",
              ix: 1,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [11.815, -1.922]
                  ],
                  o: [
                    [8.724, -7.653],
                    [0, 0]
                  ],
                  v: [
                    [-12.227, 13.738],
                    [-12.688, -4.444]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 2",
              ix: 2,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [-3.369, 3.256]
                  ],
                  o: [
                    [1.214, -0.75],
                    [0, 0]
                  ],
                  v: [
                    [-19.609, 19.809],
                    [-12.227, 13.738]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 3",
              ix: 3,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [-4.39, 0.714]
                  ],
                  o: [
                    [2.939, -4.411],
                    [0, 0]
                  ],
                  v: [
                    [-27.847, 8.605],
                    [-12.688, -4.444]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 4",
              ix: 4,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [0, -8.428],
                    [0, -3.01]
                  ],
                  o: [
                    [0, 0],
                    [0, 10.536],
                    [0, 0]
                  ],
                  v: [
                    [-27.847, 8.605],
                    [-31.471, 22.066],
                    [-23.102, 37.117]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 5",
              ix: 5,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [0, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, 0]
                  ],
                  v: [
                    [24.824, 23.571],
                    [24.824, 4.58]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 6",
              ix: 6,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [0, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, 0]
                  ],
                  v: [
                    [24.824, 23.571],
                    [24.824, 4.58]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 7",
              ix: 7,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [0, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, 0]
                  ],
                  v: [
                    [-23.102, 47.653],
                    [-23.102, 37.117]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 8",
              ix: 8,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [0, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, 0]
                  ],
                  v: [
                    [-23.102, 47.653],
                    [-23.102, 37.117]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 9",
              ix: 9,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 6.021]
                  ],
                  o: [
                    [0, 0],
                    [0, 0],
                    [2.282, -1.505],
                    [0, 0]
                  ],
                  v: [
                    [-23.102, 47.653],
                    [17.977, 47.653],
                    [17.977, 35.612],
                    [24.824, 23.571]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 10",
              ix: 10,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [-4e-3, -0.067]
                  ],
                  o: [
                    [0, 0],
                    [0, 0]
                  ],
                  v: [
                    [12.963, -14.971],
                    [12.978, -7.394]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 11",
              ix: 11,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [0, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, 0]
                  ],
                  v: [
                    [12.963, -14.971],
                    [12.978, -7.394]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 12",
              ix: 12,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [0, 0],
                    [-4.051, -0.724],
                    [0.733, -4.007],
                    [0, 0]
                  ],
                  o: [
                    [0, 0],
                    [0.732, -4.008],
                    [4.052, 0.725],
                    [0, 0],
                    [0, 0]
                  ],
                  v: [
                    [12.963, -14.971],
                    [16.559, -34.644],
                    [25.22, -40.589],
                    [31.229, -32.02],
                    [24.824, 4.58]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 13",
              ix: 13,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [0, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, 0]
                  ],
                  v: [
                    [-13.186, -15.708],
                    [-12.688, -4.444]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 14",
              ix: 14,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [0, 0],
                    [4.61, -0.329],
                    [-0.333, -4.56],
                    [0, 0],
                    [0, 0]
                  ],
                  o: [
                    [0, 0],
                    [-0.333, -4.56],
                    [-4.609, 0.33],
                    [0, 0],
                    [0.143, 1.959],
                    [0, 0]
                  ],
                  v: [
                    [-13.186, -15.708],
                    [-14.936, -39.665],
                    [-23.885, -47.325],
                    [-31.628, -38.472],
                    [-28.558, 3.562],
                    [-27.847, 8.605]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 15",
              ix: 15,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [-3.781, 0],
                    [-0.985, -2.546]
                  ],
                  o: [
                    [0, -3.741],
                    [2.919, 0],
                    [0, 0]
                  ],
                  v: [
                    [-0.28, -12.551],
                    [6.566, -19.324],
                    [12.963, -14.971]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 16",
              ix: 16,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [3.781, 0],
                    [1.147, -2.15]
                  ],
                  o: [
                    [0, -3.741],
                    [-2.629, 0],
                    [0, 0]
                  ],
                  v: [
                    [-0.28, -12.551],
                    [-7.128, -19.324],
                    [-13.186, -15.708]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 17",
              ix: 17,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [-5.325, 0],
                    [0, 21.132]
                  ],
                  o: [
                    [0, 3.74],
                    [5.325, 0],
                    [0, 0]
                  ],
                  v: [
                    [-0.28, 10.026],
                    [6.385, 16.799],
                    [12.978, -7.394]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 18",
              ix: 18,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [3.781, 0],
                    [1.262, 1.771]
                  ],
                  o: [
                    [0, 3.74],
                    [-3.781, 0],
                    [0, 0]
                  ],
                  v: [
                    [-0.28, 10.026],
                    [-7.128, 16.799],
                    [-12.227, 13.738]
                  ]
                },
                ix: 2
              }
            },
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 19",
              ix: 19,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !1,
                  i: [
                    [0, 0],
                    [0, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, 0]
                  ],
                  v: [
                    [-0.28, 10.026],
                    [-0.28, -12.551]
                  ]
                },
                ix: 2
              }
            },
            { ty: "mm", bm: 0, hd: !1, mn: "ADBE Vector Filter - Merge", nm: "Merge Paths 1", mm: 1 },
            { ty: "st", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Stroke", nm: "Stroke 1", lc: 1, lj: 1, ml: 4, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 2, ix: 5 }, c: { a: 0, k: [0.1216, 0.1216, 0.1176], ix: 3 } },
            { ty: "tr", a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, sk: { a: 0, k: 0, ix: 4 }, p: { a: 0, k: [564.281, 71.847], ix: 2 }, r: { a: 0, k: 0, ix: 6 }, sa: { a: 0, k: 0, ix: 5 }, o: { a: 0, k: 100, ix: 7 } }
          ]
        },
        {
          ty: "gr",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 2",
          ix: 2,
          cix: 2,
          np: 2,
          it: [
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 1",
              ix: 1,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !0,
                  i: [
                    [0, -3.741],
                    [0, 0],
                    [-5.326, 0],
                    [0, 21.132],
                    [0, 0],
                    [2.92, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, 3.74],
                    [5.325, 0],
                    [0, 0],
                    [-0.985, -2.546],
                    [-3.781, 0]
                  ],
                  v: [
                    [-6.629, -11.288],
                    [-6.629, 11.288],
                    [0.038, 18.062],
                    [6.629, -6.131],
                    [6.614, -13.708],
                    [0.217, -18.062]
                  ]
                },
                ix: 2
              }
            },
            { ty: "fl", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Fill", nm: "Fill 1", c: { a: 0, k: [0.1333, 0.7725, 0.3686], ix: 4 }, r: 1, o: { a: 0, k: 100, ix: 5 } },
            { ty: "tr", a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, sk: { a: 0, k: 0, ix: 4 }, p: { a: 0, k: [570.629, 70.585], ix: 2 }, r: { a: 0, k: 0, ix: 6 }, sa: { a: 0, k: 0, ix: 5 }, o: { a: 0, k: 100, ix: 7 } }
          ]
        },
        {
          ty: "gr",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 3",
          ix: 3,
          cix: 2,
          np: 2,
          it: [
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 1",
              ix: 1,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !0,
                  i: [
                    [0, 3.741],
                    [3.782, 0],
                    [1.262, 1.771],
                    [11.815, -1.922],
                    [2.938, -4.412],
                    [0, -8.429],
                    [0, -3.011],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 6.02],
                    [0, 0],
                    [0, 0],
                    [4.051, 0.724],
                    [0.732, -4.008],
                    [0, 0],
                    [0, 0],
                    [5.325, 0]
                  ],
                  o: [
                    [0, 3.741],
                    [-3.781, 0],
                    [8.724, -7.653],
                    [-4.39, 0.715],
                    [0, 0],
                    [0, 10.535],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [2.283, -1.506],
                    [0, 0],
                    [0, 0],
                    [0.732, -4.007],
                    [-4.051, -0.725],
                    [0, 0],
                    [0, 0],
                    [0, 21.132],
                    [-5.326, 0]
                  ],
                  v: [
                    [-0.526, 6.856],
                    [-7.373, 13.629],
                    [-12.473, 10.568],
                    [-12.933, -7.614],
                    [-28.092, 5.436],
                    [-31.716, 18.897],
                    [-23.348, 33.948],
                    [-23.348, 44.483],
                    [17.731, 44.483],
                    [17.731, 32.443],
                    [24.578, 20.402],
                    [24.578, 1.41],
                    [30.984, -35.19],
                    [24.975, -43.758],
                    [16.313, -37.814],
                    [12.717, -18.141],
                    [12.732, -10.564],
                    [6.141, 13.629]
                  ]
                },
                ix: 2
              }
            },
            { ty: "fl", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Fill", nm: "Fill 1", c: { a: 0, k: [0.1333, 0.7725, 0.3686], ix: 4 }, r: 1, o: { a: 0, k: 100, ix: 5 } },
            { ty: "tr", a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, sk: { a: 0, k: 0, ix: 4 }, p: { a: 0, k: [564.526, 75.017], ix: 2 }, r: { a: 0, k: 0, ix: 6 }, sa: { a: 0, k: 0, ix: 5 }, o: { a: 0, k: 100, ix: 7 } }
          ]
        },
        {
          ty: "gr",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 4",
          ix: 4,
          cix: 2,
          np: 2,
          it: [
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 1",
              ix: 1,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !0,
                  i: [
                    [-0.333, -4.56],
                    [0, 0],
                    [0, 0],
                    [-4.389, 0.714],
                    [0, 0],
                    [0, 0],
                    [4.61, -0.33]
                  ],
                  o: [
                    [0, 0],
                    [0.143, 1.959],
                    [2.938, -4.411],
                    [0, 0],
                    [0, 0],
                    [-0.333, -4.56],
                    [-4.609, 0.329]
                  ],
                  v: [
                    [-9.303, -18.947],
                    [-6.233, 23.087],
                    [-5.521, 28.13],
                    [9.637, 15.081],
                    [9.139, 3.817],
                    [7.39, -20.14],
                    [-1.56, -27.8]
                  ]
                },
                ix: 2
              }
            },
            { ty: "fl", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Fill", nm: "Fill 1", c: { a: 0, k: [0.1333, 0.7725, 0.3686], ix: 4 }, r: 1, o: { a: 0, k: 100, ix: 5 } },
            { ty: "tr", a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, sk: { a: 0, k: 0, ix: 4 }, p: { a: 0, k: [541.956, 52.322], ix: 2 }, r: { a: 0, k: 0, ix: 6 }, sa: { a: 0, k: 0, ix: 5 }, o: { a: 0, k: 100, ix: 7 } }
          ]
        },
        {
          ty: "gr",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 5",
          ix: 5,
          cix: 2,
          np: 2,
          it: [
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 1",
              ix: 1,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !0,
                  i: [
                    [0, 3.741],
                    [0, 0],
                    [3.782, 0],
                    [1.148, -2.151],
                    [0, 0],
                    [8.724, -7.653],
                    [-3.781, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, -3.74],
                    [-2.629, 0],
                    [0, 0],
                    [11.815, -1.922],
                    [1.262, 1.771],
                    [3.782, 0]
                  ],
                  v: [
                    [6.453, 11.288],
                    [6.453, -11.289],
                    [-0.394, -18.061],
                    [-6.453, -14.444],
                    [-5.954, -3.182],
                    [-5.494, 15],
                    [-0.394, 18.061]
                  ]
                },
                ix: 2
              }
            },
            { ty: "fl", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Fill", nm: "Fill 1", c: { a: 0, k: [0.1333, 0.7725, 0.3686], ix: 4 }, r: 1, o: { a: 0, k: 100, ix: 5 } },
            { ty: "tr", a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, sk: { a: 0, k: 0, ix: 4 }, p: { a: 0, k: [557.547, 70.584], ix: 2 }, r: { a: 0, k: 0, ix: 6 }, sa: { a: 0, k: 0, ix: 5 }, o: { a: 0, k: 100, ix: 7 } }
          ]
        }
      ],
      ind: 4
    },
    {
      ty: 4,
      nm: "\u043E\u0433\u043E\u043D\u044C",
      sr: 1,
      st: 0,
      op: 300.00001221925,
      ip: 0,
      hd: !1,
      ddd: 0,
      bm: 0,
      hasMask: !1,
      ao: 0,
      ks: {
        a: { a: 0, k: [513.5, 359.554, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
        sk: { a: 0, k: 0 },
        p: { a: 0, k: [134, 113, 0], ix: 2 },
        r: { a: 0, k: 0, ix: 10 },
        sa: { a: 0, k: 0 },
        o: {
          a: 1,
          k: [
            { h: 1, s: [0], t: 0 },
            { h: 1, s: [100], t: 120 },
            { s: [0], t: 150.000006109625 }
          ],
          ix: 11
        }
      },
      ef: [],
      shapes: [
        {
          ty: "gr",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 1",
          ix: 1,
          cix: 2,
          np: 3,
          it: [
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 1",
              ix: 1,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !0,
                  i: [
                    [5.218, 1.678],
                    [0, 0],
                    [12.89, 3.136],
                    [4.21, -27.251],
                    [-17.069, 0],
                    [-2.324, 25.841]
                  ],
                  o: [
                    [0, 8.08],
                    [2.933, -23.76],
                    [4.339, 32.147],
                    [-4.211, 27.251],
                    [17.778, 0],
                    [1.8, -20.011]
                  ],
                  v: [
                    [24.375, -19.704],
                    [17.638, -9.106],
                    [-6.934, -50],
                    [-36.957, 10.453],
                    [-0.141, 50],
                    [39.367, 14.778]
                  ]
                },
                ix: 2
              }
            },
            { ty: "st", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Stroke", nm: "Stroke 1", lc: 1, lj: 1, ml: 4, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 2, ix: 5 }, c: { a: 0, k: [0.1216, 0.1216, 0.1176], ix: 3 } },
            { ty: "fl", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Fill", nm: "Fill 1", c: { a: 0, k: [0.1333, 0.7725, 0.3686], ix: 4 }, r: 1, o: { a: 0, k: 100, ix: 5 } },
            { ty: "tr", a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, sk: { a: 0, k: 0, ix: 4 }, p: { a: 0, k: [512.445, 359.554], ix: 2 }, r: { a: 0, k: 0, ix: 6 }, sa: { a: 0, k: 0, ix: 5 }, o: { a: 0, k: 100, ix: 7 } }
          ]
        }
      ],
      ind: 5
    },
    {
      ty: 4,
      nm: "\u043C\u043E\u043B\u043D\u0438\u044F",
      sr: 1,
      st: 0,
      op: 300.00001221925,
      ip: 0,
      hd: !1,
      ddd: 0,
      bm: 0,
      hasMask: !1,
      ao: 0,
      ks: {
        a: { a: 0, k: [213.5, 457.553, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
        sk: { a: 0, k: 0 },
        p: { a: 0, k: [134, 113, 0], ix: 2 },
        r: { a: 0, k: 0, ix: 10 },
        sa: { a: 0, k: 0 },
        o: {
          a: 1,
          k: [
            { h: 1, s: [0], t: 0 },
            { h: 1, s: [100], t: 150 },
            { s: [0], t: 180.00000733155 }
          ],
          ix: 11
        }
      },
      ef: [],
      shapes: [
        {
          ty: "gr",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 1",
          ix: 1,
          cix: 2,
          np: 3,
          it: [
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 1",
              ix: 1,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !0,
                  i: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                  ],
                  v: [
                    [-34, 12.873],
                    [2.184, -47],
                    [2.184, -11.076],
                    [34, -11.076],
                    [-2.184, 47],
                    [-2.184, 12.873]
                  ]
                },
                ix: 2
              }
            },
            { ty: "st", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Stroke", nm: "Stroke 1", lc: 2, lj: 1, ml: 4, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 2, ix: 5 }, c: { a: 0, k: [0.1216, 0.1216, 0.1176], ix: 3 } },
            { ty: "fl", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Fill", nm: "Fill 1", c: { a: 0, k: [0.1333, 0.7725, 0.3686], ix: 4 }, r: 1, o: { a: 0, k: 100, ix: 5 } },
            { ty: "tr", a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, sk: { a: 0, k: 0, ix: 4 }, p: { a: 0, k: [213.5, 457.553], ix: 2 }, r: { a: 0, k: 0, ix: 6 }, sa: { a: 0, k: 0, ix: 5 }, o: { a: 0, k: 100, ix: 7 } }
          ]
        }
      ],
      ind: 6
    },
    {
      ty: 4,
      nm: "\u0437\u0432\u0435\u0437\u0434\u0430",
      sr: 1,
      st: 0,
      op: 300.00001221925,
      ip: 0,
      hd: !1,
      ddd: 0,
      bm: 0,
      hasMask: !1,
      ao: 0,
      ks: {
        a: { a: 0, k: [151, 322.107, 0], ix: 1 },
        s: { a: 0, k: [100, 100, 100], ix: 6 },
        sk: { a: 0, k: 0 },
        p: { a: 0, k: [134, 113, 0], ix: 2 },
        r: { a: 0, k: 0, ix: 10 },
        sa: { a: 0, k: 0 },
        o: {
          a: 1,
          k: [
            { h: 1, s: [0], t: 0 },
            { s: [100], t: 180.00000733155 }
          ],
          ix: 11
        }
      },
      ef: [],
      shapes: [
        {
          ty: "gr",
          bm: 0,
          hd: !1,
          mn: "ADBE Vector Group",
          nm: "Group 1",
          ix: 1,
          cix: 2,
          np: 3,
          it: [
            {
              ty: "sh",
              bm: 0,
              hd: !1,
              mn: "ADBE Vector Shape - Group",
              nm: "Path 1",
              ix: 1,
              d: 1,
              ks: {
                a: 0,
                k: {
                  c: !0,
                  i: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                  ],
                  o: [
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0],
                    [0, 0]
                  ],
                  v: [
                    [0, -45.677],
                    [11.226, -10.783],
                    [47.553, -10.783],
                    [18.164, 10.784],
                    [29.389, 45.678],
                    [0, 24.112],
                    [-29.389, 45.678],
                    [-18.164, 10.784],
                    [-47.553, -10.783],
                    [-11.226, -10.783]
                  ]
                },
                ix: 2
              }
            },
            { ty: "st", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Stroke", nm: "Stroke 1", lc: 1, lj: 1, ml: 4, o: { a: 0, k: 100, ix: 4 }, w: { a: 0, k: 2, ix: 5 }, c: { a: 0, k: [0.1216, 0.1216, 0.1176], ix: 3 } },
            { ty: "fl", bm: 0, hd: !1, mn: "ADBE Vector Graphic - Fill", nm: "Fill 1", c: { a: 0, k: [0.1333, 0.7725, 0.3686], ix: 4 }, r: 1, o: { a: 0, k: 100, ix: 5 } },
            { ty: "tr", a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, sk: { a: 0, k: 0, ix: 4 }, p: { a: 0, k: [151, 322.107], ix: 2 }, r: { a: 0, k: 0, ix: 6 }, sa: { a: 0, k: 0, ix: 5 }, o: { a: 0, k: 100, ix: 7 } }
          ]
        }
      ],
      ind: 7
    }
  ],
  v: "4.8.0",
  fr: 29.9700012207031,
  op: 211.000008594206,
  ip: 0,
  assets: []
};

// app/routes/_index.tsx
var import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function meta8() {
  return [
    { title: "Connect Families with Incarcerated Individuals | Convo Phone" },
    { description: "Discover a Convenient Solution for Connecting Families with Incarcerated Individuals. Our web browser application simplifies communication by allowing families to register a local telephone number, providing affordable and frequent contact with prisoners. Explore our services today and experience the ease of staying connected with your loved ones behind bars." }
  ];
}
function Example19() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "bg-white", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Navbar, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "relative isolate pt-14", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "md:mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-x-10 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "lg:mt-0 lg:flex-shrink-0 lg:flex-grow", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(Example18, {}, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 21,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "hidden lg:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mx-auto md:mt-48  mb-20 max-w-7xl h-20 flex items-center justify-center border-t-2 border-b-2 border-solid py-0 px-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("nav", { className: "lg:grid grid-cols-[min-content,1fr,min-content] lg:items-center h-16 lg:gap-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16", height: "14", width: "22", className: "text-gray-500 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M10 2L4 8L10 14" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 27,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 26,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "overflow-hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("ul", { className: "flex gap-6 transition-transform duration-500 ease-in-out uppercase font-dinround text-custom-sm text-gray-500", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("li", { children: "\u{1F1FA}\u{1F1F8} English" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 31,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("li", { children: "\u{1F1E8}\u{1F1F3} Chinese" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 32,
              columnNumber: 23
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("li", { children: "\u{1F1FB}\u{1F1F3} Vietnamese" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 33,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 30,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 29,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 16 16", height: "14", width: "22", className: "text-gray-500 cursor-pointer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 2L12 8L6 14" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 37,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 36,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 25,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 24,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex flex-col overflow-hidden", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "md:mx-auto max-w-7xl mx-4 pt-24 lg:flex lg:items-center lg:gap-x-10 xl:gap-x-10 lg:px-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "lg:mt-0 lg:flex-shrink-0 lg:flex-grow", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h2", { className: "text-4xl md:text-5xl md:text-start text-center text-green-500 max-w-2xl font-feather font-bold", children: "Cheap. easy. friendly." }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 47,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "text-gray-500 font-dinround text-custom-sm md:text-start text-center max-w-2xl lg:max-w-md pt-4", children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium nihil numquam cumque corrupti tempora maxime molestias, cum porro totam magnam commodi!" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 48,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 46,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_lottie_react4.default, { animationData: test_default, className: "bottom-10 md:w-96" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 50,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "md:mx-auto max-w-7xl mx-4 md:pt-24 lg:flex lg:items-center lg:gap-x-10 xl:gap-x-10 lg:px-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "lg:mt-0 lg:flex-shrink-0 lg:flex-grow order-1 md:order-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h2", { className: "text-4xl md:text-5xl md:text-start text-center text-green-500 max-w-2xl font-feather font-bold", children: "Unlock Efficiency" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 54,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "text-gray-500 font-dinround text-custom-sm md:text-start text-center max-w-2xl lg:max-w-md pt-4", children: "Streamlined Prison Number Management at Your Fingertips! Streamlined Prison Number Management at Your Fingertips! Streamlined Prison Number Management!" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 55,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 53,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_lottie_react4.default, { animationData: test_default, className: "bottom-10 md:w-96 order-2 md:order-1" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 57,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "md:mx-auto max-w-7xl mx-4 md:pt-24 lg:flex lg:items-center lg:gap-x-10 xl:gap-x-10 lg:px-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "lg:mt-0 lg:flex-shrink-0 lg:flex-grow", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h2", { className: "text-4xl md:text-5xl md:text-start text-center text-green-500 max-w-2xl font-feather font-bold", children: "Spend Less, Achieve More!" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 61,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "text-gray-500  font-dinround text-custom-sm md:text-start text-center max-w-2xl lg:max-w-xl pt-4", children: "The Smart Approach to Prison Number Configuration! The Smart Approach to Prison Number Configuration! The Smart Approach!" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 62,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 60,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_lottie_react4.default, { animationData: test_default, className: "bottom-10 md:w-96" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 64,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 59,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "md:mx-auto max-w-7xl mx-4 md:pt-24 lg:flex lg:items-center lg:gap-x-10 xl:gap-x-10 lg:px-8", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "lg:mt-0 lg:flex-shrink-0 lg:flex-grow order-1 md:order-2", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h2", { className: "text-4xl md:text-5xl md:text-start text-center  text-green-500 max-w-2xl font-feather font-bold", children: "Every Word Counts" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 68,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("p", { className: "text-gray-500 font-dinround text-custom-sm md:text-start text-center max-w-2xl lg:max-w-md pt-4", children: "Making Family Conversations Affordable and Accessible! Making Family Conversations Affordable and Accessible Making Family Conversations Affordable and Accessible Making Family!" }, void 0, !1, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 69,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 67,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_lottie_react4.default, { animationData: test_default, className: "bottom-10 md:w-96 order-2 md:order-1" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 71,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 66,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "bg-sky-50 md:mt-20 flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "mx-auto max-w-7xl pt-24 lg:flex lg:items-center lg:gap-x-10 xl:gap-x-10 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("h2", { className: " max-w-md md:m-20 mb-20 text-color-manta-ray text-custom-lg md:text-6xl text-center font-feather font-bold", children: "Call anytime, anywhere" }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 75,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 74,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("div", { className: "flex flex-col md:flex-row  gap-4 mb-20", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("button", { className: "flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-200 selection:font-dinround text-gray-700 border-2 border-solid border-neutral-300 drop-shadow-md rounded-md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("svg", { viewBox: "0 0 37 37", height: "34", width: "34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("title", { children: "badge-app-store" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 80,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
                  "path",
                  {
                    d: "M26.9039 19.1188C26.9363 16.611 28.2528 14.2945 30.3922 12.981C29.0364 11.0473 26.8469 9.86522 24.4843 9.7914C21.9986 9.53084 19.5888 11.2768 18.3221 11.2768C17.0309 11.2768 15.0807 9.81727 12.9806 9.86042C10.2174 9.94957 7.7038 11.4804 6.35946 13.8929C3.49663 18.8428 5.63205 26.1174 8.3744 30.1184C9.74645 32.0776 11.35 34.2661 13.4482 34.1885C15.5014 34.1035 16.2682 32.881 18.7466 32.881C21.202 32.881 21.9215 34.1885 24.0623 34.1392C26.2655 34.1035 27.6536 32.1713 28.9775 30.1935C29.9633 28.7975 30.7219 27.2546 31.2252 25.622C28.6084 24.5167 26.907 21.9562 26.9039 19.1188V19.1188Z",
                    fill: "currentColor"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 81,
                    columnNumber: 19
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("path", { d: "M22.8604 7.16005C24.0617 5.71991 24.6535 3.86887 24.5102 2C22.6749 2.1925 20.9796 3.06846 19.7621 4.45334C18.5599 5.81971 17.9508 7.60728 18.0691 9.42235C19.929 9.44147 21.6949 8.60765 22.8604 7.16005V7.16005Z", fill: "currentColor" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 84,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 79,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "grid font-semibold font-dinround text-color-eel-always-light", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "text-sm", children: "Download on the" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 87,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "text-custom-sm font-bold", children: "App Store" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 88,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 86,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 78,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("button", { className: "flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-200 font-dinround text-gray-700 border-2 border-solid border-neutral-300 drop-shadow-md rounded-md", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("svg", { viewBox: "0 0 37 37", height: "34", width: "34", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("title", { children: "badge-app-store" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 93,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
                  "path",
                  {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    d: "M3.80942 4.3203C3.80942 4.09554 3.82731 3.88521 3.86151 3.69016L17.8617 18.4703L3.83906 33.2741C3.81952 33.1218 3.80942 32.961 3.80942 32.792V4.3203ZM5.35237 35.0876C5.86758 35.1708 6.47838 35.0454 7.13188 34.6805L24.1811 25.1417L19.4773 20.1758L5.35237 35.0876ZM21.0928 18.4703L26.2937 23.9609L32.63 20.4164C34.4567 19.393 34.4567 17.7194 32.63 16.6985L26.1861 13.0933L21.0928 18.4703ZM24.0742 11.9117L7.13188 2.43299C6.60625 2.13818 6.10808 1.99915 5.66613 1.99915C5.60892 1.99915 5.55264 2.00146 5.49734 2.00606L19.4773 16.7648L24.0742 11.9117Z",
                    fill: "currentColor"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_index.tsx",
                    lineNumber: 94,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 92,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "grid font-semibold font-dinround text-color-eel-always-light", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "text-sm", children: "Get it on" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 101,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)("span", { className: "text-custom-sm font-bold", children: "Google Play" }, void 0, !1, {
                  fileName: "app/routes/_index.tsx",
                  lineNumber: 102,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_index.tsx",
                lineNumber: 100,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_index.tsx",
              lineNumber: 91,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/_index.tsx",
            lineNumber: 77,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-ZZIKYEIN.js", imports: ["/build/_shared/chunk-GEEOIHC5.js", "/build/_shared/chunk-QV4NEQBE.js", "/build/_shared/chunk-HK577TVK.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BXFFOK3Z.js", imports: ["/build/_shared/chunk-Y7FY4ZUP.js", "/build/_shared/chunk-VIBK5RC3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-UL634EME.js", imports: ["/build/_shared/chunk-IAXRGNEY.js", "/build/_shared/chunk-FCAPMOQG.js", "/build/_shared/chunk-JCLGIV6G.js", "/build/_shared/chunk-T4V3CYVZ.js", "/build/_shared/chunk-WJNVFN7L.js", "/build/_shared/chunk-XD3W3P3R.js", "/build/_shared/chunk-ELCGL2II.js", "/build/_shared/chunk-YL7COCYK.js", "/build/_shared/chunk-IEYOHAOD.js", "/build/_shared/chunk-R5INXSD2.js", "/build/_shared/chunk-VLCL7K6W.js", "/build/_shared/chunk-S6ZJAEYG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about-us": { id: "routes/about-us", parentId: "root", path: "about-us", index: void 0, caseSensitive: void 0, module: "/build/routes/about-us-C25VMLVB.js", imports: ["/build/_shared/chunk-IAXRGNEY.js", "/build/_shared/chunk-FCAPMOQG.js", "/build/_shared/chunk-JCLGIV6G.js", "/build/_shared/chunk-T4V3CYVZ.js", "/build/_shared/chunk-WJNVFN7L.js", "/build/_shared/chunk-ELCGL2II.js", "/build/_shared/chunk-YL7COCYK.js", "/build/_shared/chunk-IEYOHAOD.js", "/build/_shared/chunk-R5INXSD2.js", "/build/_shared/chunk-VLCL7K6W.js", "/build/_shared/chunk-S6ZJAEYG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact-us": { id: "routes/contact-us", parentId: "root", path: "contact-us", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-us-EA2EXOIT.js", imports: ["/build/_shared/chunk-IAXRGNEY.js", "/build/_shared/chunk-FCAPMOQG.js", "/build/_shared/chunk-JCLGIV6G.js", "/build/_shared/chunk-T4V3CYVZ.js", "/build/_shared/chunk-WJNVFN7L.js", "/build/_shared/chunk-ELCGL2II.js", "/build/_shared/chunk-YL7COCYK.js", "/build/_shared/chunk-IEYOHAOD.js", "/build/_shared/chunk-R5INXSD2.js", "/build/_shared/chunk-VLCL7K6W.js", "/build/_shared/chunk-S6ZJAEYG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-6CXVWLF4.js", imports: ["/build/_shared/chunk-FCAPMOQG.js", "/build/_shared/chunk-JCLGIV6G.js", "/build/_shared/chunk-T4V3CYVZ.js", "/build/_shared/chunk-WJNVFN7L.js", "/build/_shared/chunk-E42GNZ3O.js", "/build/_shared/chunk-ELCGL2II.js", "/build/_shared/chunk-YL7COCYK.js", "/build/_shared/chunk-IEYOHAOD.js", "/build/_shared/chunk-R5INXSD2.js", "/build/_shared/chunk-VLCL7K6W.js", "/build/_shared/chunk-S6ZJAEYG.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard._index": { id: "routes/dashboard._index", parentId: "routes/dashboard", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/dashboard._index-BODA2LLT.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard.account_.billing": { id: "routes/dashboard.account_.billing", parentId: "routes/dashboard", path: "account/billing", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.account_.billing-WFJ6QQM5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard.account_.plan": { id: "routes/dashboard.account_.plan", parentId: "routes/dashboard", path: "account/plan", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.account_.plan-OWZE5KXS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard.account_.profile": { id: "routes/dashboard.account_.profile", parentId: "routes/dashboard", path: "account/profile", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.account_.profile-QDPO342I.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard.add-new-number": { id: "routes/dashboard.add-new-number", parentId: "routes/dashboard", path: "add-new-number", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.add-new-number-32PRKLLM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/dashboard.manage_numbers": { id: "routes/dashboard.manage_numbers", parentId: "routes/dashboard", path: "manage_numbers", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard.manage_numbers-GTRVAJMF.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/frequently-asked-questions": { id: "routes/frequently-asked-questions", parentId: "root", path: "frequently-asked-questions", index: void 0, caseSensitive: void 0, module: "/build/routes/frequently-asked-questions-HDDT3SFG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/not-authorised": { id: "routes/not-authorised", parentId: "root", path: "not-authorised", index: void 0, caseSensitive: void 0, module: "/build/routes/not-authorised-ZFXQ3WTV.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/onboard": { id: "routes/onboard", parentId: "root", path: "onboard", index: void 0, caseSensitive: void 0, module: "/build/routes/onboard-3MZKEYZG.js", imports: ["/build/_shared/chunk-TLVYGSOZ.js", "/build/_shared/chunk-XD3W3P3R.js", "/build/_shared/chunk-S6ZJAEYG.js", "/build/_shared/chunk-QLKUBTJW.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/onboard.create-account.$": { id: "routes/onboard.create-account.$", parentId: "routes/onboard", path: "create-account/*", index: void 0, caseSensitive: void 0, module: "/build/routes/onboard.create-account.$-LMWQKEDK.js", imports: ["/build/_shared/chunk-KYVQP2FD.js", "/build/_shared/chunk-VIBK5RC3.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/onboard.provide-number": { id: "routes/onboard.provide-number", parentId: "routes/onboard", path: "provide-number", index: void 0, caseSensitive: void 0, module: "/build/routes/onboard.provide-number-C5XMXW5J.js", imports: ["/build/_shared/chunk-42HJLYNJ.js", "/build/_shared/chunk-URIJM3GH.js", "/build/_shared/chunk-KYVQP2FD.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/onboard.select-location": { id: "routes/onboard.select-location", parentId: "routes/onboard", path: "select-location", index: void 0, caseSensitive: void 0, module: "/build/routes/onboard.select-location-Q3AWOP5U.js", imports: ["/build/_shared/chunk-42HJLYNJ.js", "/build/_shared/chunk-JCLGIV6G.js", "/build/_shared/chunk-WJNVFN7L.js", "/build/_shared/chunk-URIJM3GH.js", "/build/_shared/chunk-NILBABMF.js", "/build/_shared/chunk-YL7COCYK.js", "/build/_shared/chunk-R5INXSD2.js", "/build/_shared/chunk-KYVQP2FD.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/onboard.select-option": { id: "routes/onboard.select-option", parentId: "routes/onboard", path: "select-option", index: void 0, caseSensitive: void 0, module: "/build/routes/onboard.select-option-KPVFLFWK.js", imports: ["/build/_shared/chunk-AJEOIA6Q.js", "/build/_shared/chunk-NILBABMF.js", "/build/_shared/chunk-ELCGL2II.js", "/build/_shared/chunk-YL7COCYK.js", "/build/_shared/chunk-IEYOHAOD.js", "/build/_shared/chunk-R5INXSD2.js", "/build/_shared/chunk-VLCL7K6W.js", "/build/_shared/chunk-VIBK5RC3.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/onboard.success": { id: "routes/onboard.success", parentId: "routes/onboard", path: "success", index: void 0, caseSensitive: void 0, module: "/build/routes/onboard.success-5JI3EVHA.js", imports: ["/build/_shared/chunk-E42GNZ3O.js", "/build/_shared/chunk-URIJM3GH.js", "/build/_shared/chunk-AJEOIA6Q.js", "/build/_shared/chunk-NILBABMF.js", "/build/_shared/chunk-ELCGL2II.js", "/build/_shared/chunk-YL7COCYK.js", "/build/_shared/chunk-IEYOHAOD.js", "/build/_shared/chunk-R5INXSD2.js", "/build/_shared/chunk-Y7FY4ZUP.js", "/build/_shared/chunk-VLCL7K6W.js", "/build/_shared/chunk-VIBK5RC3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/pay._index": { id: "routes/pay._index", parentId: "root", path: "pay", index: !0, caseSensitive: void 0, module: "/build/routes/pay._index-R5AGIE2C.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/privacy-policy": { id: "routes/privacy-policy", parentId: "root", path: "privacy-policy", index: void 0, caseSensitive: void 0, module: "/build/routes/privacy-policy-NK5PBUGZ.js", imports: ["/build/_shared/chunk-VLCL7K6W.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-in.$": { id: "routes/sign-in.$", parentId: "root", path: "sign-in/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-in.$-5VL4HNLU.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/sign-up.$": { id: "routes/sign-up.$", parentId: "root", path: "sign-up/*", index: void 0, caseSensitive: void 0, module: "/build/routes/sign-up.$-73E72Q7J.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/terms-and-conditions": { id: "routes/terms-and-conditions", parentId: "root", path: "terms-and-conditions", index: void 0, caseSensitive: void 0, module: "/build/routes/terms-and-conditions-NSRZE4J2.js", imports: ["/build/_shared/chunk-IAXRGNEY.js", "/build/_shared/chunk-FCAPMOQG.js", "/build/_shared/chunk-JCLGIV6G.js", "/build/_shared/chunk-T4V3CYVZ.js", "/build/_shared/chunk-WJNVFN7L.js", "/build/_shared/chunk-ELCGL2II.js", "/build/_shared/chunk-YL7COCYK.js", "/build/_shared/chunk-IEYOHAOD.js", "/build/_shared/chunk-R5INXSD2.js", "/build/_shared/chunk-VLCL7K6W.js", "/build/_shared/chunk-S6ZJAEYG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "4d37077a", hmr: void 0, url: "/build/manifest-4D37077A.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !1, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_react_stream_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard.account_.billing": {
    id: "routes/dashboard.account_.billing",
    parentId: "routes/dashboard",
    path: "account/billing",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_account_billing_exports
  },
  "routes/dashboard.account_.profile": {
    id: "routes/dashboard.account_.profile",
    parentId: "routes/dashboard",
    path: "account/profile",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_account_profile_exports
  },
  "routes/frequently-asked-questions": {
    id: "routes/frequently-asked-questions",
    parentId: "root",
    path: "frequently-asked-questions",
    index: void 0,
    caseSensitive: void 0,
    module: frequently_asked_questions_exports
  },
  "routes/dashboard.add-new-number": {
    id: "routes/dashboard.add-new-number",
    parentId: "routes/dashboard",
    path: "add-new-number",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_add_new_number_exports
  },
  "routes/dashboard.manage_numbers": {
    id: "routes/dashboard.manage_numbers",
    parentId: "routes/dashboard",
    path: "manage_numbers",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_manage_numbers_exports
  },
  "routes/onboard.create-account.$": {
    id: "routes/onboard.create-account.$",
    parentId: "routes/onboard",
    path: "create-account/*",
    index: void 0,
    caseSensitive: void 0,
    module: onboard_create_account_exports
  },
  "routes/dashboard.account_.plan": {
    id: "routes/dashboard.account_.plan",
    parentId: "routes/dashboard",
    path: "account/plan",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_account_plan_exports
  },
  "routes/onboard.select-location": {
    id: "routes/onboard.select-location",
    parentId: "routes/onboard",
    path: "select-location",
    index: void 0,
    caseSensitive: void 0,
    module: onboard_select_location_exports
  },
  "routes/onboard.provide-number": {
    id: "routes/onboard.provide-number",
    parentId: "routes/onboard",
    path: "provide-number",
    index: void 0,
    caseSensitive: void 0,
    module: onboard_provide_number_exports
  },
  "routes/onboard.select-option": {
    id: "routes/onboard.select-option",
    parentId: "routes/onboard",
    path: "select-option",
    index: void 0,
    caseSensitive: void 0,
    module: onboard_select_option_exports
  },
  "routes/terms-and-conditions": {
    id: "routes/terms-and-conditions",
    parentId: "root",
    path: "terms-and-conditions",
    index: void 0,
    caseSensitive: void 0,
    module: terms_and_conditions_exports
  },
  "routes/dashboard._index": {
    id: "routes/dashboard._index",
    parentId: "routes/dashboard",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: dashboard_index_exports
  },
  "routes/onboard.success": {
    id: "routes/onboard.success",
    parentId: "routes/onboard",
    path: "success",
    index: void 0,
    caseSensitive: void 0,
    module: onboard_success_exports
  },
  "routes/not-authorised": {
    id: "routes/not-authorised",
    parentId: "root",
    path: "not-authorised",
    index: void 0,
    caseSensitive: void 0,
    module: not_authorised_exports
  },
  "routes/privacy-policy": {
    id: "routes/privacy-policy",
    parentId: "root",
    path: "privacy-policy",
    index: void 0,
    caseSensitive: void 0,
    module: privacy_policy_exports
  },
  "routes/contact-us": {
    id: "routes/contact-us",
    parentId: "root",
    path: "contact-us",
    index: void 0,
    caseSensitive: void 0,
    module: contact_us_exports
  },
  "routes/pay._index": {
    id: "routes/pay._index",
    parentId: "root",
    path: "pay",
    index: !0,
    caseSensitive: void 0,
    module: pay_index_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/sign-in.$": {
    id: "routes/sign-in.$",
    parentId: "root",
    path: "sign-in/*",
    index: void 0,
    caseSensitive: void 0,
    module: sign_in_exports
  },
  "routes/sign-up.$": {
    id: "routes/sign-up.$",
    parentId: "root",
    path: "sign-up/*",
    index: void 0,
    caseSensitive: void 0,
    module: sign_up_exports
  },
  "routes/about-us": {
    id: "routes/about-us",
    parentId: "root",
    path: "about-us",
    index: void 0,
    caseSensitive: void 0,
    module: about_us_exports
  },
  "routes/onboard": {
    id: "routes/onboard",
    parentId: "root",
    path: "onboard",
    index: void 0,
    caseSensitive: void 0,
    module: onboard_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
