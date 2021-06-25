/* eslint-disable global-require */

// polyfills and vendors
import "regenerator-runtime/runtime.js";

if (!window._babelPolyfill) {
  require("babel-polyfill");
}
