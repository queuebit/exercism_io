class Pangram {
  constructor(sentence) {
    var lc = {}
    sentence.split('').forEach(function(l) {
      var ll = l.toLowerCase()
      if (/[a-z]/.test(ll))
        lc[ll] = true
    })
    this.letters = lc
  }
  isPangram() {
    return Object.keys(this.letters).length == 26
  }
}

export default Pangram
