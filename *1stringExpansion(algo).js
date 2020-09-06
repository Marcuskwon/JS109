/*


Given a string that includes alphanumeric characters ('3a4B2d') return the expansion of that string: 
The numeric values represent the occurrence of each letter preceding that numeric value.
There should be no numeric characters in the final string. Empty strings should return an empty string.

The first occurrence of a numeric value should be the number of times each character behind it is repeated, 
until the next numeric value appears.

stringExpansion('3D2a5d2f') === 'DDDaadddddff'
stringExpansion('3abc') === 'aaabbbccc'      // correct
stringExpansion('3abc') !== 'aaabc'          // wrong
stringExpansion('3abc') !== 'abcabcabc'      // wrong
If there are two consecutive numeric characters the first one is ignored.

stringExpansion('3d332f2a') === 'dddffaa'
If there are two consecutive alphabetic characters then the first character has no effect on the one after it.

stringExpansion('abcde') === 'abcde'
Your code should be able to work for both lower and capital case letters.

stringExpansion('') === ''



problem
take in a string that includes alphanumeric characters return the expanstion of the string

rule
the number represents the repeatition of letters after it 
the return string will not includes any number
if there are two consecutive numbers, use the last one
if there are two consecutive letters, no effect to each other

input string
output string

algo

take in a string
set a variable 'result' and set it to an empty array

set a variable 'count' and assign 1 to it
loop the string
for each letter,
 if the current char is a number reassign count to that number
 If the current char is not a number push the current chart to result count times -> use helper function
 
and join 'result' and return it
 
  
 
 
 pushNTimes
 take in an array, number, and char
 set a variable howMany and set it to 0
 start a loop
 push char to an array
 add one to howMany
 if howMany raches number break
 

*/

function pushNtimes(arr, n, char) {
  let howMany = 0;
  while (true) {
    if (howMany >= n) break;
    arr.push(char);
    howMany++;

  }
}


function stringExpansion(s) {
  let result = [];
  let count = 1;
  for (let index = 0; index < s.length; index++) {
    if (!isNaN(Number(s[index]))) {
      count = Number(s[index]);
    } else {
      pushNtimes(result, count, s[index]);
    }
  }
  return result.join('');
}

console.log(stringExpansion('3abc') ==='aaabbbccc');
console.log(stringExpansion('3D2a5d2f') === 'DDDaadddddff');
console.log(stringExpansion('0d0a0v0t0y') === '');
console.log(stringExpansion('3d332f2a') === 'dddffaa');
console.log(stringExpansion('abcde') === 'abcde');
console.log(stringExpansion('a2bcde') ==='abbccddee');
