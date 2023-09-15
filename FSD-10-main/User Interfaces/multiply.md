# WORK IT - multiply.ja

You will write a function that will request two numbers from a user and generate a multiplication table using only JavaScript.

## Details

Call the function *promptTable()* that will prompt the user twice for a number.  

One prompt will request a number of the row count and another prompt will request a number for the columns count.

If either prompt is cancelled, do not do anything. Your script should stop.

If a number is  provided, use its absolute integer value 

If the information in not a number or 0, use a random number between 1 and 10

If two valid inputs were provided in the prompts by the user, you will then call the function *showTable(rows, cols)* that takes two numbers as its 2 parameters.  

It will create a simple html multiplication table using the rows and columns provided and append it to body using DOM API methods createNode and createTextNode.

## Hints
- You CAN NOT alter any html. Your function till append to the content of the body tag. Your script should be able to work on any page that loads it.
- Consider creating a real table in html to help guide the creation of you multiplication table.
- You should have nested for loops.

## Sample output
Given the input for rows 10, and the input for column 6. The following should be expected.  


| 1 | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 |
|---|----|----|----|----|----|----|----|----|----|
| 1 | 2  | 3  | 4  | 5  | 6  | 7  | 8  | 9  | 10 |
| 2 | 4  | 6  | 8  | 10 | 12 | 14 | 16 | 18 | 20 |
| 3 | 6  | 9  | 12 | 15 | 18 | 21 | 24 | 27 | 20 |
| 4 | 8  | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 |
| 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 |
| 6 | 12 | 18 | 24 | 30 | 36 | 42 | 48 | 54 | 60 |

*ignore the header row as this is a markdown style and not expected in your HTML output*