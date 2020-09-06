/*
The vowel substrings in the word codewarriors are o,e,a,io. 
The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters only 
(both vowels and consonants) and no spaces, 
return the length of the longest vowel substring. Vowels are any of aeiou.

/*

problem
take in a string that find the longest substring that contains only vowels
return the length of the substring

rule
input will be only lowercase english letter

input string
output number

algo
take in a string 'str'
set a variable 'vowelsSubstring' and set it to an emptry array
loop 'str'
for each element,
 loop again find a substring that starts with that element
 if substring only includes vowels, put it to vowelsSubstring

after loop,
sort vowelsSubstring by length in a descending order
return the first element of it
  


*/

//using substring, and manually see if all letters are vowels
function solve(str) {
  let vowelsSubstring = [];
  for (let idx = 0; idx < str.length; idx++) {
    for (let idx2 = idx + 1; idx2 <= str.length; idx2++) {
     let substring = str.slice(idx, idx2);
     if (substring.split('').every(ele => ['a', 'e', 'i', 'o', 'u'].includes(ele))) {
       vowelsSubstring.push(substring);
     }
    }
  }
  
  return vowelsSubstring.sort((a, b) => b.length - a.length)[0].length;
  
}

/* using ^aeiou to split 
function solve(str) {
  let strArray = str.split(/[^aeiou]/);
  return strArray.sort((a, b) => b.length - a.length)[0].length;
}
*/


console.log(solve("suoidea"))// === 3);
console.log(solve("ultrarevolutionariees"))// === 3);
console.log(solve("strengthlessnesses"))// === 1);
console.log(solve("cuboideonavicuare"))// === 2);
console.log(solve("chrononhotonthuooaos"))// === 5);
console.log(solve("codewarriors"))// === 2);

