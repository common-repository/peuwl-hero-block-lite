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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************************************************************!*\
  !*** ./src/peuwl-hero-block-lite/components/PeuwlHeroBlockLite.js ***!
  \********************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 1);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar PeuwlHeroBlockLite = function (_React$Component) {\n    _inherits(PeuwlHeroBlockLite, _React$Component);\n\n    function PeuwlHeroBlockLite() {\n        _classCallCheck(this, PeuwlHeroBlockLite);\n\n        var _this = _possibleConstructorReturn(this, (PeuwlHeroBlockLite.__proto__ || Object.getPrototypeOf(PeuwlHeroBlockLite)).call(this));\n\n        _this.state = { windowWidth: window.innerWidth };\n        _this.updateWindowDimensions = _this.updateWindowDimensions.bind(_this);\n        return _this;\n    }\n\n    _createClass(PeuwlHeroBlockLite, [{\n        key: 'componentDidMount',\n        value: function componentDidMount() {\n            window.addEventListener('resize', this.updateWindowDimensions);\n        }\n    }, {\n        key: 'componentWillUnmount',\n        value: function componentWillUnmount() {\n            window.removeEventListener('resize', this.updateWindowDimensions);\n        }\n    }, {\n        key: 'updateWindowDimensions',\n        value: function updateWindowDimensions() {\n            this.setState({ windowWidth: window.innerWidth });\n        }\n    }, {\n        key: 'createMarkup',\n        value: function createMarkup(input) {\n            return input;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var attr = this.props.attributes;\n            var imageUrl = '';\n            if (attr.image) {\n                switch (attr.imageresolution) {\n                    case 'full':\n                        imageUrl = attr.image.full.url;\n                        break;\n                    case 'large':\n                        if (attr.image.large) {\n                            imageUrl = attr.image.large.url;\n                        } else {\n                            imageUrl = attr.image.full.url;\n                        }\n                        break;\n                    case 'medium':\n                        if (attr.image.medium) {\n                            imageUrl = attr.image.medium.url;\n                        } else {\n                            imageUrl = attr.image.full.url;\n                        }\n                        break;\n                    default:\n                        imageUrl = attr.image.full.url;\n                }\n            }\n            var generalStyle = { backgroundSize: 'cover', backgroundPositionY: attr.verticalalign, backgroundPositionX: 'center', backgroundRepeat: 'no-repeat', backgroundImage: 'url(' + imageUrl + ')' };\n            var desktopStyle = { height: attr.height + 'vh', minHeight: attr.minheight + 'px', maxHeight: attr.maxheight + 'px' };\n            var heroStyle = Object.assign(generalStyle, desktopStyle);\n            return wp.element.createElement(\n                'div',\n                { className: 'fwb peuwl-hero-block-lite' },\n                wp.element.createElement(\n                    'div',\n                    { className: 'peuwl-hero-block-lite-inner' },\n                    attr.overlay && wp.element.createElement('div', { 'class': 'peuwl-hero-block-lite-overlay', style: { background: attr.overlaycolor } }),\n                    wp.element.createElement('div', { className: 'peuwl-hero-block-lite-main', style: heroStyle }),\n                    attr.forcetextcolor && wp.element.createElement(\n                        'div',\n                        { 'class': 'peuwl-hero-block-lite-inner-content peuwl-force-color', style: { maxWidth: attr.contentmaxwidth + '%', width: attr.contentwidth, color: attr.textcolor } },\n                        this.props.children\n                    ),\n                    !attr.forcetextcolor && wp.element.createElement(\n                        'div',\n                        { 'class': 'peuwl-hero-block-lite-inner-content', style: { maxWidth: attr.contentmaxwidth + '%', width: attr.contentwidth } },\n                        this.props.children\n                    )\n                )\n            );\n        }\n    }]);\n\n    return PeuwlHeroBlockLite;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (PeuwlHeroBlockLite);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wZXV3bC1oZXJvLWJsb2NrLWxpdGUvY29tcG9uZW50cy9QZXV3bEhlcm9CbG9ja0xpdGUuanM/ZTI2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxudmFyIFBldXdsSGVyb0Jsb2NrTGl0ZSA9IGZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKFBldXdsSGVyb0Jsb2NrTGl0ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBQZXV3bEhlcm9CbG9ja0xpdGUoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQZXV3bEhlcm9CbG9ja0xpdGUpO1xuXG4gICAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChQZXV3bEhlcm9CbG9ja0xpdGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihQZXV3bEhlcm9CbG9ja0xpdGUpKS5jYWxsKHRoaXMpKTtcblxuICAgICAgICBfdGhpcy5zdGF0ZSA9IHsgd2luZG93V2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoIH07XG4gICAgICAgIF90aGlzLnVwZGF0ZVdpbmRvd0RpbWVuc2lvbnMgPSBfdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zLmJpbmQoX3RoaXMpO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKFBldXdsSGVyb0Jsb2NrTGl0ZSwgW3tcbiAgICAgICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy51cGRhdGVXaW5kb3dEaW1lbnNpb25zKTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAndXBkYXRlV2luZG93RGltZW5zaW9ucycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVXaW5kb3dEaW1lbnNpb25zKCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdpbmRvd1dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCB9KTtcbiAgICAgICAgfVxuICAgIH0sIHtcbiAgICAgICAga2V5OiAnY3JlYXRlTWFya3VwJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNyZWF0ZU1hcmt1cChpbnB1dCkge1xuICAgICAgICAgICAgcmV0dXJuIGlucHV0O1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgICAgdmFyIGF0dHIgPSB0aGlzLnByb3BzLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICB2YXIgaW1hZ2VVcmwgPSAnJztcbiAgICAgICAgICAgIGlmIChhdHRyLmltYWdlKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChhdHRyLmltYWdlcmVzb2x1dGlvbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdmdWxsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsID0gYXR0ci5pbWFnZS5mdWxsLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdsYXJnZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXR0ci5pbWFnZS5sYXJnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsID0gYXR0ci5pbWFnZS5sYXJnZS51cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsID0gYXR0ci5pbWFnZS5mdWxsLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdtZWRpdW0nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0dHIuaW1hZ2UubWVkaXVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwgPSBhdHRyLmltYWdlLm1lZGl1bS51cmw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsID0gYXR0ci5pbWFnZS5mdWxsLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwgPSBhdHRyLmltYWdlLmZ1bGwudXJsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBnZW5lcmFsU3R5bGUgPSB7IGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kUG9zaXRpb25ZOiBhdHRyLnZlcnRpY2FsYWxpZ24sIGJhY2tncm91bmRQb3NpdGlvblg6ICdjZW50ZXInLCBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JywgYmFja2dyb3VuZEltYWdlOiAndXJsKCcgKyBpbWFnZVVybCArICcpJyB9O1xuICAgICAgICAgICAgdmFyIGRlc2t0b3BTdHlsZSA9IHsgaGVpZ2h0OiBhdHRyLmhlaWdodCArICd2aCcsIG1pbkhlaWdodDogYXR0ci5taW5oZWlnaHQgKyAncHgnLCBtYXhIZWlnaHQ6IGF0dHIubWF4aGVpZ2h0ICsgJ3B4JyB9O1xuICAgICAgICAgICAgdmFyIGhlcm9TdHlsZSA9IE9iamVjdC5hc3NpZ24oZ2VuZXJhbFN0eWxlLCBkZXNrdG9wU3R5bGUpO1xuICAgICAgICAgICAgcmV0dXJuIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2Z3YiBwZXV3bC1oZXJvLWJsb2NrLWxpdGUnIH0sXG4gICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdwZXV3bC1oZXJvLWJsb2NrLWxpdGUtaW5uZXInIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHIub3ZlcmxheSAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgJ2NsYXNzJzogJ3BldXdsLWhlcm8tYmxvY2stbGl0ZS1vdmVybGF5Jywgc3R5bGU6IHsgYmFja2dyb3VuZDogYXR0ci5vdmVybGF5Y29sb3IgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KCdkaXYnLCB7IGNsYXNzTmFtZTogJ3BldXdsLWhlcm8tYmxvY2stbGl0ZS1tYWluJywgc3R5bGU6IGhlcm9TdHlsZSB9KSxcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5mb3JjZXRleHRjb2xvciAmJiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgJ2NsYXNzJzogJ3BldXdsLWhlcm8tYmxvY2stbGl0ZS1pbm5lci1jb250ZW50IHBldXdsLWZvcmNlLWNvbG9yJywgc3R5bGU6IHsgbWF4V2lkdGg6IGF0dHIuY29udGVudG1heHdpZHRoICsgJyUnLCB3aWR0aDogYXR0ci5jb250ZW50d2lkdGgsIGNvbG9yOiBhdHRyLnRleHRjb2xvciB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICFhdHRyLmZvcmNldGV4dGNvbG9yICYmIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyAnY2xhc3MnOiAncGV1d2wtaGVyby1ibG9jay1saXRlLWlubmVyLWNvbnRlbnQnLCBzdHlsZTogeyBtYXhXaWR0aDogYXR0ci5jb250ZW50bWF4d2lkdGggKyAnJScsIHdpZHRoOiBhdHRyLmNvbnRlbnR3aWR0aCB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFBldXdsSGVyb0Jsb2NrTGl0ZTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgUGV1d2xIZXJvQmxvY2tMaXRlO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3BldXdsLWhlcm8tYmxvY2stbGl0ZS9jb21wb25lbnRzL1BldXdsSGVyb0Jsb2NrTGl0ZS5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! dynamic exports provided */
/*! exports used: default */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/*!*************************!*\
  !*** ./src/frontend.js ***!
  \*************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__peuwl_hero_block_lite_frontend_js__ = __webpack_require__(/*! ./peuwl-hero-block-lite/frontend.js */ 7);\n/**\n * \n * Import frontend specific js (React.js).\n * \n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9mcm9udGVuZC5qcz83ZjJjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogXG4gKiBJbXBvcnQgZnJvbnRlbmQgc3BlY2lmaWMganMgKFJlYWN0LmpzKS5cbiAqIFxuICovXG5cbmltcG9ydCAnLi9wZXV3bC1oZXJvLWJsb2NrLWxpdGUvZnJvbnRlbmQuanMnO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Zyb250ZW5kLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!***********************************************!*\
  !*** ./src/peuwl-hero-block-lite/frontend.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_PeuwlHeroBlockLite__ = __webpack_require__(/*! ./components/PeuwlHeroBlockLite */ 0);\nvar render = wp.element.render;\n\n\nvar heroblock = document.querySelectorAll(\".peuwl-hero-block-lite\");\n\nheroblock.forEach(function (hero) {\n    var innerhtml = document.getElementById('peuwl-hero-fetch-content').innerHTML;\n\n    console.log(hero.dataset.props);\n    render(wp.element.createElement(\n        __WEBPACK_IMPORTED_MODULE_0__components_PeuwlHeroBlockLite__[\"a\" /* default */],\n        { attributes: JSON.parse(hero.dataset.props) },\n        wp.element.createElement(\"div\", { dangerouslySetInnerHTML: { __html: innerhtml } })\n    ), hero);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9wZXV3bC1oZXJvLWJsb2NrLWxpdGUvZnJvbnRlbmQuanM/ZmMxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gd3AuZWxlbWVudC5yZW5kZXI7XG5cbmltcG9ydCBQZXV3bEhlcm9CbG9ja0xpdGUgZnJvbSBcIi4vY29tcG9uZW50cy9QZXV3bEhlcm9CbG9ja0xpdGVcIjtcbnZhciBoZXJvYmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnBldXdsLWhlcm8tYmxvY2stbGl0ZVwiKTtcblxuaGVyb2Jsb2NrLmZvckVhY2goZnVuY3Rpb24gKGhlcm8pIHtcbiAgICB2YXIgaW5uZXJodG1sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BldXdsLWhlcm8tZmV0Y2gtY29udGVudCcpLmlubmVySFRNTDtcblxuICAgIGNvbnNvbGUubG9nKGhlcm8uZGF0YXNldC5wcm9wcyk7XG4gICAgcmVuZGVyKHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgUGV1d2xIZXJvQmxvY2tMaXRlLFxuICAgICAgICB7IGF0dHJpYnV0ZXM6IEpTT04ucGFyc2UoaGVyby5kYXRhc2V0LnByb3BzKSB9LFxuICAgICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGlubmVyaHRtbCB9IH0pXG4gICAgKSwgaGVybyk7XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wZXV3bC1oZXJvLWJsb2NrLWxpdGUvZnJvbnRlbmQuanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ })
/******/ ]);