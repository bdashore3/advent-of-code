const fs = require('fs')

// Position, depth, and aim vars that we'll be mutating
let position = 0
let depth = 0
let aim = 0

const rawData = fs.readFileSync('../input.txt', {encoding: 'utf-8'})

const directionArray = rawData.split("\n").map((x) => {
    const amount = Number(x.charAt(x.length - 1))
    const direction = x.slice(0, -1).trim()

    return { direction, amount }
})

// Iterate through our prebuilt direction object list
for (directionEntry of directionArray) {
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
