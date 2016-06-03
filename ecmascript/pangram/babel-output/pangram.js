'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Pangram = (function () {
  function Pangram(sentence) {
    _classCallCheck(this, Pangram);

    var lc = {};
    sentence.split('').forEach(function (l) {
      var ll = l.toLowerCase();
      if (/[a-z]/.test(ll)) lc[ll] = true;
    });
    this.letters = lc;
  }

  _createClass(Pangram, [{
    key: 'isPangram',
    value: function isPangram() {
      return Object.keys(this.letters).length == 26;
    }
  }]);

  return Pangram;
})();

exports['default'] = Pangram;
module.exports = exports['default'];