class Bob {
  hey(message) {
    if (message.trim().length == 0)
      return 'Fine. Be that way!'
    else if (message.toUpperCase() == message && /[A-Za-z]/.test(message))
      return 'Whoa, chill out!'
    else if (message.slice(-1) == '?')
      return 'Sure.'
    else
      return 'Whatever.'
  }
}

export default Bob;

