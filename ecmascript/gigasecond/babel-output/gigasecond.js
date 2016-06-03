"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gigasecond = (function () {
  function Gigasecond(moment) {
    _classCallCheck(this, Gigasecond);

    // 1 Billion seconds in milliseconds
    var GIGA = 1e9 * 1e3;
    this.giga = new Date(moment.getTime() + GIGA);
  }

  _createClass(Gigasecond, [{
    key: "date",
    value: function date() {
      return this.giga;
    }
  }]);

  return Gigasecond;
})();

exports["default"] = Gigasecond;
module.exports = exports["default"];