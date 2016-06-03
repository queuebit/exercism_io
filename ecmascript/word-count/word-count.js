class Words {
  count(s) {
    var wCount = {}
    var words = s.split(/[ \n\t]+/)
    words.forEach(function(w) {
      if (w == '')
        return
      var lw = w.toLowerCase()
      var prev = (typeof wCount[lw] == 'number') ? wCount[lw] : 0
      wCount[lw] = prev + 1
    })
    return wCount
  }
}

export default Words
