'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PhoneNumber = (function () {
  function PhoneNumber(number) {
    _classCallCheck(this, PhoneNumber);

    number = number.replace(/[\(\) -\.]/g, '');
    if (number.length <= 9 || number.length > 10 && !(number[0] == 1)) {
      number = '0000000000';
    } else if (number.length > 10) {
      number = number.slice(1);
    }
    this.stripped = number;
  }

  _createClass(PhoneNumber, [{
    key: 'number',
    value: function number() {
      return this.stripped;
    }
  }, {
    key: 'areaCode',
    value: function areaCode() {
      return this.stripped.slice(0, 3);
    }
  }, {
    key: 'localNumber',
    value: function localNumber() {
      return this.stripped.slice(3, 6) + '-' + this.stripped.slice(6);
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '(' + this.areaCode() + ') ' + this.localNumber();
    }
  }]);

  return PhoneNumber;
})();

exports['default'] = PhoneNumber;
module.exports = exports['default'];