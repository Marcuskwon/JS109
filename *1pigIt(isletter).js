/*Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

problem
take in a string and move the first letter of each word to the end add 'ay' to the end of each word

rule
leave the puntuation untouched

input
string

output
string

algo

take in a string 'str'
covert the string to an array that contains each word and set it to a variable 'strArr'

loop the array 
 for each element, if the element is not a puntuation,
 move the first letter to the end of the element and add 'ay'

join the array and return it

*/

function pigIt(str) {
  let strArr = str.split(' ');
  
  return strArr.map(ele => {
    if (isLetter(ele)) {
      return ele.slice(1) + ele[0] + 'ay';
    } else {
      return ele;
    }}).join(' ');
   
}


function isLetter(l) {
  return l.toLowerCase() >= 'a' &&  l.toLowerCase() <= 'z';
}


console.log(pigIt('This is my string'));