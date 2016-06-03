"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isLeapYear;

function isLeapYear(year) {
  // year divisible by 4, but not 100 unless also divisible by 400
  return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}

module.exports = exports["default"];