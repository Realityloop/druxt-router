(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{413:function(t,e,r){"use strict";r.r(e);var s=r(42),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[r("a",{attrs:{name:"DruxtRouter"}})]),t._v(" "),r("h1",{attrs:{id:"druxtrouter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#druxtrouter"}},[t._v("#")]),t._v(" DruxtRouter")]),t._v(" "),r("p",[t._v("DruxtRouter class.")]),t._v(" "),r("p",[t._v("Provides core Drupal JSON:API query functionality.")]),t._v(" "),r("p",[r("strong",[t._v("Kind")]),t._v(": global class")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#DruxtRouter"}},[t._v("DruxtRouter")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#new_DruxtRouter_new"}},[t._v("new DruxtRouter(baseURL, [options])")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#DruxtRouter+druxt"}},[t._v(".druxt")]),t._v(" : "),r("code",[t._v("DruxtClient")])]),t._v(" "),r("li",[r("s",[r("a",{attrs:{href:"#DruxtRouter+addHeaders"}},[t._v(".addHeaders(headers)")])])]),t._v(" "),r("li",[r("s",[r("a",{attrs:{href:"#DruxtRouter+buildQueryUrl"}},[t._v(".buildQueryUrl(url, [query])")]),t._v(" ⇒ "),r("code",[t._v("string")])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#DruxtRouter+get"}},[t._v(".get(path)")]),t._v(" ⇒ "),r("code",[t._v("object")])]),t._v(" "),r("li",[r("s",[r("a",{attrs:{href:"#DruxtRouter+getIndex"}},[t._v(".getIndex(resource)")]),t._v(" ⇒ "),r("code",[t._v("object")])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#DruxtRouter+getRedirect"}},[t._v(".getRedirect(path, route)")]),t._v(" ⇒ "),r("code",[t._v("boolean")]),t._v(" | "),r("code",[t._v("string")])]),t._v(" "),r("li",[r("s",[r("a",{attrs:{href:"#DruxtRouter+getResource"}},[t._v(".getResource(type, id)")]),t._v(" ⇒ "),r("code",[t._v("object")])])]),t._v(" "),r("li",[r("s",[r("a",{attrs:{href:"#DruxtRouter+getResources"}},[t._v(".getResources(resource, query, [options])")]),t._v(" ⇒ "),r("code",[t._v("Array.<object>")])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#DruxtRouter+getResourceByRoute"}},[t._v(".getResourceByRoute(route)")]),t._v(" ⇒ "),r("code",[t._v("object")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#DruxtRouter+getRoute"}},[t._v(".getRoute(path)")]),t._v(" ⇒ "),r("code",[t._v("object")])])])])]),t._v(" "),r("hr"),t._v(" "),r("p",[r("a",{attrs:{name:"new_DruxtRouter_new"}})]),t._v(" "),r("h2",{attrs:{id:"new-druxtrouter-baseurl-options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#new-druxtrouter-baseurl-options"}},[t._v("#")]),t._v(" new DruxtRouter(baseURL, [options])")]),t._v(" "),r("p",[t._v("DruxtRouter constructor.")]),t._v(" "),r("ul",[r("li",[t._v("Validates module options.")]),t._v(" "),r("li",[t._v("Sets up Axios instance.")]),t._v(" "),r("li",[t._v("Sets up options.")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Param")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Default")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("baseURL")]),t._v(" "),r("td",[r("code",[t._v("string")])]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("The Drupal base URL.")])]),t._v(" "),r("tr",[r("td",[t._v("[options]")]),t._v(" "),r("td",[r("code",[t._v("object")])]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("Druxt Router options.")])]),t._v(" "),r("tr",[r("td",[t._v("[options.axios]")]),t._v(" "),r("td",[r("code",[t._v("object")])]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("Axios instance settings.")])]),t._v(" "),r("tr",[r("td",[t._v("[options.endpoint]")]),t._v(" "),r("td",[r("code",[t._v("string")])]),t._v(" "),r("td",[r("code",[t._v('"jsonapi"')])]),t._v(" "),r("td",[t._v("The JSON:API endpoint.")])]),t._v(" "),r("tr",[r("td",[t._v("[options.types]")]),t._v(" "),r("td",[r("code",[t._v("array")])]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("Array of Druxt Router type definitions.")])])])]),t._v(" "),r("p",[r("strong",[t._v("Example")])]),t._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" router "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DruxtRouter")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://example.com'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("hr"),t._v(" "),r("p",[r("a",{attrs:{name:"DruxtRouter+druxt"}})]),t._v(" "),r("h2",{attrs:{id:"druxt-druxtclient"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#druxt-druxtclient"}},[t._v("#")]),t._v(" .druxt : "),r("code",[t._v("DruxtClient")])]),t._v(" "),r("p",[t._v("Instance of the Druxt Client.")]),t._v(" "),r("p",[r("strong",[t._v("Kind")]),t._v(": instance property of "),r("a",{attrs:{href:"#DruxtRouter"}},[r("code",[t._v("DruxtRouter")])]),r("br"),t._v(" "),r("strong",[t._v("See")]),t._v(": "),r("a",{attrs:{href:"http://druxtjs.org/api/client",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://druxtjs.org/api/client"),r("OutboundLink")],1)]),t._v(" "),r("hr"),t._v(" "),r("p",[r("a",{attrs:{name:"DruxtRouter+addHeaders"}})]),t._v(" "),r("h2",{attrs:{id:"addheaders-headers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#addheaders-headers"}},[t._v("#")]),t._v(" "),r("s",[t._v(".addHeaders(headers)")])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("Deprecated")])])]),t._v(" "),r("p",[t._v("Add headers to the Axios instance.")]),t._v(" "),r("p",[r("strong",[t._v("Kind")]),t._v(": instance method of "),r("a",{attrs:{href:"#DruxtRouter"}},[r("code",[t._v("DruxtRouter")])]),r("br"),t._v(" "),r("strong",[t._v("See")]),t._v(": "),r("a",{attrs:{href:"https://druxtjs.org/api/client",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://druxtjs.org/api/client"),r("OutboundLink")],1)]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Param")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("headers")]),t._v(" "),r("td",[r("code",[t._v("object")])]),t._v(" "),r("td",[t._v("An object containing HTTP headers.")])])])]),t._v(" "),r("p",[r("strong",[t._v("Example")])]),t._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[t._v("router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("druxt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("addHeaders")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization'")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token template-string"}},[r("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("Basic ")]),r("span",{pre:!0,attrs:{class:"token interpolation"}},[r("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("token"),r("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),r("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("hr"),t._v(" "),r("p",[r("a",{attrs:{name:"DruxtRouter+buildQueryUrl"}})]),t._v(" "),r("h2",{attrs:{id:"buildqueryurl-url-query-⇒-string"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#buildqueryurl-url-query-⇒-string"}},[t._v("#")]),t._v(" "),r("s",[t._v(".buildQueryUrl(url, [query]) ⇒ "),r("code",[t._v("string")])])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("Deprecated")])])]),t._v(" "),r("p",[t._v("Build query URL.")]),t._v(" "),r("p",[r("strong",[t._v("Kind")]),t._v(": instance method of "),r("a",{attrs:{href:"#DruxtRouter"}},[r("code",[t._v("DruxtRouter")])]),r("br"),t._v(" "),r("strong",[t._v("Returns")]),t._v(": "),r("code",[t._v("string")]),t._v(" - The URL with query string."),r("br"),t._v(" "),r("strong",[t._v("See")]),t._v(": "),r("a",{attrs:{href:"https://druxtjs.org/api/client",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://druxtjs.org/api/client"),r("OutboundLink")],1)]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Param")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("url")]),t._v(" "),r("td",[r("code",[t._v("string")])]),t._v(" "),r("td",[t._v("The base query URL.")])]),t._v(" "),r("tr",[r("td",[t._v("[query]")]),t._v(" "),r("td",[r("code",[t._v("string")]),t._v(" | "),r("code",[t._v("object")])]),t._v(" "),r("td",[t._v("A correctly formatted JSON:API query string or object.")])])])]),t._v(" "),r("p",[r("strong",[t._v("Example")])]),t._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" query "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DrupalJsonApiParams")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nquery"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFilter")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'status'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" queryUrl "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("druxt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildQueryUrl")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resourceUrl"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br")])]),r("hr"),t._v(" "),r("p",[r("a",{attrs:{name:"DruxtRouter+get"}})]),t._v(" "),r("h2",{attrs:{id:"get-path-⇒-object"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#get-path-⇒-object"}},[t._v("#")]),t._v(" .get(path) ⇒ "),r("code",[t._v("object")])]),t._v(" "),r("p",[t._v("Returns route and redirect data for a given path.")]),t._v(" "),r("p",[r("strong",[t._v("Kind")]),t._v(": instance method of "),r("a",{attrs:{href:"#DruxtRouter"}},[r("code",[t._v("DruxtRouter")])]),r("br"),t._v(" "),r("strong",[t._v("Returns")]),t._v(": "),r("code",[t._v("object")]),t._v(" - The route and redirect data.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Param")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("path")]),t._v(" "),r("td",[r("code",[t._v("string")])]),t._v(" "),r("td",[t._v("The route path.")])])])]),t._v(" "),r("p",[r("strong",[t._v("Example")])]),t._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" redirect"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" route "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/node/1'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("hr"),t._v(" "),r("p",[r("a",{attrs:{name:"DruxtRouter+getIndex"}})]),t._v(" "),r("h2",{attrs:{id:"getindex-resource-⇒-object"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getindex-resource-⇒-object"}},[t._v("#")]),t._v(" "),r("s",[t._v(".getIndex(resource) ⇒ "),r("code",[t._v("object")])])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("Deprecated")])])]),t._v(" "),r("p",[t._v("Get index of all available resources, or the optionally specified resource.")]),t._v(" "),r("p",[r("strong",[t._v("Kind")]),t._v(": instance method of "),r("a",{attrs:{href:"#DruxtRouter"}},[r("code",[t._v("DruxtRouter")])]),r("br"),t._v(" "),r("strong",[t._v("Returns")]),t._v(": "),r("code",[t._v("object")]),t._v(" - The resource index object or the specified resource."),r("br"),t._v(" "),r("strong",[t._v("See")]),t._v(": "),r("a",{attrs:{href:"https://druxtjs.org/api/client",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://druxtjs.org/api/client"),r("OutboundLink")],1)]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Param")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("resource")]),t._v(" "),r("td",[r("code",[t._v("string")])]),t._v(" "),r("td",[t._v("(Optional) A specific resource to query.")])])])]),t._v(" "),r("p",[r("strong",[t._v("Example")])]),t._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" href "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("druxt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getIndex")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node--article'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("hr"),t._v(" "),r("p",[r("a",{attrs:{name:"DruxtRouter+getRedirect"}})]),t._v(" "),r("h2",{attrs:{id:"getredirect-path-route-⇒-boolean-string"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getredirect-path-route-⇒-boolean-string"}},[t._v("#")]),t._v(" .getRedirect(path, route) ⇒ "),r("code",[t._v("boolean")]),t._v(" | "),r("code",[t._v("string")])]),t._v(" "),r("p",[t._v("Get redirect data for a given route.")]),t._v(" "),r("p",[r("strong",[t._v("Kind")]),t._v(": instance method of "),r("a",{attrs:{href:"#DruxtRouter"}},[r("code",[t._v("DruxtRouter")])]),r("br"),t._v(" "),r("strong",[t._v("Returns")]),t._v(": "),r("code",[t._v("boolean")]),t._v(" | "),r("code",[t._v("string")]),t._v(" - The redirect path or false."),r("br"),t._v(" "),r("strong",[t._v("Todo")])]),t._v(" "),r("ul",{staticClass:"contains-task-list"},[r("li",{staticClass:"task-list-item"},[r("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox"}}),t._v(" Move this to a DruxtRouterRedirect class.")]),t._v(" "),r("li",{staticClass:"task-list-item"},[r("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox"}}),t._v(" Remove the path parameter.")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Param")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("path")]),t._v(" "),r("td",[r("code",[t._v("string")])]),t._v(" "),r("td",[t._v("The route path.")])]),t._v(" "),r("tr",[r("td",[t._v("route")]),t._v(" "),r("td",[r("code",[t._v("object")])]),t._v(" "),r("td",[t._v("Druxt route object.")])])])]),t._v(" "),r("p",[r("strong",[t._v("Example")])]),t._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" route "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRoute")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" redirect "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRedirect")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("path"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" route"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br")])]),r("hr"),t._v(" "),r("p",[r("a",{attrs:{name:"DruxtRouter+getResource"}})]),t._v(" "),r("h2",{attrs:{id:"getresource-type-id-⇒-object"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getresource-type-id-⇒-object"}},[t._v("#")]),t._v(" "),r("s",[t._v(".getResource(type, id) ⇒ "),r("code",[t._v("object")])])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("Deprecated")])])]),t._v(" "),r("p",[t._v("Get a JSON:API resource by type and ID.")]),t._v(" "),r("p",[r("strong",[t._v("Kind")]),t._v(": instance method of "),r("a",{attrs:{href:"#DruxtRouter"}},[r("code",[t._v("DruxtRouter")])]),r("br"),t._v(" "),r("strong",[t._v("Returns")]),t._v(": "),r("code",[t._v("object")]),t._v(" - The JSON:API resource data."),r("br"),t._v(" "),r("strong",[t._v("See")]),t._v(": "),r("a",{attrs:{href:"https://druxtjs.org/api/client",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://druxtjs.org/api/client"),r("OutboundLink")],1)]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Param")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("type")]),t._v(" "),r("td",[r("code",[t._v("string")])]),t._v(" "),r("td",[t._v("The JSON:API resource type.")])]),t._v(" "),r("tr",[r("td",[t._v("id")]),t._v(" "),r("td",[r("code",[t._v("string")])]),t._v(" "),r("td",[t._v("The Drupal resource UUID.")])])])]),t._v(" "),r("p",[r("strong",[t._v("Example")])]),t._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("druxt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResource")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node--article'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("hr"),t._v(" "),r("p",[r("a",{attrs:{name:"DruxtRouter+getResources"}})]),t._v(" "),r("h2",{attrs:{id:"getresources-resource-query-options-⇒-array-object"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getresources-resource-query-options-⇒-array-object"}},[t._v("#")]),t._v(" "),r("s",[t._v(".getResources(resource, query, [options]) ⇒ "),r("code",[t._v("Array.<object>")])])]),t._v(" "),r("p",[r("em",[r("strong",[t._v("Deprecated")])])]),t._v(" "),r("p",[t._v("Gets a collection of resources.")]),t._v(" "),r("p",[r("strong",[t._v("Kind")]),t._v(": instance method of "),r("a",{attrs:{href:"#DruxtRouter"}},[r("code",[t._v("DruxtRouter")])]),r("br"),t._v(" "),r("strong",[t._v("Returns")]),t._v(": "),r("code",[t._v("Array.<object>")]),t._v(" - Array of resources."),r("br"),t._v(" "),r("strong",[t._v("See")]),t._v(": "),r("a",{attrs:{href:"https://druxtjs.org/api/client",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://druxtjs.org/api/client"),r("OutboundLink")],1),r("br"),t._v(" "),r("strong",[t._v("Todo")])]),t._v(" "),r("ul",{staticClass:"contains-task-list"},[r("li",{staticClass:"task-list-item"},[r("input",{staticClass:"task-list-item-checkbox",attrs:{disabled:"",type:"checkbox"}}),t._v(" Add granular pagination.")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Param")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Default")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("resource")]),t._v(" "),r("td",[r("code",[t._v("string")])]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("The JSON:API resource type.")])]),t._v(" "),r("tr",[r("td",[t._v("query")]),t._v(" "),r("td",[r("code",[t._v("string")]),t._v(" | "),r("code",[t._v("object")])]),t._v(" "),r("td"),t._v(" "),r("td",[t._v("A JSON:API query string or object.")])]),t._v(" "),r("tr",[r("td",[t._v("[options]")]),t._v(" "),r("td",[r("code",[t._v("object")])]),t._v(" "),r("td"),t._v(" "),r("td")]),t._v(" "),r("tr",[r("td",[t._v("[options.all]")]),t._v(" "),r("td",[r("code",[t._v("boolean")])]),t._v(" "),r("td",[r("code",[t._v("false")])]),t._v(" "),r("td",[t._v("Load all results.")])])])]),t._v(" "),r("p",[r("strong",[t._v("Example")])]),t._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Load all currently published Articles.")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" query "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DrupalJsonApiParams")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nquery"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("addFilter")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'status'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" resources "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("druxt"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getCollection")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'node--article'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" query"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br"),r("span",{staticClass:"line-number"},[t._v("3")]),r("br"),r("span",{staticClass:"line-number"},[t._v("4")]),r("br")])]),r("hr"),t._v(" "),r("p",[r("a",{attrs:{name:"DruxtRouter+getResourceByRoute"}})]),t._v(" "),r("h2",{attrs:{id:"getresourcebyroute-route-⇒-object"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getresourcebyroute-route-⇒-object"}},[t._v("#")]),t._v(" .getResourceByRoute(route) ⇒ "),r("code",[t._v("object")])]),t._v(" "),r("p",[t._v("Get a JSON:API resource by Drupal route.")]),t._v(" "),r("p",[r("strong",[t._v("Kind")]),t._v(": instance method of "),r("a",{attrs:{href:"#DruxtRouter"}},[r("code",[t._v("DruxtRouter")])]),r("br"),t._v(" "),r("strong",[t._v("Returns")]),t._v(": "),r("code",[t._v("object")]),t._v(" - The JSON:API resource data.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Param")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("route")]),t._v(" "),r("td",[r("code",[t._v("object")])]),t._v(" "),r("td",[t._v("Druxt Router route object.")])])])]),t._v(" "),r("p",[r("strong",[t._v("Example")])]),t._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" route "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRoute")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getResourceByRoute")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("route"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br"),r("span",{staticClass:"line-number"},[t._v("2")]),r("br")])]),r("hr"),t._v(" "),r("p",[r("a",{attrs:{name:"DruxtRouter+getRoute"}})]),t._v(" "),r("h2",{attrs:{id:"getroute-path-⇒-object"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getroute-path-⇒-object"}},[t._v("#")]),t._v(" .getRoute(path) ⇒ "),r("code",[t._v("object")])]),t._v(" "),r("p",[t._v("Get routing data from Decoupled Router.")]),t._v(" "),r("p",[r("strong",[t._v("Kind")]),t._v(": instance method of "),r("a",{attrs:{href:"#DruxtRouter"}},[r("code",[t._v("DruxtRouter")])]),r("br"),t._v(" "),r("strong",[t._v("Returns")]),t._v(": "),r("code",[t._v("object")]),t._v(" - The route object.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Param")]),t._v(" "),r("th",[t._v("Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("path")]),t._v(" "),r("td",[r("code",[t._v("string")])]),t._v(" "),r("td",[t._v("The route path.")])])])]),t._v(" "),r("p",[r("strong",[t._v("Example")])]),t._v(" "),r("div",{staticClass:"language-js line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" route "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" router"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRoute")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("hr")])}),[],!1,null,null,null);e.default=a.exports}}]);