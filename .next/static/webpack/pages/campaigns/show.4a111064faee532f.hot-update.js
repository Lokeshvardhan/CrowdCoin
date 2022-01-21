"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/show",{

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_Lokesh_Documents_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_Lokesh_Documents_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lokesh_Documents_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _etherium_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../etherium/campaign */ \"./etherium/campaign.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar CampaignShow = function(props) {\n    var renderCards = function() {\n        var balance = props.balance, manager = props.manager, minimumContribution = props.minimumContribution, approversCount = props.approversCount, requestsCount = props.requestsCount;\n        var items = [\n            {\n                header: manager,\n                meta: 'This is the address manager',\n                description: \"The manager created this campaign and can create requests to withdraw money\"\n            }\n        ];\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n            children: \"Campaign Show \"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Lokesh\\\\Documents\\\\Blockchain\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n            lineNumber: 24,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Lokesh\\\\Documents\\\\Blockchain\\\\kickstart\\\\pages\\\\campaigns\\\\show.js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, _this));\n};\n_c = CampaignShow;\nCampaignShow.getInitialProps = (function() {\n    var _ref = _asyncToGenerator(C_Users_Lokesh_Documents_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(props) {\n        var campaign, summary;\n        return C_Users_Lokesh_Documents_Blockchain_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    campaign = (0,_etherium_campaign__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(props.query.address);\n                    _ctx.next = 3;\n                    return campaign.methods.getSummary().call();\n                case 3:\n                    summary = _ctx.sent;\n                    console.log(summary);\n                    return _ctx.abrupt(\"return\", {\n                        minimumContribution: summary[0],\n                        balance: summary[1],\n                        requestsCount: summary[2],\n                        approversCount: summary[3],\n                        manager: summary[4]\n                    });\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function(props) {\n        return _ref.apply(this, arguments);\n    };\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (CampaignShow);\nvar _c;\n$RefreshReg$(_c, \"CampaignShow\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvc2hvdy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBeUI7QUFDbUI7QUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUM5QyxHQUFLLENBQUNHLFlBQVksR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSSxDQUFDO0lBRTVCLEdBQUssQ0FBQ0MsV0FBVyxHQUFHLFFBQ3ZCLEdBRDJCLENBQUM7UUFDckIsR0FBSyxDQUNEQyxPQUFPLEdBS1BGLEtBQUssQ0FMTEUsT0FBTyxFQUNQQyxPQUFPLEdBSVBILEtBQUssQ0FKTEcsT0FBTyxFQUNQQyxtQkFBbUIsR0FHbkJKLEtBQUssQ0FITEksbUJBQW1CLEVBQ25CQyxjQUFjLEdBRWRMLEtBQUssQ0FGTEssY0FBYyxFQUNkQyxhQUFhLEdBQ2JOLEtBQUssQ0FETE0sYUFBYTtRQUVqQixHQUFLLENBQUNDLEtBQUssR0FBRSxDQUFDO1lBQ1YsQ0FBQztnQkFDR0MsTUFBTSxFQUFDTCxPQUFPO2dCQUNkTSxJQUFJLEVBQUMsQ0FBNkI7Z0JBQ2xDQyxXQUFXLEVBQUMsQ0FBNkU7WUFDN0YsQ0FBQztRQUNMLENBQUM7SUFDTCxDQUFDO0lBQ0QsTUFBTSw2RUFDRGIsMERBQU07OEZBQ0ZjLENBQUU7c0JBQUMsQ0FBYzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQztLQXZCS1osWUFBWTtBQXlCbEJBLFlBQVksQ0FBQ2EsZUFBZTswTEFBRyxRQUFRLFNBQUZaLEtBQUssRUFBRyxDQUFDO1lBRXBDYSxRQUFRLEVBQ1JDLE9BQU87Ozs7b0JBRFBELFFBQVEsR0FBSWYsOERBQVEsQ0FBQ0UsS0FBSyxDQUFDZSxLQUFLLENBQUNDLE9BQU87OzJCQUN4QkgsUUFBUSxDQUFDSSxPQUFPLENBQUNDLFVBQVUsR0FBR0MsSUFBSTs7b0JBQWxETCxPQUFPO29CQUNaTSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1AsT0FBTztpREFDYixDQUFDO3dCQUNKVixtQkFBbUIsRUFBRVUsT0FBTyxDQUFDLENBQUM7d0JBQzlCWixPQUFPLEVBQUVZLE9BQU8sQ0FBQyxDQUFDO3dCQUNsQlIsYUFBYSxFQUFFUSxPQUFPLENBQUMsQ0FBQzt3QkFDeEJULGNBQWMsRUFBRVMsT0FBTyxDQUFDLENBQUM7d0JBQ3pCWCxPQUFPLEVBQUVXLE9BQU8sQ0FBQyxDQUFDO29CQUN0QixDQUFDOzs7Ozs7SUFDTCxDQUFDO29CQVpvQ2QsS0FBSzs7OztBQWExQywrREFBZUQsWUFBWSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9zaG93LmpzP2IwZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IENhbXBhaWduIGZyb20gJy4uLy4uL2V0aGVyaXVtL2NhbXBhaWduJztcclxuY29uc3QgQ2FtcGFpZ25TaG93ID0gKHByb3BzKSA9PntcclxuXHJcbiAgICBjb25zdCByZW5kZXJDYXJkcyA9ICgpPT57XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBiYWxhbmNlLFxyXG4gICAgICAgICAgICBtYW5hZ2VyLFxyXG4gICAgICAgICAgICBtaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgICAgICAgICBhcHByb3ZlcnNDb3VudCxcclxuICAgICAgICAgICAgcmVxdWVzdHNDb3VudFxyXG4gICAgICAgIH0gPSBwcm9wcztcclxuICAgICAgICBjb25zdCBpdGVtcyA9W1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6bWFuYWdlcixcclxuICAgICAgICAgICAgICAgIG1ldGE6J1RoaXMgaXMgdGhlIGFkZHJlc3MgbWFuYWdlcicsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcIlRoZSBtYW5hZ2VyIGNyZWF0ZWQgdGhpcyBjYW1wYWlnbiBhbmQgY2FuIGNyZWF0ZSByZXF1ZXN0cyB0byB3aXRoZHJhdyBtb25leVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGgzPkNhbXBhaWduIFNob3cgPC9oMz5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5DYW1wYWlnblNob3cuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMocHJvcHMpPT57XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuICAgIGNvbnN0IGNhbXBhaWduICA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG4gICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcclxuICAgICBjb25zb2xlLmxvZyhzdW1tYXJ5KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVswXSxcclxuICAgICAgICBiYWxhbmNlOiBzdW1tYXJ5WzFdLFxyXG4gICAgICAgIHJlcXVlc3RzQ291bnQ6IHN1bW1hcnlbMl0sXHJcbiAgICAgICAgYXBwcm92ZXJzQ291bnQ6IHN1bW1hcnlbM10sXHJcbiAgICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XVxyXG4gICAgfTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93OyJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkNhbXBhaWduIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJyZW5kZXJDYXJkcyIsImJhbGFuY2UiLCJtYW5hZ2VyIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImFwcHJvdmVyc0NvdW50IiwicmVxdWVzdHNDb3VudCIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwiaDMiLCJnZXRJbml0aWFsUHJvcHMiLCJjYW1wYWlnbiIsInN1bW1hcnkiLCJxdWVyeSIsImFkZHJlc3MiLCJtZXRob2RzIiwiZ2V0U3VtbWFyeSIsImNhbGwiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/show.js\n");

/***/ })

});