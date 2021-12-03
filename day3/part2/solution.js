const fs = require("fs")

if (require.main === module) {
  main()
}

// Main function for my sanity
function main() {
  const rawText = fs.readFileSync("../input.txt", "utf-8")
  const binaryArray = rawText.split("\n")

  let arrays = getInitialArrays(binaryArray)

  // Pass to helper functions
  let oxygenValue = getOxygenValue(arrays.oxygen)
  let carbonValue = getCarbonValue(arrays.carbon)

  console.log(`The oxygen decimal value is: ${parseInt(oxygenValue, 2)}`)
  console.log(`The carbon decimal value is: ${parseInt(carbonValue, 2)}`)

  console.log(
    `The multiplied value is ${
      parseInt(oxygenValue, 2) * parseInt(carbonValue, 2)
    }`
  )
}

function getInitialArrays(binaryArray) {
  let oxygenArray
  let carbonArray

  let amounts = getZerosAndOnes(0, binaryArray)

  // Oxygen array gets greater occuring values
  // Carbon array gets the least occuring values
  if (amounts.zeroes > amounts.ones) {
    oxygenArray = binaryArray.filter((value) => value.charAt(0) == "0")
    carbonArray = binaryArray.filter((value) => value.charAt(0) == "1")
  } else if (amounts.zeroes <= amounts.ones) {
    oxygenArray = binaryArray.filter((value) => value.charAt(0) == "1")
    carbonArray = binaryArray.filter((value) => value.charAt(0) == "0")
  }

  return { oxygen: oxygenArray, carbon: carbonArray }
}

function getOxygenValue(oxygenArray) {
  for (var i = 1; i < oxygenArray[0].length; i++) {
    let amounts = getZerosAndOnes(i, oxygenArray)

    // Filter greatest occuring values
    // If the amounts are equal, filter all values with a 1
    // The else if is there for clarity's sake, an else could be used too
    if (amounts.zeroes > amounts.ones) {
      oxygenArray = oxygenArray.filter((value) => value.charAt(i) == "0")
    } else if (amounts.zeroes <= amounts.ones) {
      oxygenArray = oxygenArray.filter((value) => value.charAt(i) == "1")
    }

    // If the array length is 1, we got our answer
    if (oxygenArray.length == 1) {
      return oxygenArray[0]
    }
  }
}

function getCarbonValue(carbonArray) {
  for (var i = 1; i < carbonArray[0].length; i++) {
    let amounts = getZerosAndOnes(i, carbonArray)

    // Filter least occuring values
    // If the amounts are equal, filter all values with a 0
    // The else if is there for clarity's sake, an else could be used too
    if (amounts.zeroes > amounts.ones) {
      carbonArray = carbonArray.filter((value) => value.charAt(i) == "1")
    } else if (amounts.zeroes <= amounts.ones) {
      carbonArray = carbonArray.filter((value) => value.charAt(i) == "0")
    }

    // If the array length is 1, we got our answer
    if (carbonArray.length == 1) {
      return carbonArray[0]
    }
  }
}

function getZerosAndOnes(index, testArray) {
  let amountZeroes = 0
  let amountOnes = 0

  // Same as part 1
  testArray.forEach((value) => {
    switch (value.charAt(index)) {
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

  return { zeroes: amountZeroes, ones: amountOnes }
}
