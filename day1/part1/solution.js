const fs = require('fs')

const rawData = fs.readFileSync('../input.json', {encoding: 'utf-8'})
const inputJson = JSON.parse(rawData)

// Start at the first element of the list so a false positive isn't fired
let previousElement = inputJson.list[0]

// Counter for the elements greater than the previous one
let amountGreater = 0

// Checks if the previous element is greater than the current one
for (element of inputJson.list) {
    if (element > previousElement) {
        //console.log(`${element} is greater than ${previousElement}`)

        amountGreater++
    } else {
        //console.log(`${element} is less than or equal to ${previousElement}`)
    }
    previousElement = element
}

// Prints out the array length and part 1 answer
console.log(`Array length ${inputJson.list.length}`)
console.log(`The increasing digit total is: ${amountGreater}`)
