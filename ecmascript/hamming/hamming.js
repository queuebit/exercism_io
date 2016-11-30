class Hamming {
  compute(seq1, seq2) {
    if (seq1.length != seq2.length)
      throw new Error('DNA strands must be of equal length.')

    return seq1.split('').reduce(function (d, a1, i) {
      return a1 != seq2[i] ? d + 1 : d
    }, 0)
  }
}

export default Hamming;
