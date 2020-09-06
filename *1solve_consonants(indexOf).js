
// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

// -- The consonant substrings are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
// solve("zodiacs") = 26

// For the word "strength", solve("strength") = 57
// -- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

/*
problem:
take in a lower case string
return the highest value of consonant substrings


rules:
only lower case
alphabet will have a value a - 1, b -2 ... z - 26
consonants are any letters except 'aeiou'

input:string
output:number

algorithm:

create an array that contains a to z and its element index + 1 will be its value 'arrVal'

take in a string and split the string by [aeiou] and set the array to stringArray the array will only contain consonats letter

sort the array based on the sum of each element based on the value of the letter (index + 1 in arrVal) in an ascending order

return the last element of the sorted array

*/



let arrVal = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function getVal(letter) {
  let value = 0;
  for (let i = 0; i < letter.length; i++) {
    value = value + arrVal.indexOf(letter[i]) + 1;
  }
  return value;
  
}

function solve(str) {
  let substringArr = [];
  let substringToAdd = '';
  
  for (let idx = 0; idx < str.length; idx++) {
    if (!['a','e','i','o','u'].includes(str[idx])) {
      substringToAdd = substringToAdd + str[idx];
    } else {
      substringArr.push(substringToAdd);
      substringToAdd = '';
    }
    if (idx === str.length - 1) {
      substringArr.push(substringToAdd);
    }
  }
  
  return substringArr.map(ele => getVal(ele)).sort((a, b) => b - a)[0];
}






/*
function solve(str) {
  let stringArray = str.split(/[aeiou]/);

  let biggestSubstring =  stringArray.sort((a, b) => {
    return getVal(b) - getVal(a);
  })[0];

  return getVal(biggestSubstring);
}

*/
console.log(solve("zodiacs")); // 26
console.log(solve("strength")); // 57
console.log(solve("zodiac")) // 26);
console.log(solve("chruschtschov")) // 80)
console.log(solve("khrushchev")) // 38)
console.log(solve("strength")) // 57)
console.log(solve("catchphrase")) // 73)
console.log(solve("twelfthstreet")) // 103)
console.log(solve("mischtschenkoana")) // 80)
console.log(solve("az")); // 26
