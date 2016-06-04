class PhoneNumber {
  constructor(number) {
    number = number.replace(/[\(\) -\.]/g,'')
    if (number.length <= 9 || (number.length > 10 && !(number[0] == 1))) {
      number = '0000000000'
    } else if (number.length > 10) {
      number = number.slice(1)
    }
    this.stripped = number
  }

  number() {
    return this.stripped
  }

  areaCode() {
    return this.stripped.slice(0,3)
  }

  localNumber() {
    return `${this.stripped.slice(3,6)}-${this.stripped.slice(6)}`
  }

  toString() {
    return `(${this.areaCode()}) ${this.localNumber()}`
  }
}

export default PhoneNumber
