const fs = require('fs')

// Position, depth, and aim vars that we'll be mutating
let position = 0
let depth = 0
let aim = 0

let rawData = fs.readFileSync("../input.json", {encoding: 'utf-8'})
let json = JSON.parse(rawData)

// Iterate through our prebuilt direction object list
for (directionEntry of json.directionList) {
    switch (directionEntry.direction) {
        case 'forward':
            // increases position
            position = position + directionEntry.amount

            // increases depth by aim * x
            depth = depth + aim * directionEntry.amount

            break
        case 'up':
            // decreases aim
            aim = aim - directionEntry.amount

            break
        case 'down':
            // increases aim
            aim = aim + directionEntry.amount

            break
        default:
            console.log("You messed up, fix your crap")
    }

    //console.log(`Position is ${position}. Depth is ${depth}. Aim is ${aim}`)
}

console.log(`Your final position is ${position}. Your final depth is ${depth}. Your final aim is ${aim}`)
console.log(`The multiplied values are ${position * depth}`)
