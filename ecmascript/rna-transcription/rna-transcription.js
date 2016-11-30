class Transcriptor {
  toRna(seq) {
    const DNA_TO_RNA = {
      'C': 'G',
      'G': 'C',
      'A': 'U',
      'T': 'A'
    }
    return seq.split('').map(function (a) { return DNA_TO_RNA[a] }).join('')
  }
}

export default Transcriptor
