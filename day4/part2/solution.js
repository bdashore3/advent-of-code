const fs = require("fs")

if (require.main === module) {
  main()
}

// OBJECTIVE: To find the last won card and
// calculate the unmarked number sum times the winning number
function main() {
  const rawData = fs
    .readFileSync("../input.txt", "utf-8")
    .split("\n")
    .filter((x) => x !== "")

  // The first line is the bingo calls
  const calls = rawData.shift().split(",")
  const cards = parseInput(rawData)

  // Main loop to iterate through bingo calls
  for (const callNum of calls) {
    // Nested loops to mark values in the object array
    for (const card of cards.entries()) {
      for (const row of card) {
        for (const value of row) {
          if (value.number === callNum) {
            value.marked = true
          }
        }
      }
    }

    // Purge won cards
    removeWonCards(cards)
  }
}

// Purges all cards that have won since multiple people can win at once
function removeWonCards(cards) {
  for (const [cardIndex, card] of cards.entries()) {
    if (cards.length == 1) {
      console.log(card)
    }

    const check = checkWinner(card, cardIndex)

    // If there's one last card left over and the card has won, we're finished
    if (check !== null && cards.length == 1) {
      console.log(`We have a winner!`)

      const sum = getUnmarkedSum(card)

      console.log(`Multiplied values is ${sum * parseInt(callNum, 10)}`)
      return
    } else if (check !== null) {
      cards.splice(cardIndex, 1)
    }
  }
}

// Gets the sum of unmarked numbers
function getUnmarkedSum(card) {
  let sum = 0
  let unmarkedRows = []

  for (const row of card) {
    unmarkedRows = unmarkedRows.concat(
      row.filter((value) => value.marked === false)
    )
  }

  for (const value of unmarkedRows) {
    sum += parseInt(value.number, 10)
  }

  return sum
}

// Checks if there's a win. First by rows and then by columns.
// The winning index is then returned and handled in the appropriate function
function checkWinner(card, cardIndex) {
  // Test for row winners, done first because it's less expensive
  for (const row of card) {
    let rowsMarked = row.filter((value) => value.marked === true)
    if (rowsMarked.length == 5) {
      return cardIndex
    }
  }

  // Grab all the columns and test for a column winner
  for (var i = 0; i < card.length; i++) {
    let columnArray = []

    for (const row of card) {
      columnArray.push(row[i])
    }

    let colsMarked = columnArray.filter((value) => value.marked === true)
    if (colsMarked.length == 5) {
      return cardIndex
    }
  }

  return null
}

// Parses input to fetch all bingo cards
function parseInput(rawData) {
  // Array of bingo cards
  let cards = []

  // Raw string values
  let rawCards = []

  // One card with 5 rows to be pushed to rawCards/cards
  let tempCard = []
  rawData.forEach((x) => {
    if (tempCard.length === 5) {
      rawCards.push(tempCard)
      tempCard = []
    }

    tempCard.push(x.trim())
  })

  // Do a last push to flush out tempCard
  rawCards.push(tempCard)

  // re-init tempCard
  tempCard = []

  rawCards.forEach((card) => {
    card.forEach((row) => {
      const splitRow = row.split(/(\s+)/).filter((e) => e.trim().length > 0)
      if (tempCard.length == 5) {
        cards.push(tempCard)
        tempCard = []
      }

      // Add the number and marked property for later
      splitRow.forEach((number, index) => {
        splitRow[index] = { number, marked: false }
      })

      tempCard.push(splitRow)
    })
  })

  // Do a last push to flush out tempCard
  cards.push(tempCard)

  return cards
}
