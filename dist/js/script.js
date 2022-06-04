/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_animateWithScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/animateWithScroll.js */ "./src/assets/js/modules/animateWithScroll.js");
/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs.js */ "./src/assets/js/modules/tabs.js");
/* harmony import */ var _modules_gallery_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gallery.js */ "./src/assets/js/modules/gallery.js");
/* harmony import */ var _modules_mask_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask.js */ "./src/assets/js/modules/mask.js");
/* harmony import */ var _modules_downloadFile_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/downloadFile.js */ "./src/assets/js/modules/downloadFile.js");




 // scroll animations for animate.css

new WOW().init(); // scroll animations for elements with ".js-scroll"

Object(_modules_animateWithScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // tabs

Object(_modules_tabs_js__WEBPACK_IMPORTED_MODULE_1__["default"])('.route-info__title-item', '.route-info__content-item'); // route gallery 

Object(_modules_gallery_js__WEBPACK_IMPORTED_MODULE_2__["default"])('.route-info__item-photo img'); // phone mask

Object(_modules_mask_js__WEBPACK_IMPORTED_MODULE_3__["default"])('.route-download__input'); // download pdf file second section

Object(_modules_downloadFile_js__WEBPACK_IMPORTED_MODULE_4__["default"])('.route-download__btn', 'download-files/1.pdf', '.route-download__input');

/***/ }),

/***/ "./src/assets/js/modules/animateWithScroll.js":
/*!****************************************************!*\
  !*** ./src/assets/js/modules/animateWithScroll.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return animateWithScroll; });
function animateWithScroll() {
  const scrollElements = document.querySelectorAll(".js-scroll");

  const elementInView = function (el) {
    let dividend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    const elementTop = el.getBoundingClientRect().top;
    return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
  };

  const elementOutofView = el => {
    const elementTop = el.getBoundingClientRect().top;
    return elementTop > (window.innerHeight || document.documentElement.clientHeight);
  };

  const displayScrollElement = element => {
    element.classList.add("scrolled");
  };

  const hideScrollElement = element => {
    element.classList.remove("scrolled");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
      if (elementInView(el, 1.25)) {
        displayScrollElement(el);
      } else if (elementOutofView(el)) {
        hideScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
}

/***/ }),

/***/ "./src/assets/js/modules/calcScroll.js":
/*!*********************************************!*\
  !*** ./src/assets/js/modules/calcScroll.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calcScroll; });
function calcScroll() {
  let div = document.createElement('div');
  div.style.width = '50px';
  div.style.height = '50px';
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.appendChild(div);
  let scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth - 3;
}

/***/ }),

/***/ "./src/assets/js/modules/downloadFile.js":
/*!***********************************************!*\
  !*** ./src/assets/js/modules/downloadFile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return downloadFile; });
function downloadFile(btnSelector, fileUrl) {
  let inputCheckSelector = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  const input = document.querySelector(inputCheckSelector);
  const btn = document.querySelector(btnSelector);

  if (input) {
    input.addEventListener('input', () => {
      if (input.value.length == 19) btn.removeAttribute('disabled');else btn.setAttribute("disabled", "disabled");
    });
  }

  btn.addEventListener('click', () => {
    download();
    input.value = '';
    btn.setAttribute("disabled", "disabled");
  });

  function download() {
    const link = document.createElement('a');
    link.setAttribute('href', fileUrl);
    link.setAttribute('download', 'fileName');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

/***/ }),

/***/ "./src/assets/js/modules/gallery.js":
/*!******************************************!*\
  !*** ./src/assets/js/modules/gallery.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return gallery; });
/* harmony import */ var _calcScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcScroll.js */ "./src/assets/js/modules/calcScroll.js");

function gallery(itemSelector) {
  const overlay = document.querySelector('.overlay');
  const items = document.querySelectorAll(itemSelector);
  const imgEl = document.createElement('img');
  imgEl.classList.add('gallery-img');
  const scroll = Object(_calcScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  items.forEach(item => {
    item.addEventListener('click', () => {
      imgEl.src = item.getAttribute('src');
      imgEl.alt = item.getAttribute('alt');
      activateOverlay();
    });
  });
  closeOverlay();

  function activateOverlay() {
    overlay.classList.add('active');
    document.body.style.overflowY = 'hidden';
    document.body.style.marginRight = scroll + 'px';
    overlay.appendChild(imgEl);
  }

  function closeOverlay() {
    document.addEventListener('keydown', e => {
      if (e.keyCode === 27) {
        removeOverlay();
      }
    });
    overlay.addEventListener('click', e => {
      if (e.target != imgEl) {
        removeOverlay();
      }
    });

    function removeOverlay() {
      overlay.classList.remove('active');
      document.body.style.overflowY = 'visible';
      document.body.style.marginRight = '0px';
      imgEl.remove();
    }
  }
}

/***/ }),

/***/ "./src/assets/js/modules/mask.js":
/*!***************************************!*\
  !*** ./src/assets/js/modules/mask.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mask; });
function mask(selector) {
  function setCursorPosition(pos, elem) {
    elem.focus();

    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }

  function createMask(event) {
    let matrix = '+38 (0__) ___ __ __';
    let i = 0;
    let def = matrix.replace(/\D/g, '');
    let val = this.value.replace(/\D/g, '');

    if (def.length >= val.length) {
      val = def;
    }

    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });

    if (event.type === 'blur') {
      if (this.value.length == 2) {
        this.value = '';
      }
    } else {
      setCursorPosition(this.value.length, this);
    }
  }

  let inputs = document.querySelectorAll(selector);
  inputs.forEach(input => {
    input.addEventListener('input', createMask);
    input.addEventListener('focus', createMask);
    input.addEventListener('blur', createMask);
  });
}
;

/***/ }),

/***/ "./src/assets/js/modules/tabs.js":
/*!***************************************!*\
  !*** ./src/assets/js/modules/tabs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return tabs; });
function tabs(titleSelector, contentSelector) {
  const titles = document.querySelectorAll(titleSelector);
  const contents = document.querySelectorAll(contentSelector);
  const activeClass = 'active';
  removeActiveClass();
  addActiveClass(0);
  titles.forEach((title, idx) => {
    title.addEventListener('click', () => {
      removeActiveClass();
      addActiveClass(idx);
    });
  });

  function addActiveClass(idx) {
    titles[idx].classList.add(activeClass);
    contents[idx].classList.add(activeClass);
  }

  function removeActiveClass() {
    titles.forEach(title => title.classList.remove(activeClass));
    contents.forEach(content => content.classList.remove(activeClass));
  }
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map