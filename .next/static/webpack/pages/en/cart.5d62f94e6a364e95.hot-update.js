"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/en/cart",{

/***/ "./components/Checkout.js":
/*!********************************!*\
  !*** ./components/Checkout.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Cart */ \"./components/Cart.js\");\n/*Checkout.js*/ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Checkout = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const cartItems = (0,_Cart__WEBPACK_IMPORTED_MODULE_5__.getCart)();\n        setCartItems(cartItems);\n    }, []);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const totalPrice = cartItems.reduce((total, item)=>total + item.price, 0);\n    const f5 = ()=>{\n        window.location.reload();\n    };\n    const toHome = ()=>{\n        (0,_Cart__WEBPACK_IMPORTED_MODULE_5__.removeAllFromCart)();\n        router.push(\"/\");\n    };\n    const [satoshis, setSatoshis] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Fetch the Bitcoin price from Coingecko API\n        fetch(\"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd\").then((response)=>response.json()).then((data)=>{\n            const bitcoinPrice = data.bitcoin.usd; // Get the Bitcoin price in USD from the API response\n            const satoshisValue = Math.floor(totalPrice / bitcoinPrice * 100000000); // Convert price to satoshis\n            setSatoshis(satoshisValue);\n        }).catch((error)=>{\n            console.log(\"Error fetching Bitcoin price:\", error);\n        });\n    }, [\n        totalPrice,\n        satoshis\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"popup\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"popup-content text-center justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Order #2305202121\"\n                            }, void 0, false, {\n                                fileName: \"/home/hax/Documents/bitbox/components/Checkout.js\",\n                                lineNumber: 49,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/hax/Documents/bitbox/components/Checkout.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: \"/qr.svg\",\n                                width: 100,\n                                height: 100,\n                                alt: \"QR Code\"\n                            }, void 0, false, {\n                                fileName: \"/home/hax/Documents/bitbox/components/Checkout.js\",\n                                lineNumber: 50,\n                                columnNumber: 36\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/hax/Documents/bitbox/components/Checkout.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                cartItems.length,\n                                \" item\",\n                                cartItems.length === 1 ? \"\" : \"s\",\n                                \" in box.\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hax/Documents/bitbox/components/Checkout.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"To proceed with your order, please make a payment of \",\n                                satoshis !== null ? satoshis : totalPrice,\n                                \" satoshis to the following Bitcoin Lightning address:\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hax/Documents/bitbox/components/Checkout.js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lnurl\",\n                            children: \"lnurl1dp68gurn8ghj7ampd3kx2ar0veekzar0wd5xjtnrdakj7tnhv4kxctttdehhwm30d3h82unvwqhkx6r0wpc8jerfwdnh2um5xccsl09evg\"\n                        }, void 0, false, {\n                            fileName: \"/home/hax/Documents/bitbox/components/Checkout.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: toHome,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"submitOrder rounded-md\",\n                                children: \"Submit Order\"\n                            }, void 0, false, {\n                                fileName: \"/home/hax/Documents/bitbox/components/Checkout.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/hax/Documents/bitbox/components/Checkout.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \"By submitting, you accept our \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/terms\",\n                                    className: \"underline\",\n                                    children: \"Terms of Service\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hax/Documents/bitbox/components/Checkout.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 43\n                                }, undefined),\n                                \" and \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/privacy\",\n                                    className: \"underline\",\n                                    children: \"Privacy Policy\"\n                                }, void 0, false, {\n                                    fileName: \"/home/hax/Documents/bitbox/components/Checkout.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 113\n                                }, undefined),\n                                \".\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/hax/Documents/bitbox/components/Checkout.js\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/hax/Documents/bitbox/components/Checkout.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: f5,\n                    className: \"x\",\n                    children: \"x\"\n                }, void 0, false, {\n                    fileName: \"/home/hax/Documents/bitbox/components/Checkout.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/hax/Documents/bitbox/components/Checkout.js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/hax/Documents/bitbox/components/Checkout.js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Checkout, \"Wno2fhLde7fPFWhxlRtMbOIeCz8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Checkout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Checkout);\nvar _c;\n$RefreshReg$(_c, \"Checkout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NoZWNrb3V0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsYUFBYTs7QUFDc0M7QUFDdEI7QUFDRTtBQUNTO0FBQ1k7QUFFcEQsTUFBTVEsV0FBVzs7SUFDZixNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxDQUFDSyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDLEVBQUU7SUFFN0NDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEsWUFBWUosOENBQU9BO1FBQ3pCSyxhQUFhRDtJQUNmLEdBQUcsRUFBRTtJQUVMLE1BQU0sQ0FBQ0UsT0FBT0MsU0FBUyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUVuQyxNQUFNYSxhQUFhSixVQUFVSyxNQUFNLENBQUMsQ0FBQ0MsT0FBT0MsT0FBU0QsUUFBUUMsS0FBS0MsS0FBSyxFQUFFO0lBRXpFLE1BQU1DLEtBQUs7UUFDVEMsT0FBT0MsUUFBUSxDQUFDQyxNQUFNO0lBQ3hCO0lBRUEsTUFBTUMsU0FBUztRQUNiaEIsd0RBQWlCQTtRQUNqQkUsT0FBT2UsSUFBSSxDQUFDO0lBQ2Q7SUFDQSxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR3pCLCtDQUFRQSxDQUFDO0lBRXpDQyxnREFBU0EsQ0FBQztRQUNSLDZDQUE2QztRQUM3Q3lCLE1BQU0sK0VBQ0hDLElBQUksQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxJQUFJLElBQ2hDRixJQUFJLENBQUMsQ0FBQ0c7WUFDTCxNQUFNQyxlQUFlRCxLQUFLRSxPQUFPLENBQUNDLEdBQUcsRUFBRSxxREFBcUQ7WUFDNUYsTUFBTUMsZ0JBQWdCQyxLQUFLQyxLQUFLLENBQUMsYUFBY0wsZUFBZ0IsWUFBWSw0QkFBNEI7WUFDdkdOLFlBQVlTO1FBQ2QsR0FDQ0csS0FBSyxDQUFDLENBQUNDO1lBQ05DLFFBQVFDLEdBQUcsQ0FBQyxpQ0FBaUNGO1FBQy9DO0lBQ0osR0FBRztRQUFDekI7UUFBWVc7S0FBUztJQUV6QixxQkFDRSw4REFBQ2lCO2tCQUNDLDRFQUFDQTtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQztzQ0FBTyw0RUFBQ0M7MENBQUs7Ozs7Ozs7Ozs7O3NDQUNkLDhEQUFDSDs0QkFBSUMsV0FBVTtzQ0FBVSw0RUFBQ3ZDLG1EQUFLQTtnQ0FBQzBDLEtBQUk7Z0NBQVVDLE9BQU87Z0NBQUtDLFFBQVE7Z0NBQUtDLEtBQUk7Ozs7Ozs7Ozs7O3NDQUMzRSw4REFBQ0M7O2dDQUFHeEMsVUFBVXlDLE1BQU07Z0NBQUM7Z0NBQU16QyxVQUFVeUMsTUFBTSxLQUFLLElBQUksS0FBTztnQ0FBSzs7Ozs7OztzQ0FDaEUsOERBQUNEOztnQ0FBRTtnQ0FBc0R6QixhQUFhLE9BQU9BLFdBQVdYO2dDQUFXOzs7Ozs7O3NDQUNuRyw4REFBQzRCOzRCQUFJQyxXQUFVO3NDQUFROzs7Ozs7c0NBQ3ZCLDhEQUFDUzs0QkFBS0MsVUFBVTlCO3NDQUNkLDRFQUFDK0I7Z0NBQU9DLE1BQUs7Z0NBQVNaLFdBQVU7MENBQXlCOzs7Ozs7Ozs7OztzQ0FJM0QsOERBQUNFOztnQ0FBSzs4Q0FDMEIsOERBQUMxQyxrREFBSUE7b0NBQUNxRCxNQUFLO29DQUFTYixXQUFVOzhDQUFZOzs7Ozs7Z0NBQXVCOzhDQUFLLDhEQUFDeEMsa0RBQUlBO29DQUFDcUQsTUFBSztvQ0FBV2IsV0FBVTs4Q0FBWTs7Ozs7O2dDQUFxQjs7Ozs7Ozs7Ozs7Ozs4QkFHekssOERBQUNXO29CQUFPRyxTQUFTdEM7b0JBQUl3QixXQUFVOzhCQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztBQUkzQztHQTNETW5DOztRQUNXSCxrREFBU0E7OztLQURwQkc7QUE2RE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DaGVja291dC5qcz8yYWRmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qQ2hlY2tvdXQuanMqL1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGdldENhcnQsIHJlbW92ZUFsbEZyb21DYXJ0IH0gZnJvbSAnLi9DYXJ0JztcclxuXHJcbmNvbnN0IENoZWNrb3V0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFtjYXJ0SXRlbXMsIHNldENhcnRJdGVtc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGNhcnRJdGVtcyA9IGdldENhcnQoKTtcclxuICAgIHNldENhcnRJdGVtcyhjYXJ0SXRlbXMpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIGNvbnN0IHRvdGFsUHJpY2UgPSBjYXJ0SXRlbXMucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4gdG90YWwgKyBpdGVtLnByaWNlLCAwKTtcclxuXHJcbiAgY29uc3QgZjUgPSAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgfTtcclxuICBcclxuICBjb25zdCB0b0hvbWUgPSAoKSA9PiB7XHJcbiAgICByZW1vdmVBbGxGcm9tQ2FydCgpO1xyXG4gICAgcm91dGVyLnB1c2goJy8nKTtcclxuICB9O1xyXG4gIGNvbnN0IFtzYXRvc2hpcywgc2V0U2F0b3NoaXNdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBGZXRjaCB0aGUgQml0Y29pbiBwcmljZSBmcm9tIENvaW5nZWNrbyBBUElcclxuICAgIGZldGNoKCdodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9zaW1wbGUvcHJpY2U/aWRzPWJpdGNvaW4mdnNfY3VycmVuY2llcz11c2QnKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBiaXRjb2luUHJpY2UgPSBkYXRhLmJpdGNvaW4udXNkOyAvLyBHZXQgdGhlIEJpdGNvaW4gcHJpY2UgaW4gVVNEIGZyb20gdGhlIEFQSSByZXNwb25zZVxyXG4gICAgICAgIGNvbnN0IHNhdG9zaGlzVmFsdWUgPSBNYXRoLmZsb29yKCh0b3RhbFByaWNlIC8gYml0Y29pblByaWNlKSAqIDEwMDAwMDAwMCk7IC8vIENvbnZlcnQgcHJpY2UgdG8gc2F0b3NoaXNcclxuICAgICAgICBzZXRTYXRvc2hpcyhzYXRvc2hpc1ZhbHVlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBmZXRjaGluZyBCaXRjb2luIHByaWNlOicsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW3RvdGFsUHJpY2UsIHNhdG9zaGlzXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvcHVwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3B1cC1jb250ZW50IHRleHQtY2VudGVyIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgPHN0cm9uZz48c3Bhbj5PcmRlciAjMjMwNTIwMjEyMTwvc3Bhbj48L3N0cm9uZz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvJz48SW1hZ2Ugc3JjPVwiL3FyLnN2Z1wiIHdpZHRoPXsxMDB9IGhlaWdodD17MTAwfSBhbHQ9XCJRUiBDb2RlXCIgLz48L2Rpdj5cclxuICAgICAgICAgIDxwPntjYXJ0SXRlbXMubGVuZ3RofSBpdGVte2NhcnRJdGVtcy5sZW5ndGggPT09IDEgPygnJykgOiAoJ3MnKX0gaW4gYm94LjwvcD5cclxuICAgICAgICAgIDxwPlRvIHByb2NlZWQgd2l0aCB5b3VyIG9yZGVyLCBwbGVhc2UgbWFrZSBhIHBheW1lbnQgb2Yge3NhdG9zaGlzICE9PSBudWxsID8gc2F0b3NoaXMgOiB0b3RhbFByaWNlfSBzYXRvc2hpcyB0byB0aGUgZm9sbG93aW5nIEJpdGNvaW4gTGlnaHRuaW5nIGFkZHJlc3M6PC9wPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsbnVybFwiPmxudXJsMWRwNjhndXJuOGdoajdhbXBkM2t4MmFyMHZlZWt6YXIwd2Q1eGp0bnJkYWtqN3RuaHY0a3hjdHR0ZGVoaHdtMzBkM2g4MnVudndxaGt4NnIwd3BjOGplcmZ3ZG5oMnVtNXhjY3NsMDlldmc8L2Rpdj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0b0hvbWV9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzdWJtaXRPcmRlciByb3VuZGVkLW1kXCI+XHJcbiAgICAgICAgICAgICAgU3VibWl0IE9yZGVyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIEJ5IHN1Ym1pdHRpbmcsIHlvdSBhY2NlcHQgb3VyIDxMaW5rIGhyZWY9XCIvdGVybXNcIiBjbGFzc05hbWU9J3VuZGVybGluZSc+VGVybXMgb2YgU2VydmljZTwvTGluaz4gYW5kIDxMaW5rIGhyZWY9XCIvcHJpdmFjeVwiIGNsYXNzTmFtZT0ndW5kZXJsaW5lJz5Qcml2YWN5IFBvbGljeTwvTGluaz4uXHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmNX0gY2xhc3NOYW1lPVwieFwiPng8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tvdXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiTGluayIsIkltYWdlIiwidXNlUm91dGVyIiwiZ2V0Q2FydCIsInJlbW92ZUFsbEZyb21DYXJ0IiwiQ2hlY2tvdXQiLCJyb3V0ZXIiLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJlbWFpbCIsInNldEVtYWlsIiwidG90YWxQcmljZSIsInJlZHVjZSIsInRvdGFsIiwiaXRlbSIsInByaWNlIiwiZjUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsInRvSG9tZSIsInB1c2giLCJzYXRvc2hpcyIsInNldFNhdG9zaGlzIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImJpdGNvaW5QcmljZSIsImJpdGNvaW4iLCJ1c2QiLCJzYXRvc2hpc1ZhbHVlIiwiTWF0aCIsImZsb29yIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzdHJvbmciLCJzcGFuIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJwIiwibGVuZ3RoIiwiZm9ybSIsIm9uU3VibWl0IiwiYnV0dG9uIiwidHlwZSIsImhyZWYiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Checkout.js\n"));

/***/ })

});