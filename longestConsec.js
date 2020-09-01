// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Example:
// longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

// Note
// consecutive strings : follow one after another without an interruption

/*
problem: 
taken in an array of strings and an integer k
find the longest string combination that consists of k consecutive strings in the array

rules:
if k is bigger than or euqals to length of the array -> return ''
if k is smaller than 0 -> return ''

input: array
output: string

algorithm:
take in an array(arr) and an integer(num)

if number is greater than equal to length of array OR num is smaller than is euqals to 0 -> return ''

declare a variable with an empty string - longestStringComb

loop the array
for each element, create a string(stringComb) that is concactnated with next (num - 1) elements 
if length of stringComb > the length of longestStringComb, reassign longestStringComb to stringComb

return longestStringComb

*/

function longestConsec(arr, num) {
  if (num > arr.length || num <= 0) {
    return '';
  }
  
  let longestStringComb = ''

  for (let i = 0; i < arr.length; i ++) {
    let stringComb = arr.slice(i, i + num).reduce((acc, ele) => acc + ele);
    if(stringComb.length > longestStringComb.length) {
      longestStringComb = stringComb;
    }
  }
  return longestStringComb;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)); // "abigailtheta"
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)) // "abigailtheta")
console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)) // "oocccffuucccjjjkkkjyyyeehh")
console.log(longestConsec([], 3)) // "")
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)); //"wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck")
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)) // "wlwsasphmxxowiaxujylentrklctozmymu")
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2)) // "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)) // "ixoyx3452zzzzzzzzzzzz")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)) // "")
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0)) // "")