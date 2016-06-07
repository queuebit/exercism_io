'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Robot = (function () {
  _createClass(Robot, null, [{
    key: 'robotName',
    value: function robotName() {
      this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      this.names = this.names || new Set();
      var name = '';
      do {
        var l1 = this.letters[Math.floor(Math.random() * 26)];
        var l2 = this.letters[Math.floor(Math.random() * 26)];
        var n = Math.floor(Math.random() * 1000).toString();
        var pad = '00';
        name = l1 + l2 + pad.slice(0, 3 - n.length) + n;
      } while (this.names.has(name));
      this.names.add(name);
      return name;
    }
  }]);

  function Robot() {
    _classCallCheck(this, Robot);

    this.robotName = Robot.robotName();
  }

  _createClass(Robot, [{
    key: 'reset',
    value: function reset() {
      this.robotName = Robot.robotName();
    }
  }, {
    key: 'name',
    get: function get() {
      return this.robotName;
    }
  }]);

  return Robot;
})();

exports['default'] = Robot;
module.exports = exports['default'];