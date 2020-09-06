/*
You are given array of integers, 
your task will be to count all pairs in that array and return their count.

Notes:

Array can be empty or contain only one value; in this case return 0
If there are more pairs of a certain number, count each pair only once. 
E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)

Random tests: maximum array length is 1000, range of values in array is between 0 and 1000


[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5


[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again)

problem
take in an array of integers and count all pairs in an array and return their count

rule 
one value of empty array? -> return 0
more paris of a certain number, count each pair once
input array length range 0~1000

input array
output number

algo
take in an array of integers 'arr'
copy 'arr' and set it to go through 'copiedArr'
set a variable 'count' and set it to 0
loop copiedArr
 for each element, see if the rest of 'copiedArr' includes that element
  if yes -> add 1 to 0 also remove the current element and the other one from copiedArr

return count

*/

function duplicates(arr) {
  let copiedArr = arr.slice();
  let count = 0;
  while (true) {
    if (copiedArr.slice(1).includes(copiedArr[0])) {
      count++;
      copiedArr.splice(copiedArr.lastIndexOf(copiedArr[0]), 1);
    }
    copiedArr.shift();
    if (copiedArr.length === 0) break;
  }
  return count;
}





console.log(duplicates([1, 2, 5, 6, 5, 2]) === 2);
console.log(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]) === 4);
console.log(duplicates([0, 0, 0, 0, 0, 0, 0]) === 3);
console.log(duplicates([1000, 1000]) === 1);
console.log(duplicates([]) === 0);
console.log(duplicates([54]) ===0);
