"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = transform;

function transform(old) {
  var t = {};
  Object.keys(old).forEach(function (k) {
    old[k].forEach(function (v) {
      t[v.toLowerCase()] = parseInt(k);
    });
  });
  return t;
}

module.exports = exports["default"];