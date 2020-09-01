// A collection of spelling blocks has two letters per block, as shown in this list:

// B:O   X:K   D:Q   C:P   N:A
// G:T   R:E   F:S   J:W   H:U
// V:I   L:Y   Z:M
// This limits the words you can spell with the blocks to only those words that do not use both letters from any given block. You can also only use each block once.

// Write a function that takes a word string as an argument, and returns true if the word can be spelled using the set of blocks, or false otherwise. You can consider the letters to be case-insensitive when you apply the rules.

/*
problem:
Given in a collecion of spelling blocks
each block has two letters, and these pairs of letters cannot be used at the same time 
Take in a word, and test if the word can be made based on the collection rule above


rules:
-each block has two letters, and these pairs of letters cannot be used at the same time 
-input will be always a string
-case insesnsitive

input: string
output: boolean

algorithm:
put the collection of blocks to nested array

take in a string word 

set a variable collectionIndex and set it to {}
copy the word and switch it to lowercase and set a variable
inputWord
loop the string
 for each letter
 loop the collection data and see what index in the collection array contains each letter
 and push that index to the variable collectionIndex

after loop, see if collectionIndex has duplciate number

*/

let collection = [
  ['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']
];

function isBlockWord(str) {
  let collectionIndex = {};
  let inputWord = str.toUpperCase();
  for (let idx = 0; idx < inputWord.length; idx++) {
    for (let idx2 = 0; idx2 < collection.length; idx2++) {
      if (collection[idx2].includes(inputWord[idx])) {
        if (collectionIndex[idx2]) {
          return false;
        }
        collectionIndex[idx2] = 1;
      }
    }
  }
  return true;
}



function isBlockWord(string) {
let blocks = ["BO", "XK", "CP", "NA", "GT", "RE", "FS", 
"JW", "HU", "VI", "LY", "ZM"];

let str = string.toUpperCase();
for (let letter of str) {
  let toBeRemovedIdx = foundBlockIdx(letter, blocks);
    if (toBeRemovedIdx >= 0) {
      blocks.splice(toBeRemovedIdx, 1);
    } else {
      return false;
    }
}
return true;
}

function foundBlockIdx(letter, blocks) {
  for (let block of blocks) {
    if (block.includes(letter)) {
      return blocks.indexOf(block);
    }
  }
}



console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('Box'));        // false
