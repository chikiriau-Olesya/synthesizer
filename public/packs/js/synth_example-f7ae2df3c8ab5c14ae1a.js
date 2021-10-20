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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/synth_example.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/synth_example.jsx":
/*!************************************************!*\
  !*** ./app/javascript/packs/synth_example.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /Users/olesyashevchenko/synthExample/app/javascript/packs/synth_example.jsx: Unexpected token, expected \",\" (7:17)\n\n   5 | document.addEventListener('DOMContentLoaded', () => {\n   6 |   ReactDOM.render(\n>  7 |     console.log();\n     |                  ^\n   8 |     <SynthContainer />,\n   9 |     document.body.appendChild(document.createElement('div'))\n  10 |   )\n    at Object._raise (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:510:17)\n    at Object.raiseWithData (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:503:17)\n    at Object.raise (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:464:17)\n    at Object.unexpected (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:3368:16)\n    at Object.expect (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:3342:28)\n    at Object.parseCallExpressionArguments (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:11408:14)\n    at Object.parseCoverCallAndAsyncArrowHead (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:11331:29)\n    at Object.parseSubscript (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:11261:19)\n    at Object.parseSubscripts (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:11234:19)\n    at Object.parseExprSubscripts (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:11223:17)\n    at Object.parseUpdate (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:11197:21)\n    at Object.parseMaybeUnary (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:11172:23)\n    at Object.parseMaybeUnaryOrPrivate (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:10986:59)\n    at Object.parseExprOps (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:10993:23)\n    at Object.parseMaybeConditional (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:10963:23)\n    at Object.parseMaybeAssign (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:10926:21)\n    at Object.parseExpressionBase (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:10866:23)\n    at /Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:10860:39\n    at Object.allowInAnd (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:12720:12)\n    at Object.parseExpression (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:10860:17)\n    at Object.parseStatementContent (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:13064:23)\n    at Object.parseStatement (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:12931:17)\n    at Object.parseBlockOrModuleBlockBody (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:13520:25)\n    at Object.parseBlockBody (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:13511:10)\n    at Object.parseBlock (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:13495:10)\n    at Object.parseFunctionBody (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:12372:24)\n    at Object.parseArrowExpression (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:12344:10)\n    at Object.parseParenAndDistinguishExpression (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:11921:12)\n    at Object.parseExprAtom (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:11549:23)\n    at Object.parseExprAtom (/Users/olesyashevchenko/synthExample/node_modules/@babel/parser/lib/index.js:7260:20)");

/***/ })

/******/ });
//# sourceMappingURL=synth_example-f7ae2df3c8ab5c14ae1a.js.map