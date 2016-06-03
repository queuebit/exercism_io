class Transcriptor {
  toRna(seq) {
    const DNATORNA = {
      'C': 'G',
      'G': 'C',
      'A': 'U',
      'T': 'A'
    }
    return seq.split('').map(function (a) { return DNATORNA[a] }).join('')
  }
}

export default Transcriptor
