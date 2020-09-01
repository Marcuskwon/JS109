// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

/*
input array
output number

problem
take in an array with integer and return one of the elements of the array which is different from the rest (for example odd or even)

rule
array length will be >= 3
elements will ingegers (including - and 0)

algo
take in an array
set a  variable - an empty array - oddArray: I am going to put odd number elements to here
set a  variable - an empty array - evenArray: I am going to put even number elements to here

loop the array 
for each element, test if the element is odd or even
depending on the result, add the element to a proper variable above

after the loop,
check which array has a length of 1
and return the element (should be only one element) of the array

*/


function findOutlier(arr) {
  
  let oddArray = [];
  let evenArray = [];

  for (let idx = 0; idx < arr.length; idx ++) {
    if(arr[idx] % 2 === 0) {
      evenArray.push(arr[idx])
    } else {
      oddArray.push(arr[idx])
    }
  }
  if(oddArray.length === 1) {
    return oddArray[0];
  } else {
    return evenArray[0];
  }

}


function findOutlier(arr) {
  let arr1 = arr.filter(num => num % 2 === 0);
  let arr2 = arr.filter(num => num % 2 !== 0);
  if (arr1.length === 1) {
    return arr1[0];
  } else {
    return arr2[0];
  }
}


console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // 160