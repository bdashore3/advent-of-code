# Day 4

This one took a really long time to complete.

Part 1:

- Read textfile and split into bingo calls and their respective cards
  - Bingo cards were an array of an array of an array of objects. These contained rows and columns
- Create a main for loop to iterate over calls
- Iterate over the cards and rows to mark the appropriate values
- Once a value is marked, check if the card is a winner
  - Done by collecting winning values per row and column then testing if the length == 5 (the length of the bingo card)
- If a winning value is found, the array index is returned
- Compute the unmarked sum and multiply that by the winning number (which is the call number from the main for loop)

Part 2

- This follows the same procedure as part 1, but with a little twist:
  - We have to pick the last possible bingo card choice and get the number which makes that card win
  - Multiple people can win on the same number
- This required the check winner logic to be called after all cards were marked to prevent any
  false positives.
- After the last card and number are determined, get the unmarked sum and multiply the winning number
