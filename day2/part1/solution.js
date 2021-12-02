const fs = require('fs')

// Position and depth vars that we'll be mutating
let position = 0
let depth = 0

let rawData = fs.readFileSync("../input.json", {encoding: 'utf-8'})
let json = JSON.parse(rawData)

// Iterate through our prebuilt direction object list
for (directionEntry of json.directionList) {
    switch (directionEntry.direction) {
        case 'forward':
            // increases position
            position = position + directionEntry.amount

            break
        case 'up':
            // decreases depth
            depth = depth - directionEntry.amount

            break
        case 'down':
            // increases depth
            depth = depth + directionEntry.amount

            break
        default:
            console.log("You messed up, fix your crap")
    }

    //console.log(`Position is ${position}, depth is ${depth}`)
}

console.log(`Your final position is ${position}. Your final depth is ${depth}`)
console.log(`The multiplied values are ${position * depth}`)
