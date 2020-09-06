/*
	In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
	You will be passed a string and you must return that string in an array 
	where an uppercase letter is a person standing up.
	
	
Rules
 	1.  The input string will always be lower case but maybe empty.
2.  If the character in the string is whitespace then pass over it as if it was an empty seat.
Example
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/


function wave(str){
  let result = [];
  for (let idx = 0; idx < str.length; idx++) {
    let strToAdd = str.slice();
    if (str[idx] !== ' ') {
      strToAdd = strToAdd.slice(0, idx) + strToAdd.slice(idx, idx +1).toUpperCase() + strToAdd.slice(idx + 1);
      result.push(strToAdd);
    }
    
  }
  return result;
}