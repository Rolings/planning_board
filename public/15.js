(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/UserEditComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/UserEditComponent.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "UserEditComponent",
  data: function data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      address: '',
      password: '',
      confirm_password: ''
    };
  },
  mounted: function mounted() {
    this.$store.dispatch('userSingle', {
      user_id: this.$router.currentRoute.params.user_id
    });
  },
  computed: {
    user: function user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    formReset: function formReset(e) {
      e.preventDefault();
      this.$router.push({
        path: '/admin/users'
      });
    },
    formSubmit: function formSubmit(e) {
      e.preventDefault();
      var data = {
        user_id: this.$router.currentRoute.params.user_id,
        form: {
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          email: this.user.email,
          phone: this.user.phone,
          address: this.user.address,
          password: this.user.password,
          confirm_password: this.user.confirm_password
        }
      };
      this.$store.dispatch('userEdit', {
        data: data
      });
      this.$router.push({
        path: '/admin/user'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/UserEditComponent.vue?vue&type=template&id=64680caf&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/UserEditComponent.vue?vue&type=template&id=64680caf&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "container user-form" }, [
      _c("form", { on: { submit: _vm.formSubmit, reset: _vm.formReset } }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.user.id,
              expression: "user.id"
            }
          ],
          attrs: { type: "hidden", name: "user_id" },
          domProps: { value: _vm.user.id },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.$set(_vm.user, "id", $event.target.value)
            }
          }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-4 pull-lg-8 text-xs-center" }, [
            _c("img", {
              staticClass: "m-x-auto img-fluid img-circle",
              attrs: { src: _vm.user.image, alt: "avatar" }
            }),
            _vm._v(" "),
            _c("h6", { staticClass: "m-t-2" }, [
              _vm._v("Upload a different photo")
            ]),
            _vm._v(" "),
            _vm._m(1)
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-8" }, [
            _c("h4", { staticClass: "m-y-2" }, [_vm._v("Edit Profile")]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                { staticClass: "col-lg-3 col-form-label form-control-label" },
                [_vm._v("First name")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.first_name,
                      expression: "user.first_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "first_name" },
                  domProps: { value: _vm.user.first_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "first_name", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                { staticClass: "col-lg-3 col-form-label form-control-label" },
                [_vm._v("Last name")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.last_name,
                      expression: "user.last_name"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "last_name" },
                  domProps: { value: _vm.user.last_name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "last_name", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                { staticClass: "col-lg-3 col-form-label form-control-label" },
                [_vm._v("Email")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.email,
                      expression: "user.email"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "email", name: "email" },
                  domProps: { value: _vm.user.email },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "email", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                { staticClass: "col-lg-3 col-form-label form-control-label" },
                [_vm._v("Phone")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.phone,
                      expression: "user.phone"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: { type: "text", name: "phone", placeholder: "Street" },
                  domProps: { value: _vm.user.phone },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "phone", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                { staticClass: "col-lg-3 col-form-label form-control-label" },
                [_vm._v("Address")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.user.address,
                      expression: "user.address"
                    }
                  ],
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "address",
                    placeholder: "Street"
                  },
                  domProps: { value: _vm.user.address },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.user, "address", $event.target.value)
                    }
                  }
                })
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                { staticClass: "col-lg-3 col-form-label form-control-label" },
                [_vm._v("Login")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: { type: "text", name: "login" },
                  domProps: { value: _vm.user.login }
                })
              ])
            ]),
            _vm._v(" "),
            _vm._m(2),
            _vm._v(" "),
            _c("div", { staticClass: "form-group row" }, [
              _c(
                "label",
                { staticClass: "col-lg-3 col-form-label form-control-label" },
                [_vm._v("Confirm password")]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-lg-9" }, [
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "password",
                    id: "confirm_password",
                    name: "confirm_password",
                    autocomplete: "off"
                  }
                }),
                _vm._v(" "),
                _c(
                  "small",
                  {
                    ref: "password_confirm_error",
                    staticClass:
                      "d-none form-text text-muted alert alert-danger"
                  },
                  [_vm._v("Passwords do not match.")]
                )
              ])
            ]),
            _vm._v(" "),
            _vm._m(3)
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h2", [
        _c("span", { staticClass: "badge badge-secondary" }, [_vm._v("User")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", { staticClass: "custom-file" }, [
      _c("input", {
        staticClass: "custom-file-input",
        attrs: { type: "file", id: "file" }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "custom-file-control" }, [
        _vm._v("Choose file")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c(
        "label",
        { staticClass: "col-lg-3 col-form-label form-control-label" },
        [_vm._v("Password")]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-9" }, [
        _c("input", {
          staticClass: "form-control",
          attrs: {
            type: "password",
            id: "password",
            name: "password",
            autocomplete: "off"
          }
        })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("label", {
        staticClass: "col-lg-3 col-form-label form-control-label"
      }),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-9" }, [
        _c(
          "button",
          { staticClass: "btn btn-secondary", attrs: { type: "reset" } },
          [_vm._v("Cancel")]
        ),
        _vm._v(" "),
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "submit" } },
          [_vm._v("Save Changes")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/UserEditComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/user/UserEditComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserEditComponent_vue_vue_type_template_id_64680caf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserEditComponent.vue?vue&type=template&id=64680caf&scoped=true& */ "./resources/js/components/user/UserEditComponent.vue?vue&type=template&id=64680caf&scoped=true&");
/* harmony import */ var _UserEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserEditComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/user/UserEditComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserEditComponent_vue_vue_type_template_id_64680caf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserEditComponent_vue_vue_type_template_id_64680caf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "64680caf",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/UserEditComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/UserEditComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/user/UserEditComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserEditComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/UserEditComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/UserEditComponent.vue?vue&type=template&id=64680caf&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/user/UserEditComponent.vue?vue&type=template&id=64680caf&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditComponent_vue_vue_type_template_id_64680caf_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserEditComponent.vue?vue&type=template&id=64680caf&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/UserEditComponent.vue?vue&type=template&id=64680caf&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditComponent_vue_vue_type_template_id_64680caf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserEditComponent_vue_vue_type_template_id_64680caf_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);