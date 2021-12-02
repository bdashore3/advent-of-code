const fs = require('fs')

const rawData = fs.readFileSync('../input.txt', {encoding: 'utf-8'})

const inputList = rawData.split('\n').map((x) => {
    return Number(x)
})

// Start at the first element of the list so a false positive isn't fired
let previousElement = inputList[0]

// Counter for the elements greater than the previous one
let amountGreater = 0

// Checks if the previous element is greater than the current one
for (element of inputList) {
    if (element > previousElement) {
        amountGreater++
    }

    previousElement = element
}

// Prints out the array length and part 1 answer
console.log(`Array length ${inputList.length}`)
console.log(`The increasing digit total is: ${amountGreater}`)
