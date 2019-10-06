(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/setting/menu/MenuComponents.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/setting/menu/MenuComponents.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
var components = {
  'MenuList': function MenuList() {
    return Promise.all(/*! import() */[__webpack_require__.e(17), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, /*! ./MenuListComponent */ "./resources/js/components/setting/menu/MenuListComponent.vue"));
  },
  'MenuAdd': function MenuAdd() {
    return __webpack_require__.e(/*! import() */ 10).then(__webpack_require__.bind(null, /*! ./MenuAddComponent */ "./resources/js/components/setting/menu/MenuAddComponent.vue"));
  },
  'MenuEdit': function MenuEdit() {
    return __webpack_require__.e(/*! import() */ 12).then(__webpack_require__.bind(null, /*! ./MenuEditComponent */ "./resources/js/components/setting/menu/MenuEditComponent.vue"));
  }
};
var components_name_list = Object.keys(components);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Menu',
  component: components,
  data: function data() {
    return {
      componentsArray: components_name_list,
      contentComponent: components.MenuList,
      menuInformation: [],
      title: 'work'
    };
  },
  methods: {
    goBreadcrumb: function goBreadcrumb(event) {
      this.$emit('goBreadcrumb', {
        href: event.currentTarget.getAttribute('href')
      });
    },
    getInformationSelectMenu: function getInformationSelectMenu(menu_id) {
      var _this = this;

      var currentObj = this;
      window.axios.defaults.headers.common['Authorization'] = 'bearer ' + localStorage.getItem('access_token');
      this.axios.post(window.base + '/api/get-menu-information', {
        id: menu_id
      }).then(function (response) {
        console.log(response.data);
        _this.menuInformation = response.data;
        _this.contentComponent = components.MenuEdit;
      })["catch"](function (error) {
        currentObj.output = error;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/setting/menu/MenuComponents.vue?vue&type=template&id=96347f2a&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/setting/menu/MenuComponents.vue?vue&type=template&id=96347f2a&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c(_vm.contentComponent, {
        tag: "div",
        staticClass: "menu-list",
        on: { getInformationSelectMenu: _vm.getInformationSelectMenu }
      })
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("h2", [
        _c("span", { staticClass: "badge badge-secondary" }, [_vm._v("Menu")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/setting/menu/MenuComponents.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/setting/menu/MenuComponents.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuComponents_vue_vue_type_template_id_96347f2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuComponents.vue?vue&type=template&id=96347f2a&scoped=true& */ "./resources/js/components/setting/menu/MenuComponents.vue?vue&type=template&id=96347f2a&scoped=true&");
/* harmony import */ var _MenuComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuComponents.vue?vue&type=script&lang=js& */ "./resources/js/components/setting/menu/MenuComponents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MenuComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuComponents_vue_vue_type_template_id_96347f2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuComponents_vue_vue_type_template_id_96347f2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "96347f2a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/setting/menu/MenuComponents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/setting/menu/MenuComponents.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/setting/menu/MenuComponents.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuComponents.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/setting/menu/MenuComponents.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponents_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/setting/menu/MenuComponents.vue?vue&type=template&id=96347f2a&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/setting/menu/MenuComponents.vue?vue&type=template&id=96347f2a&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponents_vue_vue_type_template_id_96347f2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuComponents.vue?vue&type=template&id=96347f2a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/setting/menu/MenuComponents.vue?vue&type=template&id=96347f2a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponents_vue_vue_type_template_id_96347f2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuComponents_vue_vue_type_template_id_96347f2a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);