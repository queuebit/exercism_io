'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Beer = (function () {
  function Beer() {
    _classCallCheck(this, Beer);
  }

  _createClass(Beer, null, [{
    key: 'verse',
    value: function verse(bottles) {
      var b = bottles;
      var bf = b - 1;
      var intro = b + ' bottles of beer on the wall, ' + b + ' bottles of beer.\n';
      var outro = 'Take one down and pass it around, ' + bf + ' bottles of beer on the wall.\n';

      if (b == 2) {
        outro = 'Take one down and pass it around, ' + bf + ' bottle of beer on the wall.\n';
      } else if (b == 1) {
        intro = b + ' bottle of beer on the wall, ' + b + ' bottle of beer.\n';
        outro = 'Take it down and pass it around, no more bottles of beer on the wall.\n';
      } else if (b == 0) {
        intro = 'No more bottles of beer on the wall, no more bottles of beer.\n';
        outro = 'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
      }

      return intro + outro;
    }
  }, {
    key: 'sing',
    value: function sing(start, end) {
      if (start == undefined) start = 99;
      if (end == undefined) end = 0;
      var song = '';
      for (var i = start; i >= end; i--) {
        if (song == '') song = song + this.verse(i);else song = song + '\n' + this.verse(i);
      }
      return song;
    }
  }]);

  return Beer;
})();

exports['default'] = Beer;
module.exports = exports['default'];