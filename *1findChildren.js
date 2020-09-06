// Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.

// Legend:
// -Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
// -Function input: String contains only letters, uppercase letters are unique.
// Task:
// Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".

/*
problem take in a string 'str' and place the letters in alphabetical order and a letter is uppercase, it has to come first before lowercase

rule
 - implicit rule 
 A letter's uppercase can be only one time
 A lowercase letters can occur multiple times

input string
output string
algo
take in a string 'str' 
copy 'str' and cover it to uppercase and then, conver it to an array and that sort the array in an alphabetical order - set a variable for this array 'sortedArray'

loop sortedArray 
for each element, if the element is the same as next element, convert the element to lower case.

after loop,
join the elements to a string and return it


helper function 'isSameLetter'
take in a letter and return if the letter is the same - ignoring lettercase

return truoe or false

*/

function isSameLetter(letter1, letter2) {
  return letter1.toUpperCase() === letter2.toUpperCase();
}

function findChildren(str) {
  let sortedArray = str.toUpperCase().split('').sort();

  for (let idx = 1; idx < sortedArray.length; idx++) {
    if (isSameLetter(sortedArray[idx], sortedArray[idx - 1])) {
      sortedArray[idx] = sortedArray[idx].toLowerCase();
    }
  } 
return sortedArray.join('');
}


/*
function findChildren(str) {
  str = str.toLowerCase();
  return str.split("").sort().map((letter, idx, arr) => {
    if (arr[idx - 1] !== arr[idx]) {
      return letter.toUpperCase();
    } else {
      return letter;
    }
  }).join("");
}

https://www.codewars.com/kata/58539230879867a8cd00011c
*/


console.log(findChildren("beeeEBb")); // "BbbEeee"
console.log(findChildren("uwwWUueEe")); // "EeeUuuWww"