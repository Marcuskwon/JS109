// Given a string s, the power of the string is the maximum length of a non-empty substring that contains only one unique character.

// Return the power of the string.

// Example 1:

// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.
// Example 2:

// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.
// Example 3:

// Input: s = "triplepillooooow"
// Output: 5
// Example 4:

// Input: s = "hooraaaaaaaaaaay"
// Output: 11
// Example 5:

// Input: s = "tourist"
// Output: 1

/*
problem:
take in a string find the longest substring that contains the same letter and return the length of it

rules:
input will only lowercase english letter

input:string
output:number
algorithm:

take in a string 'str'
set a variable 'substringWithOneLetter' and set it to an empty array

loop 'str'
 for each letter
 create a substring that strats with that letter
 if all of letters in the substring are same, push that substring to substringWithOneLetter

after loop,
 sort substringWithOneLetter in a descending order by elements' length, and return the first element

*/

function maxPower(str) {
  let substringWithOneLetter = [];
  for (let idx = 0; idx < str.length; idx++) {
    for (let idx2 = idx + 1; idx2 <= str.length; idx2++) {
      let substring = str.slice(idx, idx2);
      if (substring.split('').every(ele => ele === substring[0])) {
        substringWithOneLetter.push(substring);
      }
    }
  }
  return substringWithOneLetter.sort((a, b) => b.length - a.length)[0].length;
}

console.log(maxPower("leetcode")); // 2
console.log(maxPower("abbcccddddeeeeedcba")); // 5
console.log(maxPower("triplepillooooow")); // 5
console.log(maxPower("hooraaaaaaaaaaay")); // 11
console.log(maxPower("tourist")); // 1

https://leetcode.com/problems/consecutive-characters/


function maxPower(str) {
  let maxLength = 0;
  for (let idx1 = 0; idx1 < str.length; idx1++) {
    let temp = str[idx1];
    for (let idx2 = idx1 + 1; idx2 < str.length; idx2++) {
      if (temp[0] === str[idx2]) {
        temp += str[idx2];
      } else {
        break;
      }
    }
    if (temp.length > maxLength) {
      maxLength = temp.length;
    }
  }
  return maxLength;
}