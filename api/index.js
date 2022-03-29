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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
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

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/hgarnier/Documents/PERSO/basket/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-YPJ3MZ25.css";

// route:/Users/hgarnier/Documents/PERSO/basket/app/root.tsx
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
var meta = () => {
  return { title: "New Remix App" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/Users/hgarnier/Documents/PERSO/basket/app/routes/game/$date/$teamId.tsx
var teamId_exports = {};
__export(teamId_exports, {
  default: () => Index,
  loader: () => loader
});
init_react();
var import_date_fns = require("date-fns");
var import_remix4 = __toESM(require_remix());
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/api/index.ts
init_react();
var getGames = async (date, teamId) => {
  const response = await fetch(`${process.env.RAPIDAPI_URL}/games?season=2021-2022&league=2&date=${date}&team=${teamId}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": process.env.RAPIDAPI_HEADER,
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY
    }
  });
  const data = await response.json();
  return {
    data: data.response
  };
};

// app/components/Layout/index.tsx
init_react();

// app/components/Footer/index.tsx
init_react();
function Footer() {
  const linkStyle = "border-b-gray-900 text-gray-900 hover:border-b-[1px]";
  return /* @__PURE__ */ React.createElement("footer", {
    className: "container mx-auto pt-16 text-center"
  }, /* @__PURE__ */ React.createElement("p", null, `Developped by `, /* @__PURE__ */ React.createElement("a", {
    className: linkStyle,
    href: "https://github.com/hugogarnier",
    target: "_blank",
    rel: "noreferrer"
  }, "Hugo"), ` with `, /* @__PURE__ */ React.createElement("a", {
    className: linkStyle,
    href: "https://remix.run",
    target: "_blank",
    rel: "noreferrer"
  }, "Remix.run")));
}
var Footer_default = Footer;

// app/components/Header/index.tsx
init_react();
var import_remix3 = __toESM(require_remix());
function Header() {
  const linkClass = "text-lg transition-opacity hover:opacity-70 border-b-2 border-transparent hover:border-blue-300";
  const activeLinkClass = "text-lg transition-opacity hover:opacity-70 border-b-2 border-blue-500";
  return /* @__PURE__ */ React.createElement("header", {
    className: "container mx-auto flex items-center justify-between px-4 py-8"
  }, /* @__PURE__ */ React.createElement(import_remix3.Link, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "w-24",
    src: "/images/logos/logo.png",
    alt: "LNB"
  })), /* @__PURE__ */ React.createElement("nav", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement(import_remix3.NavLink, {
    className: ({ isActive }) => isActive ? activeLinkClass : linkClass,
    to: "/"
  }, "Home"), /* @__PURE__ */ React.createElement(import_remix3.NavLink, {
    className: ({ isActive }) => isActive ? activeLinkClass : linkClass,
    to: "/standings"
  }, "Standings")));
}
var Header_default = Header;

// app/components/Layout/index.tsx
function Layout({ children }) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex min-h-screen flex-col bg-slate-900 bg-main bg-cover bg-center pb-24 text-white"
  }, /* @__PURE__ */ React.createElement(Header_default, null), /* @__PURE__ */ React.createElement("main", {
    className: "container mx-auto flex-grow px-4"
  }, children), /* @__PURE__ */ React.createElement(Footer_default, null));
}
var Layout_default = Layout;

// app/components/Table/index.tsx
init_react();

// app/constants/teams.ts
init_react();
var teams = {
  "paris-levallois": "Metropolitans 92",
  villeurbanne: "LDLC ASVEL",
  monaco: "AS Monaco Basket",
  dijon: "JDA Dijon",
  "le-mans": "Le Mans Sarthe Basket",
  "pau-orthez": "\xC9lan B\xE9arnais Pau-Lacq-Orthez",
  strasbourg: "SIG Strasbourg",
  limoges: "Limoges CSP",
  nanterre: "Nanterre 92",
  gravelines: "BCM Gravelines-Dunkerque",
  bourg: "JL Bourg",
  roanne: "Chorale Roanne Basket",
  cholet: "Cholet Basket",
  orleans: "Orl\xE9ans Loiret Basket",
  "le-portel": "ESSM Le Portel",
  "paris-basket": "Paris Basketball",
  "chalons-en-champagne": "Champagne Basket",
  "fos-provence": "Fos Provence"
};
var computeTeams = {
  Metropolitans: "Metropolitans 92",
  "LDLC ASVEL": "LDLC ASVEL",
  Monaco: "AS Monaco Basket",
  Dijon: "JDA Dijon",
  "Le Mans": "Le Mans Sarthe Basket",
  "Pau-Orthez": "\xC9lan B\xE9arnais Pau-Lacq-Orthez",
  Strasbourg: "SIG Strasbourg",
  Limoges: "Limoges CSP",
  Nanterre: "Nanterre 92",
  Gravelines: "BCM Gravelines-Dunkerque",
  "JL-Bourg": "JL Bourg",
  Roanne: "Chorale Roanne Basket",
  Cholet: "Cholet Basket",
  Orleans: "Orl\xE9ans Loiret Basket",
  "Le Portel": "ESSM Le Portel",
  "Paris Basket": "Paris Basketball",
  Chalons: "Champagne Basket",
  "Fos Provence": "Fos Provence"
};
var teamIds = {
  14: "Metropolitans 92",
  26: "LDLC ASVEL",
  16: "AS Monaco Basket",
  10: "JDA Dijon",
  23: "Le Mans Sarthe Basket",
  3007: "\xC9lan B\xE9arnais Pau-Lacq-Orthez",
  25: "SIG Strasbourg",
  27: "Limoges CSP",
  21: "Nanterre 92",
  17: "BCM Gravelines-Dunkerque",
  24: "JL Bourg",
  19: "Chorale Roanne Basket",
  18: "Cholet Basket",
  15: "Orl\xE9ans Loiret Basket",
  11: "ESSM Le Portel",
  108: "Paris Basketball",
  12: "Champagne Basket",
  110: "Fos Provence"
};
var teamRapidApi = {
  "paris-levallois": "Levallois",
  villeurbanne: "Lyon-Villeurbanne",
  monaco: "Monaco",
  dijon: "Dijon",
  "le-mans": "Le Mans",
  "pau-orthez": "Pau-Orthez",
  strasbourg: "Strasbourg",
  limoges: "Limoges",
  nanterre: "Nanterre",
  gravelines: "Gravelines-Dunkerque",
  bourg: "JL Bourg",
  roanne: "Roanne",
  cholet: "Cholet",
  orleans: "Orleans",
  "le-portel": "Le Portel",
  "paris-basket": "Paris",
  "chalons-en-champagne": "Chalons-Reims",
  "fos-provence": "Fos-sur-Mer"
};

// app/utils/functions/getKeyByValue.ts
init_react();
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

// app/components/Table/index.tsx
function Table({ children }) {
  return /* @__PURE__ */ React.createElement("table", {
    className: "my-5 min-w-full overflow-hidden rounded-xl border  bg-glass text-center text-white shadow-lg md:min-w-min"
  }, children);
}
function TableCell({
  className,
  children
}) {
  return /* @__PURE__ */ React.createElement("td", {
    className: `${className && className || ""} border-t border-main px-3 py-2`
  }, children);
}
function TableHead({ children }) {
  return /* @__PURE__ */ React.createElement("thead", {
    className: "bg-slate-900 font-bold"
  }, children);
}
function TableStats({ data }) {
  const formatTeamName = getKeyByValue(teams, data.team);
  return /* @__PURE__ */ React.createElement("tr", {
    className: " last:bg-slate-800 hover:cursor-pointer hover:bg-slate-700 last:hover:bg-slate-800"
  }, /* @__PURE__ */ React.createElement(TableCell, null, data.rank === 0 && /* @__PURE__ */ React.createElement(React.Fragment, null) || data.rank), /* @__PURE__ */ React.createElement(TableCell, null, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-72 items-center gap-4"
  }, formatTeamName === void 0 && /* @__PURE__ */ React.createElement(React.Fragment, null) || /* @__PURE__ */ React.createElement("img", {
    className: "w-8",
    src: `images/logos/${formatTeamName}.png`,
    alt: data.team
  }), data.team)), /* @__PURE__ */ React.createElement(TableCell, null, data.fieldGoals), /* @__PURE__ */ React.createElement(TableCell, null, data.fieldGoalsAttempt), /* @__PURE__ */ React.createElement(TableCell, null, data.fieldGoalsPercentage), /* @__PURE__ */ React.createElement(TableCell, null, data.threePoint), /* @__PURE__ */ React.createElement(TableCell, null, data.threePointAttempt), /* @__PURE__ */ React.createElement(TableCell, null, data.threePointPercentage), /* @__PURE__ */ React.createElement(TableCell, null, data.twoPoint), /* @__PURE__ */ React.createElement(TableCell, null, data.twoPointAttempt), /* @__PURE__ */ React.createElement(TableCell, null, data.twoPointPercentage), /* @__PURE__ */ React.createElement(TableCell, null, data.freeThrow), /* @__PURE__ */ React.createElement(TableCell, null, data.freeThrowAttempt), /* @__PURE__ */ React.createElement(TableCell, null, data.freeThrowPercentage), /* @__PURE__ */ React.createElement(TableCell, null, data.offRebond), /* @__PURE__ */ React.createElement(TableCell, null, data.defRebond), /* @__PURE__ */ React.createElement(TableCell, null, data.totRebond), /* @__PURE__ */ React.createElement(TableCell, null, data.assist), /* @__PURE__ */ React.createElement(TableCell, null, data.steal), /* @__PURE__ */ React.createElement(TableCell, null, data.block), /* @__PURE__ */ React.createElement(TableCell, null, data.turnover), /* @__PURE__ */ React.createElement(TableCell, null, data.foul), /* @__PURE__ */ React.createElement(TableCell, null, data.points));
}

// route:/Users/hgarnier/Documents/PERSO/basket/app/routes/game/$date/$teamId.tsx
var loader = async ({ params }) => {
  (0, import_tiny_invariant.default)(params.date, "Expected params.date");
  (0, import_tiny_invariant.default)(params.teamId, "Expected params.teamId");
  const { data } = await getGames(params.date, params.teamId);
  console.log("\u{1F680} ~ file: $teamId.tsx ~ line 70 ~ constloader:LoaderFunction= ~ data", data[0].teams);
  return (0, import_remix4.json)(data[0]);
};
function Index() {
  const data = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold text-white"
  }, data.league.name), /* @__PURE__ */ React.createElement("p", {
    className: "text-base text-white"
  }, (0, import_date_fns.format)(new Date(data.date), "dd MMMM yyyy")), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "pr-5 text-xl text-white"
  }, data.teams.home.name), /* @__PURE__ */ React.createElement("img", {
    className: "w-10",
    src: `../../images/logos/${getKeyByValue(teamRapidApi, data.teams.home.name)}.png`,
    alt: data.teams.home.name
  })), /* @__PURE__ */ React.createElement("div", {
    className: "overflow-x-auto py-1"
  }, /* @__PURE__ */ React.createElement(Table, null, /* @__PURE__ */ React.createElement(TableHead, null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement(TableCell, null, "1st Quarter"), /* @__PURE__ */ React.createElement(TableCell, null, "2nd Quarter"), /* @__PURE__ */ React.createElement(TableCell, null, "3rd Quarter"), /* @__PURE__ */ React.createElement(TableCell, null, "4th Quarter"), /* @__PURE__ */ React.createElement(TableCell, null, "Total"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement(TableCell, null, data.scores.home.quarter_1), /* @__PURE__ */ React.createElement(TableCell, null, data.scores.home.quarter_2), /* @__PURE__ */ React.createElement(TableCell, null, data.scores.home.quarter_3), /* @__PURE__ */ React.createElement(TableCell, null, data.scores.home.quarter_4), /* @__PURE__ */ React.createElement(TableCell, null, data.scores.home.total)))))), /* @__PURE__ */ React.createElement("div", {
    className: "mt-10"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "pr-5 text-xl text-white"
  }, data.teams.away.name), /* @__PURE__ */ React.createElement("img", {
    className: "w-10",
    src: `../../images/logos/${getKeyByValue(teamRapidApi, data.teams.away.name)}.png`,
    alt: data.teams.away.name
  })), /* @__PURE__ */ React.createElement("div", {
    className: "overflow-x-auto py-1"
  }, /* @__PURE__ */ React.createElement(Table, null, /* @__PURE__ */ React.createElement(TableHead, null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement(TableCell, null, "1st Quarter"), /* @__PURE__ */ React.createElement(TableCell, null, "2nd Quarter"), /* @__PURE__ */ React.createElement(TableCell, null, "3rd Quarter"), /* @__PURE__ */ React.createElement(TableCell, null, "4th Quarter"), /* @__PURE__ */ React.createElement(TableCell, null, "Total"))), /* @__PURE__ */ React.createElement("tbody", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement(TableCell, null, data.scores.away.quarter_1), /* @__PURE__ */ React.createElement(TableCell, null, data.scores.away.quarter_2), /* @__PURE__ */ React.createElement(TableCell, null, data.scores.away.quarter_3), /* @__PURE__ */ React.createElement(TableCell, null, data.scores.away.quarter_4), /* @__PURE__ */ React.createElement(TableCell, null, data.scores.away.total)))))));
}

// route:/Users/hgarnier/Documents/PERSO/basket/app/routes/standings.tsx
var standings_exports = {};
__export(standings_exports, {
  default: () => Index2,
  loader: () => loader2
});
init_react();
var import_react = require("react");
var import_remix5 = __toESM(require_remix());

// app/utils/db.server.ts
init_react();
var import_client = require("@prisma/client");
var db;
if (false) {
  db = new import_client.PrismaClient();
  db.$connect();
} else {
  if (!global.__db) {
    global.__db = new import_client.PrismaClient();
    global.__db.$connect();
  }
  db = global.__db;
}

// route:/Users/hgarnier/Documents/PERSO/basket/app/routes/standings.tsx
var loader2 = async () => {
  const data = {
    standings: await db.standings.findUnique({
      where: { season: 2022 }
    })
  };
  return (0, import_remix5.json)(data);
};
function Index2() {
  const data = (0, import_remix5.useLoaderData)();
  const [changeStat, setChangeStat] = (0, import_react.useState)(false);
  const linkClass = "text-3xl font-bold text-white transition-opacity hover:opacity-70 border-b-2 border-transparent hover:border-slate-500 hover:cursor-pointer";
  const activeLinkClass = "text-3xl font-bold text-white transition-opacity hover:opacity-70 border-b-2 border-slate-900 hover:cursor-pointer";
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-3xl font-bold text-white"
  }, "Betclic Elite"), /* @__PURE__ */ React.createElement("div", {
    className: "overflow-x-auto py-5"
  }, /* @__PURE__ */ React.createElement(Table, null, /* @__PURE__ */ React.createElement(TableHead, null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement(TableCell, null, "Rank"), /* @__PURE__ */ React.createElement(TableCell, null, "Team"), /* @__PURE__ */ React.createElement(TableCell, null, "Win"), /* @__PURE__ */ React.createElement(TableCell, null, "Loss"), /* @__PURE__ */ React.createElement(TableCell, null, "Win %"), /* @__PURE__ */ React.createElement(TableCell, null, "Points Scored"), /* @__PURE__ */ React.createElement(TableCell, null, "Points Allowed"))), /* @__PURE__ */ React.createElement("tbody", null, data.standings.standings.map((team, index) => {
    const formatTeamName = getKeyByValue(teams, team.team);
    return /* @__PURE__ */ React.createElement("tr", {
      key: index,
      className: " hover:cursor-pointer hover:bg-slate-700"
    }, /* @__PURE__ */ React.createElement(TableCell, null, index + 1), /* @__PURE__ */ React.createElement(TableCell, {
      className: "w-auto"
    }, /* @__PURE__ */ React.createElement("div", {
      className: "flex w-72 items-center gap-4"
    }, /* @__PURE__ */ React.createElement("img", {
      className: "w-8",
      src: `images/logos/${formatTeamName}.png`,
      alt: team.team
    }), team.team)), /* @__PURE__ */ React.createElement(TableCell, null, team.win), /* @__PURE__ */ React.createElement(TableCell, null, team.lose), /* @__PURE__ */ React.createElement(TableCell, null, team.percentage), /* @__PURE__ */ React.createElement(TableCell, null, team.pointScored), /* @__PURE__ */ React.createElement(TableCell, null, team.pointAllowed));
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "flex gap-6"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: !changeStat ? activeLinkClass : linkClass,
    onClick: () => setChangeStat(false)
  }, "Per Game Stats"), /* @__PURE__ */ React.createElement("h1", {
    className: changeStat ? activeLinkClass : linkClass,
    onClick: () => setChangeStat(true)
  }, "Total Stats")), /* @__PURE__ */ React.createElement("div", {
    className: "overflow-x-auto py-5"
  }, /* @__PURE__ */ React.createElement(Table, null, /* @__PURE__ */ React.createElement(TableHead, null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement(TableCell, null, "Rank"), /* @__PURE__ */ React.createElement(TableCell, null, "Team"), /* @__PURE__ */ React.createElement(TableCell, null, "FG"), /* @__PURE__ */ React.createElement(TableCell, null, "FGA"), /* @__PURE__ */ React.createElement(TableCell, null, "FG%"), /* @__PURE__ */ React.createElement(TableCell, null, "3P"), /* @__PURE__ */ React.createElement(TableCell, null, "3PA"), /* @__PURE__ */ React.createElement(TableCell, null, "3P%"), /* @__PURE__ */ React.createElement(TableCell, null, "2P"), /* @__PURE__ */ React.createElement(TableCell, null, "2PA"), /* @__PURE__ */ React.createElement(TableCell, null, "2P%"), /* @__PURE__ */ React.createElement(TableCell, null, "FT"), /* @__PURE__ */ React.createElement(TableCell, null, "FTA"), /* @__PURE__ */ React.createElement(TableCell, null, "FT%"), /* @__PURE__ */ React.createElement(TableCell, null, "ORB"), /* @__PURE__ */ React.createElement(TableCell, null, "DRB"), /* @__PURE__ */ React.createElement(TableCell, null, "TRB"), /* @__PURE__ */ React.createElement(TableCell, null, "AST"), /* @__PURE__ */ React.createElement(TableCell, null, "STL"), /* @__PURE__ */ React.createElement(TableCell, null, "BLK"), /* @__PURE__ */ React.createElement(TableCell, null, "TOV"), /* @__PURE__ */ React.createElement(TableCell, null, "PF"), /* @__PURE__ */ React.createElement(TableCell, null, changeStat && "PTS" || "PPG"))), /* @__PURE__ */ React.createElement("tbody", null, changeStat && data.standings.teamTotalStats.map((team) => {
    return /* @__PURE__ */ React.createElement(TableStats, {
      key: team.team,
      data: team
    });
  }) || data.standings.teamPerGameStats.map((team) => {
    return /* @__PURE__ */ React.createElement(TableStats, {
      key: team.team,
      data: team
    });
  }))))));
}

// route:/Users/hgarnier/Documents/PERSO/basket/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index3,
  loader: () => loader3
});
init_react();
var import_date_fns3 = require("date-fns");
var import_react2 = require("react");
var import_remix7 = __toESM(require_remix());

// app/components/ArrowIcon/index.tsx
init_react();
function ArrowIcon(_a) {
  var _b = _a, { size = 12 } = _b, rest = __objRest(_b, ["size"]);
  return /* @__PURE__ */ React.createElement("svg", __spreadValues({
    fill: "none",
    color: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 12 12",
    width: size,
    height: size
  }, rest), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 6a.75.75 0 0 1 .75-.75h10a.75.75 0 0 1 0 1.5h-10A.75.75 0 0 1 0 6Z",
    fill: "#CCC7C3"
  }), /* @__PURE__ */ React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.28.47a.75.75 0 0 1 0 1.06L1.81 6l4.47 4.47a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06l5-5a.75.75 0 0 1 1.06 0Z",
    fill: "#CCC7C3"
  }));
}

// app/components/CardList/index.tsx
init_react();
var import_remix6 = __toESM(require_remix());

// app/components/Card/index.tsx
init_react();
function Card({ game }) {
  const isHomeWinner = game.pts > game.oppPts;
  return /* @__PURE__ */ React.createElement("article", {
    className: "firefox:bg-slate-750 flex rounded-lg border border-main bg-glass text-white backdrop-blur-lg duration-300 hover:cursor-pointer hover:bg-slate-700"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex w-full flex-col"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-between p-4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex h-20 w-20 flex-col items-center justify-around text-center"
  }, /* @__PURE__ */ React.createElement("span", null, `${getKeyByValue(computeTeams, game.opp)}`), /* @__PURE__ */ React.createElement("img", {
    className: "w-8",
    src: `images/logos/${getKeyByValue(teams, game.opp)}.png`,
    alt: game.opp
  })), /* @__PURE__ */ React.createElement("div", {
    className: " flex-2 mt-3 flex p-4"
  }, /* @__PURE__ */ React.createElement("p", {
    className: `text-2xl font-bold  ${isHomeWinner && "opacity-50"}`
  }, game.oppPts), /* @__PURE__ */ React.createElement("p", {
    className: "whitespace-nowrap px-3 pt-1.5 text-center uppercase"
  }, game.oppPts && "Final" || "Not played"), /* @__PURE__ */ React.createElement("p", {
    className: `text-2xl font-bold  ${!isHomeWinner && "opacity-50"}`
  }, game.pts)), /* @__PURE__ */ React.createElement("div", {
    className: "flex h-20 w-20 flex-col items-center justify-around text-center"
  }, /* @__PURE__ */ React.createElement("span", null, `${getKeyByValue(computeTeams, game.team)}`), /* @__PURE__ */ React.createElement("img", {
    className: "w-8",
    src: `images/logos/${getKeyByValue(teams, game.team)}.png`,
    alt: game.team
  }))), /* @__PURE__ */ React.createElement("footer", {
    className: "border-t border-main py-2 text-center text-sm"
  }, "View details")));
}

// app/components/CardList/index.tsx
function CardList({ games }) {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, games.map((game) => {
    const teamId = getKeyByValue(teamIds, game.opp);
    if (game.oppPts) {
      return /* @__PURE__ */ React.createElement(import_remix6.Link, {
        to: `/game/${game.date}/${teamId}`,
        key: game.id
      }, /* @__PURE__ */ React.createElement(Card, {
        game
      }));
    } else {
      return /* @__PURE__ */ React.createElement(Card, {
        key: game.id,
        game
      });
    }
  }));
}

// app/utils/functions/formattedDate.ts
init_react();
var import_date_fns2 = require("date-fns");
var formattedDate = (object) => {
  const newObject = object.filter((elem) => elem.date.length > 10).map((elem) => {
    const newDate = (0, import_date_fns2.formatISO)((0, import_date_fns2.parse)(elem.date, "EEEE, MMM d, yyyy", new Date()), {
      representation: "date"
    });
    elem.date = newDate;
    return __spreadValues({}, elem);
  });
  return newObject;
};

// route:/Users/hgarnier/Documents/PERSO/basket/app/routes/index.tsx
var loader3 = async () => {
  const data = {
    schedule: await db.schedules.findUnique({
      where: { season: 2022 }
    })
  };
  return (0, import_remix7.json)(data);
};
function findClosestPrevDate(dateToCompare, dates) {
  const formatDates = dates.map((date) => new Date(date));
  return (0, import_date_fns3.closestIndexTo)(dateToCompare, formatDates);
}
function Index3() {
  const data = (0, import_remix7.useLoaderData)();
  const [indexDate, setIndexDate] = (0, import_react2.useState)(0);
  const [computedDates, setComputedDates] = (0, import_react2.useState)([
    ...new Set(formattedDate(data.schedule.schedule).map((elem) => elem.date))
  ]);
  const [newGames, setNewGames] = (0, import_react2.useState)();
  (0, import_react2.useEffect)(() => {
    const initIndexDate = () => {
      setIndexDate(findClosestPrevDate(new Date(), computedDates));
      setNewGames(data.schedule.schedule);
    };
    initIndexDate();
  }, [computedDates, data]);
  (0, import_react2.useEffect)(() => {
    const computedGames = () => {
      const filteredGames = data.schedule.schedule.filter((game) => game.date === computedDates[indexDate]);
      setNewGames(filteredGames);
    };
    computedGames();
  }, [indexDate, computedDates, data]);
  const prevIndex = () => indexDate === 0 && setIndexDate(0) || setIndexDate(indexDate - 1);
  const nextIndex = () => {
    if (indexDate === computedDates.length - 1) {
      setIndexDate(computedDates.length - 1);
    } else {
      setIndexDate(indexDate + 1);
    }
  };
  return /* @__PURE__ */ React.createElement(Layout_default, null, /* @__PURE__ */ React.createElement("div", {
    style: { fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mb-10 flex w-36 select-none items-center justify-between"
  }, /* @__PURE__ */ React.createElement("span", {
    onClick: prevIndex,
    className: "cursor-pointer"
  }, /* @__PURE__ */ React.createElement(ArrowIcon, null)), /* @__PURE__ */ React.createElement("span", null, computedDates[indexDate] && (0, import_date_fns3.format)(new Date(computedDates[indexDate]), "dd MMM yyyy")), /* @__PURE__ */ React.createElement("span", {
    onClick: nextIndex,
    className: "rotate-180 cursor-pointer "
  }, /* @__PURE__ */ React.createElement(ArrowIcon, null))), /* @__PURE__ */ React.createElement("div", {
    className: "grid grid-cols-auto-fill gap-5"
  }, newGames && /* @__PURE__ */ React.createElement(CardList, {
    games: newGames
  }))));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "4cfe4a9c", "entry": { "module": "/build/entry.client-6Y4HI7GX.js", "imports": ["/build/_shared/chunk-GY57RDUC.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-UUK7BTAO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/game/$date/$teamId": { "id": "routes/game/$date/$teamId", "parentId": "root", "path": "game/:date/:teamId", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/game/$date/$teamId-BQEKIMU2.js", "imports": ["/build/_shared/chunk-MAUUCMJJ.js", "/build/_shared/chunk-ATSCN2LI.js", "/build/_shared/chunk-PEEFJ55O.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-HLQUEJI7.js", "imports": ["/build/_shared/chunk-ATSCN2LI.js", "/build/_shared/chunk-ORSEGZY2.js", "/build/_shared/chunk-PEEFJ55O.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/standings": { "id": "routes/standings", "parentId": "root", "path": "standings", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/standings-4TZXQ4OP.js", "imports": ["/build/_shared/chunk-MAUUCMJJ.js", "/build/_shared/chunk-ORSEGZY2.js", "/build/_shared/chunk-PEEFJ55O.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-4CFE4A9C.js" };

// server-entry-module:@remix-run/dev/server-build
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
  "routes/game/$date/$teamId": {
    id: "routes/game/$date/$teamId",
    parentId: "root",
    path: "game/:date/:teamId",
    index: void 0,
    caseSensitive: void 0,
    module: teamId_exports
  },
  "routes/standings": {
    id: "routes/standings",
    parentId: "root",
    path: "standings",
    index: void 0,
    caseSensitive: void 0,
    module: standings_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICI8c3RkaW4+IiwgInNlcnZlci1lbnRyeS1tb2R1bGU6QHJlbWl4LXJ1bi9kZXYvc2VydmVyLWJ1aWxkIiwgIi4uL2FwcC9lbnRyeS5zZXJ2ZXIudHN4IiwgInJvdXRlOi9Vc2Vycy9oZ2Fybmllci9Eb2N1bWVudHMvUEVSU08vYmFza2V0L2FwcC9yb290LnRzeCIsICJyb3V0ZTovVXNlcnMvaGdhcm5pZXIvRG9jdW1lbnRzL1BFUlNPL2Jhc2tldC9hcHAvcm91dGVzL2dhbWUvJGRhdGUvJHRlYW1JZC50c3giLCAiLi4vYXBwL2FwaS9pbmRleC50cyIsICIuLi9hcHAvY29tcG9uZW50cy9MYXlvdXQvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9UYWJsZS9pbmRleC50c3giLCAiLi4vYXBwL2NvbnN0YW50cy90ZWFtcy50cyIsICIuLi9hcHAvdXRpbHMvZnVuY3Rpb25zL2dldEtleUJ5VmFsdWUudHMiLCAicm91dGU6L1VzZXJzL2hnYXJuaWVyL0RvY3VtZW50cy9QRVJTTy9iYXNrZXQvYXBwL3JvdXRlcy9zdGFuZGluZ3MudHN4IiwgIi4uL2FwcC91dGlscy9kYi5zZXJ2ZXIudHMiLCAicm91dGU6L1VzZXJzL2hnYXJuaWVyL0RvY3VtZW50cy9QRVJTTy9iYXNrZXQvYXBwL3JvdXRlcy9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQXJyb3dJY29uL2luZGV4LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9DYXJkTGlzdC9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvQ2FyZC9pbmRleC50c3giLCAiLi4vYXBwL3V0aWxzL2Z1bmN0aW9ucy9mb3JtYXR0ZWREYXRlLnRzIiwgInNlcnZlci1hc3NldHMtbWFuaWZlc3Q6QHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuXG4vKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMi4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4yLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcblxuIiwgImV4cG9ydCAqIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjsiLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiL1VzZXJzL2hnYXJuaWVyL0RvY3VtZW50cy9QRVJTTy9iYXNrZXQvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL2hnYXJuaWVyL0RvY3VtZW50cy9QRVJTTy9iYXNrZXQvYXBwL3Jvb3QudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEgZnJvbSBcIi9Vc2Vycy9oZ2Fybmllci9Eb2N1bWVudHMvUEVSU08vYmFza2V0L2FwcC9yb3V0ZXMvZ2FtZS8kZGF0ZS8kdGVhbUlkLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvaGdhcm5pZXIvRG9jdW1lbnRzL1BFUlNPL2Jhc2tldC9hcHAvcm91dGVzL3N0YW5kaW5ncy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2hnYXJuaWVyL0RvY3VtZW50cy9QRVJTTy9iYXNrZXQvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2dhbWUvJGRhdGUvJHRlYW1JZFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZ2FtZS8kZGF0ZS8kdGVhbUlkXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImdhbWUvOmRhdGUvOnRlYW1JZFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxXG4gICAgfSxcbiAgXCJyb3V0ZXMvc3RhbmRpbmdzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9zdGFuZGluZ3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwic3RhbmRpbmdzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTJcbiAgICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdHlwZSB7IEVudHJ5Q29udGV4dCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gIH0pO1xufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tICdyZW1peCdcbmltcG9ydCB0eXBlIHsgTGlua3NGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90YWlsd2luZC5jc3MnXG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogJ3N0eWxlc2hlZXQnLCBocmVmOiBzdHlsZXMgfV1cbn1cblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGU6ICdOZXcgUmVtaXggQXBwJyB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIClcbn1cbiIsICJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGpzb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnXG5cbmltcG9ydCB7IGdldEdhbWVzIH0gZnJvbSAnfi9hcGknXG5pbXBvcnQgTGF5b3V0IGZyb20gJ34vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgeyBUYWJsZSwgVGFibGVDZWxsLCBUYWJsZUhlYWQgfSBmcm9tICd+L2NvbXBvbmVudHMvVGFibGUnXG5pbXBvcnQgeyB0ZWFtUmFwaWRBcGkgfSBmcm9tICd+L2NvbnN0YW50cy90ZWFtcydcbmltcG9ydCB7IGdldEtleUJ5VmFsdWUgfSBmcm9tICd+L3V0aWxzL2Z1bmN0aW9ucy9nZXRLZXlCeVZhbHVlJ1xuXG50eXBlIEdhbWUgPSB7XG4gIGlkOiBudW1iZXJcbiAgZGF0ZTogc3RyaW5nXG4gIHRpbWU6IHN0cmluZ1xuICB0aW1lc3RhbXA6IG51bWJlclxuICB0aW1lem9uZTogc3RyaW5nXG4gIHN0YWdlOiBudWxsXG4gIHdlZWs6IHN0cmluZ1xuICBzdGF0dXM6IHsgbG9uZzogc3RyaW5nOyBzaG9ydDogc3RyaW5nOyB0aW1lcjogbnVsbCB9XG4gIGxlYWd1ZToge1xuICAgIGlkOiBudW1iZXJcbiAgICBuYW1lOiBzdHJpbmdcbiAgICB0eXBlOiBzdHJpbmdcbiAgICBzZWFzb246IHN0cmluZ1xuICAgIGxvZ286IHN0cmluZ1xuICB9XG4gIGNvdW50cnk6IHtcbiAgICBpZDogNFxuICAgIG5hbWU6IHN0cmluZ1xuICAgIGNvZGU6IHN0cmluZ1xuICAgIGZsYWc6IHN0cmluZ1xuICB9XG4gIHRlYW1zOiB7XG4gICAgaG9tZToge1xuICAgICAgaWQ6IG51bWJlclxuICAgICAgbmFtZTogc3RyaW5nXG4gICAgICBsb2dvOiBzdHJpbmdcbiAgICAgIGF3YXk6IHtcbiAgICAgICAgaWQ6IG51bWJlclxuICAgICAgICBuYW1lOiBzdHJpbmdcbiAgICAgICAgbG9nbzogc3RyaW5nXG4gICAgICB9XG4gICAgfVxuICAgIHNjb3Jlczoge1xuICAgICAgaG9tZToge1xuICAgICAgICBxdWFydGVyXzE6IG51bWJlclxuICAgICAgICBxdWFydGVyXzI6IG51bWJlclxuICAgICAgICBxdWFydGVyXzM6IG51bWJlclxuICAgICAgICBxdWFydGVyXzQ6IG51bWJlclxuICAgICAgICBvdmVyX3RpbWU6IG51bWJlclxuICAgICAgICB0b3RhbDogbnVtYmVyXG4gICAgICB9XG4gICAgICBhd2F5OiB7XG4gICAgICAgIHF1YXJ0ZXJfMTogbnVtYmVyXG4gICAgICAgIHF1YXJ0ZXJfMjogbnVtYmVyXG4gICAgICAgIHF1YXJ0ZXJfMzogbnVtYmVyXG4gICAgICAgIHF1YXJ0ZXJfNDogbnVtYmVyXG4gICAgICAgIG92ZXJfdGltZTogbnVtYmVyXG4gICAgICAgIHRvdGFsOiBudW1iZXJcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyBwYXJhbXMgfSkgPT4ge1xuICBpbnZhcmlhbnQocGFyYW1zLmRhdGUsICdFeHBlY3RlZCBwYXJhbXMuZGF0ZScpXG4gIGludmFyaWFudChwYXJhbXMudGVhbUlkLCAnRXhwZWN0ZWQgcGFyYW1zLnRlYW1JZCcpXG4gIGNvbnN0IHsgZGF0YSB9OiB7IGRhdGE6IEdhbWVbXSB9ID0gYXdhaXQgZ2V0R2FtZXMocGFyYW1zLmRhdGUsIHBhcmFtcy50ZWFtSWQpXG4gIGNvbnNvbGUubG9nKFxuICAgICdcdUQ4M0RcdURFODAgfiBmaWxlOiAkdGVhbUlkLnRzeCB+IGxpbmUgNzAgfiBjb25zdGxvYWRlcjpMb2FkZXJGdW5jdGlvbj0gfiBkYXRhJyxcbiAgICBkYXRhWzBdLnRlYW1zLFxuICApXG4gIHJldHVybiBqc29uKGRhdGFbMF0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPntkYXRhLmxlYWd1ZS5uYW1lfTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgdGV4dC13aGl0ZVwiPlxuICAgICAgICB7Zm9ybWF0KG5ldyBEYXRlKGRhdGEuZGF0ZSksICdkZCBNTU1NIHl5eXknKX1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwci01IHRleHQteGwgdGV4dC13aGl0ZVwiPntkYXRhLnRlYW1zLmhvbWUubmFtZX08L2gzPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTBcIlxuICAgICAgICAgICAgc3JjPXtgLi4vLi4vaW1hZ2VzL2xvZ29zLyR7Z2V0S2V5QnlWYWx1ZShcbiAgICAgICAgICAgICAgdGVhbVJhcGlkQXBpLFxuICAgICAgICAgICAgICBkYXRhLnRlYW1zLmhvbWUubmFtZSxcbiAgICAgICAgICAgICl9LnBuZ2B9XG4gICAgICAgICAgICBhbHQ9e2RhdGEudGVhbXMuaG9tZS5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmZsb3cteC1hdXRvIHB5LTFcIj5cbiAgICAgICAgICA8VGFibGU+XG4gICAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4xc3QgUXVhcnRlcjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+Mm5kIFF1YXJ0ZXI8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPjNyZCBRdWFydGVyPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD40dGggUXVhcnRlcjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+VG90YWw8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57ZGF0YS5zY29yZXMuaG9tZS5xdWFydGVyXzF9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57ZGF0YS5zY29yZXMuaG9tZS5xdWFydGVyXzJ9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57ZGF0YS5zY29yZXMuaG9tZS5xdWFydGVyXzN9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57ZGF0YS5zY29yZXMuaG9tZS5xdWFydGVyXzR9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57ZGF0YS5zY29yZXMuaG9tZS50b3RhbH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwci01IHRleHQteGwgdGV4dC13aGl0ZVwiPntkYXRhLnRlYW1zLmF3YXkubmFtZX08L2gzPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTBcIlxuICAgICAgICAgICAgc3JjPXtgLi4vLi4vaW1hZ2VzL2xvZ29zLyR7Z2V0S2V5QnlWYWx1ZShcbiAgICAgICAgICAgICAgdGVhbVJhcGlkQXBpLFxuICAgICAgICAgICAgICBkYXRhLnRlYW1zLmF3YXkubmFtZSxcbiAgICAgICAgICAgICl9LnBuZ2B9XG4gICAgICAgICAgICBhbHQ9e2RhdGEudGVhbXMuYXdheS5uYW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0byBweS0xXCI+XG4gICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+MXN0IFF1YXJ0ZXI8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPjJuZCBRdWFydGVyPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4zcmQgUXVhcnRlcjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+NHRoIFF1YXJ0ZXI8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlRvdGFsPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2RhdGEuc2NvcmVzLmF3YXkucXVhcnRlcl8xfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2RhdGEuc2NvcmVzLmF3YXkucXVhcnRlcl8yfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2RhdGEuc2NvcmVzLmF3YXkucXVhcnRlcl8zfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2RhdGEuc2NvcmVzLmF3YXkucXVhcnRlcl80fTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e2RhdGEuc2NvcmVzLmF3YXkudG90YWx9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvVGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJleHBvcnQgY29uc3QgZ2V0R2FtZXMgPSBhc3luYyAoZGF0ZTogc3RyaW5nLCB0ZWFtSWQ6IHN0cmluZykgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGAke3Byb2Nlc3MuZW52LlJBUElEQVBJX1VSTH0vZ2FtZXM/c2Vhc29uPTIwMjEtMjAyMiZsZWFndWU9MiZkYXRlPSR7ZGF0ZX0mdGVhbT0ke3RlYW1JZH1gLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdYLVJhcGlkQVBJLUhvc3QnOiBwcm9jZXNzLmVudi5SQVBJREFQSV9IRUFERVIgYXMgc3RyaW5nLFxuICAgICAgICAnWC1SYXBpZEFQSS1LZXknOiBwcm9jZXNzLmVudi5SQVBJREFQSV9LRVkgYXMgc3RyaW5nLFxuICAgICAgfSxcbiAgICB9LFxuICApXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcblxuICByZXR1cm4ge1xuICAgIGRhdGE6IGRhdGEucmVzcG9uc2UsXG4gIH1cbn1cbiIsICJpbXBvcnQgRm9vdGVyIGZyb20gJ34vY29tcG9uZW50cy9Gb290ZXInXG5pbXBvcnQgSGVhZGVyIGZyb20gJ34vY29tcG9uZW50cy9IZWFkZXInXG5cbmV4cG9ydCB0eXBlIExheW91dFByb3BzID0ge1xuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlXG59XG5cbmZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH06IExheW91dFByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBiZy1zbGF0ZS05MDAgYmctbWFpbiBiZy1jb3ZlciBiZy1jZW50ZXIgcGItMjQgdGV4dC13aGl0ZVwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleC1ncm93IHB4LTRcIj57Y2hpbGRyZW59PC9tYWluPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIiwgImZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgY29uc3QgbGlua1N0eWxlID0gJ2JvcmRlci1iLWdyYXktOTAwIHRleHQtZ3JheS05MDAgaG92ZXI6Ym9yZGVyLWItWzFweF0nXG5cbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB0LTE2IHRleHQtY2VudGVyXCI+XG4gICAgICA8cD5cbiAgICAgICAge2BEZXZlbG9wcGVkIGJ5IGB9XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPXtsaW5rU3R5bGV9XG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9odWdvZ2FybmllclwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIEh1Z29cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIHtgIHdpdGggYH1cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9e2xpbmtTdHlsZX1cbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9yZW1peC5ydW5cIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBSZW1peC5ydW5cbiAgICAgICAgPC9hPlxuICAgICAgPC9wPlxuICAgIDwvZm9vdGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuIiwgImltcG9ydCB7IExpbmssIE5hdkxpbmsgfSBmcm9tICdyZW1peCdcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICBjb25zdCBsaW5rQ2xhc3MgPVxuICAgICd0ZXh0LWxnIHRyYW5zaXRpb24tb3BhY2l0eSBob3ZlcjpvcGFjaXR5LTcwIGJvcmRlci1iLTIgYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1ibHVlLTMwMCdcbiAgY29uc3QgYWN0aXZlTGlua0NsYXNzID1cbiAgICAndGV4dC1sZyB0cmFuc2l0aW9uLW9wYWNpdHkgaG92ZXI6b3BhY2l0eS03MCBib3JkZXItYi0yIGJvcmRlci1ibHVlLTUwMCdcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTQgcHktOFwiPlxuICAgICAgPExpbmsgdG89XCIvXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy0yNFwiIHNyYz1cIi9pbWFnZXMvbG9nb3MvbG9nby5wbmdcIiBhbHQ9XCJMTkJcIiAvPlxuICAgICAgPC9MaW5rPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGdhcC02XCI+XG4gICAgICAgIDxOYXZMaW5rXG4gICAgICAgICAgY2xhc3NOYW1lPXsoeyBpc0FjdGl2ZSB9KSA9PiAoaXNBY3RpdmUgPyBhY3RpdmVMaW5rQ2xhc3MgOiBsaW5rQ2xhc3MpfVxuICAgICAgICAgIHRvPVwiL1wiXG4gICAgICAgID5cbiAgICAgICAgICBIb21lXG4gICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICBjbGFzc05hbWU9eyh7IGlzQWN0aXZlIH0pID0+IChpc0FjdGl2ZSA/IGFjdGl2ZUxpbmtDbGFzcyA6IGxpbmtDbGFzcyl9XG4gICAgICAgICAgdG89XCIvc3RhbmRpbmdzXCJcbiAgICAgICAgPlxuICAgICAgICAgIFN0YW5kaW5nc1xuICAgICAgICA8L05hdkxpbms+XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiIsICJpbXBvcnQgeyB0ZWFtcyB9IGZyb20gJ34vY29uc3RhbnRzL3RlYW1zJ1xuaW1wb3J0IHsgZ2V0S2V5QnlWYWx1ZSB9IGZyb20gJ34vdXRpbHMvZnVuY3Rpb25zL2dldEtleUJ5VmFsdWUnXG5pbXBvcnQgeyBTdGFuZGluZ1RlYW1TdGF0IH0gZnJvbSAnfi91dGlscy90eXBlcydcblxuZXhwb3J0IGZ1bmN0aW9uIFRhYmxlKHsgY2hpbGRyZW4gfTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e30+KSB7XG4gIHJldHVybiAoXG4gICAgPHRhYmxlIGNsYXNzTmFtZT1cIm15LTUgbWluLXctZnVsbCBvdmVyZmxvdy1oaWRkZW4gcm91bmRlZC14bCBib3JkZXIgIGJnLWdsYXNzIHRleHQtY2VudGVyIHRleHQtd2hpdGUgc2hhZG93LWxnIG1kOm1pbi13LW1pblwiPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdGFibGU+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRhYmxlQ2VsbCh7XG4gIGNsYXNzTmFtZSxcbiAgY2hpbGRyZW4sXG59OiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjx7IGNsYXNzTmFtZT86IHN0cmluZyB9Pikge1xuICByZXR1cm4gKFxuICAgIDx0ZFxuICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgKGNsYXNzTmFtZSAmJiBjbGFzc05hbWUpIHx8ICcnXG4gICAgICB9IGJvcmRlci10IGJvcmRlci1tYWluIHB4LTMgcHktMmB9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvdGQ+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRhYmxlSGVhZCh7IGNoaWxkcmVuIH06IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPHt9Pikge1xuICByZXR1cm4gPHRoZWFkIGNsYXNzTmFtZT1cImJnLXNsYXRlLTkwMCBmb250LWJvbGRcIj57Y2hpbGRyZW59PC90aGVhZD5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRhYmxlU3RhdHMoeyBkYXRhIH06IHsgZGF0YTogU3RhbmRpbmdUZWFtU3RhdCB9KSB7XG4gIGNvbnN0IGZvcm1hdFRlYW1OYW1lID0gZ2V0S2V5QnlWYWx1ZSh0ZWFtcywgZGF0YS50ZWFtKVxuICByZXR1cm4gKFxuICAgIDx0ciBjbGFzc05hbWU9XCIgbGFzdDpiZy1zbGF0ZS04MDAgaG92ZXI6Y3Vyc29yLXBvaW50ZXIgaG92ZXI6Ymctc2xhdGUtNzAwIGxhc3Q6aG92ZXI6Ymctc2xhdGUtODAwXCI+XG4gICAgICA8VGFibGVDZWxsPnsoZGF0YS5yYW5rID09PSAwICYmIDw+PC8+KSB8fCBkYXRhLnJhbmt9PC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy03MiBpdGVtcy1jZW50ZXIgZ2FwLTRcIj5cbiAgICAgICAgICB7KGZvcm1hdFRlYW1OYW1lID09PSB1bmRlZmluZWQgJiYgPD48Lz4pIHx8IChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy04XCJcbiAgICAgICAgICAgICAgc3JjPXtgaW1hZ2VzL2xvZ29zLyR7Zm9ybWF0VGVhbU5hbWV9LnBuZ2B9XG4gICAgICAgICAgICAgIGFsdD17ZGF0YS50ZWFtfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtkYXRhLnRlYW19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsPntkYXRhLmZpZWxkR29hbHN9PC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsPntkYXRhLmZpZWxkR29hbHNBdHRlbXB0fTwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbD57ZGF0YS5maWVsZEdvYWxzUGVyY2VudGFnZX08L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGw+e2RhdGEudGhyZWVQb2ludH08L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGw+e2RhdGEudGhyZWVQb2ludEF0dGVtcHR9PC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsPntkYXRhLnRocmVlUG9pbnRQZXJjZW50YWdlfTwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbD57ZGF0YS50d29Qb2ludH08L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGw+e2RhdGEudHdvUG9pbnRBdHRlbXB0fTwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbD57ZGF0YS50d29Qb2ludFBlcmNlbnRhZ2V9PC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsPntkYXRhLmZyZWVUaHJvd308L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGw+e2RhdGEuZnJlZVRocm93QXR0ZW1wdH08L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGw+e2RhdGEuZnJlZVRocm93UGVyY2VudGFnZX08L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGw+e2RhdGEub2ZmUmVib25kfTwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbD57ZGF0YS5kZWZSZWJvbmR9PC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsPntkYXRhLnRvdFJlYm9uZH08L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGw+e2RhdGEuYXNzaXN0fTwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbD57ZGF0YS5zdGVhbH08L1RhYmxlQ2VsbD5cbiAgICAgIDxUYWJsZUNlbGw+e2RhdGEuYmxvY2t9PC9UYWJsZUNlbGw+XG4gICAgICA8VGFibGVDZWxsPntkYXRhLnR1cm5vdmVyfTwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbD57ZGF0YS5mb3VsfTwvVGFibGVDZWxsPlxuICAgICAgPFRhYmxlQ2VsbD57ZGF0YS5wb2ludHN9PC9UYWJsZUNlbGw+XG4gICAgPC90cj5cbiAgKVxufVxuIiwgIi8vIFRPRE86IHJlZmFjdCBhbGwgY29uc3RhbnRzXG5cbmV4cG9ydCBjb25zdCB0ZWFtcyA9IHtcbiAgJ3BhcmlzLWxldmFsbG9pcyc6ICdNZXRyb3BvbGl0YW5zIDkyJyxcbiAgdmlsbGV1cmJhbm5lOiAnTERMQyBBU1ZFTCcsXG4gIG1vbmFjbzogJ0FTIE1vbmFjbyBCYXNrZXQnLFxuICBkaWpvbjogJ0pEQSBEaWpvbicsXG4gICdsZS1tYW5zJzogJ0xlIE1hbnMgU2FydGhlIEJhc2tldCcsXG4gICdwYXUtb3J0aGV6JzogJ1x1MDBDOWxhbiBCXHUwMEU5YXJuYWlzIFBhdS1MYWNxLU9ydGhleicsXG4gIHN0cmFzYm91cmc6ICdTSUcgU3RyYXNib3VyZycsXG4gIGxpbW9nZXM6ICdMaW1vZ2VzIENTUCcsXG4gIG5hbnRlcnJlOiAnTmFudGVycmUgOTInLFxuICBncmF2ZWxpbmVzOiAnQkNNIEdyYXZlbGluZXMtRHVua2VycXVlJyxcbiAgYm91cmc6ICdKTCBCb3VyZycsXG4gIHJvYW5uZTogJ0Nob3JhbGUgUm9hbm5lIEJhc2tldCcsXG4gIGNob2xldDogJ0Nob2xldCBCYXNrZXQnLFxuICBvcmxlYW5zOiAnT3JsXHUwMEU5YW5zIExvaXJldCBCYXNrZXQnLFxuICAnbGUtcG9ydGVsJzogJ0VTU00gTGUgUG9ydGVsJyxcbiAgJ3BhcmlzLWJhc2tldCc6ICdQYXJpcyBCYXNrZXRiYWxsJyxcbiAgJ2NoYWxvbnMtZW4tY2hhbXBhZ25lJzogJ0NoYW1wYWduZSBCYXNrZXQnLFxuICAnZm9zLXByb3ZlbmNlJzogJ0ZvcyBQcm92ZW5jZScsXG59XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlVGVhbXMgPSB7XG4gIE1ldHJvcG9saXRhbnM6ICdNZXRyb3BvbGl0YW5zIDkyJyxcbiAgJ0xETEMgQVNWRUwnOiAnTERMQyBBU1ZFTCcsXG4gIE1vbmFjbzogJ0FTIE1vbmFjbyBCYXNrZXQnLFxuICBEaWpvbjogJ0pEQSBEaWpvbicsXG4gICdMZSBNYW5zJzogJ0xlIE1hbnMgU2FydGhlIEJhc2tldCcsXG4gICdQYXUtT3J0aGV6JzogJ1x1MDBDOWxhbiBCXHUwMEU5YXJuYWlzIFBhdS1MYWNxLU9ydGhleicsXG4gIFN0cmFzYm91cmc6ICdTSUcgU3RyYXNib3VyZycsXG4gIExpbW9nZXM6ICdMaW1vZ2VzIENTUCcsXG4gIE5hbnRlcnJlOiAnTmFudGVycmUgOTInLFxuICBHcmF2ZWxpbmVzOiAnQkNNIEdyYXZlbGluZXMtRHVua2VycXVlJyxcbiAgJ0pMLUJvdXJnJzogJ0pMIEJvdXJnJyxcbiAgUm9hbm5lOiAnQ2hvcmFsZSBSb2FubmUgQmFza2V0JyxcbiAgQ2hvbGV0OiAnQ2hvbGV0IEJhc2tldCcsXG4gIE9ybGVhbnM6ICdPcmxcdTAwRTlhbnMgTG9pcmV0IEJhc2tldCcsXG4gICdMZSBQb3J0ZWwnOiAnRVNTTSBMZSBQb3J0ZWwnLFxuICAnUGFyaXMgQmFza2V0JzogJ1BhcmlzIEJhc2tldGJhbGwnLFxuICBDaGFsb25zOiAnQ2hhbXBhZ25lIEJhc2tldCcsXG4gICdGb3MgUHJvdmVuY2UnOiAnRm9zIFByb3ZlbmNlJyxcbn1cblxuZXhwb3J0IGNvbnN0IHRlYW1JZHMgPSB7XG4gIDE0OiAnTWV0cm9wb2xpdGFucyA5MicsXG4gIDI2OiAnTERMQyBBU1ZFTCcsXG4gIDE2OiAnQVMgTW9uYWNvIEJhc2tldCcsXG4gIDEwOiAnSkRBIERpam9uJyxcbiAgMjM6ICdMZSBNYW5zIFNhcnRoZSBCYXNrZXQnLFxuICAzMDA3OiAnXHUwMEM5bGFuIEJcdTAwRTlhcm5haXMgUGF1LUxhY3EtT3J0aGV6JyxcbiAgMjU6ICdTSUcgU3RyYXNib3VyZycsXG4gIDI3OiAnTGltb2dlcyBDU1AnLFxuICAyMTogJ05hbnRlcnJlIDkyJyxcbiAgMTc6ICdCQ00gR3JhdmVsaW5lcy1EdW5rZXJxdWUnLFxuICAyNDogJ0pMIEJvdXJnJyxcbiAgMTk6ICdDaG9yYWxlIFJvYW5uZSBCYXNrZXQnLFxuICAxODogJ0Nob2xldCBCYXNrZXQnLFxuICAxNTogJ09ybFx1MDBFOWFucyBMb2lyZXQgQmFza2V0JyxcbiAgMTE6ICdFU1NNIExlIFBvcnRlbCcsXG4gIDEwODogJ1BhcmlzIEJhc2tldGJhbGwnLFxuICAxMjogJ0NoYW1wYWduZSBCYXNrZXQnLFxuICAxMTA6ICdGb3MgUHJvdmVuY2UnLFxufVxuXG5leHBvcnQgY29uc3QgdGVhbVJhcGlkQXBpID0ge1xuICAncGFyaXMtbGV2YWxsb2lzJzogJ0xldmFsbG9pcycsXG4gIHZpbGxldXJiYW5uZTogJ0x5b24tVmlsbGV1cmJhbm5lJyxcbiAgbW9uYWNvOiAnTW9uYWNvJyxcbiAgZGlqb246ICdEaWpvbicsXG4gICdsZS1tYW5zJzogJ0xlIE1hbnMnLFxuICAncGF1LW9ydGhleic6ICdQYXUtT3J0aGV6JyxcbiAgc3RyYXNib3VyZzogJ1N0cmFzYm91cmcnLFxuICBsaW1vZ2VzOiAnTGltb2dlcycsXG4gIG5hbnRlcnJlOiAnTmFudGVycmUnLFxuICBncmF2ZWxpbmVzOiAnR3JhdmVsaW5lcy1EdW5rZXJxdWUnLFxuICBib3VyZzogJ0pMIEJvdXJnJyxcbiAgcm9hbm5lOiAnUm9hbm5lJyxcbiAgY2hvbGV0OiAnQ2hvbGV0JyxcbiAgb3JsZWFuczogJ09ybGVhbnMnLFxuICAnbGUtcG9ydGVsJzogJ0xlIFBvcnRlbCcsXG4gICdwYXJpcy1iYXNrZXQnOiAnUGFyaXMnLFxuICAnY2hhbG9ucy1lbi1jaGFtcGFnbmUnOiAnQ2hhbG9ucy1SZWltcycsXG4gICdmb3MtcHJvdmVuY2UnOiAnRm9zLXN1ci1NZXInLFxufVxuIiwgImV4cG9ydCBmdW5jdGlvbiBnZXRLZXlCeVZhbHVlKG9iamVjdDogYW55LCB2YWx1ZTogc3RyaW5nKSB7XG4gIHJldHVybiBPYmplY3Qua2V5cyhvYmplY3QpLmZpbmQoKGtleSkgPT4gb2JqZWN0W2tleV0gPT09IHZhbHVlKVxufVxuIiwgImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSAncmVtaXgnXG5pbXBvcnQgeyBqc29uLCBMaW5rLCBPdXRsZXQsIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IExheW91dCBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IHsgVGFibGUsIFRhYmxlQ2VsbCwgVGFibGVIZWFkLCBUYWJsZVN0YXRzIH0gZnJvbSAnfi9jb21wb25lbnRzL1RhYmxlJ1xuaW1wb3J0IHsgdGVhbXMgfSBmcm9tICd+L2NvbnN0YW50cy90ZWFtcydcblxuaW1wb3J0IHsgZGIgfSBmcm9tICd+L3V0aWxzL2RiLnNlcnZlcidcbmltcG9ydCB7IGdldEtleUJ5VmFsdWUgfSBmcm9tICd+L3V0aWxzL2Z1bmN0aW9ucy9nZXRLZXlCeVZhbHVlJ1xuaW1wb3J0IHsgU3RhbmRpbmcsIFN0YW5kaW5nVGVhbVN0YXQgfSBmcm9tICd+L3V0aWxzL3R5cGVzJ1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBzdGFuZGluZ3M6IGF3YWl0IGRiLnN0YW5kaW5ncy5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IHNlYXNvbjogMjAyMiB9LFxuICAgIH0pLFxuICB9XG4gIHJldHVybiBqc29uKGRhdGEpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCBkYXRhID0gdXNlTG9hZGVyRGF0YSgpXG4gIGNvbnN0IFtjaGFuZ2VTdGF0LCBzZXRDaGFuZ2VTdGF0XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxuICBjb25zdCBsaW5rQ2xhc3MgPVxuICAgICd0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLW9wYWNpdHkgaG92ZXI6b3BhY2l0eS03MCBib3JkZXItYi0yIGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItc2xhdGUtNTAwIGhvdmVyOmN1cnNvci1wb2ludGVyJ1xuICBjb25zdCBhY3RpdmVMaW5rQ2xhc3MgPVxuICAgICd0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC13aGl0ZSB0cmFuc2l0aW9uLW9wYWNpdHkgaG92ZXI6b3BhY2l0eS03MCBib3JkZXItYi0yIGJvcmRlci1zbGF0ZS05MDAgaG92ZXI6Y3Vyc29yLXBvaW50ZXInXG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBzdHlsZT17eyBmb250RmFtaWx5OiAnc3lzdGVtLXVpLCBzYW5zLXNlcmlmJywgbGluZUhlaWdodDogJzEuNCcgfX0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC13aGl0ZVwiPkJldGNsaWMgRWxpdGU8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0byBweS01XCI+XG4gICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UmFuazwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+VGVhbTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+V2luPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5Mb3NzPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5XaW4gJTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UG9pbnRzIFNjb3JlZDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UG9pbnRzIEFsbG93ZWQ8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7ZGF0YS5zdGFuZGluZ3Muc3RhbmRpbmdzLm1hcCgodGVhbTogU3RhbmRpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXRUZWFtTmFtZSA9IGdldEtleUJ5VmFsdWUodGVhbXMsIHRlYW0udGVhbSlcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRyXG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBob3ZlcjpjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1zbGF0ZS03MDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPntpbmRleCArIDF9PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgY2xhc3NOYW1lPVwidy1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctNzIgaXRlbXMtY2VudGVyIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YGltYWdlcy9sb2dvcy8ke2Zvcm1hdFRlYW1OYW1lfS5wbmdgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3RlYW0udGVhbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGVhbS50ZWFtfVxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57dGVhbS53aW59PC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e3RlYW0ubG9zZX08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57dGVhbS5wZXJjZW50YWdlfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPnt0ZWFtLnBvaW50U2NvcmVkfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPnt0ZWFtLnBvaW50QWxsb3dlZH08L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC9UYWJsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNlwiPlxuICAgICAgICAgIDxoMVxuICAgICAgICAgICAgY2xhc3NOYW1lPXshY2hhbmdlU3RhdCA/IGFjdGl2ZUxpbmtDbGFzcyA6IGxpbmtDbGFzc31cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENoYW5nZVN0YXQoZmFsc2UpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFBlciBHYW1lIFN0YXRzXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8aDFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2hhbmdlU3RhdCA/IGFjdGl2ZUxpbmtDbGFzcyA6IGxpbmtDbGFzc31cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENoYW5nZVN0YXQodHJ1ZSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVG90YWwgU3RhdHNcbiAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtYXV0byBweS01XCI+XG4gICAgICAgICAgPFRhYmxlPlxuICAgICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+UmFuazwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+VGVhbTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+Rkc8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkZHQTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RkclPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4zUDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+M1BBPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4zUCU8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPjJQPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD4yUEE8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPjJQJTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RlQ8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkZUQTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+RlQlPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5PUkI8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPkRSQjwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+VFJCPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5BU1Q8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlNUTDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+QkxLPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5UT1Y8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlBGPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57KGNoYW5nZVN0YXQgJiYgJ1BUUycpIHx8ICdQUEcnfTwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHsoY2hhbmdlU3RhdCAmJlxuICAgICAgICAgICAgICAgIGRhdGEuc3RhbmRpbmdzLnRlYW1Ub3RhbFN0YXRzLm1hcCgodGVhbTogU3RhbmRpbmdUZWFtU3RhdCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUYWJsZVN0YXRzIGtleT17dGVhbS50ZWFtfSBkYXRhPXt0ZWFtfSAvPlxuICAgICAgICAgICAgICAgIH0pKSB8fFxuICAgICAgICAgICAgICAgIGRhdGEuc3RhbmRpbmdzLnRlYW1QZXJHYW1lU3RhdHMubWFwKFxuICAgICAgICAgICAgICAgICAgKHRlYW06IFN0YW5kaW5nVGVhbVN0YXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxUYWJsZVN0YXRzIGtleT17dGVhbS50ZWFtfSBkYXRhPXt0ZWFtfSAvPlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L1RhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG4iLCAiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXG5cbmxldCBkYjogUHJpc21hQ2xpZW50XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgdmFyIF9fZGI6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxufVxuXG4vLyB0aGlzIGlzIG5lZWRlZCBiZWNhdXNlIGluIGRldmVsb3BtZW50IHdlIGRvbid0IHdhbnQgdG8gcmVzdGFydFxuLy8gdGhlIHNlcnZlciB3aXRoIGV2ZXJ5IGNoYW5nZSwgYnV0IHdlIHdhbnQgdG8gbWFrZSBzdXJlIHdlIGRvbid0XG4vLyBjcmVhdGUgYSBuZXcgY29ubmVjdGlvbiB0byB0aGUgREIgd2l0aCBldmVyeSBjaGFuZ2UgZWl0aGVyLlxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgZGIgPSBuZXcgUHJpc21hQ2xpZW50KClcbiAgZGIuJGNvbm5lY3QoKVxufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwuX19kYikge1xuICAgIGdsb2JhbC5fX2RiID0gbmV3IFByaXNtYUNsaWVudCgpXG4gICAgZ2xvYmFsLl9fZGIuJGNvbm5lY3QoKVxuICB9XG4gIGRiID0gZ2xvYmFsLl9fZGJcbn1cblxuZXhwb3J0IHsgZGIgfVxuIiwgImltcG9ydCB7IGNsb3Nlc3RJbmRleFRvLCBmb3JtYXQgfSBmcm9tICdkYXRlLWZucydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24gfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IGpzb24sIHVzZUxvYWRlckRhdGEgfSBmcm9tICdyZW1peCdcbmltcG9ydCB7IEFycm93SWNvbiB9IGZyb20gJ34vY29tcG9uZW50cy9BcnJvd0ljb24nXG5cbmltcG9ydCB7IENhcmRMaXN0IH0gZnJvbSAnfi9jb21wb25lbnRzL0NhcmRMaXN0J1xuaW1wb3J0IExheW91dCBmcm9tICd+L2NvbXBvbmVudHMvTGF5b3V0J1xuXG5pbXBvcnQgeyBkYiB9IGZyb20gJ34vdXRpbHMvZGIuc2VydmVyJ1xuaW1wb3J0IHsgZm9ybWF0dGVkRGF0ZSB9IGZyb20gJ34vdXRpbHMvZnVuY3Rpb25zL2Zvcm1hdHRlZERhdGUnXG5pbXBvcnQgeyBTY2hlZHVsZSB9IGZyb20gJ34vdXRpbHMvdHlwZXMnXG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0ge1xuICAgIHNjaGVkdWxlOiBhd2FpdCBkYi5zY2hlZHVsZXMuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBzZWFzb246IDIwMjIgfSxcbiAgICB9KSxcbiAgfVxuXG4gIHJldHVybiBqc29uKGRhdGEpXG59XG5cbmZ1bmN0aW9uIGZpbmRDbG9zZXN0UHJldkRhdGUoZGF0ZVRvQ29tcGFyZTogRGF0ZSwgZGF0ZXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZvcm1hdERhdGVzID0gZGF0ZXMubWFwKChkYXRlKSA9PiBuZXcgRGF0ZShkYXRlKSlcbiAgcmV0dXJuIGNsb3Nlc3RJbmRleFRvKGRhdGVUb0NvbXBhcmUsIGZvcm1hdERhdGVzKSBhcyBudW1iZXJcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIGNvbnN0IGRhdGEgPSB1c2VMb2FkZXJEYXRhKClcbiAgY29uc3QgW2luZGV4RGF0ZSwgc2V0SW5kZXhEYXRlXSA9IHVzZVN0YXRlPG51bWJlcj4oMClcbiAgY29uc3QgW2NvbXB1dGVkRGF0ZXMsIHNldENvbXB1dGVkRGF0ZXNdID0gdXNlU3RhdGUoW1xuICAgIC4uLm5ldyBTZXQoZm9ybWF0dGVkRGF0ZShkYXRhLnNjaGVkdWxlLnNjaGVkdWxlKS5tYXAoKGVsZW0pID0+IGVsZW0uZGF0ZSkpLFxuICBdKVxuICBjb25zdCBbbmV3R2FtZXMsIHNldE5ld0dhbWVzXSA9IHVzZVN0YXRlPFNjaGVkdWxlW10+KClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGluaXRJbmRleERhdGUgPSAoKSA9PiB7XG4gICAgICBzZXRJbmRleERhdGUoZmluZENsb3Nlc3RQcmV2RGF0ZShuZXcgRGF0ZSgpLCBjb21wdXRlZERhdGVzKSlcbiAgICAgIHNldE5ld0dhbWVzKGRhdGEuc2NoZWR1bGUuc2NoZWR1bGUpXG4gICAgfVxuICAgIGluaXRJbmRleERhdGUoKVxuICB9LCBbY29tcHV0ZWREYXRlcywgZGF0YV0pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb21wdXRlZEdhbWVzID0gKCkgPT4ge1xuICAgICAgY29uc3QgZmlsdGVyZWRHYW1lcyA9IGRhdGEuc2NoZWR1bGUuc2NoZWR1bGUuZmlsdGVyKFxuICAgICAgICAoZ2FtZTogU2NoZWR1bGUpID0+IGdhbWUuZGF0ZSA9PT0gY29tcHV0ZWREYXRlc1tpbmRleERhdGVdLFxuICAgICAgKVxuICAgICAgc2V0TmV3R2FtZXMoZmlsdGVyZWRHYW1lcylcbiAgICB9XG4gICAgY29tcHV0ZWRHYW1lcygpXG4gIH0sIFtpbmRleERhdGUsIGNvbXB1dGVkRGF0ZXMsIGRhdGFdKVxuXG4gIGNvbnN0IHByZXZJbmRleCA9ICgpID0+XG4gICAgKGluZGV4RGF0ZSA9PT0gMCAmJiBzZXRJbmRleERhdGUoMCkpIHx8IHNldEluZGV4RGF0ZShpbmRleERhdGUgLSAxKVxuICBjb25zdCBuZXh0SW5kZXggPSAoKSA9PiB7XG4gICAgaWYgKGluZGV4RGF0ZSA9PT0gY29tcHV0ZWREYXRlcy5sZW5ndGggLSAxKSB7XG4gICAgICBzZXRJbmRleERhdGUoY29tcHV0ZWREYXRlcy5sZW5ndGggLSAxKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJbmRleERhdGUoaW5kZXhEYXRlICsgMSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdzeXN0ZW0tdWksIHNhbnMtc2VyaWYnLCBsaW5lSGVpZ2h0OiAnMS40JyB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMCBmbGV4IHctMzYgc2VsZWN0LW5vbmUgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3ByZXZJbmRleH0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIDxBcnJvd0ljb24gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICB7Y29tcHV0ZWREYXRlc1tpbmRleERhdGVdICYmXG4gICAgICAgICAgICAgIGZvcm1hdChuZXcgRGF0ZShjb21wdXRlZERhdGVzW2luZGV4RGF0ZV0pLCAnZGQgTU1NIHl5eXknKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gb25DbGljaz17bmV4dEluZGV4fSBjbGFzc05hbWU9XCJyb3RhdGUtMTgwIGN1cnNvci1wb2ludGVyIFwiPlxuICAgICAgICAgICAgPEFycm93SWNvbiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy1hdXRvLWZpbGwgZ2FwLTVcIj5cbiAgICAgICAgICB7bmV3R2FtZXMgJiYgPENhcmRMaXN0IGdhbWVzPXtuZXdHYW1lc30gLz59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cbiIsICJleHBvcnQgdHlwZSBBcnJvd0ljb25Qcm9wcyA9IHtcbiAgc2l6ZT86IG51bWJlclxufSAmIFJlYWN0LkhUTUxBdHRyaWJ1dGVzPFNWR0VsZW1lbnQ+XG5cbmV4cG9ydCBmdW5jdGlvbiBBcnJvd0ljb24oeyBzaXplID0gMTIsIC4uLnJlc3QgfTogQXJyb3dJY29uUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8c3ZnXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBjb2xvcj1cImN1cnJlbnRDb2xvclwiXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTIgMTJcIlxuICAgICAgd2lkdGg9e3NpemV9XG4gICAgICBoZWlnaHQ9e3NpemV9XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICBkPVwiTTAgNmEuNzUuNzUgMCAwIDEgLjc1LS43NWgxMGEuNzUuNzUgMCAwIDEgMCAxLjVoLTEwQS43NS43NSAwIDAgMSAwIDZaXCJcbiAgICAgICAgZmlsbD1cIiNDQ0M3QzNcIlxuICAgICAgLz5cbiAgICAgIDxwYXRoXG4gICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgIGQ9XCJNNi4yOC40N2EuNzUuNzUgMCAwIDEgMCAxLjA2TDEuODEgNmw0LjQ3IDQuNDdhLjc1Ljc1IDAgMSAxLTEuMDYgMS4wNmwtNS01YS43NS43NSAwIDAgMSAwLTEuMDZsNS01YS43NS43NSAwIDAgMSAxLjA2IDBaXCJcbiAgICAgICAgZmlsbD1cIiNDQ0M3QzNcIlxuICAgICAgLz5cbiAgICA8L3N2Zz5cbiAgKVxufVxuIiwgImltcG9ydCB7IExpbmsgfSBmcm9tICdyZW1peCdcblxuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uL0NhcmQnXG5pbXBvcnQgeyB0ZWFtSWRzIH0gZnJvbSAnfi9jb25zdGFudHMvdGVhbXMnXG5pbXBvcnQgeyBnZXRLZXlCeVZhbHVlIH0gZnJvbSAnfi91dGlscy9mdW5jdGlvbnMvZ2V0S2V5QnlWYWx1ZSdcbmltcG9ydCB7IFNjaGVkdWxlIH0gZnJvbSAnfi91dGlscy90eXBlcydcblxuZXhwb3J0IGZ1bmN0aW9uIENhcmRMaXN0KHsgZ2FtZXMgfTogeyBnYW1lczogU2NoZWR1bGVbXSB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtnYW1lcy5tYXAoKGdhbWUpID0+IHtcbiAgICAgICAgY29uc3QgdGVhbUlkID0gZ2V0S2V5QnlWYWx1ZSh0ZWFtSWRzLCBnYW1lLm9wcClcbiAgICAgICAgaWYgKGdhbWUub3BwUHRzKSB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rIHRvPXtgL2dhbWUvJHtnYW1lLmRhdGV9LyR7dGVhbUlkfWB9IGtleT17Z2FtZS5pZH0+XG4gICAgICAgICAgICAgIDxDYXJkIGdhbWU9e2dhbWV9IC8+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiA8Q2FyZCBrZXk9e2dhbWUuaWR9IGdhbWU9e2dhbWV9IC8+XG4gICAgICAgIH1cbiAgICAgIH0pfVxuICAgIDwvPlxuICApXG59XG4iLCAiaW1wb3J0IHsgY29tcHV0ZVRlYW1zLCB0ZWFtcyB9IGZyb20gJ34vY29uc3RhbnRzL3RlYW1zJ1xuaW1wb3J0IHsgZ2V0S2V5QnlWYWx1ZSB9IGZyb20gJ34vdXRpbHMvZnVuY3Rpb25zL2dldEtleUJ5VmFsdWUnXG5pbXBvcnQgeyBTY2hlZHVsZSB9IGZyb20gJ34vdXRpbHMvdHlwZXMnXG5cbmV4cG9ydCBmdW5jdGlvbiBDYXJkKHsgZ2FtZSB9OiB7IGdhbWU6IFNjaGVkdWxlIH0pIHtcbiAgY29uc3QgaXNIb21lV2lubmVyID0gZ2FtZS5wdHMgPiBnYW1lLm9wcFB0c1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlXG4gICAgICBjbGFzc05hbWU9e1xuICAgICAgICAnZmlyZWZveDpiZy1zbGF0ZS03NTAgZmxleCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItbWFpbiBiZy1nbGFzcyB0ZXh0LXdoaXRlIGJhY2tkcm9wLWJsdXItbGcgZHVyYXRpb24tMzAwIGhvdmVyOmN1cnNvci1wb2ludGVyIGhvdmVyOmJnLXNsYXRlLTcwMCdcbiAgICAgIH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGZsZXgtY29sXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gcC00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGgtMjAgdy0yMCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1hcm91bmQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxzcGFuPntgJHtnZXRLZXlCeVZhbHVlKGNvbXB1dGVUZWFtcywgZ2FtZS5vcHApfWB9PC9zcGFuPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LThcIlxuICAgICAgICAgICAgICBzcmM9e2BpbWFnZXMvbG9nb3MvJHtnZXRLZXlCeVZhbHVlKHRlYW1zLCBnYW1lLm9wcCl9LnBuZ2B9XG4gICAgICAgICAgICAgIGFsdD17Z2FtZS5vcHB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleC0yIG10LTMgZmxleCBwLTRcIj5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtMnhsIGZvbnQtYm9sZCAgJHtpc0hvbWVXaW5uZXIgJiYgJ29wYWNpdHktNTAnfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtnYW1lLm9wcFB0c31cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwid2hpdGVzcGFjZS1ub3dyYXAgcHgtMyBwdC0xLjUgdGV4dC1jZW50ZXIgdXBwZXJjYXNlXCI+XG4gICAgICAgICAgICAgIHsoZ2FtZS5vcHBQdHMgJiYgJ0ZpbmFsJykgfHwgJ05vdCBwbGF5ZWQnfVxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTJ4bCBmb250LWJvbGQgICR7IWlzSG9tZVdpbm5lciAmJiAnb3BhY2l0eS01MCd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2dhbWUucHRzfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBoLTIwIHctMjAgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktYXJvdW5kIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8c3Bhbj57YCR7Z2V0S2V5QnlWYWx1ZShjb21wdXRlVGVhbXMsIGdhbWUudGVhbSl9YH08L3NwYW4+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctOFwiXG4gICAgICAgICAgICAgIHNyYz17YGltYWdlcy9sb2dvcy8ke2dldEtleUJ5VmFsdWUodGVhbXMsIGdhbWUudGVhbSl9LnBuZ2B9XG4gICAgICAgICAgICAgIGFsdD17Z2FtZS50ZWFtfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYm9yZGVyLXQgYm9yZGVyLW1haW4gcHktMiB0ZXh0LWNlbnRlciB0ZXh0LXNtXCI+XG4gICAgICAgICAgVmlldyBkZXRhaWxzXG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG4iLCAiaW1wb3J0IHsgZm9ybWF0SVNPLCBwYXJzZSB9IGZyb20gJ2RhdGUtZm5zJ1xuaW1wb3J0IHsgU2NoZWR1bGUgfSBmcm9tICcuLi90eXBlcydcblxuZXhwb3J0IGNvbnN0IGZvcm1hdHRlZERhdGUgPSAob2JqZWN0OiBTY2hlZHVsZVtdKSA9PiB7XG4gIGNvbnN0IG5ld09iamVjdCA9IG9iamVjdFxuICAgIC5maWx0ZXIoKGVsZW06IFNjaGVkdWxlKSA9PiBlbGVtLmRhdGUubGVuZ3RoID4gMTApXG4gICAgLm1hcCgoZWxlbTogU2NoZWR1bGUpID0+IHtcbiAgICAgIGNvbnN0IG5ld0RhdGUgPSBmb3JtYXRJU08oXG4gICAgICAgIHBhcnNlKGVsZW0uZGF0ZSwgJ0VFRUUsIE1NTSBkLCB5eXl5JywgbmV3IERhdGUoKSksXG4gICAgICAgIHtcbiAgICAgICAgICByZXByZXNlbnRhdGlvbjogJ2RhdGUnLFxuICAgICAgICB9LFxuICAgICAgKVxuICAgICAgZWxlbS5kYXRlID0gbmV3RGF0ZVxuICAgICAgcmV0dXJuIHsgLi4uZWxlbSB9XG4gICAgfSlcbiAgcmV0dXJuIG5ld09iamVjdFxufVxuLy8gZXhwb3J0IGNvbnN0IGZvcm1hdHRlZERhdGUgPSAob2JqZWN0OiBTY2hlZHVsZVtdKSA9PiB7XG4vLyAgIGNvbnN0IG5ld09iamVjdCA9IG9iamVjdC5yZWR1Y2UoXG4vLyAgICAgKGFjYzogU2NoZWR1bGVbXSwgY3VycmVudDogU2NoZWR1bGUpID0+XG4vLyAgICAgICAoY3VycmVudC5kYXRlLmxlbmd0aCA+IDEwICYmIFsuLi5hY2MsIGN1cnJlbnRdKSB8fCBhY2MsXG4vLyAgICAgW10sXG4vLyAgIClcbi8vICAgcmV0dXJuIG5ld09iamVjdFxuLy8gfVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzRjZmU0YTljJywnZW50cnknOnsnbW9kdWxlJzonL2J1aWxkL2VudHJ5LmNsaWVudC02WTRISTdHWC5qcycsJ2ltcG9ydHMnOlsnL2J1aWxkL19zaGFyZWQvY2h1bmstR1k1N1JEVUMuanMnXX0sJ3JvdXRlcyc6eydyb290Jzp7J2lkJzoncm9vdCcsJ3BhcmVudElkJzp1bmRlZmluZWQsJ3BhdGgnOicnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb290LVVVSzdCVEFPLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZ2FtZS8kZGF0ZS8kdGVhbUlkJzp7J2lkJzoncm91dGVzL2dhbWUvJGRhdGUvJHRlYW1JZCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidnYW1lLzpkYXRlLzp0ZWFtSWQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvZ2FtZS8kZGF0ZS8kdGVhbUlkLUJRRUtJTVUyLmpzJywnaW1wb3J0cyc6WycvYnVpbGQvX3NoYXJlZC9jaHVuay1NQVVVQ01KSi5qcycsJy9idWlsZC9fc2hhcmVkL2NodW5rLUFUU0NOMkxJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstUEVFRko1NU8uanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9idWlsZC9yb3V0ZXMvaW5kZXgtSExRVUVKSTcuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLUFUU0NOMkxJLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstT1JTRUdaWTIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QRUVGSjU1Ty5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9zdGFuZGluZ3MnOnsnaWQnOidyb3V0ZXMvc3RhbmRpbmdzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J3N0YW5kaW5ncycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL2J1aWxkL3JvdXRlcy9zdGFuZGluZ3MtNFRaWFE0T1AuanMnLCdpbXBvcnRzJzpbJy9idWlsZC9fc2hhcmVkL2NodW5rLU1BVVVDTUpKLmpzJywnL2J1aWxkL19zaGFyZWQvY2h1bmstT1JTRUdaWTIuanMnLCcvYnVpbGQvX3NoYXJlZC9jaHVuay1QRUVGSjU1Ty5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX19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
