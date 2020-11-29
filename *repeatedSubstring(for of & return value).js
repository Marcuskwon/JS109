/*

For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times. The input string consists of lowercase latin letters. Your function should return a tuple (in Python) (t, k) or an array (in Ruby and JavaScript) [t, k]

Example #1:

for string

s = "ababab";
the answer is

["ab", 3]
Example #2:

for string

s = "abcde";
the answer is

["abcde", 1]
because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.



problem
take in a string and go through its substrings, find the smallest substring that can be repeated k times to create the input string . The return array will includes smallest substring and k 

rule

input string
output array

algo
take in a string 'str'
set a variable returnArr and set it to an array that contains input string and 0 in it

loop 'str;
 for each letter, craete a substring that starts with that letter
 if str can be created by using that substring multiple times (n times)
  if that substring length is smaller than str's first element reassign the first element to this substring and also reassign the second element of returnArr to n

return returnArr

*/

function f(str) {
  let returnArr = [str, 0];
  for (let idx = 0; idx < str.length; idx++) {
   for (let idx2 = idx + 1; idx2 <= str.length; idx2++) {
    let substring = str.slice(idx, idx2);
     if (repeating(substring, str)) {
      if(returnArr[0].length >= substring.length) {
       returnArr = [substring, repeating(substring, str)];
      }
     }
   }
  }
  return returnArr;
}

function repeating(str1, str2) {
  let count = 1;
  while (true) {
  if (str1.repeat(count) === str2) {
    return count;
  }
    count++;
  if (str1.repeat(count).length > str2.length) break;
  }
    return false;
  }


console.log(f("ababab"))//, ["ab", 3]);
console.log(f("abcde"))//, ["abcde", 1]);



/*
Emily (for of)

function f(str) {
  let substrings = findSubstrings(str);
  for (let substring of substrings) {
    let count = 0;
    let newStr = "";
    while (newStr.length < str.length) {
      newStr += substring;
      count++;
    }
    if (newStr === str) {
      return [substring, count];
    }
  }
}

function findSubstrings(str) {
  let result = [];
  for (idx = 1; idx <= str.length; idx++) {
    result.push(str.slice(0, idx));
  }
  return result;
}

/*
problem: given a string, find minimum substring and maximum number such that the entire string is equal to the substring repeated the number amount of times. Return array with string and number.
rules: input string has lowercase letters only
input: string
output: array consisting of the minimum substring and a maximum number
algorithm:
find all substrings of input string that begin with the first letter of the string. (separate function). Put them in an array.
loop through the substrings array. 
declare count variable and set it equal to 0
make another loop
  repeat the substring until it reaches the length of the input string. If they are the same, then return the substring and count (how many times that substring was repeated) inside an array.

substrings function:
declare results variable and set it equal to an empty array
loop through the input string with idx = 1
    slice the string from 0 to idx push that substring into the results array
return results array
*/
*/