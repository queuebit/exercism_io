"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var School = (function () {
  function School() {
    _classCallCheck(this, School);

    this.students = {};
  }

  _createClass(School, [{
    key: "add",
    value: function add(name, grade) {
      var gradeRoster = this.grade(grade);
      gradeRoster.push(name);
      this.students[grade] = gradeRoster.sort();
    }
  }, {
    key: "grade",
    value: function grade(_grade) {
      if (!this.students[_grade]) return [];
      return this.students[_grade];
    }
  }, {
    key: "roster",
    value: function roster() {
      var r = {};
      var self = this;
      Object.keys(self.students).forEach(function (g) {
        r[g] = self.students[g].slice();
      });
      return r;
    }
  }]);

  return School;
})();

exports["default"] = School;
module.exports = exports["default"];