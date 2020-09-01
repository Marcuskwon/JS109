/*
Given a string s, find the longest palindromic substring in s. 
You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/


/*
input: string
output: string

problem
find the longest possible palindromic substrings in s

rule
only string
max length -> 1000
palindromic is the word that is same when read backword and forward

algo

take in a string 'str'
set a variable potentialLongest with an empty string ''

loop str
for each letter, test the substrings that start with that letter 
test: 
if the letter backwards is the same as the word itself, if no move to next substrings
if yes, test again the substring'length is longer than the potentialLongest, if no move next letter
if yes, add it to the array

repeat the process

return potentialLongest

test 
console.log(longestPalindromic('babad') === 'bab')
console.log(longestPalindromic('babad') === 'aba')
console.log(longestPalindromic('cbbd') === 'bb')

*/

function readBackward(string) {
  return string.split('').reverse().join('');
}


function longestPalindrome(str) {
  let potentialLongest = '';
  for(let j = 0; j < str.length;j ++) {
    for(let i = 0; i < str.length; i ++) {
    if(str.slice(j, i + 1) === readBackward(str.slice(j, i + 1))) {
      if(str.slice(j, i + 1).length > potentialLongest.length) {
        potentialLongest = str.slice(j, i + 1);
      }
    }
    
  }
  }
  
  return potentialLongest;
}



console.log(longestPalindrome('babad') === 'bab');

console.log(longestPalindrome('cbbd') === 'bb');