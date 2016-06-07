class SpaceAge {
  static pFactor() {
    var eFactor = 365.25*24*60*60
    return {
      'mercury': eFactor*0.2408467,
      'venus': eFactor*0.61519726,
      'earth': eFactor,
      'mars': eFactor*1.8808158,
      'jupiter': eFactor*11.862615,
      'saturn': eFactor*29.447498,
      'uranus': eFactor*84.016846,
      'neptune': eFactor*164.79132
    }
  }
  constructor(seconds) {
    this.spaceSeconds = seconds
  }
  get seconds() {
    return this.spaceSeconds
  }
  on(planet) {
    return parseFloat((this.seconds / SpaceAge.pFactor()[planet]).toFixed(2))
  }
  onMercury() {
    return this.on('mercury')
  }
  onVenus() {
    return this.on('venus')
  }
  onEarth() {
    return this.on('earth')
  }
  onMars() {
    return this.on('mars')
  }
  onJupiter() {
    return this.on('jupiter')
  }
  onSaturn() {
    return this.on('saturn')
  }
  onUranus() {
    return this.on('uranus')
  }
  onNeptune() {
    return this.on('neptune')
  }

}

export default SpaceAge
