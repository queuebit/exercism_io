class Beer {
  static verse(bottles) {
    var b = bottles
    var bf = b - 1
    var intro = `${b} bottles of beer on the wall, ${b} bottles of beer.\n`
    var outro = `Take one down and pass it around, ${bf} bottles of beer on the wall.\n`

    if (b == 2) {
      outro = `Take one down and pass it around, ${bf} bottle of beer on the wall.\n`
    } else if (b == 1) {
      intro = `${b} bottle of beer on the wall, ${b} bottle of beer.\n`
      outro = `Take it down and pass it around, no more bottles of beer on the wall.\n`
    } else if (b == 0) {
      intro = `No more bottles of beer on the wall, no more bottles of beer.\n`
      outro = `Go to the store and buy some more, 99 bottles of beer on the wall.\n`
    }

    return intro + outro
  }

  static sing(start, end) {
    if (start == undefined)
      start = 99
    if (end == undefined)
      end = 0
    var song = ''
    for (var i = start; i >= end; i--) {
      if (song == '')
        song = song + this.verse(i)
      else
        song = song + '\n' + this.verse(i)
    }
    return song
  }
}

export default Beer
