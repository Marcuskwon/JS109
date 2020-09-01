/*
In this Kata, you will be given an integer array and your task is 
to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.




*/


console.log((total([]) === 0));
console.log((total([1,2,3,4]) === 7));
console.log((total([1,2,3,4,5,6]) === 13));
console.log((total([1,2,3,4,5,6,7,8]) === 21));
console.log((total([1,2,3,4,5,6,7,8,9,10,11]) === 21));
console.log((total([1,2,3,4,5,6,7,8,9,10,11,12,13]) === 33));
console.log((total([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]) === 47));



//----------------------------------------------mine---------------------------------------
function total(array) {
  let sum = 0;
  for (let i = 2; i < array.length; i++) {
    if (isPrimeNumber(i)) {
      sum = sum + array[i];
    }
  }
  return sum;
}


function isPrimeNumber(idx) {
  if (idx === 2) {
    return true;
  }
  let devidingNumber = 2;
  while (true) {
    if (idx % devidingNumber === 0) {
      return false;
    }
    devidingNumber++;
    if (devidingNumber === idx) break;
  }
  return true;
}




/*
problem: 
take in an array and return the sum of elements that are on the prime number indices.

rules: 
the first element of the array is at index 0
if empty array - > return 0
prime number -> the numbers that can be devided by the number itself and 1 when the remainder is 0

input: array
output: number

algorithm:


----
isPrimeNumber
take in a number 
if a number is 2 return true

set a variable devidingNumber = 2 
creaet a loop

if (number % dividingNumber === 0)
return false

devidingNumber++
if (devidingNumber === number) break;
return true


take in an array 'arr'
set a variable 'sum' with 0 value

loop the input array
 if index of the current array is prime number ->  to check if the index is the prime number using a function isPrimeNumber
   if it is a prime number index 
  -add the element value to 'sum' by reassigning sum to 'sum + element'
  
return sum
*/

