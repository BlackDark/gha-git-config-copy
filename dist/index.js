/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 81:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 17:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
const spawn = (__nccwpck_require__(81).spawn);
const path = __nccwpck_require__(17);
const exec = (cmd, args = []) =>
  new Promise((resolve, reject) => {
    console.log(`Started: ${cmd} ${args.join(" ")}`);

    const AUTH_URL = process.env.GITHUB_SERVER_URL.replace(
      /(https?:\/\/)/,
      `$1GithubActions:${process.env.INPUT_TOKEN}@`
    );

    process.env.CACHE_URL = `${AUTH_URL}/${process.env.GITHUB_REPOSITORY}`;

    const app = spawn(cmd, args, { stdio: "inherit" });
    app.on("close", (code) => {
      if (code !== 0) {
        const err = new Error(`Invalid status code: ${code}`);
        err.code = code;
        return reject(err);
      }
      return resolve(code);
    });
    app.on("error", reject);
  });

const main = async () => {
  await exec("bash", [__nccwpck_require__.ab + "action.sh"]);
};

main().catch((err) => {
  console.error(err);
  console.error(err.stack);
  process.exit(err.code || -1);
});

})();

module.exports = __webpack_exports__;
/******/ })()
;