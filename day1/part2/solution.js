const fs = require('fs')

const rawData = fs.readFileSync('../inputtest.json', {encoding: 'utf-8'})
const inputJson = JSON.parse(rawData)

// Start at the first element of the list so a false positive isn't fired
let previousSum = inputJson.list[0] + inputJson.list[1] + inputJson.list[2]

// Counter for the sums greater than the previous one
let amountGreater = 0

// Checks if the previous sum is greater than the current one
for (let index = 0; index < inputJson.list.length; index++) {
    //console.log(`Index: ${index}, typeof index: ${typeof(index)} output ${inputJson.list[index]}`)

    let sum = inputJson.list[index] + inputJson.list[index + 1] + inputJson.list[index + 2]
    if (sum > previousSum) {
        //console.log(`${sum} is greater than ${previousSum}`)

        amountGreater++
    } else {
        //console.log(`${sum} is less than ${previousSum}`)
    }

    // Set the previous sum to the current one
    previousSum = sum
}

// Prints out the array length and part 1 answer
console.log(`Array length ${inputJson.list.length}`)
console.log(`The greater sum total is: ${amountGreater}`)
