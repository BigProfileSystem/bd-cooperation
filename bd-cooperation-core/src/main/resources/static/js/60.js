(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/page-header.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/page-header.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {},\n  props: {\n    title: {\n      type: String,\n      default: ''\n    },\n    items: {\n      type: Array,\n      default: function _default() {\n        return [];\n      }\n    }\n  },\n  methods: {\n    back: function back() {\n      history.back();\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/components/page-header.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/router/views/ui/rangeslider.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/router/views/ui/rangeslider.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ \"./node_modules/core-js/modules/es.symbol.js\");\n/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ \"./node_modules/core-js/modules/es.symbol.description.js\");\n/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);\n!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue-slide-bar'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _layouts_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layouts/main */ \"./src/router/layouts/main.vue\");\n/* harmony import */ var _components_page_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/page-header */ \"./src/components/page-header.vue\");\n/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app.config */ \"./src/app.config.json\");\nvar _app_config__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! @/app.config */ \"./src/app.config.json\", 1);\n\n\n\n\n\n\n/**\r\n * Range-slider component\r\n */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  page: {\n    title: \"Range Slider\",\n    meta: [{\n      name: \"description\",\n      content: _app_config__WEBPACK_IMPORTED_MODULE_5__.description\n    }]\n  },\n  components: {\n    VueSlideBar: !(function webpackMissingModule() { var e = new Error(\"Cannot find module 'vue-slide-bar'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),\n    Layout: _layouts_main__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    PageHeader: _components_page_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  },\n  data: function data() {\n    return {\n      title: \"Range Slider\",\n      items: [{\n        text: \"UI Elements\",\n        href: \"/\"\n      }, {\n        text: \"Range Slider\",\n        active: true\n      }],\n      simpleValue: 10,\n      sliderCustomzie: 300,\n      sliderWithLabel: {\n        value: 45,\n        data: [15, 30, 45, 60, 75, 90, 120],\n        range: [{\n          label: \"15 mins\"\n        }, {\n          label: \"30 mins\",\n          isHide: true\n        }, {\n          label: \"45 mins\"\n        }, {\n          label: \"1 hr\",\n          isHide: true\n        }, {\n          label: \"1 hr 15 mins\"\n        }, {\n          label: \"1 hr 30 mins\",\n          isHide: true\n        }, {\n          label: \"2 hrs\"\n        }],\n        rangeValue: {}\n      },\n      customData: {\n        value: 3,\n        data: [1, 2, 3, 4, 5, 6, 7],\n        range: [{\n          label: \"Sunday\"\n        }, {\n          label: \"Monday\"\n        }, {\n          label: \"Tuesday\"\n        }, {\n          label: \"Wednesday\"\n        }, {\n          label: \"Thursday\"\n        }, {\n          label: \"Friday\"\n        }, {\n          label: \"Saturday\"\n        }]\n      },\n      loader: null,\n      loadingValue: 0,\n      customStyle: 800,\n      lineHeight: 10\n    };\n  },\n  methods: {\n    /**\r\n     * Range and label slider set range\r\n     */\n    callbackRange: function callbackRange(val) {\n      this.sliderWithLabel.rangeValue = val;\n    },\n\n    /**\r\n     * Loading slider\r\n     */\n    startLoad: function startLoad() {\n      var _this = this;\n\n      this.loader = setInterval(function () {\n        _this.loadingValue++;\n\n        if (_this.loadingValue === 100) {\n          clearInterval(_this.loader);\n        }\n      }, 100);\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/router/views/ui/rangeslider.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"da1db418-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/page-header.vue?vue&type=template&id=96d6f7aa&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"da1db418-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/page-header.vue?vue&type=template&id=96d6f7aa& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", { staticClass: \"row\" }, [\n    _c(\"div\", { staticClass: \"col-12\" }, [\n      _c(\n        \"div\",\n        {\n          staticClass:\n            \"page-title-box d-flex align-items-center justify-content-between\"\n        },\n        [\n          _c(\"h4\", { staticClass: \"mb-0 font-size-18\" }, [\n            _vm._v(_vm._s(_vm.title) + \" \")\n          ]),\n          _c(\n            \"div\",\n            { staticClass: \"page-title-right\" },\n            [\n              _c(\"b-breadcrumb\", {\n                staticClass: \"m-0\",\n                attrs: { items: _vm.items }\n              })\n            ],\n            1\n          )\n        ]\n      )\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/page-header.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22da1db418-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"da1db418-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/router/views/ui/rangeslider.vue?vue&type=template&id=39cb03e1&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"da1db418-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/router/views/ui/rangeslider.vue?vue&type=template&id=39cb03e1& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"Layout\",\n    [\n      _c(\"PageHeader\", { attrs: { title: _vm.title, items: _vm.items } }),\n      _c(\"div\", { staticClass: \"row\" }, [\n        _c(\"div\", { staticClass: \"col-12\" }, [\n          _c(\"div\", { staticClass: \"card\" }, [\n            _c(\"div\", { staticClass: \"card-body\" }, [\n              _c(\"h4\", { staticClass: \"card-title\" }, [_vm._v(\"Range slider\")]),\n              _c(\"p\", { staticClass: \"card-title-desc\" }, [\n                _vm._v(\n                  \"Cool, comfortable, responsive and easily customizable range slider\"\n                )\n              ]),\n              _c(\"div\", { staticClass: \"row\" }, [\n                _c(\"div\", { staticClass: \"col-md-6\" }, [\n                  _c(\"div\", { staticClass: \"p-3\" }, [\n                    _c(\"h5\", { staticClass: \"font-size-14 mb-3 mt-0\" }, [\n                      _vm._v(\"Default\")\n                    ]),\n                    _c(\n                      \"div\",\n                      { staticClass: \"px-3\" },\n                      [\n                        _c(\"vue-slide-bar\", {\n                          model: {\n                            value: _vm.simpleValue,\n                            callback: function($$v) {\n                              _vm.simpleValue = $$v\n                            },\n                            expression: \"simpleValue\"\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ])\n                ]),\n                _c(\"div\", { staticClass: \"col-md-6\" }, [\n                  _c(\"div\", { staticClass: \"p-3\" }, [\n                    _c(\"h5\", { staticClass: \"font-size-14 mb-3 mt-0\" }, [\n                      _vm._v(\"Min-Max\")\n                    ]),\n                    _c(\n                      \"div\",\n                      { staticClass: \"px-3\" },\n                      [\n                        _c(\"vue-slide-bar\", {\n                          attrs: { min: 100, max: 500 },\n                          model: {\n                            value: _vm.sliderCustomzie,\n                            callback: function($$v) {\n                              _vm.sliderCustomzie = $$v\n                            },\n                            expression: \"sliderCustomzie\"\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ])\n                ])\n              ]),\n              _c(\"div\", { staticClass: \"row\" }, [\n                _c(\"div\", { staticClass: \"col-md-6\" }, [\n                  _c(\"div\", { staticClass: \"p-3\" }, [\n                    _c(\"h5\", { staticClass: \"font-size-14 mb-3 mt-0\" }, [\n                      _vm._v(\"Range and Label\")\n                    ]),\n                    _c(\n                      \"div\",\n                      { staticClass: \"px-3\" },\n                      [\n                        _c(\"vue-slide-bar\", {\n                          attrs: {\n                            data: _vm.sliderWithLabel.data,\n                            range: _vm.sliderWithLabel.range\n                          },\n                          on: { callbackRange: _vm.callbackRange },\n                          model: {\n                            value: _vm.sliderWithLabel.value,\n                            callback: function($$v) {\n                              _vm.$set(_vm.sliderWithLabel, \"value\", $$v)\n                            },\n                            expression: \"sliderWithLabel.value\"\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ])\n                ]),\n                _c(\"div\", { staticClass: \"col-md-6\" }, [\n                  _c(\"div\", { staticClass: \"p-3\" }, [\n                    _c(\"h5\", { staticClass: \"font-size-14 mb-3 mt-0\" }, [\n                      _vm._v(\"Loading\")\n                    ]),\n                    _c(\n                      \"div\",\n                      { staticClass: \"px-3\" },\n                      [\n                        _c(\"vue-slide-bar\", {\n                          attrs: { \"show-tooltip\": true, \"is-disabled\": true },\n                          model: {\n                            value: _vm.loadingValue,\n                            callback: function($$v) {\n                              _vm.loadingValue = $$v\n                            },\n                            expression: \"loadingValue\"\n                          }\n                        }),\n                        _c(\"br\"),\n                        _c(\n                          \"b-button\",\n                          {\n                            attrs: { size: \"sm\", variant: \"light\" },\n                            on: { click: _vm.startLoad }\n                          },\n                          [_vm._v(\"Start\")]\n                        )\n                      ],\n                      1\n                    )\n                  ])\n                ])\n              ]),\n              _c(\"div\", { staticClass: \"row\" }, [\n                _c(\"div\", { staticClass: \"col-md-6\" }, [\n                  _c(\"div\", { staticClass: \"p-3\" }, [\n                    _c(\"h5\", { staticClass: \"font-size-14 mb-3 mt-0\" }, [\n                      _vm._v(\"Custom Style\")\n                    ]),\n                    _c(\n                      \"div\",\n                      { staticClass: \"px-3\" },\n                      [\n                        _c(\"vue-slide-bar\", {\n                          attrs: {\n                            min: 100,\n                            max: 1000,\n                            \"line-height\": _vm.lineHeight\n                          },\n                          model: {\n                            value: _vm.customStyle,\n                            callback: function($$v) {\n                              _vm.customStyle = $$v\n                            },\n                            expression: \"customStyle\"\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ])\n                ]),\n                _c(\"div\", { staticClass: \"col-md-6\" }, [\n                  _c(\"div\", { staticClass: \"p-3\" }, [\n                    _c(\"h5\", { staticClass: \"font-size-14 mb-3 mt-0\" }, [\n                      _vm._v(\"Custom Data\")\n                    ]),\n                    _c(\n                      \"div\",\n                      { staticClass: \"px-3\" },\n                      [\n                        _c(\"vue-slide-bar\", {\n                          attrs: {\n                            data: _vm.customData.data,\n                            range: _vm.customData.range\n                          }\n                        })\n                      ],\n                      1\n                    )\n                  ])\n                ])\n              ])\n            ])\n          ])\n        ])\n      ])\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/router/views/ui/rangeslider.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%22da1db418-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/page-header.vue":
/*!****************************************!*\
  !*** ./src/components/page-header.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _page_header_vue_vue_type_template_id_96d6f7aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-header.vue?vue&type=template&id=96d6f7aa& */ \"./src/components/page-header.vue?vue&type=template&id=96d6f7aa&\");\n/* harmony import */ var _page_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-header.vue?vue&type=script&lang=js& */ \"./src/components/page-header.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _page_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _page_header_vue_vue_type_template_id_96d6f7aa___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _page_header_vue_vue_type_template_id_96d6f7aa___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/page-header.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/page-header.vue?");

/***/ }),

/***/ "./src/components/page-header.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./src/components/page-header.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./page-header.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/page-header.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/page-header.vue?");

/***/ }),

/***/ "./src/components/page-header.vue?vue&type=template&id=96d6f7aa&":
/*!***********************************************************************!*\
  !*** ./src/components/page-header.vue?vue&type=template&id=96d6f7aa& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_da1db418_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_header_vue_vue_type_template_id_96d6f7aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"da1db418-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./page-header.vue?vue&type=template&id=96d6f7aa& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"da1db418-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/page-header.vue?vue&type=template&id=96d6f7aa&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_da1db418_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_header_vue_vue_type_template_id_96d6f7aa___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_da1db418_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_page_header_vue_vue_type_template_id_96d6f7aa___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/page-header.vue?");

/***/ }),

/***/ "./src/router/views/ui/rangeslider.vue":
/*!*********************************************!*\
  !*** ./src/router/views/ui/rangeslider.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rangeslider_vue_vue_type_template_id_39cb03e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rangeslider.vue?vue&type=template&id=39cb03e1& */ \"./src/router/views/ui/rangeslider.vue?vue&type=template&id=39cb03e1&\");\n/* harmony import */ var _rangeslider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rangeslider.vue?vue&type=script&lang=js& */ \"./src/router/views/ui/rangeslider.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _rangeslider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _rangeslider_vue_vue_type_template_id_39cb03e1___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _rangeslider_vue_vue_type_template_id_39cb03e1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/router/views/ui/rangeslider.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/router/views/ui/rangeslider.vue?");

/***/ }),

/***/ "./src/router/views/ui/rangeslider.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/router/views/ui/rangeslider.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rangeslider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./rangeslider.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/router/views/ui/rangeslider.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rangeslider_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/router/views/ui/rangeslider.vue?");

/***/ }),

/***/ "./src/router/views/ui/rangeslider.vue?vue&type=template&id=39cb03e1&":
/*!****************************************************************************!*\
  !*** ./src/router/views/ui/rangeslider.vue?vue&type=template&id=39cb03e1& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_da1db418_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rangeslider_vue_vue_type_template_id_39cb03e1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"da1db418-vue-loader-template\"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./rangeslider.vue?vue&type=template&id=39cb03e1& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"da1db418-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/router/views/ui/rangeslider.vue?vue&type=template&id=39cb03e1&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_da1db418_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rangeslider_vue_vue_type_template_id_39cb03e1___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_da1db418_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_rangeslider_vue_vue_type_template_id_39cb03e1___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/router/views/ui/rangeslider.vue?");

/***/ })

}]);