'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Song = (function () {
  function Song() {
    _classCallCheck(this, Song);
  }

  _createClass(Song, [{
    key: 'verse',
    value: function verse(n) {
      var song = [];
      var ANIMAL = {
        1: 'fly',
        2: 'spider',
        3: 'bird',
        4: 'cat',
        5: 'dog',
        6: 'goat',
        7: 'cow',
        8: 'horse'
      };
      var WHY = {
        2: 'It wriggled and jiggled and tickled inside her.',
        3: 'How absurd to swallow a bird!',
        4: 'Imagine that, to swallow a cat!',
        5: 'What a hog, to swallow a dog!',
        6: 'Just opened her throat and swallowed a goat!',
        7: "I don't know how she swallowed a cow!",
        8: "She's dead, of course!\n"
      };
      song.push('I know an old lady who swallowed a ' + ANIMAL[n] + '.');
      for (var i = n; i >= 1; i--) {
        if (i == n && n != 1) song.push(WHY[i]);
        if (i > 1 && n < 8) song.push('She swallowed the ' + ANIMAL[i] + ' to catch the ' + ANIMAL[i - 1] + (i == 3 ? ' that wriggled and jiggled and tickled inside her' : '') + '.');
      }
      if (n < 8) song.push("I don't know why she swallowed the fly. Perhaps she'll die.\n");
      return song.join('\n');
    }
  }, {
    key: 'verses',
    value: function verses(start, stop) {
      var verses = [];
      for (var i = start; i <= stop; i++) {
        verses.push(this.verse(i));
      }
      verses.push('');
      return verses.join('\n');
    }
  }]);

  return Song;
})();

exports['default'] = Song;
module.exports = exports['default'];