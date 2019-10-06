(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/UserListComponent.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/UserListComponent.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "UserListComponent",
  display: 'Simple',
  order: 0,
  data: function data() {
    return {
      enabled: true,
      dragging: false
    };
  },
  mounted: function mounted() {
    this.$store.dispatch('getUserList');
  },
  computed: {
    userList: function userList() {
      return this.$store.getters.userList;
    }
  },
  methods: {
    getInformationSelectUser: function getInformationSelectUser(user_id) {
      this.$emit('getInformationSelectUser', {
        user_id: user_id
      });
    },
    deleteSelectUser: function deleteSelectUser(user_id) {
      this.$emit('deleteSelectUser', {
        user_id: user_id
      });
      console.log(user_id);
    },
    add: function add() {
      this.list.push({
        title: 'Juan ' + id,
        id: id++
      });
    },
    replace: function replace() {
      this.list = [{
        title: 'Edgard',
        id: id++
      }];
    },
    checkMove: function checkMove(e) {
      window.console.log('Future index: ' + e.draggedContext.futureIndex);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/UserListComponent.vue?vue&type=template&id=f90ecaca&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/UserListComponent.vue?vue&type=template&id=f90ecaca&scoped=true& ***!
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
    _c("section", [
      _c(
        "div",
        { staticClass: "user-list row" },
        _vm._l(_vm.userList, function(user, index) {
          return _c(
            "div",
            {
              key: user.first_name,
              staticClass: "card",
              staticStyle: { width: "18rem" }
            },
            [
              _c("img", {
                staticClass: "card-img-top",
                attrs: { src: user.image, alt: "" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v(_vm._s(user.first_name) + " " + _vm._s(user.last_name))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-primary stretched-link",
                    on: {
                      click: function($event) {
                        return _vm.getInformationSelectUser(user.id)
                      }
                    }
                  },
                  [_vm._v("Edit")]
                )
              ])
            ]
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "menu-control" }, [
      _c(
        "button",
        { staticClass: "mdl-button mdl-js-button mdl-button--fab" },
        [_c("i", { staticClass: "material-icons" }, [_vm._v("add")])]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "mdl-button mdl-js-button mdl-button--fab" },
        [_c("i", { staticClass: "material-icons" }, [_vm._v("delete_sweep")])]
      ),
      _vm._v(" "),
      _c(
        "button",
        { staticClass: "mdl-button mdl-js-button mdl-button--fab" },
        [_c("i", { staticClass: "material-icons" }, [_vm._v("filter_list")])]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/UserListComponent.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/user/UserListComponent.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserListComponent_vue_vue_type_template_id_f90ecaca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserListComponent.vue?vue&type=template&id=f90ecaca&scoped=true& */ "./resources/js/components/user/UserListComponent.vue?vue&type=template&id=f90ecaca&scoped=true&");
/* harmony import */ var _UserListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserListComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/user/UserListComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserListComponent_vue_vue_type_template_id_f90ecaca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserListComponent_vue_vue_type_template_id_f90ecaca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f90ecaca",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/UserListComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/UserListComponent.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/user/UserListComponent.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserListComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/UserListComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/UserListComponent.vue?vue&type=template&id=f90ecaca&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/user/UserListComponent.vue?vue&type=template&id=f90ecaca&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListComponent_vue_vue_type_template_id_f90ecaca_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserListComponent.vue?vue&type=template&id=f90ecaca&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/UserListComponent.vue?vue&type=template&id=f90ecaca&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListComponent_vue_vue_type_template_id_f90ecaca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserListComponent_vue_vue_type_template_id_f90ecaca_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);