webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/HomeSections/ProjectsContainer/ProjectsList.jsx":
/*!********************************************************************!*\
  !*** ./Components/HomeSections/ProjectsContainer/ProjectsList.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _home_vikas_Vikas_Personal_Data_PROJECTS_REACT_JS_Project_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ \"./node_modules/react-slick/lib/index.js\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/home/vikas/Vikas-Personal-Data/__PROJECTS__/REACT_JS/Project/react-next-portfolio-dev/Components/HomeSections/ProjectsContainer/ProjectsList.jsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_vikas_Vikas_Personal_Data_PROJECTS_REACT_JS_Project_react_next_portfolio_dev_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n // const SampleNextArrow = (props) => {\n//     const { className, style } = props;\n//     return (\n//         <button className={className + ' btn btn-left slick-arrow'} style={{ ...style }}><i className=\"fas fa-angle-left\"></i></button>\n//     );\n// }\n\nvar ProjectsList = function ProjectsList(_ref) {\n  var projects = _ref.projects;\n  var settings = {\n    className: \"center\",\n    centerMode: true,\n    infinite: true,\n    swipeToSlide: true,\n    autoplay: false,\n    centerPadding: \"60px\",\n    slidesToShow: 2,\n    speed: 500 // nextArrow: <SampleNextArrow />\n\n  };\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({}, settings), {}, {\n      children: projects.map(function (project, key) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n          id: key,\n          className: \"grid-item element-item p_one_third transition duration-500 ease-in-out transform  hover:-translate-y-1 hover:scale-105 hover:rounded-lg \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: \"max-w-sm overflow-hidden shadow-lg bg-light-dark text-white w-full mb-6 rounded-lg\",\n            children: [project.image_url && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n              className: \"w-full \",\n              src: \"https://raw.githubusercontent.com/vikas-ukani/photo-point/master/public/images/photo-point-image.jpg?token=ANXLAGUOKZYBVMGMD5QGJLTANBT3I\",\n              height: \"400\",\n              width: \"500\",\n              alt: project.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 33\n            }, _this), !project.image_url && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"img\", {\n              className: \"w-full min-h-full\",\n              src: \"https://picsum.photos/400/400\",\n              width: \"400\",\n              height: \"400\",\n              alt: \"Mountain\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"px-6 py-4\",\n              children: [project.url && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n                href: \"\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                    className: \"font-bold text-xl mb-2 text-center\",\n                    children: project.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 45,\n                    columnNumber: 45\n                  }, _this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 44,\n                  columnNumber: 41\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 37\n              }, _this), !project.url && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n                className: \"font-bold text-xl mb-2 text-center\",\n                children: project.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 37\n              }, _this), project.short_description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"p\", {\n                className: \"text-gray-700 text-base\",\n                children: project.short_description\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 56,\n                columnNumber: 41\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 29\n            }, _this), project.tags && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n              className: \"px-6 pt-4 pb-2\",\n              children: project.tags.map(function (tag, key) {\n                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n                  className: \"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2\",\n                  children: [\"#\", tag]\n                }, key, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 41\n                }, _this);\n              })\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 33\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 25\n          }, _this)\n        }, key, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, _this);\n      })\n    }), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 9\n  }, _this);\n};\n\n_c = ProjectsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectsList);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectsList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvUHJvamVjdHNDb250YWluZXIvUHJvamVjdHNMaXN0LmpzeD8zMDhlIl0sIm5hbWVzIjpbIlByb2plY3RzTGlzdCIsInByb2plY3RzIiwic2V0dGluZ3MiLCJjbGFzc05hbWUiLCJjZW50ZXJNb2RlIiwiaW5maW5pdGUiLCJzd2lwZVRvU2xpZGUiLCJhdXRvcGxheSIsImNlbnRlclBhZGRpbmciLCJzbGlkZXNUb1Nob3ciLCJzcGVlZCIsIm1hcCIsInByb2plY3QiLCJrZXkiLCJpbWFnZV91cmwiLCJuYW1lIiwidXJsIiwic2hvcnRfZGVzY3JpcHRpb24iLCJ0YWdzIiwidGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNuQyxNQUFNQyxRQUFRLEdBQUc7QUFDYkMsYUFBUyxFQUFFLFFBREU7QUFFYkMsY0FBVSxFQUFFLElBRkM7QUFHYkMsWUFBUSxFQUFFLElBSEc7QUFJYkMsZ0JBQVksRUFBRSxJQUpEO0FBS2JDLFlBQVEsRUFBRSxLQUxHO0FBT2JDLGlCQUFhLEVBQUUsTUFQRjtBQVFiQyxnQkFBWSxFQUFFLENBUkQ7QUFTYkMsU0FBSyxFQUFFLEdBVE0sQ0FVYjs7QUFWYSxHQUFqQjtBQWNBLHNCQUNJO0FBQUEsMkJBQ0kscUVBQUMsa0RBQUQsa0NBQVlSLFFBQVo7QUFBQSxnQkFDS0QsUUFBUSxDQUFDVSxHQUFULENBQWEsVUFBQ0MsT0FBRCxFQUFVQyxHQUFWO0FBQUEsNEJBQ1Y7QUFBZSxZQUFFLEVBQUVBLEdBQW5CO0FBQ0ksbUJBQVMsRUFBQywwSUFEZDtBQUFBLGlDQUdJO0FBQUsscUJBQVMsRUFBQyxvRkFBZjtBQUFBLHVCQUNLRCxPQUFPLENBQUNFLFNBQVIsaUJBQ0c7QUFBSyx1QkFBUyxFQUFDLFNBQWY7QUFBeUIsaUJBQUcsRUFBRSwwSUFBOUI7QUFBMEssb0JBQU0sRUFBQyxLQUFqTDtBQUF1TCxtQkFBSyxFQUFDLEtBQTdMO0FBQW1NLGlCQUFHLEVBQUVGLE9BQU8sQ0FBQ0c7QUFBaE47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGUixFQUlLLENBQUNILE9BQU8sQ0FBQ0UsU0FBVCxpQkFDRztBQUFLLHVCQUFTLEVBQUMsbUJBQWY7QUFBbUMsaUJBQUcsRUFBQywrQkFBdkM7QUFBdUUsbUJBQUssRUFBQyxLQUE3RTtBQUFtRixvQkFBTSxFQUFDLEtBQTFGO0FBQWdHLGlCQUFHLEVBQUM7QUFBcEc7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMUixlQU9JO0FBQUssdUJBQVMsRUFBQyxXQUFmO0FBQUEseUJBRUtGLE9BQU8sQ0FBQ0ksR0FBUixpQkFDRyxxRUFBQyxnREFBRDtBQUFNLG9CQUFJLEVBQUMsRUFBWDtBQUFBLHVDQUNJO0FBQUEseUNBQ0k7QUFBSyw2QkFBUyxFQUFDLG9DQUFmO0FBQUEsOEJBQXFESixPQUFPLENBQUNHO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFIUixFQVdLLENBQUNILE9BQU8sQ0FBQ0ksR0FBVCxpQkFDRztBQUFLLHlCQUFTLEVBQUMsb0NBQWY7QUFBQSwwQkFBcURKLE9BQU8sQ0FBQ0c7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFaUixFQWNLSCxPQUFPLENBQUNLLGlCQUFSLGlCQUVPO0FBQUcseUJBQVMsRUFBQyx5QkFBYjtBQUFBLDBCQUNLTCxPQUFPLENBQUNLO0FBRGI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFoQlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKLEVBNkJLTCxPQUFPLENBQUNNLElBQVIsaUJBQ0c7QUFBSyx1QkFBUyxFQUFDLGdCQUFmO0FBQUEsd0JBQ0tOLE9BQU8sQ0FBQ00sSUFBUixDQUFhUCxHQUFiLENBQWlCLFVBQUNRLEdBQUQsRUFBTU4sR0FBTjtBQUFBLG9DQUNkO0FBQWdCLDJCQUFTLEVBQUMsK0ZBQTFCO0FBQUEsa0NBQ01NLEdBRE47QUFBQSxtQkFBV04sR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURjO0FBQUEsZUFBakI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTlCUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISixXQUFVQSxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFU7QUFBQSxPQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXFESCxDQXBFRDs7S0FBTWIsWTtBQXNFU0EsMkVBQWYiLCJmaWxlIjoiLi9Db21wb25lbnRzL0hvbWVTZWN0aW9ucy9Qcm9qZWN0c0NvbnRhaW5lci9Qcm9qZWN0c0xpc3QuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbi8vIGNvbnN0IFNhbXBsZU5leHRBcnJvdyA9IChwcm9wcykgPT4ge1xuLy8gICAgIGNvbnN0IHsgY2xhc3NOYW1lLCBzdHlsZSB9ID0gcHJvcHM7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzTmFtZSArICcgYnRuIGJ0bi1sZWZ0IHNsaWNrLWFycm93J30gc3R5bGU9e3sgLi4uc3R5bGUgfX0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWFuZ2xlLWxlZnRcIj48L2k+PC9idXR0b24+XG4vLyAgICAgKTtcbi8vIH1cblxuXG5jb25zdCBQcm9qZWN0c0xpc3QgPSAoeyBwcm9qZWN0cyB9KSA9PiB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJjZW50ZXJcIixcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHN3aXBlVG9TbGlkZTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuXG4gICAgICAgIGNlbnRlclBhZGRpbmc6IFwiNjBweFwiLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgIHNwZWVkOiA1MDBcbiAgICAgICAgLy8gbmV4dEFycm93OiA8U2FtcGxlTmV4dEFycm93IC8+XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfT5cbiAgICAgICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBrZXkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2tleX0gaWQ9e2tleX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyaWQtaXRlbSBlbGVtZW50LWl0ZW0gcF9vbmVfdGhpcmQgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgdHJhbnNmb3JtICBob3ZlcjotdHJhbnNsYXRlLXktMSBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6cm91bmRlZC1sZyBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LXNtIG92ZXJmbG93LWhpZGRlbiBzaGFkb3ctbGcgYmctbGlnaHQtZGFyayB0ZXh0LXdoaXRlIHctZnVsbCBtYi02IHJvdW5kZWQtbGdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5pbWFnZV91cmwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctZnVsbCBcIiBzcmM9e1wiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3Zpa2FzLXVrYW5pL3Bob3RvLXBvaW50L21hc3Rlci9wdWJsaWMvaW1hZ2VzL3Bob3RvLXBvaW50LWltYWdlLmpwZz90b2tlbj1BTlhMQUdVT0taWUJWTUdNRDVRR0pMVEFOQlQzSVwifSBoZWlnaHQ9XCI0MDBcIiB3aWR0aD1cIjUwMFwiIGFsdD17cHJvamVjdC5uYW1lfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFwcm9qZWN0LmltYWdlX3VybCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy1mdWxsIG1pbi1oLWZ1bGxcIiBzcmM9XCJodHRwczovL3BpY3N1bS5waG90b3MvNDAwLzQwMFwiIHdpZHRoPVwiNDAwXCIgaGVpZ2h0PVwiNDAwXCIgYWx0PVwiTW91bnRhaW5cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02IHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIElmIHVybCBmb3VuZCB0aGVuICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC51cmwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC14bCBtYi0yIHRleHQtY2VudGVyXCI+e3Byb2plY3QubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIElmIHVybCBub3QgZm91bmQgdGhlbiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFwcm9qZWN0LnVybCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LXhsIG1iLTIgdGV4dC1jZW50ZXJcIj57cHJvamVjdC5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5zaG9ydF9kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgdGV4dC1iYXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnNob3J0X2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0LnRhZ3MgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTYgcHQtNCBwYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC50YWdzLm1hcCgodGFnLCBrZXkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2tleX0gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIGJnLWdyYXktMjAwIHJvdW5kZWQtZnVsbCBweC0zIHB5LTEgdGV4dC1zbSBmb250LXNlbWlib2xkIHRleHQtZ3JheS03MDAgbXItMiBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICN7dGFnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU2xpZGVyPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzTGlzdDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/HomeSections/ProjectsContainer/ProjectsList.jsx\n");

/***/ })

})