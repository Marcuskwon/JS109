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
take in an array of integers
return an array that contains the sum of the same and consecutive numbers and the other numbers
[1, 1, 2, 3, 3] - > [1 + 1 , 2 , 3 +3 ] - > [2, 2, 6]

rule
array only has integers
no empty array
consider negative and positive sign

input array
output array

algo

take in an array arr1
set a variable numberToAdd and assign 0 to it
set a variable returnArray and assign [] to it
set a variable howManyAdded and assign 0 to it
loop the input array
 for each element, first add it to numberToAdd
 if next number is the same as current -> add it to numberToAdd, +1 to howManyadded
 if not, push numberToAdd to returnArray and also current index + howManyAdded (because we want to skip those elements)
 every loop you need to add 1 to the current index
 break the loop if it reaches the end

return returnArray

*/




function sumConsecutives(arr1) {
  let numberBank = arr1.slice();
  let returnArray = [];
  
  while (true) {
    let nestedArray = [];
    nestedArray[0] = numberBank[0];
    numberBank.shift();
    while (true) {
      if (nestedArray[0] === numberBank[0]) {
        nestedArray.push(numberBank[0]);
        numberBank.shift();
        
      } else {
        break;
      }
      if (numberBank.length === 0) break;
    }
     returnArray.push(nestedArray);
      if(numberBank.length === 0) break;
  }

 return returnArray.map(nestedArr => nestedArr.reduce((acc,el) => acc + el, 0));
 
}

/*

function sumConsecutives(arr1) {
  
  let returnArray = [];
  let index = 0;
  
  while (true) {
    
    let numberToAdd = 0;
    numberToAdd = numberToAdd + arr1[index];
    
    let howManyAdded = 0;
    
    for (let innerIndex = 1; innerIndex < arr1.length - index + 1 ; innerIndex++) {
      if (arr1[index] === arr1[index + innerIndex]) {
        numberToAdd = numberToAdd + arr1[index];
        howManyAdded++;
      } else {
        returnArray.push(numberToAdd);
        index = index + howManyAdded;
        break;
    }
    }
    
    index ++;

    if (index > arr1.length) break;
    
  }

return returnArray;
  
}



////emily


function sumConsecutives(arr) {
  let result = [];
  let temp = 0;
  for (let idx = 0; idx < arr.length; idx++) {
    if (arr[idx] === arr[idx + 1]) {
      temp += arr[idx];
    } else {
      result.push(temp + arr[idx]);
      temp = 0;
    }
  }
  return result;
}


*/

console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]))// [1,12,0,4,6,1]
console.log(sumConsecutives([1,1,7,7,3]))// [2,14,3]
console.log(sumConsecutives([-5,-5,7,7,12,0])) // [-10,14,12,0]
console.log(sumConsecutives([3,3,3,3,1]))//[12, 1]
