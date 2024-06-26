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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/merge */ \"lodash/merge\");\n/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"@rainbow-me/rainbowkit\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__]);\n_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n// import { infuraProvider } from \"ethers.providers\"\nconst API_KEY = process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL;\nconst infuraProvider = new ethers.providers.InfuraProvider(\"sepolia\", API_KEY);\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.configureChains)([\n    wagmi__WEBPACK_IMPORTED_MODULE_4__.chain.sepolia\n], [\n    infuraProvider, \n]);\nconst { connectors  } = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.getDefaultWallets)({\n    appName: \"Custom Dex\",\n    chains\n});\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_4__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nconst myTheme = lodash_merge__WEBPACK_IMPORTED_MODULE_2___default()((0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.midnightTheme)(), {\n    colors: {\n        accentColor: \"#18181b\",\n        accentColorForeground: \"#fff\"\n    }\n});\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_4__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_3__.RainbowKitProvider, {\n            chains: chains,\n            theme: myTheme,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/bones/vs-code/cross-chain-dapp/pages/_app.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/bones/vs-code/cross-chain-dapp/pages/_app.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/bones/vs-code/cross-chain-dapp/pages/_app.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUErQjtBQUVFO0FBQ1U7QUFPWDtBQUUwQztBQUMxRSxvREFBb0Q7QUFDcEQsTUFBTVMsT0FBTyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsMkJBQTJCO0FBQ3ZELE1BQU1DLGNBQWMsR0FBRyxJQUFJQyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsY0FBYyxDQUN4RCxTQUFTLEVBQ1RQLE9BQU8sQ0FDUjtBQUdELE1BQU0sRUFBRVEsTUFBTSxHQUFFQyxRQUFRLEdBQUUsR0FBR1osc0RBQWUsQ0FDMUM7SUFBQ0QsZ0RBQWE7Q0FBQyxFQUNmO0lBQ0VRLGNBQWM7Q0FDZixDQUNGO0FBRUQsTUFBTSxFQUFFTyxVQUFVLEdBQUUsR0FBR25CLHlFQUFpQixDQUFDO0lBQ3ZDb0IsT0FBTyxFQUFFLFlBQVk7SUFDckJKLE1BQU07Q0FDUCxDQUFDO0FBRUYsTUFBTUssV0FBVyxHQUFHZixtREFBWSxDQUFDO0lBQy9CZ0IsV0FBVyxFQUFFLElBQUk7SUFDakJILFVBQVU7SUFDVkYsUUFBUTtDQUNULENBQUM7QUFFRixNQUFNTSxPQUFPLEdBQUd4QixtREFBSyxDQUFDSSxxRUFBYSxFQUFFLEVBQUU7SUFDckNxQixNQUFNLEVBQUU7UUFDTkMsV0FBVyxFQUFFLFNBQVM7UUFDdEJDLHFCQUFxQixFQUFFLE1BQU07S0FDOUI7Q0FDRixDQUFDO0FBRUYsU0FBU0MsS0FBSyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFFLEVBQUU7SUFDdkMscUJBQ0UsOERBQUN0Qiw4Q0FBVztRQUFDdUIsTUFBTSxFQUFFVCxXQUFXO2tCQUM5Qiw0RUFBQ3BCLHNFQUFrQjtZQUFDZSxNQUFNLEVBQUVBLE1BQU07WUFBRWUsS0FBSyxFQUFFUixPQUFPO3NCQUNoRCw0RUFBQ0ssU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7OztvQkFBSTs7Ozs7Z0JBQ1Q7Ozs7O1lBQ1QsQ0FDZDtDQUNIO0FBQ0QsaUVBQWVGLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VuaXN3YXAtdG9rZW4tbWFya2V0cGxhY2UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmltcG9ydCBtZXJnZSBmcm9tIFwibG9kYXNoL21lcmdlXCI7XG5pbXBvcnQgXCJAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3NcIjtcblxuaW1wb3J0IHtcbiAgZ2V0RGVmYXVsdFdhbGxldHMsXG4gIFJhaW5ib3dLaXRQcm92aWRlcixcbiAgZGFya1RoZW1lLFxuICBtaWRuaWdodFRoZW1lLFxufSBmcm9tIFwiQHJhaW5ib3ctbWUvcmFpbmJvd2tpdFwiO1xuXG5pbXBvcnQgeyBjaGFpbiwgY29uZmlndXJlQ2hhaW5zLCBjcmVhdGVDbGllbnQsIFdhZ21pQ29uZmlnIH0gZnJvbSBcIndhZ21pXCI7XG4vLyBpbXBvcnQgeyBpbmZ1cmFQcm92aWRlciB9IGZyb20gXCJldGhlcnMucHJvdmlkZXJzXCJcbmNvbnN0IEFQSV9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TRVBPTElBX1JQQ19VUkw7XG5jb25zdCBpbmZ1cmFQcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLkluZnVyYVByb3ZpZGVyKFxuICBcInNlcG9saWFcIixcbiAgQVBJX0tFWSxcbik7XG5cblxuY29uc3QgeyBjaGFpbnMsIHByb3ZpZGVyIH0gPSBjb25maWd1cmVDaGFpbnMoXG4gIFtjaGFpbi5zZXBvbGlhXSxcbiAgW1xuICAgIGluZnVyYVByb3ZpZGVyLFxuICBdXG4pO1xuXG5jb25zdCB7IGNvbm5lY3RvcnMgfSA9IGdldERlZmF1bHRXYWxsZXRzKHtcbiAgYXBwTmFtZTogXCJDdXN0b20gRGV4XCIsXG4gIGNoYWlucyxcbn0pO1xuXG5jb25zdCB3YWdtaUNsaWVudCA9IGNyZWF0ZUNsaWVudCh7XG4gIGF1dG9Db25uZWN0OiB0cnVlLFxuICBjb25uZWN0b3JzLFxuICBwcm92aWRlcixcbn0pO1xuXG5jb25zdCBteVRoZW1lID0gbWVyZ2UobWlkbmlnaHRUaGVtZSgpLCB7XG4gIGNvbG9yczoge1xuICAgIGFjY2VudENvbG9yOiBcIiMxODE4MWJcIixcbiAgICBhY2NlbnRDb2xvckZvcmVncm91bmQ6IFwiI2ZmZlwiLFxuICB9LFxufSk7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxXYWdtaUNvbmZpZyBjbGllbnQ9e3dhZ21pQ2xpZW50fT5cbiAgICAgIDxSYWluYm93S2l0UHJvdmlkZXIgY2hhaW5zPXtjaGFpbnN9IHRoZW1lPXtteVRoZW1lfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9SYWluYm93S2l0UHJvdmlkZXI+XG4gICAgPC9XYWdtaUNvbmZpZz5cbiAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sIm5hbWVzIjpbIm1lcmdlIiwiZ2V0RGVmYXVsdFdhbGxldHMiLCJSYWluYm93S2l0UHJvdmlkZXIiLCJkYXJrVGhlbWUiLCJtaWRuaWdodFRoZW1lIiwiY2hhaW4iLCJjb25maWd1cmVDaGFpbnMiLCJjcmVhdGVDbGllbnQiLCJXYWdtaUNvbmZpZyIsIkFQSV9LRVkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU0VQT0xJQV9SUENfVVJMIiwiaW5mdXJhUHJvdmlkZXIiLCJldGhlcnMiLCJwcm92aWRlcnMiLCJJbmZ1cmFQcm92aWRlciIsImNoYWlucyIsInByb3ZpZGVyIiwic2Vwb2xpYSIsImNvbm5lY3RvcnMiLCJhcHBOYW1lIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIm15VGhlbWUiLCJjb2xvcnMiLCJhY2NlbnRDb2xvciIsImFjY2VudENvbG9yRm9yZWdyb3VuZCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwidGhlbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/merge");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ }),

/***/ "@rainbow-me/rainbowkit":
/*!*****************************************!*\
  !*** external "@rainbow-me/rainbowkit" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@rainbow-me/rainbowkit");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();