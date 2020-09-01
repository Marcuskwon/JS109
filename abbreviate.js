/*The word i18n is a common abbreviation of internationalization in the developer community, 
used instead of typing the whole word and trying to spell it correctly. 
Similarly, a11y is an abbreviation of accessibility.

Write a function that takes a string and turns any and all "words" (see below) 
within that string of length 4 or greater into an abbreviation, following these rules:

A "word" is a sequence of alphabetical characters. 
By this definition, any other character like a space or hyphen (eg. "elephant-ride") 
will split up a series of letters into two words (eg. "elephant" and "ride").
You can assume that non-alphabet characters are only space, comma, and hyphen.


The abbreviated version of the word should have the first letter, 
then the number of removed characters, then the last letter (eg. "elephant ride" => "e6t r2e").


Example
abbreviate("elephant-rides are really fun")
//          ^^^^^^^^*^^^^^*^^^*^^^^^^*^^^*
// words (^):   "elephant" "rides" "are" "really" "fun"
//                123456     123     1     1234     1
// ignore short words:               X              X

// abbreviate:    "e6t"     "r3s"  "are"  "r4y"   "fun"
// all non-word characters (*) remain in place
//                     "-"      " "    " "     " "     
=== "e6t-r3s are r4y fun"


problem
Based on the given rule, turn a string to a abbreviated string

rule
word length 4 or longer should be converted to abbreviated 
A 'word' should only contains alphabet (no spaces or special charc)
appreviated word is the first letter + removed letters + the last letter 
return value would be all words converted to abbreivated words. all non-word characters remain in place


input string
output string

algo

create a function that takes a string value (word) as argument and turns it into abbreviated value
 test if the length of word is longer than 3 -> if no, return the word
      if yes, reassign the word to the new word (first letter + middle letters length + last letter)
      return the new word

take in a string
convert the string to an array by splitting it with space and set a variable with it 'stringArr'
set a variable return and assign []

iterate 'stringArr'
 for each element, see if the element includes non-alphabet letter
                       if no -> use the function and change it, and push the change to return
                       if yes, split the element by '-' create the array
                       and change the element of the new array and push changed word + - + etc..

 
 return return.join('')
 

*/

function converToabbreviated(string) {
  if (string.length < 4) {
    return string;
} else {
  string = string[0] + string.slice(1, string.length - 1).length + string[string.length - 1];
  return string;
}
}

function abbreviate(str) {
  let stringArr = str.split(' ');
  let result = [];
  stringArr.forEach(ele => {
    if (!ele.includes('-') && !ele.includes(',')) {
      result.push(converToabbreviated(ele));
    } else if (ele.includes('-')) {
      result.push(ele.split('-').map(ele2 => converToabbreviated(ele2)).join('-'));
    } else if (ele.includes(',')) {
      result.push(ele.split(',').map(ele2 => converToabbreviated(ele2)).join(','));
    }
  }
  );
    return result.join(' ');
}

//"elephant-rides are really fun!"



console.log(abbreviate("internationalization") === "i18n");
console.log(abbreviate("accessibility") === "a11y");
console.log(abbreviate("Accessibility") === "A11y");
console.log(abbreviate("elephant-ride") === "e6t-r2e");
console.log(abbreviate('monolithic monolithic monolithic doggy sits sat') ==='m8c m8c m8c d3y s2s sat')


