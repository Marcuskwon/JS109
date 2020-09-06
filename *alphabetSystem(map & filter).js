/*
https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/train/javascript
Consider the word "abode". 
We can see that the letter a is in position 1 and b is in position 2. 
In the alphabet, a and b are also in positions 1 and 2. 
Notice also that d and e in abode occupy the positions they would occupy in the alphabet, 
which are positions 4 and 5.


Given an array of words, 
return an array of the number of letters that occupy their positions in the alphabet for each word. 

For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

/*
problem
take in an array of strings and return an array that contains how many letters in each element have the same index in the element and in the alphabet

rule
in 'abod' -> a is in 1 and b is in 2, and d is in 4 whci are the same as alphabet
so it should be 3

input will have alphabet only no spaces

input array

output array

algo
create a variable 'alphabet' and set it to a-z 
take in an array of strings 'arr'
loop arr
 for each element, loop again
  set a variable count and set it to 0
  for each letter, see the index of the letter is the same as the index of it in alphabet
  if yes add one to count
  
 for each element in outer loop, the array that contains each count in element loop is the return of this function

 
*/


function solve(arr) {
  let arr2 = arr.map(ele => ele.toLowerCase());
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return arr2.map(ele => {
    return ele.split('').filter((letter, idx) => idx === alphabet.indexOf(letter)).length;
  });
}

//not using filter or map
function solve2(arr) {
  let arr2 = arr.map(ele => ele.toLowerCase());
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let returnArry = [];
  for (let idx = 0; idx < arr2.length; idx++) {
    let count = 0;
    for (let idx2 = 0; idx2 < arr2[idx].length; idx2++) {
      if (idx2 === alphabet.indexOf(arr2[idx][idx2])) {
        count++; 
      }
    }
    returnArry.push(count);
  }
  return returnArry;
}

console.log(solve(["abode","ABc","xyzD"])) // === [4,3,1]
console.log(solve(["abide","ABc","xyz"]))//  === [4,3,0]);
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]))// === [6, 5, 7]);
console.log(solve(["encode","abc","xyzD","ABmD"]))// === [1, 3, 1, 3]);