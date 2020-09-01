/* Given an array of strings made only from lowercase letters, 
return an array of all characters that show up in all strings within the given array (including ducplicates).
For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.


*/


/*
input - array
output - array

problem
take in an array that has some strings, and return an array that has the letters that occure in the strings in the input array


rule
input will be an array with only lowercase letters strings
if letters show up multiple times, you need to include that letter the same number of time in your return array


algo

take in an array 
set an empty array 'sharedLetters' = [];
set the first string in the array as letter testing string. 
  -> that means You will test if the other elements share any letter that the first element contains.
  
loop the array of the other elements ( without the first string)
for each letter of the first strgin, see if all of the other strings include that letter in each fo them.
if all include it, add it to 'sharedLetters' and also you have to delete the letter from the rest of elements


return 'sharedLetters'



*/

/* using map and replace
function commonChars(array) {
  let sharedLetters = [];
  let testingLetters = array[0];
  
  for (let i = 0; i < testingLetters.length; i ++) {
    if (array.every(element => element.includes(testingLetters[i]))) {
        sharedLetters.push(testingLetters[i]);
        array = array.map(ele => ele.replace(testingLetters[i], '')); 
        //reassigning array doesn't do anything with testingLetters becuase 'lestingLetters' is initialized to a value
      }
    }
  return sharedLetters;  

  }
*/

//using map but not using replace. creating another function instead
function commonChars(array) {
  let sharedLetters = [];
  let loopingArray = array.slice(1);
  let testingLetters = array[0];
  
  for (let idx = 0; idx < testingLetters.length; idx ++) {
    let testingLetter = testingLetters[idx];
    let allIncluded = true;
    for(let idx2 = 0; idx2 < loopingArray.length; idx2 ++) {
      if (!loopingArray[idx2].includes(testingLetter)) {
        allIncluded = false;
        
      }
    }
    if(allIncluded) {
      sharedLetters.push(testingLetter);
      loopingArray = loopingArray.map(ele => removingLetter(testingLetter, ele));
    }
  }
  return sharedLetters;
  
}

function removingLetter(letter, string) {
  let indx = string.indexOf(letter);
  let array = string.split('');
  array.splice(indx, 1);
  return array.join('');
}



console.log(commonChars(['a', 'b'])); //[]
console.log(commonChars(['ab', 'bc'])); // ['b']
console.log(commonChars(['bella', 'label', 'roller'])); // ['e', 'l', 'l']
console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); //['o']
console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])); // []

