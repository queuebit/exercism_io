'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Anagram = (function () {
  function Anagram(word) {
    _classCallCheck(this, Anagram);

    this.word = word;
    this.letters = this.tokenize(word);
  }

  _createClass(Anagram, [{
    key: 'matches',
    value: function matches(words) {
      var self = this;
      return words.filter(function (w) {
        if (self.isAnagram(w)) return w;
      });
    }
  }, {
    key: 'tokenize',
    value: function tokenize(word) {
      var letters = {};
      word.split('').forEach(function (l) {
        var prev = letters[l] || 0;
        letters[l] = prev + 1;
      });
      return letters;
    }
  }, {
    key: 'isAnagram',
    value: function isAnagram(ana) {
      if (this.word.length != ana.length) return false;
      console.log(this.letters);
      console.log(this.tokenize(ana));
      return this.letters == this.tokenize(ana);
    }
  }]);

  return Anagram;
})();

exports['default'] = Anagram;
module.exports = exports['default'];