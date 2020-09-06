/*
https://www.codewars.com/kata/58aa68605aab54a26c0001a6/train/javascript

Task
The year of 2013 is the first year after the old 1987 with only distinct digits.

Now your task is to solve the following problem: given a year number, 
find the minimum year number which is strictly larger than the given one and has only distinct digits.

Input/Output
[input] integer year

1000 ≤ year ≤ 9000

[output] an integer

the minimum year number that is strictly larger than the input number year and all its digits are distinct.

problem- take in a number and find the number that contatins digit that are distinct to each other
rule- input will be integer between 1000 and 9000
input number
output number



algo

take in a number
set a variable potentialNumber and set it to number + 1
create a loop
 convert potentialNumber to string
 set a variable allDiff and set it to true
 create a loop
  for each digit, check if current digit is different from next one
  if not, reassign allDiff to false
if allDiff is true, return potentialNumber
 break the loop when potentialNumber reaches 9001
 
 


*/

function distinctDigitYear(year) {
  
  let potentialNumber = year + 1;
  
  while (true) {
    potentialNumber = String(potentialNumber);
    
    let allDiff = potentialNumber.split('').every(ele => potentialNumber.indexOf(ele) === potentialNumber.lastIndexOf(ele));
    
    if (allDiff) {
      return potentialNumber;
    }
    
    potentialNumber = Number(potentialNumber) + 1;
    if (potentialNumber > 9000) break;
  }
  
}

