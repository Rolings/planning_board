(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SidebarMenuComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SidebarMenuComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/vue-fontawesome */ "./node_modules/@fortawesome/vue-fontawesome/index.es.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SidebarMenuComponent',
  components: {
    FontAwesomeIcon: _fortawesome_vue_fontawesome__WEBPACK_IMPORTED_MODULE_0__["FontAwesomeIcon"]
  },
  data: function data() {
    return {
      index: 0
    };
  },
  mounted: function mounted() {
    this.$store.dispatch('getMenu');
  },
  computed: {
    menu: function menu() {
      return this.$store.getters.menu;
    }
  },
  methods: {
    goBreadcrumb: function goBreadcrumb(event) {
      this.$emit('goBreadcrumb', {
        href: event.currentTarget.getAttribute('href')
      });
    },
    onToggleCollapse: function onToggleCollapse(collapsed) {
      this.$emit('onToggleCollapse', {
        collapsed: collapsed
      });
    },
    onItemClick: function onItemClick(event, item) {
      this.$emit('onItemClick', {
        event: event,
        item: item
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SidebarMenuComponent.vue?vue&type=template&id=7063ac4d&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/SidebarMenuComponent.vue?vue&type=template&id=7063ac4d&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "sidebar-block" }, [
    _c("nav", { staticClass: "navbar navbar-expand-lg navbar-dark bg-dark" }, [
      _c("a", { staticClass: "navbar-brand", attrs: { href: "#" } }, [
        _vm._v(_vm._s(_vm.index))
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "collapse navbar-collapse",
          attrs: { id: "navbarSupportedContent" }
        },
        [
          _c(
            "ul",
            { staticClass: "navbar-nav mr-auto" },
            [
              _vm._l(_vm.menu, function(single, index) {
                return !single.child
                  ? _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "nav-link",
                            attrs: { to: single.href },
                            nativeOn: {
                              click: function($event) {
                                return _vm.goBreadcrumb($event)
                              }
                            }
                          },
                          [
                            _vm._v(_vm._s(single.title)),
                            _c("span", { staticClass: "sr-only" }, [
                              _vm._v("(current)")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  : _vm._e()
              }),
              _vm._v(" "),
              _c("li", { staticClass: "dropdown-divider" }),
              _vm._v(" "),
              _vm._l(_vm.menu, function(single, index) {
                return single.child
                  ? _c("li", { staticClass: "nav-item dropdown" }, [
                      single.child
                        ? _c(
                            "a",
                            {
                              staticClass: "nav-link dropdown-toggle",
                              attrs: {
                                id: "navbarDropdown-" + single.id,
                                role: "button",
                                "data-toggle": "dropdown",
                                "aria-haspopup": "true",
                                "aria-expanded": "false"
                              }
                            },
                            [_vm._v(_vm._s(single.title))]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      single.child
                        ? _c(
                            "ul",
                            {
                              staticClass: "dropdown-menu",
                              attrs: {
                                "aria-labelledby": "navbarDropdown-" + single.id
                              }
                            },
                            [
                              _vm._l(single.child, function(
                                child_element,
                                index
                              ) {
                                return !child_element.child
                                  ? _c(
                                      "li",
                                      { staticClass: "nav-item" },
                                      [
                                        _c(
                                          "router-link",
                                          {
                                            staticClass: "nav-link child-link",
                                            attrs: { to: child_element.href },
                                            nativeOn: {
                                              click: function($event) {
                                                return _vm.goBreadcrumb($event)
                                              }
                                            }
                                          },
                                          [_vm._v(_vm._s(child_element.title))]
                                        )
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              }),
                              _vm._v(" "),
                              _vm._l(single.child, function(
                                child_element,
                                index
                              ) {
                                return child_element.child
                                  ? _c(
                                      "li",
                                      { staticClass: "nav-item dropdown" },
                                      [
                                        single.child
                                          ? _c(
                                              "a",
                                              {
                                                staticClass:
                                                  "nav-link dropdown-toggle",
                                                attrs: {
                                                  id:
                                                    "navbarDropdown-" +
                                                    single.id,
                                                  role: "button",
                                                  "data-toggle": "dropdown",
                                                  "aria-haspopup": "true",
                                                  "aria-expanded": "false"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  _vm._s(child_element.title)
                                                )
                                              ]
                                            )
                                          : _vm._e(),
                                        _vm._v(" "),
                                        child_element.child
                                          ? _c(
                                              "ul",
                                              {
                                                staticClass: "dropdown-menu",
                                                attrs: {
                                                  "aria-labelledby":
                                                    "navbarDropdown-" +
                                                    child_element.id
                                                }
                                              },
                                              _vm._l(
                                                child_element.child,
                                                function(
                                                  child_element_n,
                                                  index
                                                ) {
                                                  return child_element.child
                                                    ? _c(
                                                        "li",
                                                        {
                                                          staticClass:
                                                            "nav-item"
                                                        },
                                                        [
                                                          _c(
                                                            "router-link",
                                                            {
                                                              staticClass:
                                                                "nav-link child-link",
                                                              attrs: {
                                                                to:
                                                                  child_element_n.href
                                                              },
                                                              nativeOn: {
                                                                click: function(
                                                                  $event
                                                                ) {
                                                                  return _vm.goBreadcrumb(
                                                                    $event
                                                                  )
                                                                }
                                                              }
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  child_element_n.title
                                                                )
                                                              )
                                                            ]
                                                          )
                                                        ],
                                                        1
                                                      )
                                                    : _vm._e()
                                                }
                                              ),
                                              0
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  : _vm._e()
                              })
                            ],
                            2
                          )
                        : _vm._e()
                    ])
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _vm._m(1)
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "navbar-toggler",
        attrs: {
          type: "button",
          "data-toggle": "collapse",
          "data-target": "#navbarSupportedContent",
          "aria-controls": "navbarSupportedContent",
          "aria-expanded": "false",
          "aria-label": "Toggle navigation"
        }
      },
      [_c("span", { staticClass: "navbar-toggler-icon" })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("form", { staticClass: "form-inline my-2 my-lg-0" }, [
      _c("input", {
        staticClass: "form-control mr-sm-2",
        attrs: { type: "search", placeholder: "Search", "aria-label": "Search" }
      }),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-outline-success my-2 my-sm-0",
          attrs: { type: "submit" }
        },
        [_vm._v("Search")]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/SidebarMenuComponent.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/SidebarMenuComponent.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SidebarMenuComponent_vue_vue_type_template_id_7063ac4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SidebarMenuComponent.vue?vue&type=template&id=7063ac4d&scoped=true& */ "./resources/js/components/SidebarMenuComponent.vue?vue&type=template&id=7063ac4d&scoped=true&");
/* harmony import */ var _SidebarMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SidebarMenuComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/SidebarMenuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SidebarMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SidebarMenuComponent_vue_vue_type_template_id_7063ac4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SidebarMenuComponent_vue_vue_type_template_id_7063ac4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7063ac4d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/SidebarMenuComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/SidebarMenuComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/SidebarMenuComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarMenuComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SidebarMenuComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenuComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/SidebarMenuComponent.vue?vue&type=template&id=7063ac4d&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/SidebarMenuComponent.vue?vue&type=template&id=7063ac4d&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenuComponent_vue_vue_type_template_id_7063ac4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./SidebarMenuComponent.vue?vue&type=template&id=7063ac4d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/SidebarMenuComponent.vue?vue&type=template&id=7063ac4d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenuComponent_vue_vue_type_template_id_7063ac4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SidebarMenuComponent_vue_vue_type_template_id_7063ac4d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);