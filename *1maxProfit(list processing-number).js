// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

// Example 1:

// Input: [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//              Not 7-1 = 6, as selling price needs to be larger than buying price.
// Example 2:

// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

/*
problem:
take in an array of integers and find the best possible combination of buying and selling prices
and return the highest outcome

rules:
if not biggest number -> return 0

input:array
output:number
algorithm:

take in an array 'arr'
set a variable possibleGain and set it to an empty array

loop 'arr'
 for each element 'a' you will have to find the difference between the other element 
  loop again and test if the return of current element - 'a' is bigger than 0.
  if yes -> push the difference to possibleGain

after loop, 
if possibileGain's length is bigger than 0
 sort possibleGain by in a descending order
 and return the first element of it
if not return 0

*/


function maxProfit(arr) {
  let possibleGain = [];
  for (let idx = 0; idx < arr.length; idx++) {
    for (let idx2 = idx + 1; idx2 < arr.length; idx2++) {
      if (arr[idx2] - arr[idx] > 0) {
        possibleGain.push(arr[idx2] - arr[idx]);
      }
    }
  }
  
  if (possibleGain.length === 0) {
    return 0;
  } else {
    return possibleGain.sort((a, b) => b - a)[0];
  }

}

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0
console.log(maxProfit([1,2,3,4,5,6,7,8,9,10])); // 9
console.log(maxProfit([9,3,6,4,1,2])); // 3