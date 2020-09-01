//Find the length of the longest substring in the given string that is the same in reverse.

//As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

//If the length of the input string is 0, return value must be 0.

//Example:
//"a" -> 1
//"aab" -> 2
//"abcde" -> 1
//"zzbaabcd" -> 4
//"" -> 0

/*
problem
take in a string and find its longest substring that is same when it is reversed

rule
the length of the input string is 0, return value must be 0.


input - string
output- number

algo
creat a helper function 'isReverseSame'that checkes if the reversed version of it is the same -> will return true or false

take in a string 'str'
if str.length is euqal to 0 return 0 right away

set a variable potentialLongest and set it to empty string
loop the string
 for each letter
 loop again to create substring that starts with that letter
 if 'isReverseSame' returns true when the substring is passed to it, compare the length of it with that of potentialLongest.
 if it is bigger -> reassign potentialLongest to the substring


return potentialLongest length

*/


function longestPalindrome(string) {
  if (string.length === 0) {
    return 0;
  }
  let potentialLongest = '';
  for (let idx = 0; idx < string.length; idx++) {
    for (let idx2 = idx + 1; idx2 < string.length + 1;idx2++) {
    let substring = string.slice(idx, idx2);  
    if (isReverseSame(substring)) {
      if (substring.length > potentialLongest.length) {
        potentialLongest = substring;
      }
    }
    }
  }
  return potentialLongest.length;
}


//helper function
function isReverseSame(str) {
  return str === str.split('').reverse().join('');
}



console.log(longestPalindrome("a")); // 1
console.log(longestPalindrome("aa")); // 2
console.log(longestPalindrome("baa")); // 2
console.log(longestPalindrome("aab")); // 2
console.log(longestPalindrome("baabcd")); // 4
console.log(longestPalindrome("baablkj12345432133d")); // 9



-----------------------------------------------------------------



//Find the length of the longest substring in the given string that is the same in reverse.

//As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

//If the length of the input string is 0, return value must be 0.

//Example:
//"a" -> 1
//"aab" -> 2
//"abcde" -> 1
//"zzbaabcd" -> 4
//"" -> 0

/*
problem
take in a string and find its longest substring that is same when it is reversed

rule
the length of the input string is 0, return value must be 0.


input - string
output- number

algo
creat a helper function 'isReverseSame'that checkes if the reversed version of it is the same -> will return true or false

take in a string 'str'
if str.length is euqal to 0 return 0 right away

set a variable potentialLongest and set it to empty string

find all the substrings for a given string and assign them to subs variable
   - loop the string (throught indexes)
     - within each loopstart from idx + 1 and loop until the end
       - slice the string from idx, until secondIdx

find all the palindromes for given substrings

subs.filter(sub => sub === sub.reverse())

return longest palindrome


loop the string
 for each letter
 loop again to create substring that starts with that letter
 if 'isReverseSame' returns true when the substring is passed to it, compare the length of it with that of potentialLongest.
 if it is bigger -> reassign potentialLongest to the substring


return potentialLongest length

*/

function longestPalindrome(string) {
  let subs = substrings(string);
  
  let palindromes = findPalindromes(subs);
  
  // palindromes.sort().pop();
}


function longestPalindrome(string) {
  if (string.length === 0) {
    return 0;
  }
  let potentialLongest = '';
  for (let idx = 0; idx < string.length; idx++) {
    for (let idx2 = idx + 1; idx2 < string.length + 1;idx2++) {
    let substring = string.slice(idx, idx2);  
    if (isReverseSame(substring)) {
      if (substring.length > potentialLongest.length) {
        potentialLongest = substring;
      }
    }
    }
  }
  return potentialLongest.length;
}


//helper function
function isReverseSame(str) {
  return str === str.split('').reverse().join('');
}
