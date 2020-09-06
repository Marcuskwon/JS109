// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


/*
problem
take in a string and find if any letter or digit occurs more than once in the string and the return count of them (how many are) 

input string
output number

rule
input string will only contain alphabets or digits
ignore letter cases

algo

take in a string
set a variable 'count' with 0 assinged - I want to increase a value of variable by 1 whenever I find the letter or digit
loop the string
for each letter/digit, verify if the letter/digit occurs more than once in the string

if yes-> increase the value of 'count' by 1


return count

*/

function duplicateCount(str) {
  let duplicateLetters = [];
  let testingStr = str.toLowerCase();
    for(let i = 0; i < testingStr.length; i++) {
    if(testingStr.indexOf(testingStr[i]) !== testingStr.lastIndexOf(testingStr[i])) {
      if (!duplicateLetters.includes(testingStr[i])) {
        duplicateLetters.push(testingStr[i]);
      }
    }
  }
  return duplicateLetters.length;
}


function duplicateCount2(str) {
  let count = 0;
  let testingStr = str.toLowerCase();
  for(let i = 0; i < testingStr.length; i++) {
    if(testingStr.indexOf(testingStr[i]) !== testingStr.lastIndexOf(testingStr[i])) {
      count ++;
    }


    testingStr = testingStr.split('').filter(ele => ele !== testingStr[i]).join(''); // using filter 
  }

  
  return count;
}


//emily
// function duplicateCount(str) {
//   str = str.toLowerCase();
//   let obj = {};
//   for (let char of str) {
//     if (!obj[char]) {
//       obj[char] = 1;
//     } else {
//       obj[char] += 1;
//     }
//   }
//   let arr = Object.values(obj);
//   let count = 0;
//   for (let value of arr) {
//     if (value > 1) {
//       count += 1;
//     }
//   }
//   return count;
// }

console.log(duplicateCount("")); // 0);
console.log(duplicateCount("abcde")); // 0);
console.log(duplicateCount("aabbcde")); // 2);
console.log(duplicateCount("aabBcde")); // 2,"should ignore case");
console.log(duplicateCount("Indivisibility")); // 1)
console.log(duplicateCount("Indivisibilities")); // 2, "characters may not be adjacent")
console.log(duplicateCount("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")); //26