/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": () => (/* binding */ isWebp)
/* harmony export */ });
// проверка поддержки webp, добавление класса webp или no-webp
function isWebp() {
   //проверка поддержки webp
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   //добавление класса
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      } else {
         document.querySelector('body').classList.add('no-webp');
      }
   });
}


/*------------------------------Burger menu---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const menuIcon = document.querySelector(".menu__icon");
   const menuBody = document.querySelector(".menu__body");
   const body = document.querySelector("body");
   const menuBodyClose = document.querySelector(".menu__body-close");

   if (menuIcon && menuBody) {
      menuIcon.addEventListener("click", function () {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      menuBody.addEventListener("click", function (event) {
         const target = event.target;
         const isLink = target.tagName === "A" || target.closest("a");
         const isPopupButton = target.classList.contains("open-popup") || target.closest(".open-popup");

         if (isLink || isPopupButton) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });

      if (menuBodyClose) {
         menuBodyClose.addEventListener("click", function () {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         });
      }

      document.addEventListener("click", function (event) {
         if (!menuBody.contains(event.target) && !menuIcon.contains(event.target)) {
            menuIcon.classList.remove("active");
            menuBody.classList.remove("active");
            body.classList.remove("no-scroll");
         }
      });
   }
});


/***/ })
/******/ 	]);
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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();


/*------------------------------
Popups
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const openButtons = document.querySelectorAll('.open-popup');

   if (openButtons && openButtons.length > 0) {
      openButtons.forEach(button => {
         if (!button) return;

         button.addEventListener('click', function () {
            const popupId = this.dataset.popup;
            if (!popupId) return;

            const popup = document.getElementById(popupId);
            if (popup) {
               popup.classList.add('show');
               document.body.style.overflow = 'hidden';
            }
         });
      });
   }

   document.addEventListener('click', function (e) {
      const openPopup = document.querySelector('.popup.show');

      if (!openPopup) return;

      const isCloseBtn = e.target.closest('.popup__close');
      const isInsideBody = e.target.closest('.popup__body');
      const isPopupArea = e.target.closest('.popup');

      if (isCloseBtn || (!isInsideBody && isPopupArea)) {
         openPopup.classList.remove('show');
         document.body.style.overflow = '';
      }
   });
});



/*------------------------------
Phone mask
---------------------------*/
window.addEventListener("DOMContentLoaded", function () {
   [].forEach.call(document.querySelectorAll('input.tel-mask'), function (input) {
      var keyCode;
      function mask(event) {
         event.keyCode && (keyCode = event.keyCode);
         var pos = this.selectionStart;
         if (pos < 3) event.preventDefault();
         var matrix = "+7 (___) ___ __ __",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function (a) {
               return i < val.length ? val.charAt(i++) : a
            });
         i = new_value.indexOf("_");
         if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
         }
         var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function (a) {
               return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
         reg = new RegExp("^" + reg + "$");
         if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
            this.value = new_value;
         }
         if (event.type == "blur" && this.value.length < 5) {
            this.value = "";
         }
      }

      input.addEventListener("input", mask, false);
      input.addEventListener("focus", mask, false);
      input.addEventListener("blur", mask, false);
      input.addEventListener("keydown", mask, false);
   });
});




/*------------------------------
Faq
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   const faqItems = document.querySelectorAll(".faq__item");

   if (!faqItems || faqItems.length === 0) return;

   faqItems.forEach((item) => {
      if (!item) return;

      const question = item.querySelector(".faq__question");
      const icon = item.querySelector(".faq__item-icon");
      const answer = item.querySelector(".faq__answer");

      if (!question || !icon || !answer) return;

      const toggleFaqItem = () => {
         const isActive = item.classList.contains("active");

         faqItems.forEach((el) => {
            const elAnswer = el.querySelector(".faq__answer");
            if (elAnswer) {
               el.classList.remove("active");
               elAnswer.style.maxHeight = null;
            }
         });

         if (!isActive) {
            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + 40 + "px";
         }
      };

      question.addEventListener("click", toggleFaqItem);
      icon.addEventListener("click", toggleFaqItem);
   });
});



/*------------------------------
Certiicates
---------------------------*/
document.addEventListener("DOMContentLoaded", function () {
   const sliderEl = document.querySelector('.certificates__slider');
   const fancyItems = document.querySelectorAll("[data-fancybox='certificates__image']");

   if (sliderEl) {
      const certificateSlider = new Swiper(sliderEl, {
         slidesPerView: 'auto',
         spaceBetween: 0,
         loop: true,
      });
   }

   if (fancyItems.length > 0) {
      Fancybox.bind("[data-fancybox='certificates__image']", {
         animated: true,
         transitionDuration: 2000,
         Toolbar: {
            display: ["close"],
         },
      });
   }
});


/*------------------------------
Scroll to top
---------------------------*/
document.addEventListener('DOMContentLoaded', function () {
   const goTopBtn = document.querySelector('.footer__go-top');

   if (!goTopBtn) return;

   goTopBtn.addEventListener('click', function (e) {
      e.preventDefault();

      const start = window.pageYOffset;
      const duration = 700;
      const startTime = performance.now();

      const ease = (t) => {
         return Math.pow(1 - Math.pow(1 - t, 4), 2);
      };

      const animateScroll = (currentTime) => {
         const timeElapsed = currentTime - startTime;
         const progress = Math.min(timeElapsed / duration, 1);
         const easeProgress = ease(progress);

         window.scrollTo(0, start * (1 - easeProgress));

         if (progress < 1) {
            requestAnimationFrame(animateScroll);
         }
      };

      requestAnimationFrame(animateScroll);
   });
});


/*------------------------------
Partners anim
---------------------------*/
document.addEventListener("DOMContentLoaded", () => {
   gsap.registerPlugin(ScrollTrigger);

   const isDesktop = window.matchMedia("(min-width: 1024px)").matches;

   const section = document.querySelector(".partners");
   const cards = document.querySelector(".partners__cards");
   const wrapper = document.querySelector(".partners__cards-wrapper");

   if (isDesktop) {
      // Вертикальная прокрутка карточек
      const extraOffset = 180;
      const cardsHeight = cards.scrollHeight;
      const sectionHeight = section.offsetHeight;
      const scrollLength = (cardsHeight - sectionHeight + extraOffset) * 2;

      gsap.to(cards, {
         y: () => -(cardsHeight - sectionHeight + extraOffset),
         ease: "power1.out",
         scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${scrollLength}`,
            pin: true,
            scrub: 0.3,
            fastScrollEnd: true
         }
      });

   } else {
      // Горизонтальная прокрутка карточек
      const extraOffset = 20;
      const cardsWidth = cards.scrollWidth;
      const wrapperWidth = wrapper.offsetWidth;
      const scrollLength = (cardsWidth - wrapperWidth + extraOffset) * 2;

      gsap.to(cards, {
         x: () => -(cardsWidth - wrapperWidth + extraOffset),
         ease: "power1.out",
         scrollTrigger: {
            trigger: section,
            start: "bottom bottom",
            end: () => `+=${scrollLength}`,
            pin: true,
            scrub: 0.1,
            fastScrollEnd: true
         }
      });
   }
});

})();

/******/ })()
;