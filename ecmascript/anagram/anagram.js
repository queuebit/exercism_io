class Anagram {
  constructor(word) {
    this.word = word
    this.letters = this.tokenize(word)
  }

  matches(words) {
    var self = this
    return words.filter(function (w) {
      if (self.isAnagram(w))
        return w
    })
  }

  tokenize(word) {
    var letters = {}
    word.split('').forEach(function (l) {
      var prev = letters[l] || 0
      letters[l] = prev + 1
    })
    return letters
  }

  isAnagram(ana) {
    if (this.word.length != ana.length)
      return false
    console.log(this.letters)
    console.log(this.tokenize(ana))
    return this.letters == this.tokenize(ana)

  }
}

export default Anagram
