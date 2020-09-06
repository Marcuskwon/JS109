/*
You have to create a function that takes a positive integer number and returns the next bigger number formed by the same digits:
12 -> 21
513 -> 531
2017 -> 2071

If no bigger number can be composed using those digits, return -1:
9 -> -1
111 -> -1
531 -> -1

console.log(nextBiggerNum(9) === -1)
console.log(nextBiggerNum(12) === 21)
console.log(nextBiggerNum(513) === 531)
console.log(nextBiggerNum(2017) === 2071)
console.log(nextBiggerNum(111) === -1)
console.log(nextBiggerNum(531) === -1)
console.log(nextBiggerNum(123456789) === 123456798)


/*
problem
take in a number and return the next highest number from the input number with the same digits

rule
if no highest number after the input number, return -1 

input number
output number

algo

take in a number 'num'
create a variable 'digitsArray' and set it to an array that contains all digits
create a variable 'numCopied' and set it to a value of 'num'
create a variable 'highestNumber' and set it to the sort of 'num' in an descending order

create a loop
 for each loop, add + 1 to numCopied
 and see if the digits of numCopied + 1 are all included in 'digitsArray'
  - create another loop, and go through each digit if it is included in the 'digitsArray'
  - if the current digit is included, you need to excluse that element for the next check in this inner loop
 if all of them are included -> return numCopied
 break if numCopied is bigger than highestNumber

return - 1 
*/

function nextBiggerNum(num) {
  let digitsArray = String(num).split('').map(ele => Number(ele));
  let numCopied = num;
  let highestNumber = Number(String(num).split('').sort((a, b) => b - a).join(''));
  
  while (true) {
    numCopied++;
    if (allIncluded(numCopied, digitsArray)) {
      return numCopied;
    }
    if (numCopied > highestNumber) break;
  }
 return -1;

}



function allIncluded(num, arr) {
  let testingArray = arr.slice();
  for (let index = 0; index < String(num).length; index++) {
    if (testingArray.includes(Number(String(num)[index]))) {
      testingArray.splice(testingArray.indexOf(Number(String(num)[index])), 1);
    } else {
      return false;
    }
    
  }
  return true;
}

console.log(nextBiggerNum(9) === -1)
console.log(nextBiggerNum(12) === 21)
console.log(nextBiggerNum(513) === 531)
console.log(nextBiggerNum(2017) === 2071)
console.log(nextBiggerNum(111) === -1)
console.log(nextBiggerNum(531) === -1)
console.log(nextBiggerNum(123456789) === 123456798)


function nextBiggerNum(number) {
   let digitsArray = String(number).split('').sort();
   let biggestNumber = digitsArray.sort((a, b) => b - a).join('');
   
   let result = number;

   
   while (true) {
     result ++;
     let resultArray = String(result).split('').sort();
     
     if (areTheySameArray(resultArray, digitsArray)) {
       if(result > number) {
         return result;
         
       }
       
     }
    if (result >= biggestNumber) {
      break;
    }
   }
   return -1;
}


function areTheySameArray(arr1, arr2) {
    if (arr1.sort().length !== arr2.sort().length) {
       
        return false;
    }
    for(let i = 0; i < arr1.length; i++) {
        if(arr1.sort()[i] !== arr2.sort()[i]) {
            return false;
            
        }
    }
    return true;
}



console.log(nextBiggerNum(9) === -1);
console.log(nextBiggerNum(12) === 21);
console.log(nextBiggerNum(513) === 531);
console.log(nextBiggerNum(2017) === 2071);
console.log(nextBiggerNum(111) === -1);
console.log(nextBiggerNum(531) === -1);
console.log(nextBiggerNum(123456789) === 123456798);
