/* given a non-empty string check if i can be constructed by taking a substring of it 
and appending multiple copies of the substing together.

You may assume the given string consists of lowercase English letters only

ex

input: 'abab'
output: True
explanation: it is the substing 'ab twice

input: 'aba'
output:False

console.log(repeatedSubstringPatter("abab") === true);
console.log(repeatedSubstringPatter("aba") === false);
console.log(repeatedSubstringPatter("aabaaba") === false);
console.log(repeatedSubstringPatter("abaababaab") === true);
console.log(repeatedSubstringPatter("abcabcabcabc") === true);


input - string
output - boolean

problem - test if a substring of the input string can be appended multiple times and creat the input string 
rule
input will be non-empty string
only english lowercase letters


algo

for each letter without the first letter,
set a variable 'substring' and assign an empty string to it
 create a substring that starts with the first letter
 for each substring, create a loop again
 add the substring n times until can create 'str'
 if yes return true
 
 


*/

function repeatedSubstringPatter(str) {
  for (let idx = 1; idx <= str.length; idx++) { //idx need to increase to length so we can capture the last letter
    let substring = str.slice(0, idx);
    if (substring === str) break; //if the substring is equal to str. that means we cannot push multiple times
    let multiSubstring = '';
    
    while (true) {
      multiSubstring = multiSubstring + substring;
      
      if (multiSubstring === str) return true;
      if (multiSubstring.length > str.length) break;
    }
  }
  return false;

  
}

console.log(repeatedSubstringPatter("aaaa") === true);
console.log(repeatedSubstringPatter("aba") === false);
console.log(repeatedSubstringPatter("aabaaba") === false);
console.log(repeatedSubstringPatter("abaababaab") === true);
console.log(repeatedSubstringPatter("abcabcabcabc") === true);

/*emily
problem: given a non empty string. need to see if we can take a substring of it, append multiple copies of it to that substring, and construct that string.
rules: string has lowercase letters only
input: string
output: boolean
algorithm:
get the length of the input string. if it's odd, then return false.
loop through the input string until the index reaches half the length
find the substrings of the input string that start with the first letter of that string.
check if appending that substring to it forms the input string (repeat as many times as length of string divided by length of substring)
if the appended substring is the same as the input substring, then return true. otherwise return false



function repeatedSubstringPatter(str) {
  let strLength = str.length;
  if (strLength % 2 !== 0 && !str.split("").every(letter => letter[0] === letter)) {
    return false;
  }
  for (let idx = 0; idx < str.length / 2; idx++) {
    let substring = str.slice(0, idx + 1);
    if (substring.repeat(strLength / substring.length) === str) {
      return true;
    }
  }
  return false;
}
*/
