const fs = require("fs")

const rawText = fs.readFileSync("../input.txt", "utf-8")
const binaryArray = rawText.split("\n")

let gamma = ""
let epsilon = ""

for (var i = 0; i < binaryArray[0].length; i++) {
  let amountZeroes = 0
  let amountOnes = 0

  // Check for the value at each char of the array element and add to counter
  binaryArray.forEach((value) => {
    switch (value.charAt(i)) {
      case "0":
        amountZeroes++
        break
      case "1":
        amountOnes++
        break
      default:
        console.log("Something went wrong, fix your crap")
    }
  })

  // Add most common to gamma and least common to epsilon
  if (amountZeroes > amountOnes) {
    gamma += "0"
    epsilon += "1"
  } else {
    gamma += "1"
    epsilon += "0"
  }
}

console.log(`Gamma is: ${parseInt(gamma, 2)}`)
console.log(`Epsilon is: ${parseInt(epsilon, 2)}`)

console.log(
  `The multiplied value is ${parseInt(gamma, 2) * parseInt(epsilon, 2)}`
)
