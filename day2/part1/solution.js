const fs = require('fs')

// Position and depth vars that we'll be mutating
let position = 0
let depth = 0

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
            position += directionEntry.amount

            break
        case 'up':
            // decreases depth
            depth -= directionEntry.amount

            break
        case 'down':
            // increases depth
            depth += directionEntry.amount

            break
        default:
            console.log("You messed up, fix your crap")
    }

    //console.log(`Position is ${position}, depth is ${depth}`)
}

console.log(`Your final position is ${position}. Your final depth is ${depth}`)
console.log(`The multiplied values are ${position * depth}`)