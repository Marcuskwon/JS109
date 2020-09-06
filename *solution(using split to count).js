/*
Complete the solution so that it returns the number of times 
the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1


problem
take in two strings 'str1' 'str2'
and return how many times str2 occurs in str1

rule
input will be strings

input two strings
output number

algo
take in two strings 'str1' 'str2'
split str1 by str2 and return the length of that array - 1


*/

function solution(fullText, searchText){
  return fullText.split(searchText).length - 1;
}

console.log(solution('abcdeb','b') === 2);
console.log(solution('abc','b') === 1);
console.log(solution('abbc','bb') === 1);