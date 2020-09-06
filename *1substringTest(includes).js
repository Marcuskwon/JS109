/*
Given 2 strings, your job is to find out if there is a substring that appears in both strings.
you will return true if you find a substring that appears in both strings, or false if you do not.
We only care about substrings that are longer than one letter long.
*/

/*
input string1, string2
output boolean

rule
we don't care about letter cases
we only care about substrings that are longer than one letter


algo

taken in two strings string1 and string2
set a variable "testingString" to a value that has smaller length between two
set a variable "anotherString" to the other string

loop the variable testingString
 in each letter, create a substring that starts with that letter and set a variable 'substring'\
 test if that string.length is longer than 1
 if yes -> test if the substring is inculded in the other string
 if yes, -> return true


if loop ends without returning anytning
return false

*/

function substringTest(string1, string2) {
  let testingString;
  let anotherString;
  
  if (string1.length >= string2.length) {
    testingString = string2.toLowerCase();
    anotherString = string1.toLowerCase();
  } else {
    testingString = string1.toLowerCase();
    anotherString = string2.toLowerCase();
  }
  
  for (let idx = 0; idx < testingString.length; idx ++) {
    for(let idx2 = 0; idx2 < testingString.length; idx2 ++) {
      let substring = testingString.slice(idx, idx2 + 1);
      if (substring.length > 1) {
        if (anotherString.includes(substring)) {
          return true;
        }
      }
    }
  }
  return false;
}




console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', 'Home') === true);
console.log(substringTest('Something', 'Fun') === false);
console.log(substringTest('Something', '') === false);
console.log(substringTest('', 'Something') === false);
console.log(substringTest('BANANA', 'banana') === true);
console.log(substringTest('test', 'lllt') === false);
console.log(substringTest('', '') === false);
console.log(substringTest('1234567', '541265') === true);
console.log(substringTest('supercalifragilisticexpialidocious', 'SoundOfItIsAtrociou') === true);
