/*Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.



input - string
ouput - string

problem
if a string ends with a number, add 1 to the number and return the string
if a string doesn't with a number add 1 to the end of the string

algo
check if the last part of the input string ends with number
if not, add '1' to the end of the string
if yes, add +1 to the number 

return the new string

*/
function findexFirstNumberInex(string) {
  let result = string.length - 1;
  while(true) {
    if(isNaN(Number(string[result]))) break;
    result--;
  }
  return result + 1;
}
function incrementString (strng) {
  if(isNaN(Number(strng[strng.length - 1]))) {
    strng = strng + '1';
  } else {
    if (Number(strng[strng.length - 1]) !== 9) {
      let newNumber = Number(strng[strng.length - 1]) + 1;
      strng = strng.slice(0, strng.length - 1) + String(newNumber);
    } else {
      let firstNumberIndex = findexFirstNumberInex(strng);
      let newNumber = Number(strng.slice(firstNumberIndex)) + 1;
      strng = strng.slice(0, firstNumberIndex) + String(newNumber).padStart(strng.length - firstNumberIndex, "0");
    }
  }
return strng;
}