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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
	window.addEventListener('load', (e) => {
		const preload = document.querySelector('.preload');

		preload.classList.add('preload-finished');
	});

	const btnScrollToTop = document.getElementById('btnScrollToTop');

	if (btnScrollToTop) {
		btnScrollToTop.addEventListener('click', (e) => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			});
		});
	}

	const main = document.getElementById('boxes');
	const voicesSelect = document.getElementById('voices');
	const textarea = document.getElementById('text');
	const readBtn = document.getElementById('read');
	const toggleBtn = document.getElementById('toggle');
	const closeBtn = document.getElementById('close');

	const data = [
		{
			image: './assets/images/drink.jpg',
			text: "I'm Thirsty",
		},
		{
			image: './assets/images/food.jpg',
			text: "I'm Hungry",
		},
		{
			image: './assets/images/tired.jpg',
			text: "I'm Tired",
		},
		{
			image: './assets/images/hurt.jpg',
			text: "I'm Hurt",
		},
		{
			image: './assets/images/happy.jpg',
			text: "I'm Happy",
		},
		{
			image: './assets/images/angry.jpg',
			text: "I'm Angry",
		},
		{
			image: './assets/images/sad.jpg',
			text: "I'm Sad",
		},
		{
			image: './assets/images/scared.jpg',
			text: "I'm Scared",
		},
		{
			image: './assets/images/outside.jpg',
			text: 'I Want To Go Outside',
		},
		{
			image: './assets/images/home.jpg',
			text: 'I Want To Go Home',
		},
		{
			image: './assets/images/school.jpg',
			text: 'I Want To Go To School',
		},
		{
			image: './assets/images/grandma.jpg',
			text: 'I Want To Go To Grandmas',
		},
	];

	data.forEach(createBox);

	function createBox(item) {
		const box = document.createElement('div');

		const { image, text } = item;

		box.classList.add('box');
		box.innerHTML = `
			<img class="box__img" src="${image}" alt="${text}" /> 
			<p class="box__info">${text}</p>
		`;

		main.appendChild(box);
	}
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLFNBQVMsY0FBYzs7QUFFdkI7QUFDQTtBQUNBLGdDQUFnQyxNQUFNLFNBQVMsS0FBSztBQUNwRCwwQkFBMEIsS0FBSztBQUMvQjs7QUFFQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9tYWluLmpzXCIpO1xuIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uICgpIHtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZSkgPT4ge1xuXHRcdGNvbnN0IHByZWxvYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlbG9hZCcpO1xuXG5cdFx0cHJlbG9hZC5jbGFzc0xpc3QuYWRkKCdwcmVsb2FkLWZpbmlzaGVkJyk7XG5cdH0pO1xuXG5cdGNvbnN0IGJ0blNjcm9sbFRvVG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blNjcm9sbFRvVG9wJyk7XG5cblx0aWYgKGJ0blNjcm9sbFRvVG9wKSB7XG5cdFx0YnRuU2Nyb2xsVG9Ub3AuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0d2luZG93LnNjcm9sbFRvKHtcblx0XHRcdFx0dG9wOiAwLFxuXHRcdFx0XHRsZWZ0OiAwLFxuXHRcdFx0XHRiZWhhdmlvcjogJ3Ntb290aCcsXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm94ZXMnKTtcblx0Y29uc3Qgdm9pY2VzU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZvaWNlcycpO1xuXHRjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0Jyk7XG5cdGNvbnN0IHJlYWRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhZCcpO1xuXHRjb25zdCB0b2dnbGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlJyk7XG5cdGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlJyk7XG5cblx0Y29uc3QgZGF0YSA9IFtcblx0XHR7XG5cdFx0XHRpbWFnZTogJy4vYXNzZXRzL2ltYWdlcy9kcmluay5qcGcnLFxuXHRcdFx0dGV4dDogXCJJJ20gVGhpcnN0eVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aW1hZ2U6ICcuL2Fzc2V0cy9pbWFnZXMvZm9vZC5qcGcnLFxuXHRcdFx0dGV4dDogXCJJJ20gSHVuZ3J5XCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpbWFnZTogJy4vYXNzZXRzL2ltYWdlcy90aXJlZC5qcGcnLFxuXHRcdFx0dGV4dDogXCJJJ20gVGlyZWRcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdGltYWdlOiAnLi9hc3NldHMvaW1hZ2VzL2h1cnQuanBnJyxcblx0XHRcdHRleHQ6IFwiSSdtIEh1cnRcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdGltYWdlOiAnLi9hc3NldHMvaW1hZ2VzL2hhcHB5LmpwZycsXG5cdFx0XHR0ZXh0OiBcIkknbSBIYXBweVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aW1hZ2U6ICcuL2Fzc2V0cy9pbWFnZXMvYW5ncnkuanBnJyxcblx0XHRcdHRleHQ6IFwiSSdtIEFuZ3J5XCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpbWFnZTogJy4vYXNzZXRzL2ltYWdlcy9zYWQuanBnJyxcblx0XHRcdHRleHQ6IFwiSSdtIFNhZFwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aW1hZ2U6ICcuL2Fzc2V0cy9pbWFnZXMvc2NhcmVkLmpwZycsXG5cdFx0XHR0ZXh0OiBcIkknbSBTY2FyZWRcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdGltYWdlOiAnLi9hc3NldHMvaW1hZ2VzL291dHNpZGUuanBnJyxcblx0XHRcdHRleHQ6ICdJIFdhbnQgVG8gR28gT3V0c2lkZScsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpbWFnZTogJy4vYXNzZXRzL2ltYWdlcy9ob21lLmpwZycsXG5cdFx0XHR0ZXh0OiAnSSBXYW50IFRvIEdvIEhvbWUnLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0aW1hZ2U6ICcuL2Fzc2V0cy9pbWFnZXMvc2Nob29sLmpwZycsXG5cdFx0XHR0ZXh0OiAnSSBXYW50IFRvIEdvIFRvIFNjaG9vbCcsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHRpbWFnZTogJy4vYXNzZXRzL2ltYWdlcy9ncmFuZG1hLmpwZycsXG5cdFx0XHR0ZXh0OiAnSSBXYW50IFRvIEdvIFRvIEdyYW5kbWFzJyxcblx0XHR9LFxuXHRdO1xuXG5cdGRhdGEuZm9yRWFjaChjcmVhdGVCb3gpO1xuXG5cdGZ1bmN0aW9uIGNyZWF0ZUJveChpdGVtKSB7XG5cdFx0Y29uc3QgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0XHRjb25zdCB7IGltYWdlLCB0ZXh0IH0gPSBpdGVtO1xuXG5cdFx0Ym94LmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xuXHRcdGJveC5pbm5lckhUTUwgPSBgXG5cdFx0XHQ8aW1nIGNsYXNzPVwiYm94X19pbWdcIiBzcmM9XCIke2ltYWdlfVwiIGFsdD1cIiR7dGV4dH1cIiAvPiBcblx0XHRcdDxwIGNsYXNzPVwiYm94X19pbmZvXCI+JHt0ZXh0fTwvcD5cblx0XHRgO1xuXG5cdFx0bWFpbi5hcHBlbmRDaGlsZChib3gpO1xuXHR9XG59KTtcbiJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbmRsWW5CaFkyczZMeTh2ZDJWaWNHRmpheTlpYjI5MGMzUnlZWEFpTENKM1pXSndZV05yT2k4dkx5NHZjM0pqTDJwekwyMWhhVzR1YW5NaVhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWp0UlFVRkJPMUZCUTBFN08xRkJSVUU3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVRzN1VVRkZRVHRSUVVOQk96dFJRVVZCTzFGQlEwRTdPMUZCUlVFN1VVRkRRVHRSUVVOQk96czdVVUZIUVR0UlFVTkJPenRSUVVWQk8xRkJRMEU3TzFGQlJVRTdVVUZEUVR0UlFVTkJPMUZCUTBFc01FTkJRVEJETEdkRFFVRm5RenRSUVVNeFJUdFJRVU5CT3p0UlFVVkJPMUZCUTBFN1VVRkRRVHRSUVVOQkxIZEVRVUYzUkN4clFrRkJhMEk3VVVGRE1VVTdVVUZEUVN4cFJFRkJhVVFzWTBGQll6dFJRVU12UkRzN1VVRkZRVHRSUVVOQk8xRkJRMEU3VVVGRFFUdFJRVU5CTzFGQlEwRTdVVUZEUVR0UlFVTkJPMUZCUTBFN1VVRkRRVHRSUVVOQk8xRkJRMEVzZVVOQlFYbERMR2xEUVVGcFF6dFJRVU14UlN4blNFRkJaMGdzYlVKQlFXMUNMRVZCUVVVN1VVRkRja2s3VVVGRFFUczdVVUZGUVR0UlFVTkJPMUZCUTBFN1VVRkRRU3d5UWtGQk1rSXNNRUpCUVRCQ0xFVkJRVVU3VVVGRGRrUXNhVU5CUVdsRExHVkJRV1U3VVVGRGFFUTdVVUZEUVR0UlFVTkJPenRSUVVWQk8xRkJRMEVzYzBSQlFYTkVMQ3RFUVVFclJEczdVVUZGY2tnN1VVRkRRVHM3TzFGQlIwRTdVVUZEUVRzN096czdPenM3T3pzN08wRkRiRVpCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFVkJRVVU3TzBGQlJVWTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCU1R0QlFVTktMRWRCUVVjN1FVRkRTRHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEU3UVVGRFFTeEhRVUZITzBGQlEwZzdRVUZEUVR0QlFVTkJPMEZCUTBFc1IwRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CTEVkQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRU3hIUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CTzBGQlEwRXNSMEZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHRCUVVOQkxFZEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWRCUVVjN1FVRkRTRHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPenRCUVVWQkxGTkJRVk1zWTBGQll6czdRVUZGZGtJN1FVRkRRVHRCUVVOQkxHZERRVUZuUXl4TlFVRk5MRk5CUVZNc1MwRkJTenRCUVVOd1JDd3dRa0ZCTUVJc1MwRkJTenRCUVVNdlFqczdRVUZGUVR0QlFVTkJPMEZCUTBFc1EwRkJReUlzSW1acGJHVWlPaUpoWVdReFl6RXhOVEF5WldOak1HRTJZVGxoTnk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJaUJjZEM4dklGUm9aU0J0YjJSMWJHVWdZMkZqYUdWY2JpQmNkSFpoY2lCcGJuTjBZV3hzWldSTmIyUjFiR1Z6SUQwZ2UzMDdYRzVjYmlCY2RDOHZJRlJvWlNCeVpYRjFhWEpsSUdaMWJtTjBhVzl1WEc0Z1hIUm1kVzVqZEdsdmJpQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLRzF2WkhWc1pVbGtLU0I3WEc1Y2JpQmNkRngwTHk4Z1EyaGxZMnNnYVdZZ2JXOWtkV3hsSUdseklHbHVJR05oWTJobFhHNGdYSFJjZEdsbUtHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZEtTQjdYRzRnWEhSY2RGeDBjbVYwZFhKdUlHbHVjM1JoYkd4bFpFMXZaSFZzWlhOYmJXOWtkV3hsU1dSZExtVjRjRzl5ZEhNN1hHNGdYSFJjZEgxY2JpQmNkRngwTHk4Z1EzSmxZWFJsSUdFZ2JtVjNJRzF2WkhWc1pTQW9ZVzVrSUhCMWRDQnBkQ0JwYm5SdklIUm9aU0JqWVdOb1pTbGNiaUJjZEZ4MGRtRnlJRzF2WkhWc1pTQTlJR2x1YzNSaGJHeGxaRTF2WkhWc1pYTmJiVzlrZFd4bFNXUmRJRDBnZTF4dUlGeDBYSFJjZEdrNklHMXZaSFZzWlVsa0xGeHVJRngwWEhSY2RHdzZJR1poYkhObExGeHVJRngwWEhSY2RHVjRjRzl5ZEhNNklIdDlYRzRnWEhSY2RIMDdYRzVjYmlCY2RGeDBMeThnUlhobFkzVjBaU0IwYUdVZ2JXOWtkV3hsSUdaMWJtTjBhVzl1WEc0Z1hIUmNkRzF2WkhWc1pYTmJiVzlrZFd4bFNXUmRMbU5oYkd3b2JXOWtkV3hsTG1WNGNHOXlkSE1zSUcxdlpIVnNaU3dnYlc5a2RXeGxMbVY0Y0c5eWRITXNJRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMThwTzF4dVhHNGdYSFJjZEM4dklFWnNZV2NnZEdobElHMXZaSFZzWlNCaGN5QnNiMkZrWldSY2JpQmNkRngwYlc5a2RXeGxMbXdnUFNCMGNuVmxPMXh1WEc0Z1hIUmNkQzh2SUZKbGRIVnliaUIwYUdVZ1pYaHdiM0owY3lCdlppQjBhR1VnYlc5a2RXeGxYRzRnWEhSY2RISmxkSFZ5YmlCdGIyUjFiR1V1Wlhod2IzSjBjenRjYmlCY2RIMWNibHh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaWE1nYjJKcVpXTjBJQ2hmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmS1Z4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0SUQwZ2JXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZeUE5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUdSbFptbHVaU0JuWlhSMFpYSWdablZ1WTNScGIyNGdabTl5SUdoaGNtMXZibmtnWlhod2IzSjBjMXh1SUZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NWtJRDBnWm5WdVkzUnBiMjRvWlhod2IzSjBjeXdnYm1GdFpTd2daMlYwZEdWeUtTQjdYRzRnWEhSY2RHbG1LQ0ZmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG04b1pYaHdiM0owY3l3Z2JtRnRaU2twSUh0Y2JpQmNkRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dibUZ0WlN3Z2V5QmxiblZ0WlhKaFlteGxPaUIwY25WbExDQm5aWFE2SUdkbGRIUmxjaUI5S1R0Y2JpQmNkRngwZlZ4dUlGeDBmVHRjYmx4dUlGeDBMeThnWkdWbWFXNWxJRjlmWlhOTmIyUjFiR1VnYjI0Z1pYaHdiM0owYzF4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV5SUQwZ1puVnVZM1JwYjI0b1pYaHdiM0owY3lrZ2UxeHVJRngwWEhScFppaDBlWEJsYjJZZ1UzbHRZbTlzSUNFOVBTQW5kVzVrWldacGJtVmtKeUFtSmlCVGVXMWliMnd1ZEc5VGRISnBibWRVWVdjcElIdGNiaUJjZEZ4MFhIUlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvWlhod2IzSjBjeXdnVTNsdFltOXNMblJ2VTNSeWFXNW5WR0ZuTENCN0lIWmhiSFZsT2lBblRXOWtkV3hsSnlCOUtUdGNiaUJjZEZ4MGZWeHVJRngwWEhSUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa29aWGh3YjNKMGN5d2dKMTlmWlhOTmIyUjFiR1VuTENCN0lIWmhiSFZsT2lCMGNuVmxJSDBwTzF4dUlGeDBmVHRjYmx4dUlGeDBMeThnWTNKbFlYUmxJR0VnWm1GclpTQnVZVzFsYzNCaFkyVWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnTVRvZ2RtRnNkV1VnYVhNZ1lTQnRiMlIxYkdVZ2FXUXNJSEpsY1hWcGNtVWdhWFJjYmlCY2RDOHZJRzF2WkdVZ0ppQXlPaUJ0WlhKblpTQmhiR3dnY0hKdmNHVnlkR2xsY3lCdlppQjJZV3gxWlNCcGJuUnZJSFJvWlNCdWMxeHVJRngwTHk4Z2JXOWtaU0FtSURRNklISmxkSFZ5YmlCMllXeDFaU0IzYUdWdUlHRnNjbVZoWkhrZ2JuTWdiMkpxWldOMFhHNGdYSFF2THlCdGIyUmxJQ1lnT0h3eE9pQmlaV2hoZG1VZ2JHbHJaU0J5WlhGMWFYSmxYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuUWdQU0JtZFc1amRHbHZiaWgyWVd4MVpTd2diVzlrWlNrZ2UxeHVJRngwWEhScFppaHRiMlJsSUNZZ01Ta2dkbUZzZFdVZ1BTQmZYM2RsWW5CaFkydGZjbVZ4ZFdseVpWOWZLSFpoYkhWbEtUdGNiaUJjZEZ4MGFXWW9iVzlrWlNBbUlEZ3BJSEpsZEhWeWJpQjJZV3gxWlR0Y2JpQmNkRngwYVdZb0tHMXZaR1VnSmlBMEtTQW1KaUIwZVhCbGIyWWdkbUZzZFdVZ1BUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhaaGJIVmxJQ1ltSUhaaGJIVmxMbDlmWlhOTmIyUjFiR1VwSUhKbGRIVnliaUIyWVd4MVpUdGNiaUJjZEZ4MGRtRnlJRzV6SUQwZ1QySnFaV04wTG1OeVpXRjBaU2h1ZFd4c0tUdGNiaUJjZEZ4MFgxOTNaV0p3WVdOclgzSmxjWFZwY21WZlh5NXlLRzV6S1R0Y2JpQmNkRngwVDJKcVpXTjBMbVJsWm1sdVpWQnliM0JsY25SNUtHNXpMQ0FuWkdWbVlYVnNkQ2NzSUhzZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlN3Z2RtRnNkV1U2SUhaaGJIVmxJSDBwTzF4dUlGeDBYSFJwWmlodGIyUmxJQ1lnTWlBbUppQjBlWEJsYjJZZ2RtRnNkV1VnSVQwZ0ozTjBjbWx1WnljcElHWnZjaWgyWVhJZ2EyVjVJR2x1SUhaaGJIVmxLU0JmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmTG1Rb2JuTXNJR3RsZVN3Z1puVnVZM1JwYjI0b2EyVjVLU0I3SUhKbGRIVnliaUIyWVd4MVpWdHJaWGxkT3lCOUxtSnBibVFvYm5Wc2JDd2dhMlY1S1NrN1hHNGdYSFJjZEhKbGRIVnliaUJ1Y3p0Y2JpQmNkSDA3WEc1Y2JpQmNkQzh2SUdkbGRFUmxabUYxYkhSRmVIQnZjblFnWm5WdVkzUnBiMjRnWm05eUlHTnZiWEJoZEdsaWFXeHBkSGtnZDJsMGFDQnViMjR0YUdGeWJXOXVlU0J0YjJSMWJHVnpYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtNGdQU0JtZFc1amRHbHZiaWh0YjJSMWJHVXBJSHRjYmlCY2RGeDBkbUZ5SUdkbGRIUmxjaUE5SUcxdlpIVnNaU0FtSmlCdGIyUjFiR1V1WDE5bGMwMXZaSFZzWlNBL1hHNGdYSFJjZEZ4MFpuVnVZM1JwYjI0Z1oyVjBSR1ZtWVhWc2RDZ3BJSHNnY21WMGRYSnVJRzF2WkhWc1pWc25aR1ZtWVhWc2RDZGRPeUI5SURwY2JpQmNkRngwWEhSbWRXNWpkR2x2YmlCblpYUk5iMlIxYkdWRmVIQnZjblJ6S0NrZ2V5QnlaWFIxY200Z2JXOWtkV3hsT3lCOU8xeHVJRngwWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxtUW9aMlYwZEdWeUxDQW5ZU2NzSUdkbGRIUmxjaWs3WEc0Z1hIUmNkSEpsZEhWeWJpQm5aWFIwWlhJN1hHNGdYSFI5TzF4dVhHNGdYSFF2THlCUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG1oaGMwOTNibEJ5YjNCbGNuUjVMbU5oYkd4Y2JpQmNkRjlmZDJWaWNHRmphMTl5WlhGMWFYSmxYMTh1YnlBOUlHWjFibU4wYVc5dUtHOWlhbVZqZEN3Z2NISnZjR1Z5ZEhrcElIc2djbVYwZFhKdUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaHZZbXBsWTNRc0lIQnliM0JsY25SNUtUc2dmVHRjYmx4dUlGeDBMeThnWDE5M1pXSndZV05yWDNCMVlteHBZMTl3WVhSb1gxOWNiaUJjZEY5ZmQyVmljR0ZqYTE5eVpYRjFhWEpsWDE4dWNDQTlJRndpWENJN1hHNWNibHh1SUZ4MEx5OGdURzloWkNCbGJuUnllU0J0YjJSMWJHVWdZVzVrSUhKbGRIVnliaUJsZUhCdmNuUnpYRzRnWEhSeVpYUjFjbTRnWDE5M1pXSndZV05yWDNKbGNYVnBjbVZmWHloZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuTWdQU0JjSWk0dmMzSmpMMnB6TDIxaGFXNHVhbk5jSWlrN1hHNGlMQ0prYjJOMWJXVnVkQzVoWkdSRmRtVnVkRXhwYzNSbGJtVnlLQ2RFVDAxRGIyNTBaVzUwVEc5aFpHVmtKeXdnWm5WdVkzUnBiMjRnS0NrZ2UxeHVYSFIzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25iRzloWkNjc0lDaGxLU0E5UGlCN1hHNWNkRngwWTI5dWMzUWdjSEpsYkc5aFpDQTlJR1J2WTNWdFpXNTBMbkYxWlhKNVUyVnNaV04wYjNJb0p5NXdjbVZzYjJGa0p5azdYRzVjYmx4MFhIUndjbVZzYjJGa0xtTnNZWE56VEdsemRDNWhaR1FvSjNCeVpXeHZZV1F0Wm1sdWFYTm9aV1FuS1R0Y2JseDBmU2s3WEc1Y2JseDBZMjl1YzNRZ1luUnVVMk55YjJ4c1ZHOVViM0FnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWW5SdVUyTnliMnhzVkc5VWIzQW5LVHRjYmx4dVhIUnBaaUFvWW5SdVUyTnliMnhzVkc5VWIzQXBJSHRjYmx4MFhIUmlkRzVUWTNKdmJHeFViMVJ2Y0M1aFpHUkZkbVZ1ZEV4cGMzUmxibVZ5S0NkamJHbGpheWNzSUNobEtTQTlQaUI3WEc1Y2RGeDBYSFIzYVc1a2IzY3VjMk55YjJ4c1ZHOG9lMXh1WEhSY2RGeDBYSFIwYjNBNklEQXNYRzVjZEZ4MFhIUmNkR3hsWm5RNklEQXNYRzVjZEZ4MFhIUmNkR0psYUdGMmFXOXlPaUFuYzIxdmIzUm9KeXhjYmx4MFhIUmNkSDBwTzF4dVhIUmNkSDBwTzF4dVhIUjlYRzVjYmx4MFkyOXVjM1FnYldGcGJpQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tDZGliM2hsY3ljcE8xeHVYSFJqYjI1emRDQjJiMmxqWlhOVFpXeGxZM1FnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duZG05cFkyVnpKeWs3WEc1Y2RHTnZibk4wSUhSbGVIUmhjbVZoSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvSjNSbGVIUW5LVHRjYmx4MFkyOXVjM1FnY21WaFpFSjBiaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2R5WldGa0p5azdYRzVjZEdOdmJuTjBJSFJ2WjJkc1pVSjBiaUE5SUdSdlkzVnRaVzUwTG1kbGRFVnNaVzFsYm5SQ2VVbGtLQ2QwYjJkbmJHVW5LVHRjYmx4MFkyOXVjM1FnWTJ4dmMyVkNkRzRnUFNCa2IyTjFiV1Z1ZEM1blpYUkZiR1Z0Wlc1MFFubEpaQ2duWTJ4dmMyVW5LVHRjYmx4dVhIUmpiMjV6ZENCa1lYUmhJRDBnVzF4dVhIUmNkSHRjYmx4MFhIUmNkR2x0WVdkbE9pQW5MaTloYzNObGRITXZhVzFoWjJWekwyUnlhVzVyTG1wd1p5Y3NYRzVjZEZ4MFhIUjBaWGgwT2lCY0lra25iU0JVYUdseWMzUjVYQ0lzWEc1Y2RGeDBmU3hjYmx4MFhIUjdYRzVjZEZ4MFhIUnBiV0ZuWlRvZ0p5NHZZWE56WlhSekwybHRZV2RsY3k5bWIyOWtMbXB3Wnljc1hHNWNkRngwWEhSMFpYaDBPaUJjSWtrbmJTQklkVzVuY25sY0lpeGNibHgwWEhSOUxGeHVYSFJjZEh0Y2JseDBYSFJjZEdsdFlXZGxPaUFuTGk5aGMzTmxkSE12YVcxaFoyVnpMM1JwY21Wa0xtcHdaeWNzWEc1Y2RGeDBYSFIwWlhoME9pQmNJa2tuYlNCVWFYSmxaRndpTEZ4dVhIUmNkSDBzWEc1Y2RGeDBlMXh1WEhSY2RGeDBhVzFoWjJVNklDY3VMMkZ6YzJWMGN5OXBiV0ZuWlhNdmFIVnlkQzVxY0djbkxGeHVYSFJjZEZ4MGRHVjRkRG9nWENKSkoyMGdTSFZ5ZEZ3aUxGeHVYSFJjZEgwc1hHNWNkRngwZTF4dVhIUmNkRngwYVcxaFoyVTZJQ2N1TDJGemMyVjBjeTlwYldGblpYTXZhR0Z3Y0hrdWFuQm5KeXhjYmx4MFhIUmNkSFJsZUhRNklGd2lTU2R0SUVoaGNIQjVYQ0lzWEc1Y2RGeDBmU3hjYmx4MFhIUjdYRzVjZEZ4MFhIUnBiV0ZuWlRvZ0p5NHZZWE56WlhSekwybHRZV2RsY3k5aGJtZHllUzVxY0djbkxGeHVYSFJjZEZ4MGRHVjRkRG9nWENKSkoyMGdRVzVuY25sY0lpeGNibHgwWEhSOUxGeHVYSFJjZEh0Y2JseDBYSFJjZEdsdFlXZGxPaUFuTGk5aGMzTmxkSE12YVcxaFoyVnpMM05oWkM1cWNHY25MRnh1WEhSY2RGeDBkR1Y0ZERvZ1hDSkpKMjBnVTJGa1hDSXNYRzVjZEZ4MGZTeGNibHgwWEhSN1hHNWNkRngwWEhScGJXRm5aVG9nSnk0dllYTnpaWFJ6TDJsdFlXZGxjeTl6WTJGeVpXUXVhbkJuSnl4Y2JseDBYSFJjZEhSbGVIUTZJRndpU1NkdElGTmpZWEpsWkZ3aUxGeHVYSFJjZEgwc1hHNWNkRngwZTF4dVhIUmNkRngwYVcxaFoyVTZJQ2N1TDJGemMyVjBjeTlwYldGblpYTXZiM1YwYzJsa1pTNXFjR2NuTEZ4dVhIUmNkRngwZEdWNGREb2dKMGtnVjJGdWRDQlVieUJIYnlCUGRYUnphV1JsSnl4Y2JseDBYSFI5TEZ4dVhIUmNkSHRjYmx4MFhIUmNkR2x0WVdkbE9pQW5MaTloYzNObGRITXZhVzFoWjJWekwyaHZiV1V1YW5Cbkp5eGNibHgwWEhSY2RIUmxlSFE2SUNkSklGZGhiblFnVkc4Z1IyOGdTRzl0WlNjc1hHNWNkRngwZlN4Y2JseDBYSFI3WEc1Y2RGeDBYSFJwYldGblpUb2dKeTR2WVhOelpYUnpMMmx0WVdkbGN5OXpZMmh2YjJ3dWFuQm5KeXhjYmx4MFhIUmNkSFJsZUhRNklDZEpJRmRoYm5RZ1ZHOGdSMjhnVkc4Z1UyTm9iMjlzSnl4Y2JseDBYSFI5TEZ4dVhIUmNkSHRjYmx4MFhIUmNkR2x0WVdkbE9pQW5MaTloYzNObGRITXZhVzFoWjJWekwyZHlZVzVrYldFdWFuQm5KeXhjYmx4MFhIUmNkSFJsZUhRNklDZEpJRmRoYm5RZ1ZHOGdSMjhnVkc4Z1IzSmhibVJ0WVhNbkxGeHVYSFJjZEgwc1hHNWNkRjA3WEc1Y2JseDBaR0YwWVM1bWIzSkZZV05vS0dOeVpXRjBaVUp2ZUNrN1hHNWNibHgwWm5WdVkzUnBiMjRnWTNKbFlYUmxRbTk0S0dsMFpXMHBJSHRjYmx4MFhIUmpiMjV6ZENCaWIzZ2dQU0JrYjJOMWJXVnVkQzVqY21WaGRHVkZiR1Z0Wlc1MEtDZGthWFluS1R0Y2JseHVYSFJjZEdOdmJuTjBJSHNnYVcxaFoyVXNJSFJsZUhRZ2ZTQTlJR2wwWlcwN1hHNWNibHgwWEhSaWIzZ3VZMnhoYzNOTWFYTjBMbUZrWkNnblltOTRKeWs3WEc1Y2RGeDBZbTk0TG1sdWJtVnlTRlJOVENBOUlHQmNibHgwWEhSY2REeHBiV2NnWTJ4aGMzTTlYQ0ppYjNoZlgybHRaMXdpSUhOeVl6MWNJaVI3YVcxaFoyVjlYQ0lnWVd4MFBWd2lKSHQwWlhoMGZWd2lJQzgrSUZ4dVhIUmNkRngwUEhBZ1kyeGhjM005WENKaWIzaGZYMmx1Wm05Y0lqNGtlM1JsZUhSOVBDOXdQbHh1WEhSY2RHQTdYRzVjYmx4MFhIUnRZV2x1TG1Gd2NHVnVaRU5vYVd4a0tHSnZlQ2s3WEc1Y2RIMWNibjBwTzF4dUlsMHNJbk52ZFhKalpWSnZiM1FpT2lJaWZRPT0ifQ==