"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"b08f80a09848\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzPzRlMzYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCJiMDhmODBhMDk4NDhcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var daisyui_src_theming_themes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! daisyui/src/theming/themes.js */ \"(app-pages-browser)/./node_modules/daisyui/src/theming/themes.js\");\n/* harmony import */ var daisyui_src_theming_themes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(daisyui_src_theming_themes_js__WEBPACK_IMPORTED_MODULE_0__);\n\nconst config = {\n    // REQUIRED\n    appName: \"Autofraud\",\n    // REQUIRED: a short description of your app for SEO tags (can be overwritten)\n    appDescription: \"The NextJS boilerplate with all you need to build your SaaS, AI tool, or any other web app.\",\n    // REQUIRED (no https://, not trialing slash at the end, just the naked domain)\n    domainName: \"shipfa.st\",\n    crisp: {\n        // Crisp website ID. IF YOU DON'T USE CRISP: just remove this => Then add a support email in this config file (mailgun.supportEmail) otherwise customer support won't work.\n        id: \"\",\n        // Hide Crisp by default, except on route \"/\". Crisp is toggled with <ButtonSupport/>. If you want to show Crisp on every routes, just remove this below\n        onlyShowOnRoutes: [\n            \"/\"\n        ]\n    },\n    stripe: {\n        // Create multiple plans in your Stripe dashboard, then add them here. You can add as many plans as you want, just make sure to add the priceId\n        plans: [\n            {\n                // REQUIRED — we use this to find the plan in the webhook (for instance if you want to update the user's credits based on the plan)\n                priceId:  true ? \"price_1Niyy5AxyNprDp7iZIqEyD2h\" : 0,\n                //  REQUIRED - Name of the plan, displayed on the pricing page\n                name: \"Starter\",\n                // A friendly description of the plan, displayed on the pricing page. Tip: explain why this plan and not others\n                description: \"Perfect for small projects\",\n                // The price you want to display, the one user will be charged on Stripe.\n                price: 79,\n                // If you have an anchor price (i.e. $29) that you want to display crossed out, put it here. Otherwise, leave it empty\n                priceAnchor: 99,\n                features: [\n                    {\n                        name: \"NextJS boilerplate\"\n                    },\n                    {\n                        name: \"User oauth\"\n                    },\n                    {\n                        name: \"Database\"\n                    },\n                    {\n                        name: \"Emails\"\n                    }\n                ]\n            },\n            {\n                // This plan will look different on the pricing page, it will be highlighted. You can only have one plan with isFeatured: true\n                isFeatured: true,\n                priceId:  true ? \"price_1O5KtcAxyNprDp7iftKnrrpw\" : 0,\n                name: \"Advanced\",\n                description: \"You need more power\",\n                price: 99,\n                priceAnchor: 149,\n                features: [\n                    {\n                        name: \"NextJS boilerplate\"\n                    },\n                    {\n                        name: \"User oauth\"\n                    },\n                    {\n                        name: \"Database\"\n                    },\n                    {\n                        name: \"Emails\"\n                    },\n                    {\n                        name: \"1 year of updates\"\n                    },\n                    {\n                        name: \"24/7 support\"\n                    }\n                ]\n            }\n        ]\n    },\n    aws: {\n        // If you use AWS S3/Cloudfront, put values in here\n        bucket: \"bucket-name\",\n        bucketUrl: \"https://bucket-name.s3.amazonaws.com/\",\n        cdn: \"https://cdn-id.cloudfront.net/\"\n    },\n    mailgun: {\n        // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)\n        subdomain: \"mg\",\n        // REQUIRED — Email 'From' field to be used when sending magic login links\n        fromNoReply: \"ShipFast <noreply@mg.shipfa.st>\",\n        // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..\n        fromAdmin: \"Marc at ShipFast <marc@mg.shipfa.st>\",\n        // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support.\"\n        supportEmail: \"marc@mg.shipfa.st\",\n        // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.\n        forwardRepliesTo: \"marc.louvion@gmail.com\"\n    },\n    colors: {\n        // REQUIRED — The DaisyUI theme to use (added to the main layout.js). Leave blank for default (light & dark mode). If you any other theme than light/dark, you need to add it in config.tailwind.js in daisyui.themes.\n        theme: \"light\",\n        // REQUIRED — This color will be reflected on the whole app outside of the document (loading bar, Chrome tabs, etc..). By default it takes the primary color from your DaisyUI theme (make sure to update your the theme name after \"data-theme=\")\n        // OR you can just do this to use a custom color: main: \"#f37055\". HEX only.\n        main: (daisyui_src_theming_themes_js__WEBPACK_IMPORTED_MODULE_0___default()[\"[data-theme=light]\"])[\"primary\"]\n    },\n    auth: {\n        // REQUIRED — the path to log in users. It's use to protect private routes (like /dashboard). It's used in apiClient (/libs/api.js) upon 401 errors from our API\n        loginUrl: \"/api/auth/signin\",\n        // REQUIRED — the path you want to redirect users after successfull login (i.e. /dashboard, /private). This is normally a private page for users to manage their accounts. It's used in apiClient (/libs/api.js) upon 401 errors from our API & in ButtonSignin.js\n        callbackUrl: \"/dashboard\"\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbmZpZy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBbUQ7QUFFbkQsTUFBTUMsU0FBUztJQUNiLFdBQVc7SUFDWEMsU0FBUztJQUNULDhFQUE4RTtJQUM5RUMsZ0JBQ0U7SUFDRiwrRUFBK0U7SUFDL0VDLFlBQVk7SUFDWkMsT0FBTztRQUNMLDJLQUEySztRQUMzS0MsSUFBSTtRQUNKLHdKQUF3SjtRQUN4SkMsa0JBQWtCO1lBQUM7U0FBSTtJQUN6QjtJQUNBQyxRQUFRO1FBQ04sK0lBQStJO1FBQy9JQyxPQUFPO1lBQ0w7Z0JBQ0UsbUlBQW1JO2dCQUNuSUMsU0FDRUMsS0FBc0MsR0FDbEMsbUNBQ0EsQ0FBVztnQkFDakIsOERBQThEO2dCQUM5REMsTUFBTTtnQkFDTiwrR0FBK0c7Z0JBQy9HQyxhQUFhO2dCQUNiLHlFQUF5RTtnQkFDekVDLE9BQU87Z0JBQ1Asc0hBQXNIO2dCQUN0SEMsYUFBYTtnQkFDYkMsVUFBVTtvQkFDUjt3QkFDRUosTUFBTTtvQkFDUjtvQkFDQTt3QkFBRUEsTUFBTTtvQkFBYTtvQkFDckI7d0JBQUVBLE1BQU07b0JBQVc7b0JBQ25CO3dCQUFFQSxNQUFNO29CQUFTO2lCQUNsQjtZQUNIO1lBQ0E7Z0JBQ0UsOEhBQThIO2dCQUM5SEssWUFBWTtnQkFDWlAsU0FDRUMsS0FBc0MsR0FDbEMsbUNBQ0EsQ0FBVztnQkFDakJDLE1BQU07Z0JBQ05DLGFBQWE7Z0JBQ2JDLE9BQU87Z0JBQ1BDLGFBQWE7Z0JBQ2JDLFVBQVU7b0JBQ1I7d0JBQ0VKLE1BQU07b0JBQ1I7b0JBQ0E7d0JBQUVBLE1BQU07b0JBQWE7b0JBQ3JCO3dCQUFFQSxNQUFNO29CQUFXO29CQUNuQjt3QkFBRUEsTUFBTTtvQkFBUztvQkFDakI7d0JBQUVBLE1BQU07b0JBQW9CO29CQUM1Qjt3QkFBRUEsTUFBTTtvQkFBZTtpQkFDeEI7WUFDSDtTQUNEO0lBQ0g7SUFDQU0sS0FBSztRQUNILG1EQUFtRDtRQUNuREMsUUFBUTtRQUNSQyxXQUFZO1FBQ1pDLEtBQUs7SUFDUDtJQUNBQyxTQUFTO1FBQ1Asc0tBQXNLO1FBQ3RLQyxXQUFXO1FBQ1gsMEVBQTBFO1FBQzFFQyxhQUFjO1FBQ2QsMEdBQTBHO1FBQzFHQyxXQUFZO1FBQ1osOEpBQThKO1FBQzlKQyxjQUFjO1FBQ2QscUtBQXFLO1FBQ3JLQyxrQkFBa0I7SUFDcEI7SUFDQUMsUUFBUTtRQUNOLHNOQUFzTjtRQUN0TkMsT0FBTztRQUNQLGtQQUFrUDtRQUNsUCw0RUFBNEU7UUFDNUVDLE1BQU05Qiw0RkFBNEIsQ0FBQyxVQUFVO0lBQy9DO0lBQ0ErQixNQUFNO1FBQ0osZ0tBQWdLO1FBQ2hLQyxVQUFVO1FBQ1Ysa1FBQWtRO1FBQ2xRQyxhQUFhO0lBQ2Y7QUFDRjtBQUVBLCtEQUFlaEMsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25maWcuanM/YzJiMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWVzIGZyb20gXCJkYWlzeXVpL3NyYy90aGVtaW5nL3RoZW1lcy5qc1wiO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIC8vIFJFUVVJUkVEXG4gIGFwcE5hbWU6IFwiQXV0b2ZyYXVkXCIsXG4gIC8vIFJFUVVJUkVEOiBhIHNob3J0IGRlc2NyaXB0aW9uIG9mIHlvdXIgYXBwIGZvciBTRU8gdGFncyAoY2FuIGJlIG92ZXJ3cml0dGVuKVxuICBhcHBEZXNjcmlwdGlvbjpcbiAgICBcIlRoZSBOZXh0SlMgYm9pbGVycGxhdGUgd2l0aCBhbGwgeW91IG5lZWQgdG8gYnVpbGQgeW91ciBTYWFTLCBBSSB0b29sLCBvciBhbnkgb3RoZXIgd2ViIGFwcC5cIixcbiAgLy8gUkVRVUlSRUQgKG5vIGh0dHBzOi8vLCBub3QgdHJpYWxpbmcgc2xhc2ggYXQgdGhlIGVuZCwganVzdCB0aGUgbmFrZWQgZG9tYWluKVxuICBkb21haW5OYW1lOiBcInNoaXBmYS5zdFwiLFxuICBjcmlzcDoge1xuICAgIC8vIENyaXNwIHdlYnNpdGUgSUQuIElGIFlPVSBET04nVCBVU0UgQ1JJU1A6IGp1c3QgcmVtb3ZlIHRoaXMgPT4gVGhlbiBhZGQgYSBzdXBwb3J0IGVtYWlsIGluIHRoaXMgY29uZmlnIGZpbGUgKG1haWxndW4uc3VwcG9ydEVtYWlsKSBvdGhlcndpc2UgY3VzdG9tZXIgc3VwcG9ydCB3b24ndCB3b3JrLlxuICAgIGlkOiBcIlwiLFxuICAgIC8vIEhpZGUgQ3Jpc3AgYnkgZGVmYXVsdCwgZXhjZXB0IG9uIHJvdXRlIFwiL1wiLiBDcmlzcCBpcyB0b2dnbGVkIHdpdGggPEJ1dHRvblN1cHBvcnQvPi4gSWYgeW91IHdhbnQgdG8gc2hvdyBDcmlzcCBvbiBldmVyeSByb3V0ZXMsIGp1c3QgcmVtb3ZlIHRoaXMgYmVsb3dcbiAgICBvbmx5U2hvd09uUm91dGVzOiBbXCIvXCJdLFxuICB9LFxuICBzdHJpcGU6IHtcbiAgICAvLyBDcmVhdGUgbXVsdGlwbGUgcGxhbnMgaW4geW91ciBTdHJpcGUgZGFzaGJvYXJkLCB0aGVuIGFkZCB0aGVtIGhlcmUuIFlvdSBjYW4gYWRkIGFzIG1hbnkgcGxhbnMgYXMgeW91IHdhbnQsIGp1c3QgbWFrZSBzdXJlIHRvIGFkZCB0aGUgcHJpY2VJZFxuICAgIHBsYW5zOiBbXG4gICAgICB7XG4gICAgICAgIC8vIFJFUVVJUkVEIOKAlCB3ZSB1c2UgdGhpcyB0byBmaW5kIHRoZSBwbGFuIGluIHRoZSB3ZWJob29rIChmb3IgaW5zdGFuY2UgaWYgeW91IHdhbnQgdG8gdXBkYXRlIHRoZSB1c2VyJ3MgY3JlZGl0cyBiYXNlZCBvbiB0aGUgcGxhbilcbiAgICAgICAgcHJpY2VJZDpcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiXG4gICAgICAgICAgICA/IFwicHJpY2VfMU5peXk1QXh5TnByRHA3aVpJcUV5RDJoXCJcbiAgICAgICAgICAgIDogXCJwcmljZV80NTZcIixcbiAgICAgICAgLy8gIFJFUVVJUkVEIC0gTmFtZSBvZiB0aGUgcGxhbiwgZGlzcGxheWVkIG9uIHRoZSBwcmljaW5nIHBhZ2VcbiAgICAgICAgbmFtZTogXCJTdGFydGVyXCIsXG4gICAgICAgIC8vIEEgZnJpZW5kbHkgZGVzY3JpcHRpb24gb2YgdGhlIHBsYW4sIGRpc3BsYXllZCBvbiB0aGUgcHJpY2luZyBwYWdlLiBUaXA6IGV4cGxhaW4gd2h5IHRoaXMgcGxhbiBhbmQgbm90IG90aGVyc1xuICAgICAgICBkZXNjcmlwdGlvbjogXCJQZXJmZWN0IGZvciBzbWFsbCBwcm9qZWN0c1wiLFxuICAgICAgICAvLyBUaGUgcHJpY2UgeW91IHdhbnQgdG8gZGlzcGxheSwgdGhlIG9uZSB1c2VyIHdpbGwgYmUgY2hhcmdlZCBvbiBTdHJpcGUuXG4gICAgICAgIHByaWNlOiA3OSxcbiAgICAgICAgLy8gSWYgeW91IGhhdmUgYW4gYW5jaG9yIHByaWNlIChpLmUuICQyOSkgdGhhdCB5b3Ugd2FudCB0byBkaXNwbGF5IGNyb3NzZWQgb3V0LCBwdXQgaXQgaGVyZS4gT3RoZXJ3aXNlLCBsZWF2ZSBpdCBlbXB0eVxuICAgICAgICBwcmljZUFuY2hvcjogOTksXG4gICAgICAgIGZlYXR1cmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJOZXh0SlMgYm9pbGVycGxhdGVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgbmFtZTogXCJVc2VyIG9hdXRoXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiRGF0YWJhc2VcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJFbWFpbHNcIiB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gVGhpcyBwbGFuIHdpbGwgbG9vayBkaWZmZXJlbnQgb24gdGhlIHByaWNpbmcgcGFnZSwgaXQgd2lsbCBiZSBoaWdobGlnaHRlZC4gWW91IGNhbiBvbmx5IGhhdmUgb25lIHBsYW4gd2l0aCBpc0ZlYXR1cmVkOiB0cnVlXG4gICAgICAgIGlzRmVhdHVyZWQ6IHRydWUsXG4gICAgICAgIHByaWNlSWQ6XG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIlxuICAgICAgICAgICAgPyBcInByaWNlXzFPNUt0Y0F4eU5wckRwN2lmdEtucnJwd1wiXG4gICAgICAgICAgICA6IFwicHJpY2VfNDU2XCIsXG4gICAgICAgIG5hbWU6IFwiQWR2YW5jZWRcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiWW91IG5lZWQgbW9yZSBwb3dlclwiLFxuICAgICAgICBwcmljZTogOTksXG4gICAgICAgIHByaWNlQW5jaG9yOiAxNDksXG4gICAgICAgIGZlYXR1cmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJOZXh0SlMgYm9pbGVycGxhdGVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgbmFtZTogXCJVc2VyIG9hdXRoXCIgfSxcbiAgICAgICAgICB7IG5hbWU6IFwiRGF0YWJhc2VcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCJFbWFpbHNcIiB9LFxuICAgICAgICAgIHsgbmFtZTogXCIxIHllYXIgb2YgdXBkYXRlc1wiIH0sXG4gICAgICAgICAgeyBuYW1lOiBcIjI0Lzcgc3VwcG9ydFwiIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIGF3czoge1xuICAgIC8vIElmIHlvdSB1c2UgQVdTIFMzL0Nsb3VkZnJvbnQsIHB1dCB2YWx1ZXMgaW4gaGVyZVxuICAgIGJ1Y2tldDogXCJidWNrZXQtbmFtZVwiLFxuICAgIGJ1Y2tldFVybDogYGh0dHBzOi8vYnVja2V0LW5hbWUuczMuYW1hem9uYXdzLmNvbS9gLFxuICAgIGNkbjogXCJodHRwczovL2Nkbi1pZC5jbG91ZGZyb250Lm5ldC9cIixcbiAgfSxcbiAgbWFpbGd1bjoge1xuICAgIC8vIHN1YmRvbWFpbiB0byB1c2Ugd2hlbiBzZW5kaW5nIGVtYWlscywgaWYgeW91IGRvbid0IGhhdmUgYSBzdWJkb21haW4sIGp1c3QgcmVtb3ZlIGl0LiBIaWdobHkgcmVjb21tZW5kZWQgdG8gaGF2ZSBvbmUgKGkuZS4gbWcueW91cmRvbWFpbi5jb20gb3IgbWFpbC55b3VyZG9tYWluLmNvbSlcbiAgICBzdWJkb21haW46IFwibWdcIixcbiAgICAvLyBSRVFVSVJFRCDigJQgRW1haWwgJ0Zyb20nIGZpZWxkIHRvIGJlIHVzZWQgd2hlbiBzZW5kaW5nIG1hZ2ljIGxvZ2luIGxpbmtzXG4gICAgZnJvbU5vUmVwbHk6IGBTaGlwRmFzdCA8bm9yZXBseUBtZy5zaGlwZmEuc3Q+YCxcbiAgICAvLyBSRVFVSVJFRCDigJQgRW1haWwgJ0Zyb20nIGZpZWxkIHRvIGJlIHVzZWQgd2hlbiBzZW5kaW5nIG90aGVyIGVtYWlscywgbGlrZSBhYmFuZG9uZWQgY2FydHMsIHVwZGF0ZXMgZXRjLi5cbiAgICBmcm9tQWRtaW46IGBNYXJjIGF0IFNoaXBGYXN0IDxtYXJjQG1nLnNoaXBmYS5zdD5gLFxuICAgIC8vIEVtYWlsIHNob3duIHRvIGN1c3RvbWVyIGlmIG5lZWQgc3VwcG9ydC4gTGVhdmUgZW1wdHkgaWYgbm90IG5lZWRlZCA9PiBpZiBlbXB0eSwgc2V0IHVwIENyaXNwIGFib3ZlLCBvdGhlcndpc2UgeW91IHdvbid0IGJlIGFibGUgdG8gb2ZmZXIgY3VzdG9tZXIgc3VwcG9ydC5cIlxuICAgIHN1cHBvcnRFbWFpbDogXCJtYXJjQG1nLnNoaXBmYS5zdFwiLFxuICAgIC8vIFdoZW4gc29tZW9uZSByZXBsaWVzIHRvIHN1cHBvcnRFbWFpbCBzZW50IGJ5IHRoZSBhcHAsIGZvcndhcmQgaXQgdG8gdGhlIGVtYWlsIGJlbG93IChvdGhlcndpc2UgaXQncyBsb3N0KS4gSWYgeW91IHNldCBzdXBwb3J0RW1haWwgdG8gZW1wdHksIHRoaXMgd2lsbCBiZSBpZ25vcmVkLlxuICAgIGZvcndhcmRSZXBsaWVzVG86IFwibWFyYy5sb3V2aW9uQGdtYWlsLmNvbVwiLFxuICB9LFxuICBjb2xvcnM6IHtcbiAgICAvLyBSRVFVSVJFRCDigJQgVGhlIERhaXN5VUkgdGhlbWUgdG8gdXNlIChhZGRlZCB0byB0aGUgbWFpbiBsYXlvdXQuanMpLiBMZWF2ZSBibGFuayBmb3IgZGVmYXVsdCAobGlnaHQgJiBkYXJrIG1vZGUpLiBJZiB5b3UgYW55IG90aGVyIHRoZW1lIHRoYW4gbGlnaHQvZGFyaywgeW91IG5lZWQgdG8gYWRkIGl0IGluIGNvbmZpZy50YWlsd2luZC5qcyBpbiBkYWlzeXVpLnRoZW1lcy5cbiAgICB0aGVtZTogXCJsaWdodFwiLFxuICAgIC8vIFJFUVVJUkVEIOKAlCBUaGlzIGNvbG9yIHdpbGwgYmUgcmVmbGVjdGVkIG9uIHRoZSB3aG9sZSBhcHAgb3V0c2lkZSBvZiB0aGUgZG9jdW1lbnQgKGxvYWRpbmcgYmFyLCBDaHJvbWUgdGFicywgZXRjLi4pLiBCeSBkZWZhdWx0IGl0IHRha2VzIHRoZSBwcmltYXJ5IGNvbG9yIGZyb20geW91ciBEYWlzeVVJIHRoZW1lIChtYWtlIHN1cmUgdG8gdXBkYXRlIHlvdXIgdGhlIHRoZW1lIG5hbWUgYWZ0ZXIgXCJkYXRhLXRoZW1lPVwiKVxuICAgIC8vIE9SIHlvdSBjYW4ganVzdCBkbyB0aGlzIHRvIHVzZSBhIGN1c3RvbSBjb2xvcjogbWFpbjogXCIjZjM3MDU1XCIuIEhFWCBvbmx5LlxuICAgIG1haW46IHRoZW1lc1tgW2RhdGEtdGhlbWU9bGlnaHRdYF1bXCJwcmltYXJ5XCJdLFxuICB9LFxuICBhdXRoOiB7XG4gICAgLy8gUkVRVUlSRUQg4oCUIHRoZSBwYXRoIHRvIGxvZyBpbiB1c2Vycy4gSXQncyB1c2UgdG8gcHJvdGVjdCBwcml2YXRlIHJvdXRlcyAobGlrZSAvZGFzaGJvYXJkKS4gSXQncyB1c2VkIGluIGFwaUNsaWVudCAoL2xpYnMvYXBpLmpzKSB1cG9uIDQwMSBlcnJvcnMgZnJvbSBvdXIgQVBJXG4gICAgbG9naW5Vcmw6IFwiL2FwaS9hdXRoL3NpZ25pblwiLFxuICAgIC8vIFJFUVVJUkVEIOKAlCB0aGUgcGF0aCB5b3Ugd2FudCB0byByZWRpcmVjdCB1c2VycyBhZnRlciBzdWNjZXNzZnVsbCBsb2dpbiAoaS5lLiAvZGFzaGJvYXJkLCAvcHJpdmF0ZSkuIFRoaXMgaXMgbm9ybWFsbHkgYSBwcml2YXRlIHBhZ2UgZm9yIHVzZXJzIHRvIG1hbmFnZSB0aGVpciBhY2NvdW50cy4gSXQncyB1c2VkIGluIGFwaUNsaWVudCAoL2xpYnMvYXBpLmpzKSB1cG9uIDQwMSBlcnJvcnMgZnJvbSBvdXIgQVBJICYgaW4gQnV0dG9uU2lnbmluLmpzXG4gICAgY2FsbGJhY2tVcmw6IFwiL2Rhc2hib2FyZFwiLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29uZmlnO1xuIl0sIm5hbWVzIjpbInRoZW1lcyIsImNvbmZpZyIsImFwcE5hbWUiLCJhcHBEZXNjcmlwdGlvbiIsImRvbWFpbk5hbWUiLCJjcmlzcCIsImlkIiwib25seVNob3dPblJvdXRlcyIsInN0cmlwZSIsInBsYW5zIiwicHJpY2VJZCIsInByb2Nlc3MiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsInByaWNlQW5jaG9yIiwiZmVhdHVyZXMiLCJpc0ZlYXR1cmVkIiwiYXdzIiwiYnVja2V0IiwiYnVja2V0VXJsIiwiY2RuIiwibWFpbGd1biIsInN1YmRvbWFpbiIsImZyb21Ob1JlcGx5IiwiZnJvbUFkbWluIiwic3VwcG9ydEVtYWlsIiwiZm9yd2FyZFJlcGxpZXNUbyIsImNvbG9ycyIsInRoZW1lIiwibWFpbiIsImF1dGgiLCJsb2dpblVybCIsImNhbGxiYWNrVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./config.js\n"));

/***/ })

});