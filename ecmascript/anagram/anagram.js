class Anagram {
  constructor(word) {
    this.word = word
    this.letters = this.tokenize(word)
  }

  matches(words, ...otherWords) {
    var self = this
    if (typeof words == 'string')
      words = [words]
    if (otherWords.length > 0)
      words = words.concat(otherWords)
    return words.filter(function (w) {
      if (self.isAnagram(w))
        return w
    })
  }

  tokenize(word) {
    return word.toLowerCase().split('').sort().join('')
  }

  isAnagram(ana) {
    if (this.word.length != ana.length)
      return false
    if (this.word.toLowerCase() == ana.toLowerCase())
      return false
    return this.letters == this.tokenize(ana)

  }
}

export default Anagram
