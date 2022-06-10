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
/* harmony import */ var _modules_videoPopup_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/videoPopup.js */ "./src/assets/js/modules/videoPopup.js");
/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/modal.js */ "./src/assets/js/modules/modal.js");
/* harmony import */ var _modules_toTop_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/toTop.js */ "./src/assets/js/modules/toTop.js");
/* harmony import */ var _modules_adaptiveAnimate_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/adaptiveAnimate.js */ "./src/assets/js/modules/adaptiveAnimate.js");









/* 
// scroll animations for animate.css
new WOW().init()
// scroll animations for elements with ".js-scroll"
animateWithScroll()
// tabs
tabs('.route-info__title-item', '.route-info__content-item')
// gallery 
gallery('.gallery-watch')
// phone mask
mask('.route-download__input')
// download pdf file second section
downloadFile('.route-download__btn', 'download-files/1.pdf', '.route-download__input')
// liner video popup
videoPopup('https://www.youtube.com/embed/85a0e62bP2E', '.liner-video__btn')
// modal window
modal('[data-open-modal]')
// to top arrow
toTop() */

Object(_modules_adaptiveAnimate_js__WEBPACK_IMPORTED_MODULE_8__["default"])();

/***/ }),

/***/ "./src/assets/js/modules/adaptiveAnimate.js":
/*!**************************************************!*\
  !*** ./src/assets/js/modules/adaptiveAnimate.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return adaptiveAnimate; });
function adaptiveAnimate() {
  const screenWidth = window.screen.width;

  if (screenWidth <= 900) {
    header();
  }

  function header() {
    const header = document.querySelector('.header');
    header.querySelectorAll('.animate__delay-2s').forEach(item => {
      item.classList.add('animate__delay-1-3s');
      item.classList.remove('animate__delay-2s');
    });
    header.querySelector('.animate__delay-2-4s').classList.add('animate__delay-1-6s');
    header.querySelector('.animate__delay-2-4s').classList.remove('animate__delay-2-4s');
    header.querySelector('.animate__delay-2-7s').classList.add('animate__delay-1-9s');
    header.querySelector('.animate__delay-2-7s').classList.remove('animate__delay-2-7s');
    header.querySelector('.animate__delay-3s').classList.add('animate__delay-2-2s');
    header.querySelector('.animate__delay-3s').classList.remove('animate__delay-3s');
  }
}

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
  const form = document.querySelector('.route-download__form');
  const input = document.querySelector(inputCheckSelector);
  const btn = document.querySelector(btnSelector);

  if (input) {
    input.addEventListener('input', () => {
      if (input.value.length == 19) btn.removeAttribute('disabled');else btn.setAttribute("disabled", "disabled");
    });
  }

  btn.addEventListener('click', () => {
    download();
    form.addEventListener('submit', e => {
      e.preventDefault();
      const formData = new FormData(form);
      postData('./server.php', formData).then(res => {
        console.log(res);
      }).finally(() => {
        input.value = '';
      });
    });
    setTimeout(() => {
      btn.setAttribute("disabled", "disabled");
    });
  });

  const postData = async (url, data) => {
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  };

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
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlay */ "./src/assets/js/modules/overlay.js");

function gallery(itemSelector) {
  const items = document.querySelectorAll(itemSelector);
  const imgEl = document.createElement('img');
  imgEl.classList.add('gallery-img');
  items.forEach(item => {
    item.addEventListener('click', () => {
      imgEl.src = item.getAttribute('src');
      imgEl.alt = item.getAttribute('alt');
      Object(_overlay__WEBPACK_IMPORTED_MODULE_0__["activateOverlay"])(imgEl);
    });
  });
  Object(_overlay__WEBPACK_IMPORTED_MODULE_0__["closeOverlay"])(imgEl);
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

/***/ "./src/assets/js/modules/modal.js":
/*!****************************************!*\
  !*** ./src/assets/js/modules/modal.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal; });
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlay */ "./src/assets/js/modules/overlay.js");
/* harmony import */ var _modalForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalForm.js */ "./src/assets/js/modules/modalForm.js");
/* harmony import */ var _mask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mask.js */ "./src/assets/js/modules/mask.js");



function modal(triggers) {
  const btns = document.querySelectorAll(triggers);
  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector('.modal').style.display = 'flex';
      Object(_overlay__WEBPACK_IMPORTED_MODULE_0__["activateOverlay"])();
      Object(_mask_js__WEBPACK_IMPORTED_MODULE_2__["default"])('.modal__input-tel');
    });
  });
  Object(_modalForm_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/***/ }),

/***/ "./src/assets/js/modules/modalForm.js":
/*!********************************************!*\
  !*** ./src/assets/js/modules/modalForm.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modalForm; });
function modalForm() {
  const form = document.querySelectorAll('.modal-form');
  const inputs = document.querySelectorAll('.modal-form input');
  const message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  const postData = async (url, data) => {
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
      method: 'POST',
      body: data
    });
    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach(item => {
      item.value = '';
    });
  };

  form.forEach(item => {
    item.addEventListener('submit', e => {
      e.preventDefault();
      let statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      item.appendChild(statusMessage);
      const formData = new FormData(item);
      postData('./server.php', formData).then(res => {
        console.log(res);
        statusMessage.textContent = message.success;
      }).catch(() => {
        statusMessage.textContent = message.failure;
      }).finally(() => {
        clearInputs();
        setTimeout(() => {
          document.querySelector('.overlay').classList.remove('active');
          document.body.style.overflowY = 'visible';
          document.body.style.marginRight = '0px';
          document.querySelector('.modal').style.display = 'none';
          statusMessage.remove();
        }, 3000);
      });
    });
  });
}

/***/ }),

/***/ "./src/assets/js/modules/overlay.js":
/*!******************************************!*\
  !*** ./src/assets/js/modules/overlay.js ***!
  \******************************************/
/*! exports provided: activateOverlay, closeOverlay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateOverlay", function() { return activateOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeOverlay", function() { return closeOverlay; });
/* harmony import */ var _calcScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcScroll.js */ "./src/assets/js/modules/calcScroll.js");

function activateOverlay() {
  let elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const scroll = Object(_calcScroll_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const overlay = document.querySelector('.overlay');
  overlay.classList.add('active');
  document.body.style.overflowY = 'hidden';
  document.body.style.marginRight = scroll + 'px';

  if (elem != '') {
    overlay.appendChild(elem);
  }
}
function closeOverlay() {
  let elem = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  const overlay = document.querySelector('.overlay');
  document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      removeOverlay();
    }
  });
  overlay.addEventListener('click', e => {
    if (e.target == overlay) {
      removeOverlay();
    }
  });

  function removeOverlay() {
    overlay.classList.remove('active');
    document.body.style.overflowY = 'visible';
    document.body.style.marginRight = '0px';
    document.querySelector('.modal').style.display = 'none';

    if (elem != '') {
      elem.remove();
    }
  }
}

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

/***/ }),

/***/ "./src/assets/js/modules/toTop.js":
/*!****************************************!*\
  !*** ./src/assets/js/modules/toTop.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toTop; });
function toTop() {
  const btn = document.querySelector('.to-top');
  window.addEventListener('scroll', () => scrollFunction());

  function scrollFunction() {
    if (document.body.scrollTop > 2700 || document.documentElement.scrollTop > 2700) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  }
}

/***/ }),

/***/ "./src/assets/js/modules/videoPopup.js":
/*!*********************************************!*\
  !*** ./src/assets/js/modules/videoPopup.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoPopup; });
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlay */ "./src/assets/js/modules/overlay.js");

function videoPopup(src, openBtn) {
  const openVideoBtn = document.querySelector(openBtn);
  const wrap = document.createElement('div');
  wrap.innerHTML = `
  <iframe class="liner-video__popup" width="1000" height="600" src="${src}" title="COSTA FIRENZE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `;
  openVideoBtn.addEventListener('click', () => {
    Object(_overlay__WEBPACK_IMPORTED_MODULE_0__["activateOverlay"])(wrap);
  });
  Object(_overlay__WEBPACK_IMPORTED_MODULE_0__["closeOverlay"])(wrap);
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map