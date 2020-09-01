// Alice and Bob have candy bars of different sizes: A[i] is the size of the i-th bar of candy that Alice has, and B[j] is the size of the j-th bar of candy that Bob has.

// Since they are friends, they would like to exchange one candy bar each so that after the exchange, they both have the same total amount of candy.  (The total amount of candy a person has is the sum of the sizes of candy bars they have.)

// Return an integer array ans where ans[0] is the size of the candy bar that Alice must exchange, and ans[1] is the size of the candy bar that Bob must exchange.

// If there are multiple answers, you may return any one of them.  It is guaranteed an answer exists.

/*
problem:
take in two arrays with number elements
verify the total of elements for both
and switch one number element from the first array with another number element from the second array 
and as a result, both arrays should have the same total of number elements

rules:
input arrays will have number only
If there are multiple answers, you may return any of them.  It is guaranteed an answer exists.

input: array, array (number only)
output: one array

algorithm:

take in two arrays ar1, ar2
create an empty array 'result' 
loop ar1
 -for each element, loop ar2 
   - switch the element from ar1 with each element of ar2
   -compare the total of ar1 and ar2
   - if they are the same, push switched element to 'result'
   -return result
 

*/

function fairCandySwap(ar1, ar2) {
  let result = [];
  for (let i = 0; i < ar1.length; i ++) {
    for (let i2 = 0; i2 < ar2.length; i2 ++) {
      let ar1Total = ar1.reduce((accu, ele) => accu + ele) - ar1[i] + ar2[i2];
      let ar2Total = ar2.reduce((accu, ele) => accu + ele) - ar2[i2] + ar1[i];
      if (ar1Total === ar2Total) {
        result.push(ar1[i], ar2[i2]);
        return result; // I can do this without putting any result at the end of function because it is guaranteed an answer exists.
      }
      
    }
  }


}


console.log(fairCandySwap([1,1], [2,2])); // [1,2]
console.log(fairCandySwap([1,2], [2,3])); // [1,2]
console.log(fairCandySwap([2], [1,3])); // [2,3]
console.log(fairCandySwap([1,2,5], [2,4])); // [5,4]
console.log(fairCandySwap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0], [57, 2])) //


