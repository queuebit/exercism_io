export default function transform(old) {
  var t = {}
  Object.keys(old).forEach(function(k) {
    old[k].forEach(function(v) {
      t[v.toLowerCase()] = parseInt(k)
    })
  })
  return t
}
