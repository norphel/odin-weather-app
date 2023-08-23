/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function fetchWeatherData(city) {\n  const response = fetch(\n    `https://api.weatherapi.com/v1/current.json?key=3695df83e057409d9f852317232008&q=${city}`,\n    {\n      mode: \"cors\",\n    },\n  );\n  response\n    .then((response) => {\n      if (response.ok) {\n        return response.json();\n      } else {\n        throw new Error(\n          `Unexpected status code: ${response.status} ${response.statusText}`,\n        );\n      }\n    })\n    .then((weatherData) => {\n      console.log(weatherData);\n    })\n    .catch((reason) => {\n      console.log(reason.message);\n    });\n}\n\nfetchWeatherData(prompt(\"City: \", \"New Delhi\"));\n\n\n//# sourceURL=webpack://odin-weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;