"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "dns":
/*!**********************!*\
  !*** external "dns" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("dns");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("punycode");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=E%3A%5CWork%5Cautofraud%5Cauto-fraud-law--main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CWork%5Cautofraud%5Cauto-fraud-law--main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=E%3A%5CWork%5Cautofraud%5Cauto-fraud-law--main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CWork%5Cautofraud%5Cauto-fraud-law--main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var E_Work_autofraud_auto_fraud_law_main_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"E:\\\\Work\\\\autofraud\\\\auto-fraud-law--main\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: E_Work_autofraud_auto_fraud_law_main_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_2__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1FJTNBJTVDV29yayU1Q2F1dG9mcmF1ZCU1Q2F1dG8tZnJhdWQtbGF3LS1tYWluJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1FJTNBJTVDV29yayU1Q2F1dG9mcmF1ZCU1Q2F1dG8tZnJhdWQtbGF3LS1tYWluJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNnRDtBQUMvRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNpSjs7QUFFakoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGlwLWZhc3QtY29kZS8/NmYzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJFOlxcXFxXb3JrXFxcXGF1dG9mcmF1ZFxcXFxhdXRvLWZyYXVkLWxhdy0tbWFpblxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJFOlxcXFxXb3JrXFxcXGF1dG9mcmF1ZFxcXFxhdXRvLWZyYXVkLWxhdy0tbWFpblxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=E%3A%5CWork%5Cautofraud%5Cauto-fraud-law--main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CWork%5Cautofraud%5Cauto-fraud-law--main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _libs_next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/libs/next-auth */ \"(rsc)/./libs/next-auth.js\");\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(_libs_next_auth__WEBPACK_IMPORTED_MODULE_1__.authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNjO0FBRS9DLE1BQU1FLFVBQVVGLGdEQUFRQSxDQUFDQyx3REFBV0E7QUFFTyIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaXAtZmFzdC1jb2RlLy4vYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/ZGExYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiQC9saWJzL25leHQtYXV0aFwiO1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG5leHBvcnQgeyBoYW5kbGVyIGFzIEdFVCwgaGFuZGxlciBhcyBQT1NUIH07XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJhdXRoT3B0aW9ucyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var daisyui_src_theming_themes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! daisyui/src/theming/themes.js */ \"(rsc)/./node_modules/daisyui/src/theming/themes.js\");\n/* harmony import */ var daisyui_src_theming_themes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(daisyui_src_theming_themes_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    // REQUIRED\n    appName: \"Autofraud\",\n    // REQUIRED: a short description of your app for SEO tags (can be overwritten)\n    appDescription: \"The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app.\",\n    // REQUIRED (no https://, not trialing slash at the end, just the naked domain)\n    domainName: \"shipfa.st\",\n    crisp: {\n        // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.\n        id: \"\",\n        // Hide Crisp by default, except on route \"/\". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below\n        onlyShowOnRoutes: [\n            \"/\"\n        ]\n    },\n    stripe: {\n        // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId\n        plans: [\n            {\n                // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)\n                priceId:  true ? \"price_1Niyy5AxyNprDp7iZIqEyD2h\" : 0,\n                //  REQUIRED - Name of the plan, displayed on the pricing page\n                name: \"Starter\",\n                // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others\n                description: \"Perfect for small projects\",\n                // The price you want to display, the one user will be charged on Stripe.\n                price: 79,\n                // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty\n                priceAnchor: 99,\n                features: [\n                    {\n                        name: \"NextJS boilerplate\"\n                    },\n                    {\n                        name: \"User oauth\"\n                    },\n                    {\n                        name: \"Database\"\n                    },\n                    {\n                        name: \"Emails\"\n                    }\n                ]\n            },\n            {\n                // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true\n                isFeatured: true,\n                priceId:  true ? \"price_1O5KtcAxyNprDp7iftKnrrpw\" : 0,\n                name: \"Advanced\",\n                description: \"You need more power\",\n                price: 99,\n                priceAnchor: 149,\n                features: [\n                    {\n                        name: \"NextJS boilerplate\"\n                    },\n                    {\n                        name: \"User oauth\"\n                    },\n                    {\n                        name: \"Database\"\n                    },\n                    {\n                        name: \"Emails\"\n                    },\n                    {\n                        name: \"1 year of updates\"\n                    },\n                    {\n                        name: \"24/7 support\"\n                    }\n                ]\n            }\n        ]\n    },\n    aws: {\n        // If you use AWS S3/Cloudfront, put values in here\n        bucket: \"bucket-name\",\n        bucketUrl: `https://bucket-name.s3.amazonaws.com/`,\n        cdn: \"https://cdn-id.cloudfront.net/\"\n    },\n    mailgun: {\n        // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)\n        subdomain: \"mg\",\n        // REQUIRED — Email 'From' field to be used when sending magic login links\n        fromNoReply: `ShipFast <noreply@mg.shipfa.st>`,\n        // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..\n        fromAdmin: `Marc at ShipFast <marc@mg.shipfa.st>`,\n        // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support.\"\n        supportEmail: \"marc@mg.shipfa.st\",\n        // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.\n        forwardRepliesTo: \"marc.louvion@gmail.com\"\n    },\n    colors: {\n        // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.\n        theme: \"light\",\n        // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after \"data-theme=\")\n        // OR you can just do this to use a custom color: main: \"#f37055\". HEX only.\n        main: (daisyui_src_theming_themes_js__WEBPACK_IMPORTED_MODULE_0___default())[`[data-theme=light]`][\"primary\"]\n    },\n    auth: {\n        // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API\n        loginUrl: \"/api/auth/signin\",\n        // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js\n        callbackUrl: \"/dashboard\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9jb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1EO0FBRW5ELE1BQU1DLFNBQVM7SUFDYixXQUFXO0lBQ1hDLFNBQVM7SUFDVCw4RUFBOEU7SUFDOUVDLGdCQUNFO0lBQ0YsK0VBQStFO0lBQy9FQyxZQUFZO0lBQ1pDLE9BQU87UUFDTCwyS0FBMks7UUFDM0tDLElBQUk7UUFDSix3SkFBd0o7UUFDeEpDLGtCQUFrQjtZQUFDO1NBQUk7SUFDekI7SUFDQUMsUUFBUTtRQUNOLCtJQUErSTtRQUMvSUMsT0FBTztZQUNMO2dCQUNFLG1JQUFtSTtnQkFDbklDLFNBQ0VDLEtBQXNDLEdBQ2xDLG1DQUNBLENBQVc7Z0JBQ2pCLDhEQUE4RDtnQkFDOURDLE1BQU07Z0JBQ04sK0dBQStHO2dCQUMvR0MsYUFBYTtnQkFDYix5RUFBeUU7Z0JBQ3pFQyxPQUFPO2dCQUNQLHNIQUFzSDtnQkFDdEhDLGFBQWE7Z0JBQ2JDLFVBQVU7b0JBQ1I7d0JBQ0VKLE1BQU07b0JBQ1I7b0JBQ0E7d0JBQUVBLE1BQU07b0JBQWE7b0JBQ3JCO3dCQUFFQSxNQUFNO29CQUFXO29CQUNuQjt3QkFBRUEsTUFBTTtvQkFBUztpQkFDbEI7WUFDSDtZQUNBO2dCQUNFLDhIQUE4SDtnQkFDOUhLLFlBQVk7Z0JBQ1pQLFNBQ0VDLEtBQXNDLEdBQ2xDLG1DQUNBLENBQVc7Z0JBQ2pCQyxNQUFNO2dCQUNOQyxhQUFhO2dCQUNiQyxPQUFPO2dCQUNQQyxhQUFhO2dCQUNiQyxVQUFVO29CQUNSO3dCQUNFSixNQUFNO29CQUNSO29CQUNBO3dCQUFFQSxNQUFNO29CQUFhO29CQUNyQjt3QkFBRUEsTUFBTTtvQkFBVztvQkFDbkI7d0JBQUVBLE1BQU07b0JBQVM7b0JBQ2pCO3dCQUFFQSxNQUFNO29CQUFvQjtvQkFDNUI7d0JBQUVBLE1BQU07b0JBQWU7aUJBQ3hCO1lBQ0g7U0FDRDtJQUNIO0lBQ0FNLEtBQUs7UUFDSCxtREFBbUQ7UUFDbkRDLFFBQVE7UUFDUkMsV0FBVyxDQUFDLHFDQUFxQyxDQUFDO1FBQ2xEQyxLQUFLO0lBQ1A7SUFDQUMsU0FBUztRQUNQLHNLQUFzSztRQUN0S0MsV0FBVztRQUNYLDBFQUEwRTtRQUMxRUMsYUFBYSxDQUFDLCtCQUErQixDQUFDO1FBQzlDLDBHQUEwRztRQUMxR0MsV0FBVyxDQUFDLG9DQUFvQyxDQUFDO1FBQ2pELDhKQUE4SjtRQUM5SkMsY0FBYztRQUNkLHFLQUFxSztRQUNyS0Msa0JBQWtCO0lBQ3BCO0lBQ0FDLFFBQVE7UUFDTixzTkFBc047UUFDdE5DLE9BQU87UUFDUCxrUEFBa1A7UUFDbFAsNEVBQTRFO1FBQzVFQyxNQUFNOUIsc0VBQU0sQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxVQUFVO0lBQy9DO0lBQ0ErQixNQUFNO1FBQ0osZ0tBQWdLO1FBQ2hLQyxVQUFVO1FBQ1Ysa1FBQWtRO1FBQ2xRQyxhQUFhO0lBQ2Y7QUFDRjtBQUVBLGlFQUFlaEMsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaXAtZmFzdC1jb2RlLy4vY29uZmlnLmpzP2MyYjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lcyBmcm9tIFwiZGFpc3l1aS9zcmMvdGhlbWluZy90aGVtZXMuanNcIjtcblxuY29uc3QgY29uZmlnID0ge1xuICAvLyBSRVFVSVJFRFxuICBhcHBOYW1lOiBcIkF1dG9mcmF1ZFwiLFxuICAvLyBSRVFVSVJFRDogYSBzaG9ydCBkZXNjcmlwdGlvbiBvZiB5b3VyIGFwcCBmb3IgU0VPIHRhZ3MgKGNhbiBiZSBvdmVyd3JpdHRlbilcbiAgYXBwRGVzY3JpcHRpb246XG4gICAgXCJUaGUgTmV4dEpTIGJvaWxlcnBsYXRlIHdpdGggYWxsIHlvdSBuZWVkIHRvIGJ1aWxkIHlvdXIgU2FhUywgQUkgdG9vbCwgb3IgYW55IG90aGVyIHdlYiBhcHAuXCIsXG4gIC8vIFJFUVVJUkVEIChubyBodHRwczovLywgbm90IHRyaWFsaW5nIHNsYXNoIGF0IHRoZSBlbmQsIGp1c3QgdGhlIG5ha2VkIGRvbWFpbilcbiAgZG9tYWluTmFtZTogXCJzaGlwZmEuc3RcIixcbiAgY3Jpc3A6IHtcbiAgICAvLyBDcmlzcCB3ZWJzaXRlIElELiBJRiBZT1UgRE9OJ1QgVVNFIENSSVNQOiBqdXN0IHJlbW92ZSB0aGlzID0+IFRoZW4gYWRkIGEgc3VwcG9ydCBlbWFpbCBpbiB0aGlzIGNvbmZpZyBmaWxlIChtYWlsZ3VuLnN1cHBvcnRFbWFpbCkgb3RoZXJ3aXNlIGN1c3RvbWVyIHN1cHBvcnQgd29uJ3Qgd29yay5cbiAgICBpZDogXCJcIixcbiAgICAvLyBIaWRlIENyaXNwIGJ5IGRlZmF1bHQsIGV4Y2VwdCBvbiByb3V0ZSBcIi9cIi4gQ3Jpc3AgaXMgdG9nZ2xlZCB3aXRoIDxCdXR0b25TdXBwb3J0Lz4uIElmIHlvdSB3YW50IHRvIHNob3cgQ3Jpc3Agb24gZXZlcnkgcm91dGVzLCBqdXN0IHJlbW92ZSB0aGlzIGJlbG93XG4gICAgb25seVNob3dPblJvdXRlczogW1wiL1wiXSxcbiAgfSxcbiAgc3RyaXBlOiB7XG4gICAgLy8gQ3JlYXRlIG11bHRpcGxlIHBsYW5zIGluIHlvdXIgU3RyaXBlIGRhc2hib2FyZCwgdGhlbiBhZGQgdGhlbSBoZXJlLiBZb3UgY2FuIGFkZCBhcyBtYW55IHBsYW5zIGFzIHlvdSB3YW50LCBqdXN0IG1ha2Ugc3VyZSB0byBhZGQgdGhlIHByaWNlSWRcbiAgICBwbGFuczogW1xuICAgICAge1xuICAgICAgICAvLyBSRVFVSVJFRCDigJQgd2UgdXNlIHRoaXMgdG8gZmluZCB0aGUgcGxhbiBpbiB0aGUgd2ViaG9vayAoZm9yIGluc3RhbmNlIGlmIHlvdSB3YW50IHRvIHVwZGF0ZSB0aGUgdXNlcidzIGNyZWRpdHMgYmFzZWQgb24gdGhlIHBsYW4pXG4gICAgICAgIHByaWNlSWQ6XG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIlxuICAgICAgICAgICAgPyBcInByaWNlXzFOaXl5NUF4eU5wckRwN2laSXFFeUQyaFwiXG4gICAgICAgICAgICA6IFwicHJpY2VfNDU2XCIsXG4gICAgICAgIC8vICBSRVFVSVJFRCAtIE5hbWUgb2YgdGhlIHBsYW4sIGRpc3BsYXllZCBvbiB0aGUgcHJpY2luZyBwYWdlXG4gICAgICAgIG5hbWU6IFwiU3RhcnRlclwiLFxuICAgICAgICAvLyBBIGZyaWVuZGx5IGRlc2NyaXB0aW9uIG9mIHRoZSBwbGFuLCBkaXNwbGF5ZWQgb24gdGhlIHByaWNpbmcgcGFnZS4gVGlwOiBleHBsYWluIHdoeSB0aGlzIHBsYW4gYW5kIG5vdCBvdGhlcnNcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUGVyZmVjdCBmb3Igc21hbGwgcHJvamVjdHNcIixcbiAgICAgICAgLy8gVGhlIHByaWNlIHlvdSB3YW50IHRvIGRpc3BsYXksIHRoZSBvbmUgdXNlciB3aWxsIGJlIGNoYXJnZWQgb24gU3RyaXBlLlxuICAgICAgICBwcmljZTogNzksXG4gICAgICAgIC8vIElmIHlvdSBoYXZlIGFuIGFuY2hvciBwcmljZSAoaS5lLiAkMjkpIHRoYXQgeW91IHdhbnQgdG8gZGlzcGxheSBjcm9zc2VkIG91dCwgcHV0IGl0IGhlcmUuIE90aGVyd2lzZSwgbGVhdmUgaXQgZW1wdHlcbiAgICAgICAgcHJpY2VBbmNob3I6IDk5LFxuICAgICAgICBmZWF0dXJlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiTmV4dEpTIGJvaWxlcnBsYXRlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiVXNlciBvYXV0aFwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIkRhdGFiYXNlXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiRW1haWxzXCIgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFRoaXMgcGxhbiB3aWxsIGxvb2sgZGlmZmVyZW50IG9uIHRoZSBwcmljaW5nIHBhZ2UsIGl0IHdpbGwgYmUgaGlnaGxpZ2h0ZWQuIFlvdSBjYW4gb25seSBoYXZlIG9uZSBwbGFuIHdpdGggaXNGZWF0dXJlZDogdHJ1ZVxuICAgICAgICBpc0ZlYXR1cmVkOiB0cnVlLFxuICAgICAgICBwcmljZUlkOlxuICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCJcbiAgICAgICAgICAgID8gXCJwcmljZV8xTzVLdGNBeHlOcHJEcDdpZnRLbnJycHdcIlxuICAgICAgICAgICAgOiBcInByaWNlXzQ1NlwiLFxuICAgICAgICBuYW1lOiBcIkFkdmFuY2VkXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIllvdSBuZWVkIG1vcmUgcG93ZXJcIixcbiAgICAgICAgcHJpY2U6IDk5LFxuICAgICAgICBwcmljZUFuY2hvcjogMTQ5LFxuICAgICAgICBmZWF0dXJlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiTmV4dEpTIGJvaWxlcnBsYXRlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiVXNlciBvYXV0aFwiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIkRhdGFiYXNlXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiRW1haWxzXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiMSB5ZWFyIG9mIHVwZGF0ZXNcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCIyNC83IHN1cHBvcnRcIiB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuICBhd3M6IHtcbiAgICAvLyBJZiB5b3UgdXNlIEFXUyBTMy9DbG91ZGZyb250LCBwdXQgdmFsdWVzIGluIGhlcmVcbiAgICBidWNrZXQ6IFwiYnVja2V0LW5hbWVcIixcbiAgICBidWNrZXRVcmw6IGBodHRwczovL2J1Y2tldC1uYW1lLnMzLmFtYXpvbmF3cy5jb20vYCxcbiAgICBjZG46IFwiaHR0cHM6Ly9jZG4taWQuY2xvdWRmcm9udC5uZXQvXCIsXG4gIH0sXG4gIG1haWxndW46IHtcbiAgICAvLyBzdWJkb21haW4gdG8gdXNlIHdoZW4gc2VuZGluZyBlbWFpbHMsIGlmIHlvdSBkb24ndCBoYXZlIGEgc3ViZG9tYWluLCBqdXN0IHJlbW92ZSBpdC4gSGlnaGx5IHJlY29tbWVuZGVkIHRvIGhhdmUgb25lIChpLmUuIG1nLnlvdXJkb21haW4uY29tIG9yIG1haWwueW91cmRvbWFpbi5jb20pXG4gICAgc3ViZG9tYWluOiBcIm1nXCIsXG4gICAgLy8gUkVRVUlSRUQg4oCUIEVtYWlsICdGcm9tJyBmaWVsZCB0byBiZSB1c2VkIHdoZW4gc2VuZGluZyBtYWdpYyBsb2dpbiBsaW5rc1xuICAgIGZyb21Ob1JlcGx5OiBgU2hpcEZhc3QgPG5vcmVwbHlAbWcuc2hpcGZhLnN0PmAsXG4gICAgLy8gUkVRVUlSRUQg4oCUIEVtYWlsICdGcm9tJyBmaWVsZCB0byBiZSB1c2VkIHdoZW4gc2VuZGluZyBvdGhlciBlbWFpbHMsIGxpa2UgYWJhbmRvbmVkIGNhcnRzLCB1cGRhdGVzIGV0Yy4uXG4gICAgZnJvbUFkbWluOiBgTWFyYyBhdCBTaGlwRmFzdCA8bWFyY0BtZy5zaGlwZmEuc3Q+YCxcbiAgICAvLyBFbWFpbCBzaG93biB0byBjdXN0b21lciBpZiBuZWVkIHN1cHBvcnQuIExlYXZlIGVtcHR5IGlmIG5vdCBuZWVkZWQgPT4gaWYgZW1wdHksIHNldCB1cCBDcmlzcCBhYm92ZSwgb3RoZXJ3aXNlIHlvdSB3b24ndCBiZSBhYmxlIHRvIG9mZmVyIGN1c3RvbWVyIHN1cHBvcnQuXCJcbiAgICBzdXBwb3J0RW1haWw6IFwibWFyY0BtZy5zaGlwZmEuc3RcIixcbiAgICAvLyBXaGVuIHNvbWVvbmUgcmVwbGllcyB0byBzdXBwb3J0RW1haWwgc2VudCBieSB0aGUgYXBwLCBmb3J3YXJkIGl0IHRvIHRoZSBlbWFpbCBiZWxvdyAob3RoZXJ3aXNlIGl0J3MgbG9zdCkuIElmIHlvdSBzZXQgc3VwcG9ydEVtYWlsIHRvIGVtcHR5LCB0aGlzIHdpbGwgYmUgaWdub3JlZC5cbiAgICBmb3J3YXJkUmVwbGllc1RvOiBcIm1hcmMubG91dmlvbkBnbWFpbC5jb21cIixcbiAgfSxcbiAgY29sb3JzOiB7XG4gICAgLy8gUkVRVUlSRUQg4oCUIFRoZSBEYWlzeVVJIHRoZW1lIHRvIHVzZSAoYWRkZWQgdG8gdGhlIG1haW4gbGF5b3V0LmpzKS4gTGVhdmUgYmxhbmsgZm9yIGRlZmF1bHQgKGxpZ2h0ICYgZGFyayBtb2RlKS4gSWYgeW91IGFueSBvdGhlciB0aGVtZSB0aGFuIGxpZ2h0L2RhcmssIHlvdSBuZWVkIHRvIGFkZCBpdCBpbiBjb25maWcudGFpbHdpbmQuanMgaW4gZGFpc3l1aS50aGVtZXMuXG4gICAgdGhlbWU6IFwibGlnaHRcIixcbiAgICAvLyBSRVFVSVJFRCDigJQgVGhpcyBjb2xvciB3aWxsIGJlIHJlZmxlY3RlZCBvbiB0aGUgd2hvbGUgYXBwIG91dHNpZGUgb2YgdGhlIGRvY3VtZW50IChsb2FkaW5nIGJhciwgQ2hyb21lIHRhYnMsIGV0Yy4uKS4gQnkgZGVmYXVsdCBpdCB0YWtlcyB0aGUgcHJpbWFyeSBjb2xvciBmcm9tIHlvdXIgRGFpc3lVSSB0aGVtZSAobWFrZSBzdXJlIHRvIHVwZGF0ZSB5b3VyIHRoZSB0aGVtZSBuYW1lIGFmdGVyIFwiZGF0YS10aGVtZT1cIilcbiAgICAvLyBPUiB5b3UgY2FuIGp1c3QgZG8gdGhpcyB0byB1c2UgYSBjdXN0b20gY29sb3I6IG1haW46IFwiI2YzNzA1NVwiLiBIRVggb25seS5cbiAgICBtYWluOiB0aGVtZXNbYFtkYXRhLXRoZW1lPWxpZ2h0XWBdW1wicHJpbWFyeVwiXSxcbiAgfSxcbiAgYXV0aDoge1xuICAgIC8vIFJFUVVJUkVEIOKAlCB0aGUgcGF0aCB0byBsb2cgaW4gdXNlcnMuIEl0J3MgdXNlIHRvIHByb3RlY3QgcHJpdmF0ZSByb3V0ZXMgKGxpa2UgL2Rhc2hib2FyZCkuIEl0J3MgdXNlZCBpbiBhcGlDbGllbnQgKC9saWJzL2FwaS5qcykgdXBvbiA0MDEgZXJyb3JzIGZyb20gb3VyIEFQSVxuICAgIGxvZ2luVXJsOiBcIi9hcGkvYXV0aC9zaWduaW5cIixcbiAgICAvLyBSRVFVSVJFRCDigJQgdGhlIHBhdGggeW91IHdhbnQgdG8gcmVkaXJlY3QgdXNlcnMgYWZ0ZXIgc3VjY2Vzc2Z1bGwgbG9naW4gKGkuZS4gL2Rhc2hib2FyZCwgL3ByaXZhdGUpLiBUaGlzIGlzIG5vcm1hbGx5IGEgcHJpdmF0ZSBwYWdlIGZvciB1c2VycyB0byBtYW5hZ2UgdGhlaXIgYWNjb3VudHMuIEl0J3MgdXNlZCBpbiBhcGlDbGllbnQgKC9saWJzL2FwaS5qcykgdXBvbiA0MDEgZXJyb3JzIGZyb20gb3VyIEFQSSAmIGluIEJ1dHRvblNpZ25pbi5qc1xuICAgIGNhbGxiYWNrVXJsOiBcIi9kYXNoYm9hcmRcIixcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiJdLCJuYW1lcyI6WyJ0aGVtZXMiLCJjb25maWciLCJhcHBOYW1lIiwiYXBwRGVzY3JpcHRpb24iLCJkb21haW5OYW1lIiwiY3Jpc3AiLCJpZCIsIm9ubHlTaG93T25Sb3V0ZXMiLCJzdHJpcGUiLCJwbGFucyIsInByaWNlSWQiLCJwcm9jZXNzIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJwcmljZUFuY2hvciIsImZlYXR1cmVzIiwiaXNGZWF0dXJlZCIsImF3cyIsImJ1Y2tldCIsImJ1Y2tldFVybCIsImNkbiIsIm1haWxndW4iLCJzdWJkb21haW4iLCJmcm9tTm9SZXBseSIsImZyb21BZG1pbiIsInN1cHBvcnRFbWFpbCIsImZvcndhcmRSZXBsaWVzVG8iLCJjb2xvcnMiLCJ0aGVtZSIsIm1haW4iLCJhdXRoIiwibG9naW5VcmwiLCJjYWxsYmFja1VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./config.js\n");

/***/ }),

/***/ "(rsc)/./libs/mongo.js":
/*!***********************!*\
  !*** ./libs/mongo.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// This lib is use just to connect to the database in next-auth.\n// We don't use it anywhere else in the API routes—we use mongoose.js instead (to be able to use models)\n// See /libs/nextauth.js file.\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!uri) {\n    console.group(\"⚠️ MONGODB_URI missing from .env\");\n    console.error(\"It's not mandatory but a database is required for Magic Links.\");\n    console.error(\"If you don't need it, remove the code from /libs/next-auth.js (see connectMongo())\");\n    console.groupEnd();\n} else if (true) {\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL21vbmdvLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFzQztBQUV0QyxnRUFBZ0U7QUFDaEUsd0dBQXdHO0FBQ3hHLDhCQUE4QjtBQUU5QixNQUFNQyxNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFDbkMsTUFBTUMsVUFBVSxDQUFDO0FBRWpCLElBQUlDO0FBQ0osSUFBSUM7QUFFSixJQUFJLENBQUNOLEtBQUs7SUFDUk8sUUFBUUMsS0FBSyxDQUFDO0lBQ2RELFFBQVFFLEtBQUssQ0FDWDtJQUVGRixRQUFRRSxLQUFLLENBQ1g7SUFFRkYsUUFBUUcsUUFBUTtBQUNsQixPQUFPLElBQUlULElBQXNDLEVBQUU7SUFDakQsSUFBSSxDQUFDVSxPQUFPQyxtQkFBbUIsRUFBRTtRQUMvQlAsU0FBUyxJQUFJTixnREFBV0EsQ0FBQ0MsS0FBS0k7UUFDOUJPLE9BQU9DLG1CQUFtQixHQUFHUCxPQUFPUSxPQUFPO0lBQzdDO0lBQ0FQLGdCQUFnQkssT0FBT0MsbUJBQW1CO0FBQzVDLE9BQU8sRUFHTjtBQUVELGlFQUFlTixhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpcC1mYXN0LWNvZGUvLi9saWJzL21vbmdvLmpzP2FlZWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xuXG4vLyBUaGlzIGxpYiBpcyB1c2UganVzdCB0byBjb25uZWN0IHRvIHRoZSBkYXRhYmFzZSBpbiBuZXh0LWF1dGguXG4vLyBXZSBkb24ndCB1c2UgaXQgYW55d2hlcmUgZWxzZSBpbiB0aGUgQVBJIHJvdXRlc+KAlHdlIHVzZSBtb25nb29zZS5qcyBpbnN0ZWFkICh0byBiZSBhYmxlIHRvIHVzZSBtb2RlbHMpXG4vLyBTZWUgL2xpYnMvbmV4dGF1dGguanMgZmlsZS5cblxuY29uc3QgdXJpID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5jb25zdCBvcHRpb25zID0ge307XG5cbmxldCBjbGllbnQ7XG5sZXQgY2xpZW50UHJvbWlzZTtcblxuaWYgKCF1cmkpIHtcbiAgY29uc29sZS5ncm91cChcIuKaoO+4jyBNT05HT0RCX1VSSSBtaXNzaW5nIGZyb20gLmVudlwiKTtcbiAgY29uc29sZS5lcnJvcihcbiAgICBcIkl0J3Mgbm90IG1hbmRhdG9yeSBidXQgYSBkYXRhYmFzZSBpcyByZXF1aXJlZCBmb3IgTWFnaWMgTGlua3MuXCJcbiAgKTtcbiAgY29uc29sZS5lcnJvcihcbiAgICBcIklmIHlvdSBkb24ndCBuZWVkIGl0LCByZW1vdmUgdGhlIGNvZGUgZnJvbSAvbGlicy9uZXh0LWF1dGguanMgKHNlZSBjb25uZWN0TW9uZ28oKSlcIlxuICApO1xuICBjb25zb2xlLmdyb3VwRW5kKCk7XG59IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgaWYgKCFnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2U7XG59IGVsc2Uge1xuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImNvbnNvbGUiLCJncm91cCIsImVycm9yIiwiZ3JvdXBFbmQiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./libs/mongo.js\n");

/***/ }),

/***/ "(rsc)/./libs/next-auth.js":
/*!***************************!*\
  !*** ./libs/next-auth.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/email */ \"(rsc)/./node_modules/next-auth/providers/email.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/config */ \"(rsc)/./config.js\");\n/* harmony import */ var _mongo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mongo */ \"(rsc)/./libs/mongo.js\");\n\n\n\n\n\nconst authOptions = {\n    // Set any random key in .env.local\n    secret: process.env.NEXTAUTH_SECRET,\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            // Follow the \"Login with Google\" tutorial to get your credentials\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET,\n            async profile (profile) {\n                return {\n                    id: profile.sub,\n                    name: profile.given_name ? profile.given_name : profile.name,\n                    email: profile.email,\n                    image: profile.picture,\n                    createdAt: new Date()\n                };\n            }\n        }),\n        // Follow the \"Login with Email\" tutorial to set up your email server\n        // Requires a MongoDB database. Set MONOGODB_URI env variable.\n        ..._mongo__WEBPACK_IMPORTED_MODULE_4__[\"default\"] ? [\n            (0,next_auth_providers_email__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n                server: process.env.EMAIL_SERVER,\n                from: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].mailgun.fromNoReply\n            })\n        ] : []\n    ],\n    // New users will be saved in Database (MongoDB Atlas). Each user (model) has some fields like name, email, image, etc..\n    // Requires a MongoDB database. Set MONOGODB_URI env variable.\n    // Learn more about the model type: https://next-auth.js.org/v3/adapters/models\n    ..._mongo__WEBPACK_IMPORTED_MODULE_4__[\"default\"] && {\n        adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_2__.MongoDBAdapter)(_mongo__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n    },\n    callbacks: {\n        session: async ({ session, token })=>{\n            if (session?.user) {\n                session.user.id = token.sub;\n            }\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\"\n    },\n    theme: {\n        brandColor: _config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].colors.main,\n        // Add you own logo below. Recommended size is rectangle (i.e. 200x50px) and show your logo + name.\n        // It will be used in the login flow to display your logo. If you don't add it, it will look faded.\n        logo: `https://${_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].domainName}/logoAndName.png`\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL25leHQtYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0Q7QUFDRjtBQUNDO0FBQ3pCO0FBQ0s7QUFFNUIsTUFBTUssY0FBYztJQUN6QixtQ0FBbUM7SUFDbkNDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsZUFBZTtJQUNuQ0MsV0FBVztRQUNUVixzRUFBY0EsQ0FBQztZQUNiLGtFQUFrRTtZQUNsRVcsVUFBVUosUUFBUUMsR0FBRyxDQUFDSSxTQUFTO1lBQy9CQyxjQUFjTixRQUFRQyxHQUFHLENBQUNNLGFBQWE7WUFDdkMsTUFBTUMsU0FBUUEsT0FBTztnQkFDbkIsT0FBTztvQkFDTEMsSUFBSUQsUUFBUUUsR0FBRztvQkFDZkMsTUFBTUgsUUFBUUksVUFBVSxHQUFHSixRQUFRSSxVQUFVLEdBQUdKLFFBQVFHLElBQUk7b0JBQzVERSxPQUFPTCxRQUFRSyxLQUFLO29CQUNwQkMsT0FBT04sUUFBUU8sT0FBTztvQkFDdEJDLFdBQVcsSUFBSUM7Z0JBQ2pCO1lBQ0Y7UUFDRjtRQUNBLHFFQUFxRTtRQUNyRSw4REFBOEQ7V0FDMURwQiw4Q0FBWUEsR0FDWjtZQUNFSCxxRUFBYUEsQ0FBQztnQkFDWndCLFFBQVFsQixRQUFRQyxHQUFHLENBQUNrQixZQUFZO2dCQUNoQ0MsTUFBTXhCLCtDQUFNQSxDQUFDeUIsT0FBTyxDQUFDQyxXQUFXO1lBQ2xDO1NBQ0QsR0FDRCxFQUFFO0tBQ1A7SUFDRCx3SEFBd0g7SUFDeEgsOERBQThEO0lBQzlELCtFQUErRTtJQUMvRSxHQUFJekIsOENBQVlBLElBQUk7UUFBRTBCLFNBQVM1QixxRUFBY0EsQ0FBQ0UsOENBQVlBO0lBQUUsQ0FBQztJQUU3RDJCLFdBQVc7UUFDVEMsU0FBUyxPQUFPLEVBQUVBLE9BQU8sRUFBRUMsS0FBSyxFQUFFO1lBQ2hDLElBQUlELFNBQVNFLE1BQU07Z0JBQ2pCRixRQUFRRSxJQUFJLENBQUNsQixFQUFFLEdBQUdpQixNQUFNaEIsR0FBRztZQUM3QjtZQUNBLE9BQU9lO1FBQ1Q7SUFDRjtJQUNBQSxTQUFTO1FBQ1BHLFVBQVU7SUFDWjtJQUNBQyxPQUFPO1FBQ0xDLFlBQVlsQywrQ0FBTUEsQ0FBQ21DLE1BQU0sQ0FBQ0MsSUFBSTtRQUM5QixtR0FBbUc7UUFDbkcsbUdBQW1HO1FBQ25HQyxNQUFNLENBQUMsUUFBUSxFQUFFckMsK0NBQU1BLENBQUNzQyxVQUFVLENBQUMsZ0JBQWdCLENBQUM7SUFDdEQ7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpcC1mYXN0LWNvZGUvLi9saWJzL25leHQtYXV0aC5qcz8zM2VkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcbmltcG9ydCBFbWFpbFByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2VtYWlsXCI7XG5pbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAYXV0aC9tb25nb2RiLWFkYXB0ZXJcIjtcbmltcG9ydCBjb25maWcgZnJvbSBcIkAvY29uZmlnXCI7XG5pbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gXCIuL21vbmdvXCI7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcbiAgLy8gU2V0IGFueSByYW5kb20ga2V5IGluIC5lbnYubG9jYWxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gIHByb3ZpZGVyczogW1xuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIC8vIEZvbGxvdyB0aGUgXCJMb2dpbiB3aXRoIEdvb2dsZVwiIHR1dG9yaWFsIHRvIGdldCB5b3VyIGNyZWRlbnRpYWxzXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfU0VDUkVULFxuICAgICAgYXN5bmMgcHJvZmlsZShwcm9maWxlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHByb2ZpbGUuc3ViLFxuICAgICAgICAgIG5hbWU6IHByb2ZpbGUuZ2l2ZW5fbmFtZSA/IHByb2ZpbGUuZ2l2ZW5fbmFtZSA6IHByb2ZpbGUubmFtZSxcbiAgICAgICAgICBlbWFpbDogcHJvZmlsZS5lbWFpbCxcbiAgICAgICAgICBpbWFnZTogcHJvZmlsZS5waWN0dXJlLFxuICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgfSksXG4gICAgLy8gRm9sbG93IHRoZSBcIkxvZ2luIHdpdGggRW1haWxcIiB0dXRvcmlhbCB0byBzZXQgdXAgeW91ciBlbWFpbCBzZXJ2ZXJcbiAgICAvLyBSZXF1aXJlcyBhIE1vbmdvREIgZGF0YWJhc2UuIFNldCBNT05PR09EQl9VUkkgZW52IHZhcmlhYmxlLlxuICAgIC4uLihjb25uZWN0TW9uZ29cbiAgICAgID8gW1xuICAgICAgICAgIEVtYWlsUHJvdmlkZXIoe1xuICAgICAgICAgICAgc2VydmVyOiBwcm9jZXNzLmVudi5FTUFJTF9TRVJWRVIsXG4gICAgICAgICAgICBmcm9tOiBjb25maWcubWFpbGd1bi5mcm9tTm9SZXBseSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXVxuICAgICAgOiBbXSksXG4gIF0sXG4gIC8vIE5ldyB1c2VycyB3aWxsIGJlIHNhdmVkIGluIERhdGFiYXNlIChNb25nb0RCIEF0bGFzKS4gRWFjaCB1c2VyIChtb2RlbCkgaGFzIHNvbWUgZmllbGRzIGxpa2UgbmFtZSwgZW1haWwsIGltYWdlLCBldGMuLlxuICAvLyBSZXF1aXJlcyBhIE1vbmdvREIgZGF0YWJhc2UuIFNldCBNT05PR09EQl9VUkkgZW52IHZhcmlhYmxlLlxuICAvLyBMZWFybiBtb3JlIGFib3V0IHRoZSBtb2RlbCB0eXBlOiBodHRwczovL25leHQtYXV0aC5qcy5vcmcvdjMvYWRhcHRlcnMvbW9kZWxzXG4gIC4uLihjb25uZWN0TW9uZ28gJiYgeyBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjb25uZWN0TW9uZ28pIH0pLFxuXG4gIGNhbGxiYWNrczoge1xuICAgIHNlc3Npb246IGFzeW5jICh7IHNlc3Npb24sIHRva2VuIH0pID0+IHtcbiAgICAgIGlmIChzZXNzaW9uPy51c2VyKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLnN1YjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgfSxcbiAgdGhlbWU6IHtcbiAgICBicmFuZENvbG9yOiBjb25maWcuY29sb3JzLm1haW4sXG4gICAgLy8gQWRkIHlvdSBvd24gbG9nbyBiZWxvdy4gUmVjb21tZW5kZWQgc2l6ZSBpcyByZWN0YW5nbGUgKGkuZS4gMjAweDUwcHgpIGFuZCBzaG93IHlvdXIgbG9nbyArIG5hbWUuXG4gICAgLy8gSXQgd2lsbCBiZSB1c2VkIGluIHRoZSBsb2dpbiBmbG93IHRvIGRpc3BsYXkgeW91ciBsb2dvLiBJZiB5b3UgZG9uJ3QgYWRkIGl0LCBpdCB3aWxsIGxvb2sgZmFkZWQuXG4gICAgbG9nbzogYGh0dHBzOi8vJHtjb25maWcuZG9tYWluTmFtZX0vbG9nb0FuZE5hbWUucG5nYCxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiR29vZ2xlUHJvdmlkZXIiLCJFbWFpbFByb3ZpZGVyIiwiTW9uZ29EQkFkYXB0ZXIiLCJjb25maWciLCJjb25uZWN0TW9uZ28iLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJORVhUQVVUSF9TRUNSRVQiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJwcm9maWxlIiwiaWQiLCJzdWIiLCJuYW1lIiwiZ2l2ZW5fbmFtZSIsImVtYWlsIiwiaW1hZ2UiLCJwaWN0dXJlIiwiY3JlYXRlZEF0IiwiRGF0ZSIsInNlcnZlciIsIkVNQUlMX1NFUlZFUiIsImZyb20iLCJtYWlsZ3VuIiwiZnJvbU5vUmVwbHkiLCJhZGFwdGVyIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsInN0cmF0ZWd5IiwidGhlbWUiLCJicmFuZENvbG9yIiwiY29sb3JzIiwibWFpbiIsImxvZ28iLCJkb21haW5OYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./libs/next-auth.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/daisyui","vendor-chunks/nodemailer","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/@auth","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=E%3A%5CWork%5Cautofraud%5Cauto-fraud-law--main%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=E%3A%5CWork%5Cautofraud%5Cauto-fraud-law--main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();