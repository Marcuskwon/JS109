/*
Write a function scramble(str1, str2) that returns true if a portion of str1 characters can be reassgned
to match str2, otherwise return false.

For example,

str1 'rkqodlw' / str2 'world' -> true
str1 'cedewaraaossoqqyt' / str2 'codewars' -> true
str1 'katas' / str2 'steak' -> false

only lowercases (a-z) and no punctuation or digits 



input - string (str1), string (str2)
output - boolean

problem
verify if the value of str1 can be made out of the letters in the value of str1
and return true if it can, otherwise false

rule
only lower cases will be input
no punctuations or digits


algo

set a variable letterLeft with the same value as what str1 has.
loop str2
verify if each letter is included in letterLeft 
if yes -> replace that letter to nothing so we cannot use it again 
if no -> return false
repeat the process until the end of str2

if the loop ends without returning false
return true for the whole function

*/


function scramble(str1, str2) {
  let letterLeft = str1;
  for(let i = 0; i < str2.length; i ++) {
    if(letterLeft.includes(str2[i])) {
      letterLeft = letterLeft.replace(str2[i], ''); // this can be replaced with splice on array 
    } else {
      return false;
  }
  
}
return true;
}



console.log(scramble('javaass', 'jjss') === false);
console.log(scramble('rkqodlw', 'world') === true);
console.log(scramble('cedewaraaossoqqyt', 'codewars') === true);
console.log(scramble('katas', 'steak') === false);
console.log(scramble('scriptjava', 'javascript') === true);
console.log(scramble('scriptingjava', 'javascript') === true);
