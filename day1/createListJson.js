const fs = require('fs')

const list = `199
200
208
210
200
207
240
269
260
263`

// Convert string to numerical list
const obj = {list: list.split("\n").map((x) => {
    return parseInt(x, 10)
})}

// Write list to JSON file for easy parsing
fs.writeFileSync('./input.json', JSON.stringify(obj))
