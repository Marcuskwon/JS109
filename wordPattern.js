// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

// Example 1:

// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:

// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters that may be separated by a single space.

/*
problem:
given a patter(string) and string, find the string followes the same patter.


rules:
pattern means here 
 -> if the word in a string is the same, the better should indicate the same letter ex) aab -> dog dog cat
input will be strings

input: string, string
output: boolean

algorithm
set a variable strArray to the array that contains each word of string
if the length of patter is different from the length of strArray return false 

set a variable patternObj and set it to an empty object

create a loop to go through pattern and strArray
for each index
 if the letter from pattern is not included in the object as key,  assign object property. Key will be a letter from pattern and value will be element from strArray

 if included, the element of strArray should be the value of the property of object. if not -> return false
 
if loop ends without returnning anything 

return true 
*/

function wordPattern(pattern, str) {
  let strArray = str.split(' ');
  if (pattern.length !== strArray.length) {
    return false;
  }
  let patternObj = {};
  for (let idx = 0; idx < strArray.length; idx++) {
    if (!patternObj[pattern[idx]]) {
      if(Object.values(patternObj).includes(strArray[idx])) {
        return false;
      }
      patternObj[pattern[idx]] = strArray[idx];
    } else {
      if (strArray[idx] !== patternObj[pattern[idx]]) {
        return false;
      }
    }
  }
  return true;
}


console.log(wordPattern("abba", "dog cat cat dog")); // true
console.log(wordPattern("abba", "dog cat cat fish")); // false
console.log(wordPattern("aaaa", "dog cat cat dog")); // false
console.log(wordPattern("abba", "dog dog dog dog")); // false
console.log(wordPattern("aaa", "aa aa aa aa")); // false


