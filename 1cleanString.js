/*Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""

problem take in a string that might contain # and consider the # is a back space
return a string after processing # as back space

rule
# is backspace
only letter string

input string
output string
algo

take in a string
create a variable 'result' and set it to an empty array
loop the input string
for each element, 
 if it is not #, push it to 'result'
 if it is #, remove the last element of 'result'


cover the array 'result' to string and return it

*/


function cleanString(string) {
  let result = [];
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] !== '#') {
      result.push(string[idx]);
    } else {
      result.pop();
    }
  }
  return result.join('');
}

console.log(cleanString('abc#d##c') === "ac");
console.log(cleanString('abc####d##c#') === "" );