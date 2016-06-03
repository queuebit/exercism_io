class Gigasecond {
  constructor(moment) {
    // 1 Billion seconds in milliseconds
    const GIGA = 1e9 * 1e3
    this.giga = new Date(moment.getTime() + GIGA)
  }
  date() {
    return this.giga
  }
}

export default Gigasecond
