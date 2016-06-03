class Hamming {
  compute(seq1, seq2) {
    if (seq1.length != seq2.length)
      throw new Error('DNA strands must be of equal length.')

    var distance = 0
    seq1.split('').forEach(function (a1, i) {
      if (a1 != seq2[i])
        distance += 1
    })

    return distance
  }
}

export default Hamming;
