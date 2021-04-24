webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/HomeSections/PortfolioSection.jsx":
/*!******************************************************!*\
  !*** ./Components/HomeSections/PortfolioSection.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PortfolioSection; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ProjectsContainer_ProjectsHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectsContainer/ProjectsHolder */ \"./Components/HomeSections/ProjectsContainer/ProjectsHolder.jsx\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data.json */ \"./data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data.json */ \"./data.json\", 1);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ProjectsContainer_ProjectsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectsContainer/ProjectsList */ \"./Components/HomeSections/ProjectsContainer/ProjectsList.jsx\");\n\n\nvar _jsxFileName = \"/home/vikas/Vikas-Personal-Data/__PROJECTS__/REACT_JS/Project/react-next-portfolio-dev/Components/HomeSections/PortfolioSection.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nfunction PortfolioSection() {\n  _s();\n\n  var _this = this;\n\n  var projects = _data_json__WEBPACK_IMPORTED_MODULE_2__.projects;\n  var categories = [];\n  projects.filter(function (pro) {\n    if (!categories.includes(pro.category)) {\n      categories.push(pro.category);\n    }\n  });\n  var defaultCategory = 'all';\n  /** State for current active status wise projects listing. */\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(defaultCategory),\n      selectedCategory = _useState[0],\n      setSelectedCategory = _useState[1];\n\n  categories.unshift(defaultCategory);\n  /** creating filter for category wise projects listing... */\n\n  var filteredProjects = function filteredProjects() {\n    var filteredData = projects;\n\n    if (selectedCategory !== categories[0]) {\n      filteredData = filteredData.filter(function (pro) {\n        return selectedCategory == pro.category;\n      });\n    }\n\n    filteredData = filteredData.sort(function (a, b) {\n      return a.id - b.id;\n    });\n    console.log('as', selectedCategory, filteredData);\n    return filteredData.slice(0, 6);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n      id: \"portfolio\",\n      \"data-id\": \"62519493\",\n      \"data-element_type\": \"section\",\n      className: \"elementor-section elementor-top-section elementor-element elementor-element-62519493 op-section elementor-section-boxed elementor-section-height-default elementor-section-height-default\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"elementor-container elementor-column-gap-default\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"elementor-row\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5d65034a\",\n            \"data-id\": \"5d65034a\",\n            \"data-element_type\": \"column\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"elementor-column-wrap elementor-element-populated\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"elementor-widget-wrap\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"elementor-element elementor-element-3a789d58 elementor-widget elementor-widget-coco-portfolio\",\n                  \"data-id\": \"3a789d58\",\n                  \"data-element_type\": \"widget\",\n                  \"data-widget_type\": \"coco-portfolio.default\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                    className: \"elementor-widget-container\",\n                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                      id: \"portfolio-wrapper\",\n                      className: \"relative\",\n                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"category-filter\",\n                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                          className: \"category-filter-icon\",\n                          children: \" \"\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 46,\n                          columnNumber: 53\n                        }, this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 45,\n                        columnNumber: 49\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"category-filter-list button-group filters-button-group\",\n                        children: categories.map(function (category, key) {\n                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                            onClick: function onClick() {\n                              return setSelectedCategory(category);\n                            },\n                            className: \"button\",\n                            \"data-filter\": \"*\",\n                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n                              children: category.toUpperCase()\n                            }, void 0, false, {\n                              fileName: _jsxFileName,\n                              lineNumber: 53,\n                              columnNumber: 61\n                            }, _this)\n                          }, category, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 51,\n                            columnNumber: 57\n                          }, _this);\n                        })\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 49,\n                        columnNumber: 49\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"elementor-element elementor-element-8225bc2 elementor-widget elementor-widget-heading\",\n                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                          className: \"elementor-widget-container\",\n                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n                            className: \"elementor-heading-title elementor-size-default\",\n                            children: \"My Projects\"\n                          }, void 0, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 59,\n                            columnNumber: 57\n                          }, this)\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 58,\n                          columnNumber: 53\n                        }, this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 57,\n                        columnNumber: 49\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"text-center \",\n                        children: categories.map(function (category) {\n                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                            onClick: function onClick() {\n                              return setSelectedCategory(category);\n                            },\n                            className: \"button categories_button mx-5 text-1xl bg-light-dark text-light-orange font-bold py-2 px-5 rounded-xl \" + selectedCategory == category.ca,\n                            children: category.toUpperCase()\n                          }, category, false, {\n                            fileName: _jsxFileName,\n                            lineNumber: 66,\n                            columnNumber: 57\n                          }, _this);\n                        })\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 64,\n                        columnNumber: 49\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"pt-20\",\n                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ProjectsContainer_ProjectsList__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                          projects: filteredProjects()\n                        }, void 0, false, {\n                          fileName: _jsxFileName,\n                          lineNumber: 73,\n                          columnNumber: 53\n                        }, this)\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 72,\n                        columnNumber: 49\n                      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                        className: \"clear\",\n                        children: \" \"\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 75,\n                        columnNumber: 49\n                      }, this)]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 44,\n                      columnNumber: 45\n                    }, this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 43,\n                    columnNumber: 41\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 40,\n                  columnNumber: 37\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 39,\n                columnNumber: 33\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 29\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 25\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 21\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 17\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 9\n  }, this);\n}\n\n_s(PortfolioSection, \"qeyjsikfcmXzrgERXiub8Ahnkgk=\");\n\n_c = PortfolioSection;\n\nvar _c;\n\n$RefreshReg$(_c, \"PortfolioSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvUG9ydGZvbGlvU2VjdGlvbi5qc3g/MmE4OSJdLCJuYW1lcyI6WyJQb3J0Zm9saW9TZWN0aW9uIiwicHJvamVjdHMiLCJkYXRhIiwiY2F0ZWdvcmllcyIsImZpbHRlciIsInBybyIsImluY2x1ZGVzIiwiY2F0ZWdvcnkiLCJwdXNoIiwiZGVmYXVsdENhdGVnb3J5IiwidXNlU3RhdGUiLCJzZWxlY3RlZENhdGVnb3J5Iiwic2V0U2VsZWN0ZWRDYXRlZ29yeSIsInVuc2hpZnQiLCJmaWx0ZXJlZFByb2plY3RzIiwiZmlsdGVyZWREYXRhIiwic29ydCIsImEiLCJiIiwiaWQiLCJjb25zb2xlIiwibG9nIiwic2xpY2UiLCJtYXAiLCJrZXkiLCJ0b1VwcGVyQ2FzZSIsImNhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLGdCQUFULEdBQTRCO0FBQUE7O0FBQUE7O0FBQ3ZDLE1BQU1DLFFBQVEsR0FBR0MsdUNBQUksQ0FBQ0QsUUFBdEI7QUFDQSxNQUFJRSxVQUFVLEdBQUcsRUFBakI7QUFDQUYsVUFBUSxDQUFDRyxNQUFULENBQWdCLFVBQUFDLEdBQUcsRUFBSTtBQUNuQixRQUFJLENBQUNGLFVBQVUsQ0FBQ0csUUFBWCxDQUFvQkQsR0FBRyxDQUFDRSxRQUF4QixDQUFMLEVBQXdDO0FBQ3BDSixnQkFBVSxDQUFDSyxJQUFYLENBQWdCSCxHQUFHLENBQUNFLFFBQXBCO0FBQ0g7QUFDSixHQUpEO0FBS0EsTUFBTUUsZUFBZSxHQUFHLEtBQXhCO0FBQ0E7O0FBVHVDLGtCQVVTQyxzREFBUSxDQUFDRCxlQUFELENBVmpCO0FBQUEsTUFVaENFLGdCQVZnQztBQUFBLE1BVWRDLG1CQVZjOztBQVd2Q1QsWUFBVSxDQUFDVSxPQUFYLENBQW1CSixlQUFuQjtBQUVBOztBQUNBLE1BQU1LLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUMzQixRQUFJQyxZQUFZLEdBQUdkLFFBQW5COztBQUNBLFFBQUlVLGdCQUFnQixLQUFLUixVQUFVLENBQUMsQ0FBRCxDQUFuQyxFQUF3QztBQUNwQ1ksa0JBQVksR0FBR0EsWUFBWSxDQUFDWCxNQUFiLENBQW9CLFVBQUFDLEdBQUc7QUFBQSxlQUFJTSxnQkFBZ0IsSUFBSU4sR0FBRyxDQUFDRSxRQUE1QjtBQUFBLE9BQXZCLENBQWY7QUFDSDs7QUFDRFEsZ0JBQVksR0FBR0EsWUFBWSxDQUFDQyxJQUFiLENBQWtCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtBQUFBLGFBQVVELENBQUMsQ0FBQ0UsRUFBRixHQUFPRCxDQUFDLENBQUNDLEVBQW5CO0FBQUEsS0FBbEIsQ0FBZjtBQUNBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxJQUFaLEVBQWtCVixnQkFBbEIsRUFBb0NJLFlBQXBDO0FBQ0EsV0FBT0EsWUFBWSxDQUFDTyxLQUFiLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLENBQVA7QUFDSCxHQVJEOztBQVNBLHNCQUNJO0FBQUEsMkJBQ0k7QUFBUyxRQUFFLEVBQUMsV0FBWjtBQUF3QixpQkFBUSxVQUFoQztBQUEyQywyQkFBa0IsU0FBN0Q7QUFDSSxlQUFTLEVBQUMsMkxBRGQ7QUFBQSw2QkFHSTtBQUFLLGlCQUFTLEVBQUMsa0RBQWY7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGlDQUNJO0FBQUsscUJBQVMsRUFBQyxzR0FBZjtBQUNJLHVCQUFRLFVBRFo7QUFDdUIsaUNBQWtCLFFBRHpDO0FBQUEsbUNBRUk7QUFBSyx1QkFBUyxFQUFDLG1EQUFmO0FBQUEscUNBQ0k7QUFBSyx5QkFBUyxFQUFDLHVCQUFmO0FBQUEsdUNBQ0k7QUFBSywyQkFBUyxFQUFDLCtGQUFmO0FBQ0ksNkJBQVEsVUFEWjtBQUN1Qix1Q0FBa0IsUUFEekM7QUFFSSxzQ0FBaUIsd0JBRnJCO0FBQUEseUNBR0k7QUFBSyw2QkFBUyxFQUFDLDRCQUFmO0FBQUEsMkNBQ0k7QUFBSyx3QkFBRSxFQUFDLG1CQUFSO0FBQTRCLCtCQUFTLEVBQUMsVUFBdEM7QUFBQSw4Q0FDSTtBQUFLLGlDQUFTLEVBQUMsaUJBQWY7QUFBQSwrQ0FDSTtBQUFLLG1DQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURKLGVBS0k7QUFBSyxpQ0FBUyxFQUFDLHdEQUFmO0FBQUEsa0NBQ0tuQixVQUFVLENBQUNvQixHQUFYLENBQWUsVUFBQ2hCLFFBQUQsRUFBV2lCLEdBQVg7QUFBQSw4Q0FDWjtBQUFLLG1DQUFPLEVBQUU7QUFBQSxxQ0FBTVosbUJBQW1CLENBQUNMLFFBQUQsQ0FBekI7QUFBQSw2QkFBZDtBQUNJLHFDQUFTLEVBQUMsUUFEZDtBQUN1QiwyQ0FBWSxHQURuQztBQUFBLG1EQUVJO0FBQUEsd0NBQUlBLFFBQVEsQ0FBQ2tCLFdBQVQ7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkosNkJBQXdEbEIsUUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FEWTtBQUFBLHlCQUFmO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFMSixlQWFJO0FBQUssaUNBQVMsRUFBQyx1RkFBZjtBQUFBLCtDQUNJO0FBQUssbUNBQVMsRUFBQyw0QkFBZjtBQUFBLGlEQUNJO0FBQUkscUNBQVMsRUFBQyxnREFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQWJKLGVBb0JJO0FBQUssaUNBQVMsRUFBQyxjQUFmO0FBQUEsa0NBQ0tKLFVBQVUsQ0FBQ29CLEdBQVgsQ0FBZSxVQUFBaEIsUUFBUTtBQUFBLDhDQUNwQjtBQUFNLG1DQUFPLEVBQUU7QUFBQSxxQ0FBTUssbUJBQW1CLENBQUNMLFFBQUQsQ0FBekI7QUFBQSw2QkFBZjtBQUNBLHFDQUFTLEVBQUUsMkdBQTJHSSxnQkFBM0csSUFBK0hKLFFBQVEsQ0FBQ21CLEVBRG5KO0FBQUEsc0NBRUtuQixRQUFRLENBQUNrQixXQUFUO0FBRkwsNkJBQXlEbEIsUUFBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FEb0I7QUFBQSx5QkFBdkI7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQXBCSixlQTRCSTtBQUFLLGlDQUFTLEVBQUMsT0FBZjtBQUFBLCtDQUNJLHFFQUFDLHVFQUFEO0FBQWMsa0NBQVEsRUFBRU8sZ0JBQWdCO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQTVCSixlQStCSTtBQUFLLGlDQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkEvQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwREg7O0dBakZ1QmQsZ0I7O0tBQUFBLGdCIiwiZmlsZSI6Ii4vQ29tcG9uZW50cy9Ib21lU2VjdGlvbnMvUG9ydGZvbGlvU2VjdGlvbi5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdHNIb2xkZXIgZnJvbSBcIi4vUHJvamVjdHNDb250YWluZXIvUHJvamVjdHNIb2xkZXJcIjtcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uL2RhdGEuanNvbidcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvamVjdHNMaXN0IGZyb20gXCIuL1Byb2plY3RzQ29udGFpbmVyL1Byb2plY3RzTGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3J0Zm9saW9TZWN0aW9uKCkge1xuICAgIGNvbnN0IHByb2plY3RzID0gZGF0YS5wcm9qZWN0cztcbiAgICBsZXQgY2F0ZWdvcmllcyA9IFtdXG4gICAgcHJvamVjdHMuZmlsdGVyKHBybyA9PiB7XG4gICAgICAgIGlmICghY2F0ZWdvcmllcy5pbmNsdWRlcyhwcm8uY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICBjYXRlZ29yaWVzLnB1c2gocHJvLmNhdGVnb3J5KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGRlZmF1bHRDYXRlZ29yeSA9ICdhbGwnO1xuICAgIC8qKiBTdGF0ZSBmb3IgY3VycmVudCBhY3RpdmUgc3RhdHVzIHdpc2UgcHJvamVjdHMgbGlzdGluZy4gKi9cbiAgICBjb25zdCBbc2VsZWN0ZWRDYXRlZ29yeSwgc2V0U2VsZWN0ZWRDYXRlZ29yeV0gPSB1c2VTdGF0ZShkZWZhdWx0Q2F0ZWdvcnkpXG4gICAgY2F0ZWdvcmllcy51bnNoaWZ0KGRlZmF1bHRDYXRlZ29yeSlcblxuICAgIC8qKiBjcmVhdGluZyBmaWx0ZXIgZm9yIGNhdGVnb3J5IHdpc2UgcHJvamVjdHMgbGlzdGluZy4uLiAqL1xuICAgIGNvbnN0IGZpbHRlcmVkUHJvamVjdHMgPSAoKSA9PiB7XG4gICAgICAgIHZhciBmaWx0ZXJlZERhdGEgPSBwcm9qZWN0cztcbiAgICAgICAgaWYgKHNlbGVjdGVkQ2F0ZWdvcnkgIT09IGNhdGVnb3JpZXNbMF0pIHtcbiAgICAgICAgICAgIGZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkRGF0YS5maWx0ZXIocHJvID0+IHNlbGVjdGVkQ2F0ZWdvcnkgPT0gcHJvLmNhdGVnb3J5KVxuICAgICAgICB9XG4gICAgICAgIGZpbHRlcmVkRGF0YSA9IGZpbHRlcmVkRGF0YS5zb3J0KChhLCBiKSA9PiBhLmlkIC0gYi5pZCk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhcycsIHNlbGVjdGVkQ2F0ZWdvcnksIGZpbHRlcmVkRGF0YSk7XG4gICAgICAgIHJldHVybiBmaWx0ZXJlZERhdGEuc2xpY2UoMCwgNilcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwicG9ydGZvbGlvXCIgZGF0YS1pZD1cIjYyNTE5NDkzXCIgZGF0YS1lbGVtZW50X3R5cGU9XCJzZWN0aW9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJlbGVtZW50b3Itc2VjdGlvbiBlbGVtZW50b3ItdG9wLXNlY3Rpb24gZWxlbWVudG9yLWVsZW1lbnQgZWxlbWVudG9yLWVsZW1lbnQtNjI1MTk0OTMgb3Atc2VjdGlvbiBlbGVtZW50b3Itc2VjdGlvbi1ib3hlZCBlbGVtZW50b3Itc2VjdGlvbi1oZWlnaHQtZGVmYXVsdCBlbGVtZW50b3Itc2VjdGlvbi1oZWlnaHQtZGVmYXVsdFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3ItY29udGFpbmVyIGVsZW1lbnRvci1jb2x1bW4tZ2FwLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3Itcm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci1jb2x1bW4gZWxlbWVudG9yLWNvbC0xMDAgZWxlbWVudG9yLXRvcC1jb2x1bW4gZWxlbWVudG9yLWVsZW1lbnQgZWxlbWVudG9yLWVsZW1lbnQtNWQ2NTAzNGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaWQ9XCI1ZDY1MDM0YVwiIGRhdGEtZWxlbWVudF90eXBlPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3ItY29sdW1uLXdyYXAgZWxlbWVudG9yLWVsZW1lbnQtcG9wdWxhdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLXdpZGdldC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVsZW1lbnRvci1lbGVtZW50IGVsZW1lbnRvci1lbGVtZW50LTNhNzg5ZDU4IGVsZW1lbnRvci13aWRnZXQgZWxlbWVudG9yLXdpZGdldC1jb2NvLXBvcnRmb2xpb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1pZD1cIjNhNzg5ZDU4XCIgZGF0YS1lbGVtZW50X3R5cGU9XCJ3aWRnZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd2lkZ2V0X3R5cGU9XCJjb2NvLXBvcnRmb2xpby5kZWZhdWx0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbGVtZW50b3Itd2lkZ2V0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9ydGZvbGlvLXdyYXBwZXJcIiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1maWx0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5LWZpbHRlci1pY29uXCI+IDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2F0ZWdvcnktZmlsdGVyLWxpc3QgYnV0dG9uLWdyb3VwIGZpbHRlcnMtYnV0dG9uLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChjYXRlZ29yeSwga2V5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gc2V0U2VsZWN0ZWRDYXRlZ29yeShjYXRlZ29yeSl9IGtleT17Y2F0ZWdvcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIiBkYXRhLWZpbHRlcj1cIipcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPntjYXRlZ29yeS50b1VwcGVyQ2FzZSgpfTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLWVsZW1lbnQgZWxlbWVudG9yLWVsZW1lbnQtODIyNWJjMiBlbGVtZW50b3Itd2lkZ2V0IGVsZW1lbnRvci13aWRnZXQtaGVhZGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWxlbWVudG9yLXdpZGdldC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImVsZW1lbnRvci1oZWFkaW5nLXRpdGxlIGVsZW1lbnRvci1zaXplLWRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE15IFByb2plY3RzPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkIFwiPntzZWxlY3RlZENhdGVnb3J5LnRvVXBwZXJDYXNlKCl9PC9kaXY+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRTZWxlY3RlZENhdGVnb3J5KGNhdGVnb3J5KX0ga2V5PXtjYXRlZ29yeX0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJidXR0b24gY2F0ZWdvcmllc19idXR0b24gbXgtNSB0ZXh0LTF4bCBiZy1saWdodC1kYXJrIHRleHQtbGlnaHQtb3JhbmdlIGZvbnQtYm9sZCBweS0yIHB4LTUgcm91bmRlZC14bCBcIiArIHNlbGVjdGVkQ2F0ZWdvcnkgPT0gY2F0ZWdvcnkuY2EgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeS50b1VwcGVyQ2FzZSgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdHNMaXN0IHByb2plY3RzPXtmaWx0ZXJlZFByb2plY3RzKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIj4gPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2RpdiA+XG4gICAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/HomeSections/PortfolioSection.jsx\n");

/***/ })

})