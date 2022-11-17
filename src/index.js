/*!
 * index.js - Main Entry Point
 *
 * Copyright (c) 2015 Cisco Systems, Inc. See LICENSE file.
 */
"use strict";

if (typeof Promise === "undefined") {
  require("es6-promise").polyfill();
}

if (typeof Buffer === "undefined") {
  if (global === undefined) {
    var global = window;
  }
  console.log("🚀 ~ file: index.js ~ line 16 ~ window", window);
  console.log("🚀 ~ file: index.js ~ line 16 ~ global", global);
  (global || window).Buffer = require("buffer").Buffer;
}

var JWS = require("./jws");

module.exports = {
  JWA: require("./algorithms"),
  JWE: require("./jwe"),
  JWK: require("./jwk"),
  JWS: JWS,
  util: require("./util"),
  parse: require("./parse"),
  canYouSee: JWS.createVerify,
};
