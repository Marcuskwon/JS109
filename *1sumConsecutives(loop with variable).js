/*
https://www.codewars.com/kata/55eeddff3f64c954c2000059/train/javascript
You are given a list/array which contains only integers (positive and negative). 
Your job is to sum only the numbers that are the same and consecutive. 
The result should be one list.

Extra credit if you solve it in one line. 
You can assume there is never an empty list/array and there will always be an integer.

Same meaning: 1 == 1

1 != -1

#Examples:

[1,4,4,4,0,4,3,3,1] # should return [1,12,0,4,6,1]

"""So as you can see sum of consecutives 1 is 1 
sum of 3 consecutives 4 is 12 
sum of 0... and sum of 2 
consecutives 3 is 6 ..."""

[1,1,7,7,3] # should return [2,14,3]
[-5,-5,7,7,12,0] # should return [-10,14,12,0]


problem
take in an array that contains integers and in the array, if there are any integers that are located
consecutively, add them up to one number and return an array

rule
the input will always have some integers

input array
output array

algo
take in an array 'arr'
set a variable returnArr and set it to an empty array

loop 'arr'
set a variable toAdd and set it to 0
for each element, 
 add the integer to toAdd
 if the next index is different from the current one
 push toAdd to returnArr
 
return returnArr



*/

function sumConsecutives(arr) {
  let returnArr = [];
  let toAdd = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    toAdd = toAdd + arr[idx];
    if (arr[idx] !== arr[idx + 1]) {
      returnArr.push(toAdd);
      toAdd = 0;
    }
  }
  return returnArr;
  
}




console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]))// [1,12,0,4,6,1]
console.log(sumConsecutives([1,1,7,7,3]))// [2,14,3]
console.log(sumConsecutives([-5,-5,7,7,12,0])) // [-10,14,12,0]
console.log(sumConsecutives([3,3,3,3,1]))//[12, 1]
