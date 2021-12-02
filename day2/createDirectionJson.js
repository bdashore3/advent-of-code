const fs = require('fs')

const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`

// Convert string to numerical list
// Contains {direction: String, amount: number}
const entries = []
const inputArray = input.split("\n")
inputArray.forEach((element) => {
    let trimmedArray = element.replace(' ', '').split(/(\d+)/)
    entries.push({direction: trimmedArray[0], amount: parseInt(trimmedArray[1], 10)})
})

//console.log(entries)

const obj = { directionList: entries }

// Write list to JSON file for easy parsing
fs.writeFileSync('./input.json', JSON.stringify(obj))
