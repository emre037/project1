(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }













function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_13__.Controller);


/***/ }),

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/app.css */ "./assets/styles/app.css");
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bootstrap */ "./assets/bootstrap.js");






/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application

var nav = 0;
var clicked = null;
var events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];
var calendar = document.getElementById('calendar');
var newEventModal = document.getElementById('newEventModal');
var deleteEventModal = document.getElementById('deleteEventModal');
var backDrop = document.getElementById('modalBackDrop');
var eventTitleInput = document.getElementById('eventTitleInput');
var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
function openModal(date) {
  clicked = date;
  var eventForDay = events.find(function (e) {
    return e.date === clicked;
  });
  if (eventForDay) {
    document.getElementById('eventText').innerText = eventForDay.title;
    deleteEventModal.style.display = 'block';
  } else {
    newEventModal.style.display = 'block';
  }
  backDrop.style.display = 'block';
}
function load() {
  var dt = new Date();
  if (nav !== 0) {
    dt.setMonth(new Date().getMonth() + nav);
  }
  var day = dt.getDate();
  var month = dt.getMonth();
  var year = dt.getFullYear();
  var firstDayOfMonth = new Date(year, month, 1);
  var daysInMonth = new Date(year, month + 1, 0).getDate();
  var dateString = firstDayOfMonth.toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  });
  var paddingDays = weekdays.indexOf(dateString.split(', ')[0]);
  document.getElementById('monthDisplay').innerText = "".concat(dt.toLocaleDateString('en-us', {
    month: 'long'
  }), " ").concat(year);
  calendar.innerHTML = '';
  var _loop = function _loop(i) {
    var daySquare = document.createElement('div');
    daySquare.classList.add('day');
    var dayString = "".concat(month + 1, "/").concat(i - paddingDays, "/").concat(year);
    if (i > paddingDays) {
      daySquare.innerText = i - paddingDays;
      var eventForDay = events.find(function (e) {
        return e.date === dayString;
      });
      if (i - paddingDays === day && nav === 0) {
        daySquare.id = 'currentDay';
      }
      if (eventForDay) {
        var eventDiv = document.createElement('div');
        eventDiv.classList.add('event');
        eventDiv.innerText = eventForDay.title;
        daySquare.appendChild(eventDiv);
      }
      daySquare.addEventListener('click', function () {
        return openModal(dayString);
      });
    } else {
      daySquare.classList.add('padding');
    }
    calendar.appendChild(daySquare);
  };
  for (var i = 1; i <= paddingDays + daysInMonth; i++) {
    _loop(i);
  }
}
function closeModal() {
  eventTitleInput.classList.remove('error');
  newEventModal.style.display = 'none';
  deleteEventModal.style.display = 'none';
  backDrop.style.display = 'none';
  eventTitleInput.value = '';
  clicked = null;
  load();
}
function saveEvent() {
  if (eventTitleInput.value) {
    eventTitleInput.classList.remove('error');
    events.push({
      date: clicked,
      title: eventTitleInput.value
    });
    localStorage.setItem('events', JSON.stringify(events));
    closeModal();
  } else {
    eventTitleInput.classList.add('error');
  }
}
function deleteEvent() {
  events = events.filter(function (e) {
    return e.date !== clicked;
  });
  localStorage.setItem('events', JSON.stringify(events));
  closeModal();
}
function initButtons() {
  document.getElementById('nextButton').addEventListener('click', function () {
    nav++;
    load();
  });
  document.getElementById('backButton').addEventListener('click', function () {
    nav--;
    load();
  });
  document.getElementById('saveButton').addEventListener('click', saveEvent);
  document.getElementById('cancelButton').addEventListener('click', closeModal);
  document.getElementById('deleteButton').addEventListener('click', deleteEvent);
  document.getElementById('closeButton').addEventListener('click', closeModal);
}
initButtons();
load();

/***/ }),

/***/ "./assets/bootstrap.js":
/*!*****************************!*\
  !*** ./assets/bootstrap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/styles/app.css":
/*!*******************************!*\
  !*** ./assets/styles/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-method-is-strict_js-node_modules_core-js_modules-52b176","vendors-node_modules_symfony_stimulus-bridge_dist_index_js-node_modules_core-js_modules_es_ar-db55c4"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsWUFBTTtJQUNsRXBELEdBQUcsRUFBRTtJQUNMd0IsSUFBSSxFQUFFO0VBQ1YsQ0FBQyxDQUFDO0VBRUZoQixRQUFRLENBQUNDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQzJDLGdCQUFnQixDQUFDLE9BQU8sRUFBRUksU0FBUyxDQUFDO0VBQzFFaEQsUUFBUSxDQUFDQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMyQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUVDLFVBQVUsQ0FBQztFQUM3RTdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDMkMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFUSxXQUFXLENBQUM7RUFDOUVwRCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQzJDLGdCQUFnQixDQUFDLE9BQU8sRUFBRUMsVUFBVSxDQUFDO0FBQ2hGO0FBRUFTLFdBQVcsRUFBRTtBQUNidEMsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEpzRDs7QUFFNUQ7QUFDTyxJQUFNd0MsR0FBRyxHQUFHRCwwRUFBZ0IsQ0FBQ0UseUlBSW5DLENBQUM7O0FBRUY7QUFDQTs7Ozs7Ozs7Ozs7O0FDVkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vIFxcLltqdF1zeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMuanNvbiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29udHJvbGxlcnMvaGVsbG9fY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuY3NzPzNmYmEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwiZXhwb3J0IGRlZmF1bHQge1xufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCIvKlxuICogV2VsY29tZSB0byB5b3VyIGFwcCdzIG1haW4gSmF2YVNjcmlwdCBmaWxlIVxuICpcbiAqIFdlIHJlY29tbWVuZCBpbmNsdWRpbmcgdGhlIGJ1aWx0IHZlcnNpb24gb2YgdGhpcyBKYXZhU2NyaXB0IGZpbGVcbiAqIChhbmQgaXRzIENTUyBmaWxlKSBpbiB5b3VyIGJhc2UgbGF5b3V0IChiYXNlLmh0bWwudHdpZykuXG4gKi9cblxuLy8gYW55IENTUyB5b3UgaW1wb3J0IHdpbGwgb3V0cHV0IGludG8gYSBzaW5nbGUgY3NzIGZpbGUgKGFwcC5jc3MgaW4gdGhpcyBjYXNlKVxuaW1wb3J0ICcuL3N0eWxlcy9hcHAuY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4vYm9vdHN0cmFwJztcblxubGV0IG5hdiA9IDA7XG5sZXQgY2xpY2tlZCA9IG51bGw7XG5sZXQgZXZlbnRzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2V2ZW50cycpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZXZlbnRzJykpIDogW107XG5cbmNvbnN0IGNhbGVuZGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbGVuZGFyJyk7XG5jb25zdCBuZXdFdmVudE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld0V2ZW50TW9kYWwnKTtcbmNvbnN0IGRlbGV0ZUV2ZW50TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVsZXRlRXZlbnRNb2RhbCcpO1xuY29uc3QgYmFja0Ryb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWxCYWNrRHJvcCcpO1xuY29uc3QgZXZlbnRUaXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2V2ZW50VGl0bGVJbnB1dCcpO1xuY29uc3Qgd2Vla2RheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG5cbmZ1bmN0aW9uIG9wZW5Nb2RhbChkYXRlKSB7XG4gICAgY2xpY2tlZCA9IGRhdGU7XG5cbiAgICBjb25zdCBldmVudEZvckRheSA9IGV2ZW50cy5maW5kKGUgPT4gZS5kYXRlID09PSBjbGlja2VkKTtcblxuICAgIGlmIChldmVudEZvckRheSkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXZlbnRUZXh0JykuaW5uZXJUZXh0ID0gZXZlbnRGb3JEYXkudGl0bGU7XG4gICAgICAgIGRlbGV0ZUV2ZW50TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbmV3RXZlbnRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICBiYWNrRHJvcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZnVuY3Rpb24gbG9hZCgpIHtcbiAgICBjb25zdCBkdCA9IG5ldyBEYXRlKCk7XG5cbiAgICBpZiAobmF2ICE9PSAwKSB7XG4gICAgICAgIGR0LnNldE1vbnRoKG5ldyBEYXRlKCkuZ2V0TW9udGgoKSArIG5hdik7XG4gICAgfVxuXG4gICAgY29uc3QgZGF5ID0gZHQuZ2V0RGF0ZSgpO1xuICAgIGNvbnN0IG1vbnRoID0gZHQuZ2V0TW9udGgoKTtcbiAgICBjb25zdCB5ZWFyID0gZHQuZ2V0RnVsbFllYXIoKTtcblxuICAgIGNvbnN0IGZpcnN0RGF5T2ZNb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxKTtcbiAgICBjb25zdCBkYXlzSW5Nb250aCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpO1xuXG4gICAgY29uc3QgZGF0ZVN0cmluZyA9IGZpcnN0RGF5T2ZNb250aC50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLXVzJywge1xuICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgbW9udGg6ICdudW1lcmljJyxcbiAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgfSk7XG4gICAgY29uc3QgcGFkZGluZ0RheXMgPSB3ZWVrZGF5cy5pbmRleE9mKGRhdGVTdHJpbmcuc3BsaXQoJywgJylbMF0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vbnRoRGlzcGxheScpLmlubmVyVGV4dCA9XG4gICAgICAgIGAke2R0LnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tdXMnLCB7IG1vbnRoOiAnbG9uZycgfSl9ICR7eWVhcn1gO1xuXG4gICAgY2FsZW5kYXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBmb3IobGV0IGkgPSAxOyBpIDw9IHBhZGRpbmdEYXlzICsgZGF5c0luTW9udGg7IGkrKykge1xuICAgICAgICBjb25zdCBkYXlTcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF5U3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2RheScpO1xuXG4gICAgICAgIGNvbnN0IGRheVN0cmluZyA9IGAke21vbnRoICsgMX0vJHtpIC0gcGFkZGluZ0RheXN9LyR7eWVhcn1gO1xuXG4gICAgICAgIGlmIChpID4gcGFkZGluZ0RheXMpIHtcbiAgICAgICAgICAgIGRheVNxdWFyZS5pbm5lclRleHQgPSBpIC0gcGFkZGluZ0RheXM7XG4gICAgICAgICAgICBjb25zdCBldmVudEZvckRheSA9IGV2ZW50cy5maW5kKGUgPT4gZS5kYXRlID09PSBkYXlTdHJpbmcpO1xuXG4gICAgICAgICAgICBpZiAoaSAtIHBhZGRpbmdEYXlzID09PSBkYXkgJiYgbmF2ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZGF5U3F1YXJlLmlkID0gJ2N1cnJlbnREYXknO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXZlbnRGb3JEYXkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGV2ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2V2ZW50Jyk7XG4gICAgICAgICAgICAgICAgZXZlbnREaXYuaW5uZXJUZXh0ID0gZXZlbnRGb3JEYXkudGl0bGU7XG4gICAgICAgICAgICAgICAgZGF5U3F1YXJlLmFwcGVuZENoaWxkKGV2ZW50RGl2KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGF5U3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gb3Blbk1vZGFsKGRheVN0cmluZykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF5U3F1YXJlLmNsYXNzTGlzdC5hZGQoJ3BhZGRpbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhbGVuZGFyLmFwcGVuZENoaWxkKGRheVNxdWFyZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIGV2ZW50VGl0bGVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuICAgIG5ld0V2ZW50TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkZWxldGVFdmVudE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgYmFja0Ryb3Auc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBldmVudFRpdGxlSW5wdXQudmFsdWUgPSAnJztcbiAgICBjbGlja2VkID0gbnVsbDtcbiAgICBsb2FkKCk7XG59XG5cbmZ1bmN0aW9uIHNhdmVFdmVudCgpIHtcbiAgICBpZiAoZXZlbnRUaXRsZUlucHV0LnZhbHVlKSB7XG4gICAgICAgIGV2ZW50VGl0bGVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdlcnJvcicpO1xuXG4gICAgICAgIGV2ZW50cy5wdXNoKHtcbiAgICAgICAgICAgIGRhdGU6IGNsaWNrZWQsXG4gICAgICAgICAgICB0aXRsZTogZXZlbnRUaXRsZUlucHV0LnZhbHVlLFxuICAgICAgICB9KTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZXZlbnRzJywgSlNPTi5zdHJpbmdpZnkoZXZlbnRzKSk7XG4gICAgICAgIGNsb3NlTW9kYWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBldmVudFRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgnZXJyb3InKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUV2ZW50KCkge1xuICAgIGV2ZW50cyA9IGV2ZW50cy5maWx0ZXIoZSA9PiBlLmRhdGUgIT09IGNsaWNrZWQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdldmVudHMnLCBKU09OLnN0cmluZ2lmeShldmVudHMpKTtcbiAgICBjbG9zZU1vZGFsKCk7XG59XG5cbmZ1bmN0aW9uIGluaXRCdXR0b25zKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0QnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG5hdisrO1xuICAgICAgICBsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja0J1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBuYXYtLTtcbiAgICAgICAgbG9hZCgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NhdmVCdXR0b24nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNhdmVFdmVudCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbEJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlRXZlbnQpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZUJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VNb2RhbCk7XG59XG5cbmluaXRCdXR0b25zKCk7XG5sb2FkKCk7IiwiaW1wb3J0IHsgc3RhcnRTdGltdWx1c0FwcCB9IGZyb20gJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZSc7XG5cbi8vIFJlZ2lzdGVycyBTdGltdWx1cyBjb250cm9sbGVycyBmcm9tIGNvbnRyb2xsZXJzLmpzb24gYW5kIGluIHRoZSBjb250cm9sbGVycy8gZGlyZWN0b3J5XG5leHBvcnQgY29uc3QgYXBwID0gc3RhcnRTdGltdWx1c0FwcChyZXF1aXJlLmNvbnRleHQoXG4gICAgJ0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyIS4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsIm5hdiIsImNsaWNrZWQiLCJldmVudHMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiY2FsZW5kYXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibmV3RXZlbnRNb2RhbCIsImRlbGV0ZUV2ZW50TW9kYWwiLCJiYWNrRHJvcCIsImV2ZW50VGl0bGVJbnB1dCIsIndlZWtkYXlzIiwib3Blbk1vZGFsIiwiZGF0ZSIsImV2ZW50Rm9yRGF5IiwiZmluZCIsImUiLCJpbm5lclRleHQiLCJ0aXRsZSIsInN0eWxlIiwiZGlzcGxheSIsImxvYWQiLCJkdCIsIkRhdGUiLCJzZXRNb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsIm1vbnRoIiwieWVhciIsImdldEZ1bGxZZWFyIiwiZmlyc3REYXlPZk1vbnRoIiwiZGF5c0luTW9udGgiLCJkYXRlU3RyaW5nIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwid2Vla2RheSIsInBhZGRpbmdEYXlzIiwiaW5kZXhPZiIsInNwbGl0IiwiaW5uZXJIVE1MIiwiaSIsImRheVNxdWFyZSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkYXlTdHJpbmciLCJpZCIsImV2ZW50RGl2IiwiYXBwZW5kQ2hpbGQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2VNb2RhbCIsInJlbW92ZSIsInZhbHVlIiwic2F2ZUV2ZW50IiwicHVzaCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJkZWxldGVFdmVudCIsImZpbHRlciIsImluaXRCdXR0b25zIiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsInJlcXVpcmUiLCJjb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==