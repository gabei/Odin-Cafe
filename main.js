/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/images/cafe3.jpg */ "./src/assets/images/cafe3.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/***************************/\n/********** Fonts **********/\n/***************************/\n/* colors\n________________________________*/\n/* transitions\n________________________________*/\n/* break points\n________________________________*/\n/* header background */\n/* link button \n________________________________*/\n/* float clear-fix \n________________________________*/\n/* ul decoration\n________________________________*/\n/* menu borders and hovers\n________________________________*/\n/* section spacing\n________________________________*/\n.header {\n  border-bottom: 1px solid rgba(250, 250, 250, 0.3);\n  display: flex;\n  justify-content: space-between;\n  align-self: flex-start;\n  width: 100%;\n  background: #0e4749;\n}\n.header > * {\n  display: inline-block;\n}\n.header__logo {\n  padding: 3rem 0 0 3rem;\n}\n.header__logo img {\n  max-width: 10rem;\n}\n.header__menu {\n  display: flex;\n  align-items: flex-end;\n  padding-right: 2rem;\n}\n.header__menu ul {\n  list-style-type: none;\n  margin-left: 2rem;\n}\n.header__menu li {\n  display: inline-block;\n  border-bottom: 1px solid transparent;\n  transition: 0.2s all;\n}\n.header__menu li:hover {\n  border-bottom: 1px solid rgba(250, 250, 250, 0.3);\n  border-color: #fafafa;\n}\n.header__menu li a {\n  text-decoration: none;\n  color: #fafafa;\n  padding: 1rem;\n}\n\n.footer {\n  border-top: 1px solid #2b2b2b;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 2rem;\n}\n.footer__right a {\n  margin-left: 1rem;\n}\n\n.Menu__header {\n  background: linear-gradient(to bottom right, rgba(0, 38, 38, 0.7), rgba(14, 71, 73, 0.1)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n}\n.Menu__header--text {\n  text-shadow: 1px 1px 2px rgba(43, 43, 43, 0.6);\n  color: #fafafa;\n  padding: 5rem 3rem;\n}\n.Menu__our-menu {\n  padding: 2rem 3rem;\n}\n.Menu__our-menu__section {\n  padding: 2rem 0;\n}\n.Menu__our-menu__section-title {\n  color: #0e4749;\n  border-bottom: 1px solid #0e4749;\n  margin-bottom: 2rem;\n}\n.Menu__our-menu__section-item {\n  margin-top: 1rem;\n  color: #002626;\n  font-weight: 400;\n}\n\n.hero {\n  background: linear-gradient(to bottom right, rgba(0, 38, 38, 0.7), rgba(14, 71, 73, 0.1)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  height: 95vh;\n  width: 100%;\n  display: flex;\n}\n.hero__text {\n  text-shadow: 1px 1px 2px rgba(43, 43, 43, 0.6);\n  position: absolute;\n  top: 50%;\n  left: 10%;\n  color: #fafafa;\n  display: flex;\n  flex-wrap: wrap;\n}\n.hero__text h1 {\n  width: 100%;\n}\n.hero__text-button {\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n  background: #0e4749;\n  color: #fafafa;\n  text-decoration: none;\n  cursor: pointer;\n  transition: 0.2s all;\n  background: transparent;\n  border: 1px solid #fafafa;\n  color: #fafafa;\n  margin-top: 2rem;\n}\n.hero__text-button:hover {\n  background: #d9962b;\n}\n.hero__text-button:hover {\n  border-color: #d9962b;\n}\n\n.info {\n  padding: 10rem 3rem;\n  display: flex;\n  justify-content: space-evenly;\n  flex-wrap: wrap;\n}\n.info__text--hours {\n  list-style-type: none;\n}\n.info__map {\n  max-width: 50%;\n}\n@media screen and (max-width: 650px) {\n  .info > div {\n    width: 100%;\n  }\n  .info__text {\n    text-align: center;\n    margin-bottom: 5rem;\n  }\n}\n\n.order-online {\n  padding: 10rem 3rem;\n  background: #002626;\n  color: #fafafa;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.order-online__text {\n  text-align: center;\n}\n.order-online__text h2 {\n  margin-bottom: 2rem;\n}\n.order-online__text p {\n  margin-bottom: 2rem;\n}\n.order-online__button {\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n  background: #0e4749;\n  color: #fafafa;\n  text-decoration: none;\n  cursor: pointer;\n  transition: 0.2s all;\n}\n.order-online__button:hover {\n  background: #d9962b;\n}\n\n.image-mason {\n  padding: 10rem 0rem;\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  grid-auto-rows: 200px;\n  grid-auto-flow: dense;\n}\n.image-mason > div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.image-mason > div > img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.image-mason > div:nth-child(2n) {\n  grid-column: span 2;\n}\n.image-mason > div:nth-child(4n) {\n  grid-row: span 2;\n}\n.image-mason:nth-child(2n) {\n  grid-column: span 2;\n}\n.image-mason:nth-child(4n) {\n  grid-row: span 2;\n}\n\n/************************************/\n/********** Reset / Global **********/\n/************************************/\nhtml {\n  box-sizing: border-box;\n  font-size: 62.5%;\n}\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  font-size: 1.6rem;\n  font-family: \"Frank Ruhl Libre\", serif;\n  color: #121212;\n}\n\n/* font sizes\n________________________________*/\nh1 {\n  font-size: 5rem;\n}\n\nh2 {\n  font-size: 3.5rem;\n}\n\nh3 {\n  font-size: 2.5rem;\n}\n\nh4 {\n  font-size: 2rem;\n}", "",{"version":3,"sources":["webpack://./src/css/style.scss","webpack://./src/css/variables.scss","webpack://./src/css/mixins.scss","webpack://./src/Header/Header.scss","webpack://./src/Footer/footer.scss","webpack://./src/Menu/menu.scss","webpack://./src/Home/Hero/Hero.scss","webpack://./src/Home/Info/Info.scss","webpack://./src/css/breakpoints.scss","webpack://./src/Home/OrderOnline/OrderOnline.scss","webpack://./src/Home/ImageMason/ImageMason.scss"],"names":[],"mappings":"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","sourcesContent":["@use './variables.scss' as v;\r\n@use './mixins.scss' as m;\r\n\r\n@use '../Header/Header.scss';\r\n@use '../Footer/footer.scss';\r\n@use '../Menu/menu.scss';\r\n@use '../Home/Home.scss';\r\n\r\n/***************************/\r\n/********** Fonts **********/\r\n/***************************/\r\n@import url('https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;700&display=swap');\r\n\r\n/************************************/\r\n/********** Reset / Global **********/\r\n/************************************/\r\nhtml {\r\n  box-sizing: border-box;\r\n  font-size: 62.5%;\r\n}\r\n\r\n*,\r\n*:before,\r\n*:after {\r\n  box-sizing: inherit;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-size: 1.6rem;\r\n  font-family: 'Frank Ruhl Libre', serif;\r\n  color: v.$color--black;\r\n}\r\n\r\n/* font sizes\r\n________________________________*/\r\nh1 {\r\n  font-size: 5rem;\r\n}\r\n\r\nh2 {\r\n  font-size: 3.5rem;\r\n}\r\n\r\nh3 {\r\n  font-size: 2.5rem;\r\n}\r\n\r\nh4 {\r\n  font-size: 2rem;\r\n}\r\n","/* colors\r\n________________________________*/\r\n$color---green-dark: #002626;\r\n$color---green-light: #0e4749;\r\n$color---gold: #d9962b;\r\n$color---beige: #d1ab6d;\r\n$color--linen: #efe7da;\r\n$color--black: #121212;\r\n$color--grey: #2b2b2b;\r\n$color--white: #fafafa;\r\n\r\n/* transitions\r\n________________________________*/\r\n$transition-default: 0.2s all;\r\n\r\n/* break points\r\n________________________________*/\r\n$tablet: 666px;\r\n","@use './variables.scss' as v;\r\n\r\n/* header background */\r\n@mixin header-background {\r\n  background: linear-gradient(\r\n      to bottom right,\r\n      rgba(v.$color---green-dark, 0.7),\r\n      rgba(v.$color---green-light, 0.1)\r\n    ),\r\n    url('../assets/images/cafe3.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n@mixin header-text-shadow {\r\n  text-shadow: 1px 1px 2px rgba(v.$color--grey, 0.6);\r\n}\r\n\r\n/* link button \r\n________________________________*/\r\n@mixin btn-default {\r\n  padding: 0.5rem 1rem;\r\n  border-radius: 6px;\r\n  background: v.$color---green-light;\r\n  color: v.$color--white;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n  transition: v.$transition-default;\r\n\r\n  &:hover {\r\n    background: v.$color---gold;\r\n  }\r\n}\r\n\r\n@mixin btn-alternate {\r\n  @include btn-default;\r\n\r\n  background: transparent;\r\n  border: 1px solid v.$color--white;\r\n  color: v.$color--white;\r\n\r\n  &:hover {\r\n    border-color: v.$color---gold;\r\n  }\r\n}\r\n\r\n/* float clear-fix \r\n________________________________*/\r\n@mixin clear-fix {\r\n  &:after {\r\n    display: block;\r\n    content: '';\r\n    clear: both;\r\n  }\r\n}\r\n\r\n/* ul decoration\r\n________________________________*/\r\n@mixin ul-default {\r\n  list-style-type: none;\r\n}\r\n\r\n/* menu borders and hovers\r\n________________________________*/\r\n@mixin menu-borders {\r\n  border-bottom: 1px solid rgba(v.$color--white, 0.3);\r\n}\r\n\r\n/* section spacing\r\n________________________________*/\r\n@mixin section-content {\r\n  padding: 10rem 3rem;\r\n}\r\n\r\n@mixin section-wide {\r\n  padding: 10rem 0rem;\r\n}\r\n","@use '../css/variables.scss' as v;\r\n@use '../css/mixins.scss' as m;\r\n\r\n.header {\r\n  @include m.menu-borders;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-self: flex-start;\r\n  width: 100%;\r\n  background: v.$color---green-light;\r\n\r\n  & > * {\r\n    display: inline-block;\r\n  }\r\n\r\n  &__logo {\r\n    padding: 3rem 0 0 3rem;\r\n\r\n    & img {\r\n      max-width: 10rem;\r\n    }\r\n  }\r\n\r\n  &__menu {\r\n    display: flex;\r\n    align-items: flex-end;\r\n    padding-right: 2rem;\r\n\r\n    & ul {\r\n      @include m.ul-default;\r\n      margin-left: 2rem;\r\n    }\r\n\r\n    & li {\r\n      display: inline-block;\r\n      border-bottom: 1px solid transparent;\r\n      transition: v.$transition-default;\r\n\r\n      &:hover {\r\n        @include m.menu-borders;\r\n        border-color: v.$color--white;\r\n      }\r\n\r\n      & a {\r\n        text-decoration: none;\r\n        color: v.$color--white;\r\n        padding: 1rem;\r\n      }\r\n    }\r\n  }\r\n}\r\n","@use '../css/variables.scss' as v;\r\n\r\n.footer {\r\n  border-top: 1px solid v.$color--grey;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  padding: 2rem;\r\n\r\n  &__right {\r\n    & a {\r\n      margin-left: 1rem;\r\n    }\r\n  }\r\n}\r\n","@use '../css/variables.scss' as v;\r\n@use '../css/mixins.scss' as m;\r\n\r\n.Menu {\r\n  &__header {\r\n    @include m.header-background;\r\n\r\n    &--text {\r\n      @include m.header-text-shadow;\r\n      color: v.$color--white;\r\n      padding: 5rem 3rem;\r\n    }\r\n  }\r\n\r\n  &__our-menu {\r\n    padding: 2rem 3rem;\r\n\r\n    &__section {\r\n      padding: 2rem 0;\r\n\r\n      &-title {\r\n        color: v.$color---green-light;\r\n        border-bottom: 1px solid v.$color---green-light;\r\n        margin-bottom: 2rem;\r\n      }\r\n\r\n      &-item {\r\n        margin-top: 1rem;\r\n        color: v.$color---green-dark;\r\n        font-weight: 400;\r\n      }\r\n    }\r\n  }\r\n}\r\n","@use '../../css/variables.scss' as v;\r\n@use '../../css/mixins.scss' as m;\r\n\r\n.hero {\r\n  @include m.header-background;\r\n  height: 95vh;\r\n  width: 100%;\r\n  display: flex;\r\n\r\n  &__text {\r\n    @include m.header-text-shadow;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 10%;\r\n    color: v.$color--white;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n\r\n    & h1 {\r\n      width: 100%;\r\n    }\r\n\r\n    &-button {\r\n      @include m.btn-alternate;\r\n      margin-top: 2rem;\r\n    }\r\n  }\r\n}\r\n","@use '../../css/mixins.scss' as m;\r\n@use '../../css/breakpoints.scss' as break;\r\n\r\n.info {\r\n  @include m.section-content;\r\n\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  flex-wrap: wrap;\r\n\r\n  &__text {\r\n    &--hours {\r\n      @include m.ul-default;\r\n    }\r\n  }\r\n\r\n  &__map {\r\n    max-width: 50%;\r\n  }\r\n\r\n  //media\r\n  @include break.screen-medium {\r\n    & > div {\r\n      width: 100%;\r\n    }\r\n\r\n    &__text {\r\n      text-align: center;\r\n      margin-bottom: 5rem;\r\n    }\r\n  }\r\n}\r\n","//screen sizes\r\n$screen-medium: 650px;\r\n\r\n@mixin screen-medium {\r\n  @media screen and (max-width: #{$screen-medium}) {\r\n    @content;\r\n  }\r\n}\r\n","@use '../../css/variables.scss' as v;\r\n@use '../../css/mixins.scss' as m;\r\n\r\n.order-online {\r\n  @include m.section-content;\r\n  background: v.$color---green-dark;\r\n  color: v.$color--white;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  &__text {\r\n    text-align: center;\r\n\r\n    & h2 {\r\n      margin-bottom: 2rem;\r\n    }\r\n\r\n    & p {\r\n      margin-bottom: 2rem;\r\n    }\r\n  }\r\n\r\n  &__button {\r\n    @include m.btn-default;\r\n  }\r\n}\r\n","@use '../../css/mixins.scss' as m;\r\n\r\n.image-mason {\r\n  @include m.section-wide;\r\n  display: grid;\r\n  grid-gap: 10px;\r\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\r\n  grid-auto-rows: 200px;\r\n  grid-auto-flow: dense;\r\n\r\n  & > div {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    & > img {\r\n      width: 100%;\r\n      height: 100%;\r\n      object-fit: cover;\r\n    }\r\n\r\n    &:nth-child(2n) {\r\n      grid-column: span 2;\r\n    }\r\n\r\n    &:nth-child(4n) {\r\n      grid-row: span 2;\r\n    }\r\n  }\r\n\r\n  &:nth-child(2n) {\r\n    grid-column: span 2;\r\n  }\r\n\r\n  &:nth-child(4n) {\r\n    grid-row: span 2;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/googleMap/map.html":
/*!***************************************!*\
  !*** ./src/assets/googleMap/map.html ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<iframe src=\"https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d55128.7775762292!2d-97.75618148236958!3d30.278440311253547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scoffee!5e0!3m2!1sen!2sus!4v1640283260620!5m2!1sen!2sus\" width=\"100%\" height=\"100%\" style=\"border:0;\" allowfullscreen=\"\" loading=\"lazy\"></iframe>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/css/style.scss":
/*!****************************!*\
  !*** ./src/css/style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOM/DOM.js":
/*!************************!*\
  !*** ./src/DOM/DOM.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "addClasses": () => (/* binding */ addClasses),
/* harmony export */   "clear": () => (/* binding */ clear)
/* harmony export */ });
/***************************/
/****** DOM Creation *******/
/***************************/
function createElement(type = 'div', ...classes) {
  const newElement = document.createElement(type);
  addClasses(newElement, ...classes);

  return newElement;
}

function addClasses(element, ...classes) {
  if (classes) {
    classes.forEach((newClass) => {
      element.classList.add(newClass);
    });
  }
}

function clear(element) {
  element.textContent = '';
}




/***/ }),

/***/ "./src/Footer/Footer.js":
/*!******************************!*\
  !*** ./src/Footer/Footer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/DOM */ "./src/DOM/DOM.js");


const Footer = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', 'footer');

const footerLeft = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'footer__left');
const footerRight = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'footer__right');

footerLeft.textContent = 'Odin Brew | Austin, TX';
footerRight.textContent = "Order online - or don't. Whatever.";

Footer.append(footerLeft, footerRight);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);


/***/ }),

/***/ "./src/Header/Header.js":
/*!******************************!*\
  !*** ./src/Header/Header.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/DOM */ "./src/DOM/DOM.js");
/* harmony import */ var _assets_images_OdinBrewLogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/OdinBrewLogo.png */ "./src/assets/images/OdinBrewLogo.png");



const Header = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', 'header');

/* logo */
const logo = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'header__logo');
Header.append(logo);

const logoImage = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('img');
logoImage.src = _assets_images_OdinBrewLogo_png__WEBPACK_IMPORTED_MODULE_1__;
logo.append(logoImage);

/* menu */
const menu = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'header__menu');
const menuList = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul');
menu.appendChild(menuList);

const menuItems = ['<a href="#">Home</a>', '<a href="#">Menu</a>'];

for (let item of menuItems) {
  let newItem = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('li');
  newItem.innerHTML = item;
  menuList.appendChild(newItem);
}

Header.appendChild(menu);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ "./src/Home/Hero/Hero.js":
/*!*******************************!*\
  !*** ./src/Home/Hero/Hero.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM/DOM */ "./src/DOM/DOM.js");


const Hero = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', 'hero');
const heroText = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'hero__text');

const heroTextContent = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1');
heroTextContent.textContent = 'Here is a promise that we will keep.';

const heroTextButton = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', 'hero__text-button');
heroTextButton.textContent = 'View our menu';

heroText.append(heroTextContent, heroTextButton);
Hero.append(heroText);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);


/***/ }),

/***/ "./src/Home/Home.js":
/*!**************************!*\
  !*** ./src/Home/Home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/DOM */ "./src/DOM/DOM.js");
/* harmony import */ var _Hero_Hero_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hero/Hero.js */ "./src/Home/Hero/Hero.js");
/* harmony import */ var _Info_Info_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Info/Info.js */ "./src/Home/Info/Info.js");
/* harmony import */ var _OrderOnline_OrderOnline_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OrderOnline/OrderOnline.js */ "./src/Home/OrderOnline/OrderOnline.js");
/* harmony import */ var _ImageMason_ImageMason_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageMason/ImageMason.js */ "./src/Home/ImageMason/ImageMason.js");







const Home = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'Home');
Home.append(_Hero_Hero_js__WEBPACK_IMPORTED_MODULE_1__["default"], _Info_Info_js__WEBPACK_IMPORTED_MODULE_2__["default"], _OrderOnline_OrderOnline_js__WEBPACK_IMPORTED_MODULE_3__["default"], _ImageMason_ImageMason_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);


/***/ }),

/***/ "./src/Home/ImageMason/ImageMason.js":
/*!*******************************************!*\
  !*** ./src/Home/ImageMason/ImageMason.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM/DOM */ "./src/DOM/DOM.js");
/* harmony import */ var _assets_images_cafe1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/cafe1.jpg */ "./src/assets/images/cafe1.jpg");
/* harmony import */ var _assets_images_cafe2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/cafe2.jpg */ "./src/assets/images/cafe2.jpg");
/* harmony import */ var _assets_images_cafe3_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/cafe3.jpg */ "./src/assets/images/cafe3.jpg");
/* harmony import */ var _assets_images_cafe4_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/cafe4.jpg */ "./src/assets/images/cafe4.jpg");
/* harmony import */ var _assets_images_cafe5_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/images/cafe5.jpg */ "./src/assets/images/cafe5.jpg");








/* Please refer to this great codepen for more understanding on this masonry image setup. This is only a slightly modified version of this original: https://codepen.io/iamsaief/pen/jObaoKo */

const ImageMason = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', 'image-mason');

const images = [
  _assets_images_cafe1_jpg__WEBPACK_IMPORTED_MODULE_1__,
  _assets_images_cafe2_jpg__WEBPACK_IMPORTED_MODULE_2__,
  _assets_images_cafe3_jpg__WEBPACK_IMPORTED_MODULE_3__,
  _assets_images_cafe4_jpg__WEBPACK_IMPORTED_MODULE_4__,
  _assets_images_cafe5_jpg__WEBPACK_IMPORTED_MODULE_5__,
  _assets_images_cafe1_jpg__WEBPACK_IMPORTED_MODULE_1__,
  _assets_images_cafe2_jpg__WEBPACK_IMPORTED_MODULE_2__,
  _assets_images_cafe3_jpg__WEBPACK_IMPORTED_MODULE_3__,
  _assets_images_cafe4_jpg__WEBPACK_IMPORTED_MODULE_4__,
  _assets_images_cafe5_jpg__WEBPACK_IMPORTED_MODULE_5__,
  _assets_images_cafe1_jpg__WEBPACK_IMPORTED_MODULE_1__,
];

for (let src of images) {
  let image = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('img');
  image.src = src;

  let div = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');
  div.append(image);

  ImageMason.append(div);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageMason);


/***/ }),

/***/ "./src/Home/Info/Info.js":
/*!*******************************!*\
  !*** ./src/Home/Info/Info.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM/DOM */ "./src/DOM/DOM.js");
/* harmony import */ var _assets_googleMap_map_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/googleMap/map.html */ "./src/assets/googleMap/map.html");



const Info = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', 'info');

const infoText = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'info__text');
Info.append(infoText);

const infoTextScheduleHeading = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('h3');
infoTextScheduleHeading.textContent = 'Hours of Operation';

const infoTextSchedule = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', 'info__text--hours');
const infoTextScheduleContent = [
  'Monday: 8am - 8pm',
  'Tuesday: 8am - 8pm',
  'Wednesday: 8am - 8pm',
  'Thursday: 8am - 8pm',
  'Friday: 8am - 8pm',
  'Saturday: 8am - 8pm',
  'Sunday: Closed',
];

for (let item of infoTextScheduleContent) {
  let li = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('li');
  li.textContent = item;
  infoTextSchedule.append(li);
}

infoText.append(infoTextScheduleHeading, infoTextSchedule);

const infoMap = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'info__map');
infoMap.innerHTML = _assets_googleMap_map_html__WEBPACK_IMPORTED_MODULE_1__["default"];

Info.append(infoMap);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Info);


/***/ }),

/***/ "./src/Home/OrderOnline/OrderOnline.js":
/*!*********************************************!*\
  !*** ./src/Home/OrderOnline/OrderOnline.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../DOM/DOM */ "./src/DOM/DOM.js");


const OrderOnline = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', 'order-online');

const orderOnlineText = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'order-online__text');
OrderOnline.append(orderOnlineText);

const orderOnlineTextHeader = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2');
orderOnlineTextHeader.textContent = "Order online - or don't. Whatever";

const orderOnlineTextPara = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('p');
orderOnlineTextPara.textContent =
  'Halvah icing wafer jelly donut chupa chups dragée cookie bear claw. Biscuit cake topping cookie oat cake brownie. Gummi bears oat cake lemon dro;ps carrot cake fruitcake. Jelly-o candy canes sugar plum dessert halvah icing dessert oat cake.';

const orderOnlineButton = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('a', 'order-online__button');
orderOnlineButton.textContent = 'Order Now';
orderOnlineButton.attributes['href'] = '#';

orderOnlineText.append(
  orderOnlineTextHeader,
  orderOnlineTextPara,
  orderOnlineButton
);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderOnline);


/***/ }),

/***/ "./src/Menu/Menu.js":
/*!**************************!*\
  !*** ./src/Menu/Menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DOM_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DOM/DOM */ "./src/DOM/DOM.js");
/* harmony import */ var _assets_menu_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/menu.json */ "./src/assets/menu.json");



const Menu = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'Menu');

/* header text */
const menuHeader = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('section', 'Menu__header');

const menuHeaderText = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('h1', 'Menu__header--text');
menuHeaderText.textContent = 'Our Menu';

menuHeader.append(menuHeaderText);

/* main menu */
const ourMenu = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'Menu__our-menu');

/* menu data */
for (let section in _assets_menu_json__WEBPACK_IMPORTED_MODULE_1__) {
  let newSection = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'Menu__our-menu__section');
  ourMenu.append(newSection);

  let sectionTitle = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('h2', 'Menu__our-menu__section-title');
  sectionTitle.textContent = section;

  newSection.append(sectionTitle);

  _assets_menu_json__WEBPACK_IMPORTED_MODULE_1__[section].forEach((item) => {
    let itemName = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('h4', 'Menu__our-menu__section-item');
    let itemInfo = (0,_DOM_DOM__WEBPACK_IMPORTED_MODULE_0__.createElement)('p', 'Menu__our-menu__section-item--info');
    itemName.textContent = Object.keys(item);
    itemInfo.textContent = Object.values(item);

    newSection.append(itemName, itemInfo);
  });
}

Menu.append(menuHeader, ourMenu);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menu);


/***/ }),

/***/ "./src/assets/images/OdinBrewLogo.png":
/*!********************************************!*\
  !*** ./src/assets/images/OdinBrewLogo.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4a39e3ae80ea6bcd72b.png";

/***/ }),

/***/ "./src/assets/images/cafe1.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/cafe1.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4dbfc333d547fece84c8.jpg";

/***/ }),

/***/ "./src/assets/images/cafe2.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/cafe2.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "02285329c792f50d1cb4.jpg";

/***/ }),

/***/ "./src/assets/images/cafe3.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/cafe3.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a91a64f48b770fd5c5fe.jpg";

/***/ }),

/***/ "./src/assets/images/cafe4.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/cafe4.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6d8059c203a2284cd3b.jpg";

/***/ }),

/***/ "./src/assets/images/cafe5.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/cafe5.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "92b38d4059f43132a1ce.jpg";

/***/ }),

/***/ "./src/assets/menu.json":
/*!******************************!*\
  !*** ./src/assets/menu.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('{"Espresso":[{"Espresso":"Affogato etsy unicorn cronut austin four dollar toast, skateboard enamel pin."},{"Latte":"Poke echo park yuccie palo santo before they sold out flannel typewriter thundercats."},{"Cortado":"Pop-up bitters echo park YOLO, chia knausgaard shaman jean shorts dreamcatcher normcore roof party blog."},{"Americano":"asymmetrical drinking vinegar bicycle rights. Actually vaporware enamel pin, hell of adaptogen plaid jean shorts hashtag."}],"Craft Lattes":[{"Odin\'s Beard":"Affogato etsy unicorn cronut austin four dollar toast, skateboard enamel pin."},{"Thunder Horn":"Poke echo park yuccie palo santo before they sold out flannel typewriter thundercats."},{"Chai Tea Latte":"Pop-up bitters echo park YOLO, chia knausgaard shaman jean shorts dreamcatcher normcore roof party blog."},{"Spring in Valhalla":"asymmetrical drinking vinegar bicycle rights. Actually vaporware enamel pin, hell of adaptogen plaid jean shorts hashtag."}],"Coffees":[{"Coffee":"Affogato etsy unicorn cronut austin four dollar toast, skateboard enamel pin."},{"Asgardian Mud":"Poke echo park yuccie palo santo before they sold out flannel typewriter thundercats."},{"The Hammer":"Pop-up bitters echo park YOLO, chia knausgaard shaman jean shorts dreamcatcher normcore roof party blog."},{"Frost Brew":"asymmetrical drinking vinegar bicycle rights. Actually vaporware enamel pin, hell of adaptogen plaid jean shorts hashtag."}]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DOM_DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM/DOM.js */ "./src/DOM/DOM.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header/Header */ "./src/Header/Header.js");
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer/Footer */ "./src/Footer/Footer.js");
/* harmony import */ var _Home_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Home/Home */ "./src/Home/Home.js");
/* harmony import */ var _Menu_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu/Menu */ "./src/Menu/Menu.js");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/style.scss */ "./src/css/style.scss");








const Content = (0,_DOM_DOM_js__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', 'content');
document.body.append(_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], Content, _Footer_Footer__WEBPACK_IMPORTED_MODULE_2__["default"]);
Content.append(_Home_Home__WEBPACK_IMPORTED_MODULE_3__["default"]);

// navigation
const links = document.querySelector('.header__menu');

links.addEventListener('click', function (e) {
  let pageName = e.target.textContent;
  e.target.nodeName === 'A' ? changePage(pageName) : null;
});

function changePage(page) {
  (0,_DOM_DOM_js__WEBPACK_IMPORTED_MODULE_0__.clear)(Content);

  switch (page) {
    case 'Home':
      Content.append(_Home_Home__WEBPACK_IMPORTED_MODULE_3__["default"]);
      break;
    case 'Menu':
      Content.append(_Menu_Menu__WEBPACK_IMPORTED_MODULE_4__["default"]);
      break;
    case 'Contact':
      break;
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxZQUFZLFlBQVksTUFBTSxLQUFLLFdBQVcsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsWUFBWSxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsYUFBYSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsYUFBYSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sWUFBWSxXQUFXLFdBQVcsS0FBSyxXQUFXLFdB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O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCb0Q7QUFDcEQ7QUFDcUM7QUFDQTtBQUNOO0FBQ0E7QUFDTDtBQUMxQjtBQUNBLGdCQUFnQiwwREFBYTtBQUM3QixxQkFBcUIsc0RBQU0sV0FBVyxzREFBTTtBQUM1QyxlQUFlLGtEQUFJO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxFQUFFLGtEQUFLO0FBQ1A7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFJO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUIsa0RBQUk7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tY2FmZS8uL3NyYy9jc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9vZGluLWNhZmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tY2FmZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1jYWZlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1jYWZlLy4vc3JjL2Fzc2V0cy9nb29nbGVNYXAvbWFwLmh0bWwiLCJ3ZWJwYWNrOi8vb2Rpbi1jYWZlLy4vc3JjL2Nzcy9zdHlsZS5zY3NzPzNmZjAiLCJ3ZWJwYWNrOi8vb2Rpbi1jYWZlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tY2FmZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1jYWZlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tY2FmZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWNhZmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWNhZmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWNhZmUvLi9zcmMvRE9NL0RPTS5qcyIsIndlYnBhY2s6Ly9vZGluLWNhZmUvLi9zcmMvRm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9vZGluLWNhZmUvLi9zcmMvSGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLWNhZmUvLi9zcmMvSG9tZS9IZXJvL0hlcm8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1jYWZlLy4vc3JjL0hvbWUvSG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLWNhZmUvLi9zcmMvSG9tZS9JbWFnZU1hc29uL0ltYWdlTWFzb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1jYWZlLy4vc3JjL0hvbWUvSW5mby9JbmZvLmpzIiwid2VicGFjazovL29kaW4tY2FmZS8uL3NyYy9Ib21lL09yZGVyT25saW5lL09yZGVyT25saW5lLmpzIiwid2VicGFjazovL29kaW4tY2FmZS8uL3NyYy9NZW51L01lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1jYWZlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tY2FmZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWNhZmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tY2FmZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tY2FmZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tY2FmZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tY2FmZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWNhZmUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vb2Rpbi1jYWZlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9hc3NldHMvaW1hZ2VzL2NhZmUzLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RnJhbmsrUnVobCtMaWJyZTp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqIEZvbnRzICoqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG4vKiBjb2xvcnNcXG5fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXFxuLyogdHJhbnNpdGlvbnNcXG5fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXFxuLyogYnJlYWsgcG9pbnRzXFxuX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xcbi8qIGhlYWRlciBiYWNrZ3JvdW5kICovXFxuLyogbGluayBidXR0b24gXFxuX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xcbi8qIGZsb2F0IGNsZWFyLWZpeCBcXG5fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXFxuLyogdWwgZGVjb3JhdGlvblxcbl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cXG4vKiBtZW51IGJvcmRlcnMgYW5kIGhvdmVyc1xcbl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cXG4vKiBzZWN0aW9uIHNwYWNpbmdcXG5fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXFxuLmhlYWRlciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTAsIDI1MCwgMjUwLCAwLjMpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6ICMwZTQ3NDk7XFxufVxcbi5oZWFkZXIgPiAqIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmhlYWRlcl9fbG9nbyB7XFxuICBwYWRkaW5nOiAzcmVtIDAgMCAzcmVtO1xcbn1cXG4uaGVhZGVyX19sb2dvIGltZyB7XFxuICBtYXgtd2lkdGg6IDEwcmVtO1xcbn1cXG4uaGVhZGVyX19tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXG4uaGVhZGVyX19tZW51IHVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xcbn1cXG4uaGVhZGVyX19tZW51IGxpIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xcbn1cXG4uaGVhZGVyX19tZW51IGxpOmhvdmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1MCwgMjUwLCAyNTAsIDAuMyk7XFxuICBib3JkZXItY29sb3I6ICNmYWZhZmE7XFxufVxcbi5oZWFkZXJfX21lbnUgbGkgYSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5mb290ZXIge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMyYjJiMmI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDJyZW07XFxufVxcbi5mb290ZXJfX3JpZ2h0IGEge1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5NZW51X19oZWFkZXIge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgcmdiYSgwLCAzOCwgMzgsIDAuNyksIHJnYmEoMTQsIDcxLCA3MywgMC4xKSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG4uTWVudV9faGVhZGVyLS10ZXh0IHtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDQzLCA0MywgNDMsIDAuNik7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG4gIHBhZGRpbmc6IDVyZW0gM3JlbTtcXG59XFxuLk1lbnVfX291ci1tZW51IHtcXG4gIHBhZGRpbmc6IDJyZW0gM3JlbTtcXG59XFxuLk1lbnVfX291ci1tZW51X19zZWN0aW9uIHtcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG59XFxuLk1lbnVfX291ci1tZW51X19zZWN0aW9uLXRpdGxlIHtcXG4gIGNvbG9yOiAjMGU0NzQ5O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwZTQ3NDk7XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbn1cXG4uTWVudV9fb3VyLW1lbnVfX3NlY3Rpb24taXRlbSB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgY29sb3I6ICMwMDI2MjY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4uaGVybyB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCByZ2JhKDAsIDM4LCAzOCwgMC43KSwgcmdiYSgxNCwgNzEsIDczLCAwLjEpKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBoZWlnaHQ6IDk1dmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oZXJvX190ZXh0IHtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDQzLCA0MywgNDMsIDAuNik7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDEwJTtcXG4gIGNvbG9yOiAjZmFmYWZhO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmhlcm9fX3RleHQgaDEge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5oZXJvX190ZXh0LWJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJhY2tncm91bmQ6ICMwZTQ3NDk7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmFmYWZhO1xcbiAgY29sb3I6ICNmYWZhZmE7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbn1cXG4uaGVyb19fdGV4dC1idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2Q5OTYyYjtcXG59XFxuLmhlcm9fX3RleHQtYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogI2Q5OTYyYjtcXG59XFxuXFxuLmluZm8ge1xcbiAgcGFkZGluZzogMTByZW0gM3JlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLmluZm9fX3RleHQtLWhvdXJzIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuLmluZm9fX21hcCB7XFxuICBtYXgtd2lkdGg6IDUwJTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXG4gIC5pbmZvID4gZGl2IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuICAuaW5mb19fdGV4dCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gIH1cXG59XFxuXFxuLm9yZGVyLW9ubGluZSB7XFxuICBwYWRkaW5nOiAxMHJlbSAzcmVtO1xcbiAgYmFja2dyb3VuZDogIzAwMjYyNjtcXG4gIGNvbG9yOiAjZmFmYWZhO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLm9yZGVyLW9ubGluZV9fdGV4dCB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5vcmRlci1vbmxpbmVfX3RleHQgaDIge1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG59XFxuLm9yZGVyLW9ubGluZV9fdGV4dCBwIHtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxufVxcbi5vcmRlci1vbmxpbmVfX2J1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJhY2tncm91bmQ6ICMwZTQ3NDk7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IDAuMnMgYWxsO1xcbn1cXG4ub3JkZXItb25saW5lX19idXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2Q5OTYyYjtcXG59XFxuXFxuLmltYWdlLW1hc29uIHtcXG4gIHBhZGRpbmc6IDEwcmVtIDByZW07XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDI1MHB4LCAxZnIpKTtcXG4gIGdyaWQtYXV0by1yb3dzOiAyMDBweDtcXG4gIGdyaWQtYXV0by1mbG93OiBkZW5zZTtcXG59XFxuLmltYWdlLW1hc29uID4gZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5pbWFnZS1tYXNvbiA+IGRpdiA+IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4uaW1hZ2UtbWFzb24gPiBkaXY6bnRoLWNoaWxkKDJuKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG4uaW1hZ2UtbWFzb24gPiBkaXY6bnRoLWNoaWxkKDRuKSB7XFxuICBncmlkLXJvdzogc3BhbiAyO1xcbn1cXG4uaW1hZ2UtbWFzb246bnRoLWNoaWxkKDJuKSB7XFxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xcbn1cXG4uaW1hZ2UtbWFzb246bnRoLWNoaWxkKDRuKSB7XFxuICBncmlkLXJvdzogc3BhbiAyO1xcbn1cXG5cXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcbi8qKioqKioqKioqIFJlc2V0IC8gR2xvYmFsICoqKioqKioqKiovXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LXNpemU6IDYyLjUlO1xcbn1cXG5cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxuICBmb250LWZhbWlseTogXFxcIkZyYW5rIFJ1aGwgTGlicmVcXFwiLCBzZXJpZjtcXG4gIGNvbG9yOiAjMTIxMjEyO1xcbn1cXG5cXG4vKiBmb250IHNpemVzXFxuX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xcbmgxIHtcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXG59XFxuXFxuaDIge1xcbiAgZm9udC1zaXplOiAzLjVyZW07XFxufVxcblxcbmgzIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbn1cXG5cXG5oNCB7XFxuICBmb250LXNpemU6IDJyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL0hlYWRlci9IZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL0Zvb3Rlci9mb290ZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL01lbnUvbWVudS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvSG9tZS9IZXJvL0hlcm8uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL0hvbWUvSW5mby9JbmZvLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYnJlYWtwb2ludHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL0hvbWUvT3JkZXJPbmxpbmUvT3JkZXJPbmxpbmUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL0hvbWUvSW1hZ2VNYXNvbi9JbWFnZU1hc29uLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBUUEsNEJBQUE7QUFDQSw0QkFBQTtBQUNBLDRCQUFBO0FDVkE7aUNBQUE7QUFXQTtpQ0FBQTtBQUlBO2lDQUFBO0FDYkEsc0JBQUE7QUFlQTtpQ0FBQTtBQTRCQTtpQ0FBQTtBQVVBO2lDQUFBO0FBTUE7aUNBQUE7QUFNQTtpQ0FBQTtBQ2hFQTtFRDZERSxpREFB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O0FBaU5GOztBQTlNQTtFQUNFLGlCQUFBO0VBQ0Esc0NBQUE7RUFDQSxjQ3pCYTtBRDBPZjs7QUE5TUE7aUNBQUE7QUFFQTtFQUNFLGVBQUE7QUFpTkY7O0FBOU1BO0VBQ0UsaUJBQUE7QUFpTkY7O0FBOU1BO0VBQ0UsaUJBQUE7QUFpTkY7O0FBOU1BO0VBQ0UsZUFBQTtBQWlORlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlICcuL3ZhcmlhYmxlcy5zY3NzJyBhcyB2O1xcclxcbkB1c2UgJy4vbWl4aW5zLnNjc3MnIGFzIG07XFxyXFxuXFxyXFxuQHVzZSAnLi4vSGVhZGVyL0hlYWRlci5zY3NzJztcXHJcXG5AdXNlICcuLi9Gb290ZXIvZm9vdGVyLnNjc3MnO1xcclxcbkB1c2UgJy4uL01lbnUvbWVudS5zY3NzJztcXHJcXG5AdXNlICcuLi9Ib21lL0hvbWUuc2Nzcyc7XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG4vKioqKioqKioqKiBGb250cyAqKioqKioqKioqL1xcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RnJhbmsrUnVobCtMaWJyZTp3Z2h0QDMwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuLyoqKioqKioqKiogUmVzZXQgLyBHbG9iYWwgKioqKioqKioqKi9cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcbmh0bWwge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjpiZWZvcmUsXFxyXFxuKjphZnRlciB7XFxyXFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRnJhbmsgUnVobCBMaWJyZScsIHNlcmlmO1xcclxcbiAgY29sb3I6IHYuJGNvbG9yLS1ibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLyogZm9udCBzaXplc1xcclxcbl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oMyB7XFxyXFxuICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDQge1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbn1cXHJcXG5cIixcIi8qIGNvbG9yc1xcclxcbl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cXHJcXG4kY29sb3ItLS1ncmVlbi1kYXJrOiAjMDAyNjI2O1xcclxcbiRjb2xvci0tLWdyZWVuLWxpZ2h0OiAjMGU0NzQ5O1xcclxcbiRjb2xvci0tLWdvbGQ6ICNkOTk2MmI7XFxyXFxuJGNvbG9yLS0tYmVpZ2U6ICNkMWFiNmQ7XFxyXFxuJGNvbG9yLS1saW5lbjogI2VmZTdkYTtcXHJcXG4kY29sb3ItLWJsYWNrOiAjMTIxMjEyO1xcclxcbiRjb2xvci0tZ3JleTogIzJiMmIyYjtcXHJcXG4kY29sb3ItLXdoaXRlOiAjZmFmYWZhO1xcclxcblxcclxcbi8qIHRyYW5zaXRpb25zXFxyXFxuX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xcclxcbiR0cmFuc2l0aW9uLWRlZmF1bHQ6IDAuMnMgYWxsO1xcclxcblxcclxcbi8qIGJyZWFrIHBvaW50c1xcclxcbl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cXHJcXG4kdGFibGV0OiA2NjZweDtcXHJcXG5cIixcIkB1c2UgJy4vdmFyaWFibGVzLnNjc3MnIGFzIHY7XFxyXFxuXFxyXFxuLyogaGVhZGVyIGJhY2tncm91bmQgKi9cXHJcXG5AbWl4aW4gaGVhZGVyLWJhY2tncm91bmQge1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcclxcbiAgICAgIHRvIGJvdHRvbSByaWdodCxcXHJcXG4gICAgICByZ2JhKHYuJGNvbG9yLS0tZ3JlZW4tZGFyaywgMC43KSxcXHJcXG4gICAgICByZ2JhKHYuJGNvbG9yLS0tZ3JlZW4tbGlnaHQsIDAuMSlcXHJcXG4gICAgKSxcXHJcXG4gICAgdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2NhZmUzLmpwZycpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGhlYWRlci10ZXh0LXNoYWRvdyB7XFxyXFxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSh2LiRjb2xvci0tZ3JleSwgMC42KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbGluayBidXR0b24gXFxyXFxuX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xcclxcbkBtaXhpbiBidG4tZGVmYXVsdCB7XFxyXFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIGJhY2tncm91bmQ6IHYuJGNvbG9yLS0tZ3JlZW4tbGlnaHQ7XFxyXFxuICBjb2xvcjogdi4kY29sb3ItLXdoaXRlO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgdHJhbnNpdGlvbjogdi4kdHJhbnNpdGlvbi1kZWZhdWx0O1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHYuJGNvbG9yLS0tZ29sZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIGJ0bi1hbHRlcm5hdGUge1xcclxcbiAgQGluY2x1ZGUgYnRuLWRlZmF1bHQ7XFxyXFxuXFxyXFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHYuJGNvbG9yLS13aGl0ZTtcXHJcXG4gIGNvbG9yOiB2LiRjb2xvci0td2hpdGU7XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiB2LiRjb2xvci0tLWdvbGQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIGZsb2F0IGNsZWFyLWZpeCBcXHJcXG5fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXFxyXFxuQG1peGluIGNsZWFyLWZpeCB7XFxyXFxuICAmOmFmdGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBjbGVhcjogYm90aDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogdWwgZGVjb3JhdGlvblxcclxcbl9fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fKi9cXHJcXG5AbWl4aW4gdWwtZGVmYXVsdCB7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIG1lbnUgYm9yZGVycyBhbmQgaG92ZXJzXFxyXFxuX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX18qL1xcclxcbkBtaXhpbiBtZW51LWJvcmRlcnMge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEodi4kY29sb3ItLXdoaXRlLCAwLjMpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzZWN0aW9uIHNwYWNpbmdcXHJcXG5fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXyovXFxyXFxuQG1peGluIHNlY3Rpb24tY29udGVudCB7XFxyXFxuICBwYWRkaW5nOiAxMHJlbSAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5AbWl4aW4gc2VjdGlvbi13aWRlIHtcXHJcXG4gIHBhZGRpbmc6IDEwcmVtIDByZW07XFxyXFxufVxcclxcblwiLFwiQHVzZSAnLi4vY3NzL3ZhcmlhYmxlcy5zY3NzJyBhcyB2O1xcclxcbkB1c2UgJy4uL2Nzcy9taXhpbnMuc2NzcycgYXMgbTtcXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gIEBpbmNsdWRlIG0ubWVudS1ib3JkZXJzO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHYuJGNvbG9yLS0tZ3JlZW4tbGlnaHQ7XFxyXFxuXFxyXFxuICAmID4gKiB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2xvZ28ge1xcclxcbiAgICBwYWRkaW5nOiAzcmVtIDAgMCAzcmVtO1xcclxcblxcclxcbiAgICAmIGltZyB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiAxMHJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fbWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMnJlbTtcXHJcXG5cXHJcXG4gICAgJiB1bCB7XFxyXFxuICAgICAgQGluY2x1ZGUgbS51bC1kZWZhdWx0O1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYgbGkge1xcclxcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogdi4kdHJhbnNpdGlvbi1kZWZhdWx0O1xcclxcblxcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgQGluY2x1ZGUgbS5tZW51LWJvcmRlcnM7XFxyXFxuICAgICAgICBib3JkZXItY29sb3I6IHYuJGNvbG9yLS13aGl0ZTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJiBhIHtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIGNvbG9yOiB2LiRjb2xvci0td2hpdGU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkB1c2UgJy4uL2Nzcy92YXJpYWJsZXMuc2NzcycgYXMgdjtcXHJcXG5cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2LiRjb2xvci0tZ3JleTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG5cXHJcXG4gICZfX3JpZ2h0IHtcXHJcXG4gICAgJiBhIHtcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIkB1c2UgJy4uL2Nzcy92YXJpYWJsZXMuc2NzcycgYXMgdjtcXHJcXG5AdXNlICcuLi9jc3MvbWl4aW5zLnNjc3MnIGFzIG07XFxyXFxuXFxyXFxuLk1lbnUge1xcclxcbiAgJl9faGVhZGVyIHtcXHJcXG4gICAgQGluY2x1ZGUgbS5oZWFkZXItYmFja2dyb3VuZDtcXHJcXG5cXHJcXG4gICAgJi0tdGV4dCB7XFxyXFxuICAgICAgQGluY2x1ZGUgbS5oZWFkZXItdGV4dC1zaGFkb3c7XFxyXFxuICAgICAgY29sb3I6IHYuJGNvbG9yLS13aGl0ZTtcXHJcXG4gICAgICBwYWRkaW5nOiA1cmVtIDNyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX291ci1tZW51IHtcXHJcXG4gICAgcGFkZGluZzogMnJlbSAzcmVtO1xcclxcblxcclxcbiAgICAmX19zZWN0aW9uIHtcXHJcXG4gICAgICBwYWRkaW5nOiAycmVtIDA7XFxyXFxuXFxyXFxuICAgICAgJi10aXRsZSB7XFxyXFxuICAgICAgICBjb2xvcjogdi4kY29sb3ItLS1ncmVlbi1saWdodDtcXHJcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2LiRjb2xvci0tLWdyZWVuLWxpZ2h0O1xcclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgICB9XFxyXFxuXFxyXFxuICAgICAgJi1pdGVtIHtcXHJcXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxyXFxuICAgICAgICBjb2xvcjogdi4kY29sb3ItLS1ncmVlbi1kYXJrO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlICcuLi8uLi9jc3MvdmFyaWFibGVzLnNjc3MnIGFzIHY7XFxyXFxuQHVzZSAnLi4vLi4vY3NzL21peGlucy5zY3NzJyBhcyBtO1xcclxcblxcclxcbi5oZXJvIHtcXHJcXG4gIEBpbmNsdWRlIG0uaGVhZGVyLWJhY2tncm91bmQ7XFxyXFxuICBoZWlnaHQ6IDk1dmg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAmX190ZXh0IHtcXHJcXG4gICAgQGluY2x1ZGUgbS5oZWFkZXItdGV4dC1zaGFkb3c7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDEwJTtcXHJcXG4gICAgY29sb3I6IHYuJGNvbG9yLS13aGl0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcblxcclxcbiAgICAmIGgxIHtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmLWJ1dHRvbiB7XFxyXFxuICAgICAgQGluY2x1ZGUgbS5idG4tYWx0ZXJuYXRlO1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlICcuLi8uLi9jc3MvbWl4aW5zLnNjc3MnIGFzIG07XFxyXFxuQHVzZSAnLi4vLi4vY3NzL2JyZWFrcG9pbnRzLnNjc3MnIGFzIGJyZWFrO1xcclxcblxcclxcbi5pbmZvIHtcXHJcXG4gIEBpbmNsdWRlIG0uc2VjdGlvbi1jb250ZW50O1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcblxcclxcbiAgJl9fdGV4dCB7XFxyXFxuICAgICYtLWhvdXJzIHtcXHJcXG4gICAgICBAaW5jbHVkZSBtLnVsLWRlZmF1bHQ7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX21hcCB7XFxyXFxuICAgIG1heC13aWR0aDogNTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy9tZWRpYVxcclxcbiAgQGluY2x1ZGUgYnJlYWsuc2NyZWVuLW1lZGl1bSB7XFxyXFxuICAgICYgPiBkaXYge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICZfX3RleHQge1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiLy9zY3JlZW4gc2l6ZXNcXHJcXG4kc2NyZWVuLW1lZGl1bTogNjUwcHg7XFxyXFxuXFxyXFxuQG1peGluIHNjcmVlbi1tZWRpdW0ge1xcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogI3skc2NyZWVuLW1lZGl1bX0pIHtcXHJcXG4gICAgQGNvbnRlbnQ7XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiQHVzZSAnLi4vLi4vY3NzL3ZhcmlhYmxlcy5zY3NzJyBhcyB2O1xcclxcbkB1c2UgJy4uLy4uL2Nzcy9taXhpbnMuc2NzcycgYXMgbTtcXHJcXG5cXHJcXG4ub3JkZXItb25saW5lIHtcXHJcXG4gIEBpbmNsdWRlIG0uc2VjdGlvbi1jb250ZW50O1xcclxcbiAgYmFja2dyb3VuZDogdi4kY29sb3ItLS1ncmVlbi1kYXJrO1xcclxcbiAgY29sb3I6IHYuJGNvbG9yLS13aGl0ZTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAmX190ZXh0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICAmIGgyIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYgcCB7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fYnV0dG9uIHtcXHJcXG4gICAgQGluY2x1ZGUgbS5idG4tZGVmYXVsdDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAdXNlICcuLi8uLi9jc3MvbWl4aW5zLnNjc3MnIGFzIG07XFxyXFxuXFxyXFxuLmltYWdlLW1hc29uIHtcXHJcXG4gIEBpbmNsdWRlIG0uc2VjdGlvbi13aWRlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtZ2FwOiAxMHB4O1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxyXFxuICBncmlkLWF1dG8tcm93czogMjAwcHg7XFxyXFxuICBncmlkLWF1dG8tZmxvdzogZGVuc2U7XFxyXFxuXFxyXFxuICAmID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICYgPiBpbWcge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmOm50aC1jaGlsZCgybikge1xcclxcbiAgICAgIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJjpudGgtY2hpbGQoNG4pIHtcXHJcXG4gICAgICBncmlkLXJvdzogc3BhbiAyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmOm50aC1jaGlsZCgybikge1xcclxcbiAgICBncmlkLWNvbHVtbjogc3BhbiAyO1xcclxcbiAgfVxcclxcblxcclxcbiAgJjpudGgtY2hpbGQoNG4pIHtcXHJcXG4gICAgZ3JpZC1yb3c6IHNwYW4gMjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGlmcmFtZSBzcmM9XFxcImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9lbWJlZD9wYj0hMW0xNiExbTEyITFtMyExZDU1MTI4Ljc3NzU3NjIyOTIhMmQtOTcuNzU2MTgxNDgyMzY5NTghM2QzMC4yNzg0NDAzMTEyNTM1NDchMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITJtMSExc2NvZmZlZSE1ZTAhM20yITFzZW4hMnN1cyE0djE2NDAyODMyNjA2MjAhNW0yITFzZW4hMnN1c1xcXCIgd2lkdGg9XFxcIjEwMCVcXFwiIGhlaWdodD1cXFwiMTAwJVxcXCIgc3R5bGU9XFxcImJvcmRlcjowO1xcXCIgYWxsb3dmdWxsc2NyZWVuPVxcXCJcXFwiIGxvYWRpbmc9XFxcImxhenlcXFwiPjwvaWZyYW1lPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbi8qKioqKiogRE9NIENyZWF0aW9uICoqKioqKiovXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSA9ICdkaXYnLCAuLi5jbGFzc2VzKSB7XHJcbiAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XHJcbiAgYWRkQ2xhc3NlcyhuZXdFbGVtZW50LCAuLi5jbGFzc2VzKTtcclxuXHJcbiAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENsYXNzZXMoZWxlbWVudCwgLi4uY2xhc3Nlcykge1xyXG4gIGlmIChjbGFzc2VzKSB7XHJcbiAgICBjbGFzc2VzLmZvckVhY2goKG5ld0NsYXNzKSA9PiB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChuZXdDbGFzcyk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyKGVsZW1lbnQpIHtcclxuICBlbGVtZW50LnRleHRDb250ZW50ID0gJyc7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGFkZENsYXNzZXMsIGNsZWFyIH07XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi9ET00vRE9NJztcclxuXHJcbmNvbnN0IEZvb3RlciA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAnZm9vdGVyJyk7XHJcblxyXG5jb25zdCBmb290ZXJMZWZ0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2Zvb3Rlcl9fbGVmdCcpO1xyXG5jb25zdCBmb290ZXJSaWdodCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdmb290ZXJfX3JpZ2h0Jyk7XHJcblxyXG5mb290ZXJMZWZ0LnRleHRDb250ZW50ID0gJ09kaW4gQnJldyB8IEF1c3RpbiwgVFgnO1xyXG5mb290ZXJSaWdodC50ZXh0Q29udGVudCA9IFwiT3JkZXIgb25saW5lIC0gb3IgZG9uJ3QuIFdoYXRldmVyLlwiO1xyXG5cclxuRm9vdGVyLmFwcGVuZChmb290ZXJMZWZ0LCBmb290ZXJSaWdodCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIGNsZWFyIH0gZnJvbSAnLi4vRE9NL0RPTSc7XHJcbmltcG9ydCBPZGluQnJld0xvZ28gZnJvbSAnLi4vYXNzZXRzL2ltYWdlcy9PZGluQnJld0xvZ28ucG5nJztcclxuXHJcbmNvbnN0IEhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAnaGVhZGVyJyk7XHJcblxyXG4vKiBsb2dvICovXHJcbmNvbnN0IGxvZ28gPSBjcmVhdGVFbGVtZW50KCdkaXYnLCAnaGVhZGVyX19sb2dvJyk7XHJcbkhlYWRlci5hcHBlbmQobG9nbyk7XHJcblxyXG5jb25zdCBsb2dvSW1hZ2UgPSBjcmVhdGVFbGVtZW50KCdpbWcnKTtcclxubG9nb0ltYWdlLnNyYyA9IE9kaW5CcmV3TG9nbztcclxubG9nby5hcHBlbmQobG9nb0ltYWdlKTtcclxuXHJcbi8qIG1lbnUgKi9cclxuY29uc3QgbWVudSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdoZWFkZXJfX21lbnUnKTtcclxuY29uc3QgbWVudUxpc3QgPSBjcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5tZW51LmFwcGVuZENoaWxkKG1lbnVMaXN0KTtcclxuXHJcbmNvbnN0IG1lbnVJdGVtcyA9IFsnPGEgaHJlZj1cIiNcIj5Ib21lPC9hPicsICc8YSBocmVmPVwiI1wiPk1lbnU8L2E+J107XHJcblxyXG5mb3IgKGxldCBpdGVtIG9mIG1lbnVJdGVtcykge1xyXG4gIGxldCBuZXdJdGVtID0gY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICBuZXdJdGVtLmlubmVySFRNTCA9IGl0ZW07XHJcbiAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XHJcbn1cclxuXHJcbkhlYWRlci5hcHBlbmRDaGlsZChtZW51KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL0RPTS9ET00nO1xyXG5cclxuY29uc3QgSGVybyA9IGNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nLCAnaGVybycpO1xyXG5jb25zdCBoZXJvVGV4dCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdoZXJvX190ZXh0Jyk7XHJcblxyXG5jb25zdCBoZXJvVGV4dENvbnRlbnQgPSBjcmVhdGVFbGVtZW50KCdoMScpO1xyXG5oZXJvVGV4dENvbnRlbnQudGV4dENvbnRlbnQgPSAnSGVyZSBpcyBhIHByb21pc2UgdGhhdCB3ZSB3aWxsIGtlZXAuJztcclxuXHJcbmNvbnN0IGhlcm9UZXh0QnV0dG9uID0gY3JlYXRlRWxlbWVudCgnYScsICdoZXJvX190ZXh0LWJ1dHRvbicpO1xyXG5oZXJvVGV4dEJ1dHRvbi50ZXh0Q29udGVudCA9ICdWaWV3IG91ciBtZW51JztcclxuXHJcbmhlcm9UZXh0LmFwcGVuZChoZXJvVGV4dENvbnRlbnQsIGhlcm9UZXh0QnV0dG9uKTtcclxuSGVyby5hcHBlbmQoaGVyb1RleHQpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVybztcclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uL0RPTS9ET00nO1xyXG5cclxuaW1wb3J0IEhlcm8gZnJvbSAnLi9IZXJvL0hlcm8uanMnO1xyXG5pbXBvcnQgSW5mbyBmcm9tICcuL0luZm8vSW5mby5qcyc7XHJcbmltcG9ydCBPcmRlck9ubGluZSBmcm9tICcuL09yZGVyT25saW5lL09yZGVyT25saW5lLmpzJztcclxuaW1wb3J0IEltYWdlTWFzb24gZnJvbSAnLi9JbWFnZU1hc29uL0ltYWdlTWFzb24uanMnO1xyXG5cclxuY29uc3QgSG9tZSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdIb21lJyk7XHJcbkhvbWUuYXBwZW5kKEhlcm8sIEluZm8sIE9yZGVyT25saW5lLCBJbWFnZU1hc29uKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9ET00vRE9NJztcclxuXHJcbmltcG9ydCBJbWFnZTEgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9jYWZlMS5qcGcnO1xyXG5pbXBvcnQgSW1hZ2UyIGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FmZTIuanBnJztcclxuaW1wb3J0IEltYWdlMyBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL2NhZmUzLmpwZyc7XHJcbmltcG9ydCBJbWFnZTQgZnJvbSAnLi4vLi4vYXNzZXRzL2ltYWdlcy9jYWZlNC5qcGcnO1xyXG5pbXBvcnQgSW1hZ2U1IGZyb20gJy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2FmZTUuanBnJztcclxuXHJcbi8qIFBsZWFzZSByZWZlciB0byB0aGlzIGdyZWF0IGNvZGVwZW4gZm9yIG1vcmUgdW5kZXJzdGFuZGluZyBvbiB0aGlzIG1hc29ucnkgaW1hZ2Ugc2V0dXAuIFRoaXMgaXMgb25seSBhIHNsaWdodGx5IG1vZGlmaWVkIHZlcnNpb24gb2YgdGhpcyBvcmlnaW5hbDogaHR0cHM6Ly9jb2RlcGVuLmlvL2lhbXNhaWVmL3Blbi9qT2Jhb0tvICovXHJcblxyXG5jb25zdCBJbWFnZU1hc29uID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsICdpbWFnZS1tYXNvbicpO1xyXG5cclxuY29uc3QgaW1hZ2VzID0gW1xyXG4gIEltYWdlMSxcclxuICBJbWFnZTIsXHJcbiAgSW1hZ2UzLFxyXG4gIEltYWdlNCxcclxuICBJbWFnZTUsXHJcbiAgSW1hZ2UxLFxyXG4gIEltYWdlMixcclxuICBJbWFnZTMsXHJcbiAgSW1hZ2U0LFxyXG4gIEltYWdlNSxcclxuICBJbWFnZTEsXHJcbl07XHJcblxyXG5mb3IgKGxldCBzcmMgb2YgaW1hZ2VzKSB7XHJcbiAgbGV0IGltYWdlID0gY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgaW1hZ2Uuc3JjID0gc3JjO1xyXG5cclxuICBsZXQgZGl2ID0gY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGl2LmFwcGVuZChpbWFnZSk7XHJcblxyXG4gIEltYWdlTWFzb24uYXBwZW5kKGRpdik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlTWFzb247XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi8uLi9ET00vRE9NJztcclxuaW1wb3J0IE1hcCBmcm9tICcuLi8uLi9hc3NldHMvZ29vZ2xlTWFwL21hcC5odG1sJztcclxuXHJcbmNvbnN0IEluZm8gPSBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgJ2luZm8nKTtcclxuXHJcbmNvbnN0IGluZm9UZXh0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2luZm9fX3RleHQnKTtcclxuSW5mby5hcHBlbmQoaW5mb1RleHQpO1xyXG5cclxuY29uc3QgaW5mb1RleHRTY2hlZHVsZUhlYWRpbmcgPSBjcmVhdGVFbGVtZW50KCdoMycpO1xyXG5pbmZvVGV4dFNjaGVkdWxlSGVhZGluZy50ZXh0Q29udGVudCA9ICdIb3VycyBvZiBPcGVyYXRpb24nO1xyXG5cclxuY29uc3QgaW5mb1RleHRTY2hlZHVsZSA9IGNyZWF0ZUVsZW1lbnQoJ3VsJywgJ2luZm9fX3RleHQtLWhvdXJzJyk7XHJcbmNvbnN0IGluZm9UZXh0U2NoZWR1bGVDb250ZW50ID0gW1xyXG4gICdNb25kYXk6IDhhbSAtIDhwbScsXHJcbiAgJ1R1ZXNkYXk6IDhhbSAtIDhwbScsXHJcbiAgJ1dlZG5lc2RheTogOGFtIC0gOHBtJyxcclxuICAnVGh1cnNkYXk6IDhhbSAtIDhwbScsXHJcbiAgJ0ZyaWRheTogOGFtIC0gOHBtJyxcclxuICAnU2F0dXJkYXk6IDhhbSAtIDhwbScsXHJcbiAgJ1N1bmRheTogQ2xvc2VkJyxcclxuXTtcclxuXHJcbmZvciAobGV0IGl0ZW0gb2YgaW5mb1RleHRTY2hlZHVsZUNvbnRlbnQpIHtcclxuICBsZXQgbGkgPSBjcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gIGxpLnRleHRDb250ZW50ID0gaXRlbTtcclxuICBpbmZvVGV4dFNjaGVkdWxlLmFwcGVuZChsaSk7XHJcbn1cclxuXHJcbmluZm9UZXh0LmFwcGVuZChpbmZvVGV4dFNjaGVkdWxlSGVhZGluZywgaW5mb1RleHRTY2hlZHVsZSk7XHJcblxyXG5jb25zdCBpbmZvTWFwID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ2luZm9fX21hcCcpO1xyXG5pbmZvTWFwLmlubmVySFRNTCA9IE1hcDtcclxuXHJcbkluZm8uYXBwZW5kKGluZm9NYXApO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5mbztcclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJy4uLy4uL0RPTS9ET00nO1xyXG5cclxuY29uc3QgT3JkZXJPbmxpbmUgPSBjcmVhdGVFbGVtZW50KCdzZWN0aW9uJywgJ29yZGVyLW9ubGluZScpO1xyXG5cclxuY29uc3Qgb3JkZXJPbmxpbmVUZXh0ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ29yZGVyLW9ubGluZV9fdGV4dCcpO1xyXG5PcmRlck9ubGluZS5hcHBlbmQob3JkZXJPbmxpbmVUZXh0KTtcclxuXHJcbmNvbnN0IG9yZGVyT25saW5lVGV4dEhlYWRlciA9IGNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbm9yZGVyT25saW5lVGV4dEhlYWRlci50ZXh0Q29udGVudCA9IFwiT3JkZXIgb25saW5lIC0gb3IgZG9uJ3QuIFdoYXRldmVyXCI7XHJcblxyXG5jb25zdCBvcmRlck9ubGluZVRleHRQYXJhID0gY3JlYXRlRWxlbWVudCgncCcpO1xyXG5vcmRlck9ubGluZVRleHRQYXJhLnRleHRDb250ZW50ID1cclxuICAnSGFsdmFoIGljaW5nIHdhZmVyIGplbGx5IGRvbnV0IGNodXBhIGNodXBzIGRyYWfDqWUgY29va2llIGJlYXIgY2xhdy4gQmlzY3VpdCBjYWtlIHRvcHBpbmcgY29va2llIG9hdCBjYWtlIGJyb3duaWUuIEd1bW1pIGJlYXJzIG9hdCBjYWtlIGxlbW9uIGRybztwcyBjYXJyb3QgY2FrZSBmcnVpdGNha2UuIEplbGx5LW8gY2FuZHkgY2FuZXMgc3VnYXIgcGx1bSBkZXNzZXJ0IGhhbHZhaCBpY2luZyBkZXNzZXJ0IG9hdCBjYWtlLic7XHJcblxyXG5jb25zdCBvcmRlck9ubGluZUJ1dHRvbiA9IGNyZWF0ZUVsZW1lbnQoJ2EnLCAnb3JkZXItb25saW5lX19idXR0b24nKTtcclxub3JkZXJPbmxpbmVCdXR0b24udGV4dENvbnRlbnQgPSAnT3JkZXIgTm93Jztcclxub3JkZXJPbmxpbmVCdXR0b24uYXR0cmlidXRlc1snaHJlZiddID0gJyMnO1xyXG5cclxub3JkZXJPbmxpbmVUZXh0LmFwcGVuZChcclxuICBvcmRlck9ubGluZVRleHRIZWFkZXIsXHJcbiAgb3JkZXJPbmxpbmVUZXh0UGFyYSxcclxuICBvcmRlck9ubGluZUJ1dHRvblxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgT3JkZXJPbmxpbmU7XHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tICcuLi9ET00vRE9NJztcclxuaW1wb3J0IE1lbnVEYXRhIGZyb20gJy4uL2Fzc2V0cy9tZW51Lmpzb24nO1xyXG5cclxuY29uc3QgTWVudSA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdNZW51Jyk7XHJcblxyXG4vKiBoZWFkZXIgdGV4dCAqL1xyXG5jb25zdCBtZW51SGVhZGVyID0gY3JlYXRlRWxlbWVudCgnc2VjdGlvbicsICdNZW51X19oZWFkZXInKTtcclxuXHJcbmNvbnN0IG1lbnVIZWFkZXJUZXh0ID0gY3JlYXRlRWxlbWVudCgnaDEnLCAnTWVudV9faGVhZGVyLS10ZXh0Jyk7XHJcbm1lbnVIZWFkZXJUZXh0LnRleHRDb250ZW50ID0gJ091ciBNZW51JztcclxuXHJcbm1lbnVIZWFkZXIuYXBwZW5kKG1lbnVIZWFkZXJUZXh0KTtcclxuXHJcbi8qIG1haW4gbWVudSAqL1xyXG5jb25zdCBvdXJNZW51ID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ01lbnVfX291ci1tZW51Jyk7XHJcblxyXG4vKiBtZW51IGRhdGEgKi9cclxuZm9yIChsZXQgc2VjdGlvbiBpbiBNZW51RGF0YSkge1xyXG4gIGxldCBuZXdTZWN0aW9uID0gY3JlYXRlRWxlbWVudCgnZGl2JywgJ01lbnVfX291ci1tZW51X19zZWN0aW9uJyk7XHJcbiAgb3VyTWVudS5hcHBlbmQobmV3U2VjdGlvbik7XHJcblxyXG4gIGxldCBzZWN0aW9uVGl0bGUgPSBjcmVhdGVFbGVtZW50KCdoMicsICdNZW51X19vdXItbWVudV9fc2VjdGlvbi10aXRsZScpO1xyXG4gIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9IHNlY3Rpb247XHJcblxyXG4gIG5ld1NlY3Rpb24uYXBwZW5kKHNlY3Rpb25UaXRsZSk7XHJcblxyXG4gIE1lbnVEYXRhW3NlY3Rpb25dLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGxldCBpdGVtTmFtZSA9IGNyZWF0ZUVsZW1lbnQoJ2g0JywgJ01lbnVfX291ci1tZW51X19zZWN0aW9uLWl0ZW0nKTtcclxuICAgIGxldCBpdGVtSW5mbyA9IGNyZWF0ZUVsZW1lbnQoJ3AnLCAnTWVudV9fb3VyLW1lbnVfX3NlY3Rpb24taXRlbS0taW5mbycpO1xyXG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBPYmplY3Qua2V5cyhpdGVtKTtcclxuICAgIGl0ZW1JbmZvLnRleHRDb250ZW50ID0gT2JqZWN0LnZhbHVlcyhpdGVtKTtcclxuXHJcbiAgICBuZXdTZWN0aW9uLmFwcGVuZChpdGVtTmFtZSwgaXRlbUluZm8pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5NZW51LmFwcGVuZChtZW51SGVhZGVyLCBvdXJNZW51KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lbnU7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgY2xlYXIgfSBmcm9tICcuL0RPTS9ET00uanMnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vRm9vdGVyL0Zvb3Rlcic7XHJcbmltcG9ydCBIb21lIGZyb20gJy4vSG9tZS9Ib21lJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51L01lbnUnO1xyXG5pbXBvcnQgJy4vY3NzL3N0eWxlLnNjc3MnO1xyXG5cclxuY29uc3QgQ29udGVudCA9IGNyZWF0ZUVsZW1lbnQoJ2RpdicsICdjb250ZW50Jyk7XHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kKEhlYWRlciwgQ29udGVudCwgRm9vdGVyKTtcclxuQ29udGVudC5hcHBlbmQoSG9tZSk7XHJcblxyXG4vLyBuYXZpZ2F0aW9uXHJcbmNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbWVudScpO1xyXG5cclxubGlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gIGxldCBwYWdlTmFtZSA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gIGUudGFyZ2V0Lm5vZGVOYW1lID09PSAnQScgPyBjaGFuZ2VQYWdlKHBhZ2VOYW1lKSA6IG51bGw7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2hhbmdlUGFnZShwYWdlKSB7XHJcbiAgY2xlYXIoQ29udGVudCk7XHJcblxyXG4gIHN3aXRjaCAocGFnZSkge1xyXG4gICAgY2FzZSAnSG9tZSc6XHJcbiAgICAgIENvbnRlbnQuYXBwZW5kKEhvbWUpO1xyXG4gICAgICBicmVhaztcclxuICAgIGNhc2UgJ01lbnUnOlxyXG4gICAgICBDb250ZW50LmFwcGVuZChNZW51KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICBjYXNlICdDb250YWN0JzpcclxuICAgICAgYnJlYWs7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==