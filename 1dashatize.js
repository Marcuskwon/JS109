/*


https://www.codewars.com/kata/58223370aef9fc03fd000071/train/javascript


Given a number, return a string with dash'-'marks before and after each odd integer, 
but do not begin or end the string with a dash mark.




problem: take in a number and put '-' marks before and after all odd numbers

rule: my return should not start or end with -

input: number
output: string

algo
take in a number and cover the number to string set it as a variable 'inputString'
set a variable 'returnString' and assign an empty string
loop the string to the end letter
 for each letter, if number version of it is even, concatenate it with returnString
                  if odd, cover it to -letter- and, concatenate it with returnString

after loop, 
see if the first and last part of the string is -
if yes, change it to ''

and repalce -- to -

return the string
  
*/

function dashatize(number) {
  if(isNaN(number)) {
    return String(number);
  }
  
  let returnString = '';
  
  //add - at the ends of odd numbers first
  for (let idx = 0; idx < String(number).length; idx++) {
    if (Number(String(number)[idx]) % 2 === 0) {
      returnString = returnString + String(number)[idx];
    } else {
      returnString = returnString + `-${String(number)[idx]}-`;
    }
  }
  
  //replace all -- to -

  while (returnString.includes('--')) {
  returnString = returnString.replace('--', '-');
}

  returnString = returnString.replace(/--/g, '-');
  
  
  //this is a loop to remove '-' at the beginning and end
  let i = 0;
  while (returnString[0] === '-' || returnString[returnString.length - 1] === '-') {
   
  
  if (returnString[0] === '-') {
    returnString = returnString.slice(1);
  }
  
  if (returnString[returnString.length - 1] === '-') {
    returnString = returnString.slice(0, returnString.length - 1);
  }
  i++;
  if(i >= returnString.length) break;
  
  }
  return returnString;
  }

/*
function dashatize(num) {
  return String(num)
    .replace(/([13579])/g, "-$1-")
    .replace(/--+/g, "-")
    .replace(/(^-|-$)/g, "")
}

*/

console.log(dashatize(274) === "2-7-4");
console.log(dashatize(5311) === "5-3-1-1");
console.log(dashatize(86320) === "86-3-20");
console.log(dashatize(974302) === "9-7-4-3-02");
console.log(dashatize(NaN) === "NaN");
console.log(dashatize(0) === "0");
console.log(dashatize(-1) === "1");
console.log(dashatize(-28369) === "28-3-6-9");

