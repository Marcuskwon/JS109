
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.


/*
input - array of strings
output - string

problem - 
given an array of strings, find the longest common prefix among them
if no, return empty string

algo
take in an array
sort the array in an ascending order of its length
in the sorted array, pick the first element as testing string since it is the smallest
set an empty array = sharedPrefix

loop each letter of the first element
 see if the substring of each letter is included in the other elemenets
 if yes, add it to sharedPrefix.

after loop, sort the sharedPrefix in an discensing order

return the first element of the sorted sharedPrefix


*/
const startWith = (str, prefix) => {
  for (let idx = 0; idx < prefix.length; idx++) {
    if (str[idx] !== prefix[idx]) {
      return false;
    }
  }
  return true;
};

function commonPrefix(array) {
  let sortedArray = array.sort((a, b) => a.length - b.length);
  let testingString = sortedArray[0];
  let sharedPrefix = [];
  for(let stringIdx = 0; stringIdx <= testingString.length; stringIdx ++) {
      let substring = testingString.slice(0, stringIdx);
      if(array.every(ele => startWith(ele, substring))) {
        sharedPrefix.push(substring);
      }
    }
  sharedPrefix = sharedPrefix.sort((a, b) => b.length - a.length);
  return sharedPrefix[0];
}



console.log(commonPrefix(["flower","flow","flight"]) === "fl"); // true
console.log(commonPrefix(["dog","racecar","car"])  === ""); // true
console.log(commonPrefix(["interspecies","interstellar","interstate"])  === "inters"); // true
console.log(commonPrefix(["throne","dungeon"]) === ""); // true
console.log(commonPrefix(["throne","throne"]) === "throne"); // true





/*emily

problem: given an array of strings, find the longest common prefix. If no common prefix, return an empty string.
rules: If no common prefix, return an empty string. If input is empty array, return empty string
input: array
output: string
algorithm: 
declare a variable called prefix and set it equal to an empty string.
if the length of the array is 0, return an empty string.
get the first word of the array.
iterate through the letters of the first word.
  iterate through the words of the array, starting with the 2nd word.
  if the current letter of the word in the first loop is not the same as the letter (current letter from the first loop) of the current word, return prefix.
after the 2nd loop finishes, add the current letter from the first loop to prefix.
after the 1st loop finishes, return prefix.

function commonPrefix(arr) {
  let prefix = "";
  if (arr.length === 0) {
    return prefix;
  }
  let firstWord = arr[0];
  for (let letter = 0; letter < firstWord.length; letter++) {
    for (let word = 1; word < arr.length; word++) {
      if (firstWord[letter] !== arr[word][letter]) {
        return prefix;
      }
    }
    prefix += firstWord[letter];
  }
  return prefix;
}
*/