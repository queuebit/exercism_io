'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var SpaceAge = (function () {
  _createClass(SpaceAge, null, [{
    key: 'pFactor',
    value: function pFactor() {
      var eFactor = 365.25 * 24 * 60 * 60;
      return {
        'mercury': eFactor * 0.2408467,
        'venus': eFactor * 0.61519726,
        'earth': eFactor,
        'mars': eFactor * 1.8808158,
        'jupiter': eFactor * 11.862615,
        'saturn': eFactor * 29.447498,
        'uranus': eFactor * 84.016846,
        'neptune': eFactor * 164.79132
      };
    }
  }]);

  function SpaceAge(seconds) {
    _classCallCheck(this, SpaceAge);

    this.spaceSeconds = seconds;
  }

  _createClass(SpaceAge, [{
    key: 'on',
    value: function on(planet) {
      return parseFloat((this.seconds / SpaceAge.pFactor()[planet]).toFixed(2));
    }
  }, {
    key: 'onMercury',
    value: function onMercury() {
      return this.on('mercury');
    }
  }, {
    key: 'onVenus',
    value: function onVenus() {
      return this.on('venus');
    }
  }, {
    key: 'onEarth',
    value: function onEarth() {
      return this.on('earth');
    }
  }, {
    key: 'onMars',
    value: function onMars() {
      return this.on('mars');
    }
  }, {
    key: 'onJupiter',
    value: function onJupiter() {
      return this.on('jupiter');
    }
  }, {
    key: 'onSaturn',
    value: function onSaturn() {
      return this.on('saturn');
    }
  }, {
    key: 'onUranus',
    value: function onUranus() {
      return this.on('uranus');
    }
  }, {
    key: 'onNeptune',
    value: function onNeptune() {
      return this.on('neptune');
    }
  }, {
    key: 'seconds',
    get: function get() {
      return this.spaceSeconds;
    }
  }]);

  return SpaceAge;
})();

exports['default'] = SpaceAge;
module.exports = exports['default'];