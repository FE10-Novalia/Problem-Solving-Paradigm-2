const romawi = {
  M : 1000,
  CM : 900,
  D : 500,
  C : 100,
  XC : 90,
  L : 50,
  XL : 40,
  X : 10,
  IX: 9,
  V : 5,
  IV : 4,
  I : 1,
}
const keys = Object.keys(romawi)

function romanNumerals(value) {
  // your code here
  let output = ``
  for(let key of keys){
      while(value > 0 && value >= romawi[key]){
          output += key
          value -= romawi[key]
      }
  }
  return output
}

module.exports = romanNumerals;
