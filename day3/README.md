# Part 1

- Get the text file and split by newline
- Initialize gamma and epsilon variables
- Run a traditional for loop based on the length of a list element
- Run another foreach loop on the list itself
- Check the char at position i (from the traditional for loop) with a switch and add to the zero/one total
- Compare the zero and one total
- If zeroes are greater than ones, do something and vice versa
- Convert gamma and epsilon strings to integers using parseInt with a radix of 2 (because base 2)
- Multiply the two values together

# Part 2

- Get the text file and split by newline
- Run the array through a function to split into separate oxygen and carbon arrays
  - The oxygen array has binary values full of the most occuring first char
  - The carbon array has binary values full of the least occuring first char
- Run the oxygen and carbon arrays in their own functions which get one binary value based upon various conditions
  - Oxygen array: checks for the most occuring char and eliminates from there
  - Carbon array: checks from the least occuring char and eliminates from there
- Convert oxygen and carbon binary strings to integers using parseInt with a radix of 2 (base 2)
- Multiply the two values together
