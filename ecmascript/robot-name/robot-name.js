class Robot {
  static robotName() {
    this.letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.names = this.names || new Set()
    var name = ''
    do {
      var l1 = this.letters[Math.floor(Math.random() * 26)]
      var l2 = this.letters[Math.floor(Math.random() * 26)]
      var n = Math.floor(Math.random() * 1000).toString()
      var pad = '00'
      name = l1 + l2 + pad.slice(0,3 - n.length) + n
    } while (this.names.has(name));
    this.names.add(name)
    return name
  }
  constructor() {
    this.robotName = Robot.robotName()
  }
  get name() {
    return this.robotName
  }
  reset() {
    this.robotName = Robot.robotName()
  }
}

export default Robot
