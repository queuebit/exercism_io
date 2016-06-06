class School {
  constructor() {
    this.students = {}
  }
  add(name, grade) {
    var gradeRoster = this.grade(grade)
    gradeRoster.push(name)
    this.students[grade] = gradeRoster.sort()
  }
  grade(grade) {
    if (!this.students[grade]) return []
    return this.students[grade]
  }
  roster() {
    var r = {}
    var self = this
    Object.keys(self.students).forEach(function (g) { r[g] = self.students[g].slice() })
    return r
  }
}

export default School
