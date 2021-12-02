const fs = require('fs')

const rawData = fs.readFileSync('../input.txt', {encoding: 'utf-8'})

const inputList = rawData.split('\n').map((x) => {
    return Number(x)
})

// Start at the first element of the list so a false positive isn't fired
let previousSum = inputList[0] + inputList[1] + inputList[2]

// Counter for the sums greater than the previous one
let amountGreater = 0

// Checks if the previous sum is greater than the current one
for (let index = 0; index < inputList.length; index++) {
    let sum = inputList[index] + inputList[index + 1] + inputList[index + 2]
    if (sum > previousSum) {
        amountGreater++
    }

    // Set the previous sum to the current one
    previousSum = sum
}

// Prints out the array length and part 1 answer
console.log(`Array length ${inputList.length}`)
console.log(`The greater sum total is: ${amountGreater}`)
