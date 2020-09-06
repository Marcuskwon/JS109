// Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

/*
problem:take in a string and count how many a letter appears and return an array that contains nested array that has a letter and its count.

rules: 
-In the nested array. the first element is a letter. The second element is count.
-The order shouldn't be changed

input:string
output:array

algorithm:
take in a string 'str'
set a variable 'letterCount' and set it to an empty object
loop the string
for each letter, 
if the letter key is not valid in 'letterCount' create a key in the object 
if the letter key is valid, add one to that property value


set a variable 'returnArray' and set it to an empty array
set a variable 'strToLoop' and pass 'str' to helper function 'removeDuplicate' and assign the return value to 'strToLoop'


loop 'strToLoop'
 for each letter, get a value of the letter's key-value in object 'letterCount' and push an array that contains the letter and the value to 'returnArray'


return returnArray

//
helper function 'removeDuplicate'
take in a string 
set a variable 'returnArr'
loop the string
 for each letter, if the letter is not included in returnArr
 push

join 'returnArr' and return it
*/

function removeDuplicate(string) {
  let returnArr = [];
  for (let i = 0; i < string.length; i++) {
    if (!returnArr.includes(string[i])) {
      returnArr.push(string[i]);
    }
  }
  return returnArr.join('');
}


function orderedCount(str) {
  let letterCount = {};
  for (let idx = 0; idx < str.length; idx++) {
    if (letterCount[str[idx]]) {
      letterCount[str[idx]]++;
    } else {
      letterCount[str[idx]] = 1;
    }
  }

  let returnArray = [];
  let strToLoop = removeDuplicate(str);
 for (let idx2 = 0; idx2 < strToLoop.length; idx2++) {
   returnArray.push([strToLoop[idx2], letterCount[strToLoop[idx2]]]);
 }

return returnArray;

}


console.log(orderedCount("abracadabra")) // == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

console.log(orderedCount('233312'));

// https://www.codewars.com/kata/57a6633153ba33189e000074/
