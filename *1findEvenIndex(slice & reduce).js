/*
given an array of integers, your job is to take that array and find an index N where the sum of the integers
to the left of N is equal to the sum of the integers to the right of N. 
If there is no index that would make this happen, return -1

for example

[1, 2, 3, 4, 3, 2, 1]
your function will return 3 becuase at the 3rd position of the array, the sum of left side of the index [1, 2, 3] and 
the sum of the right side of the index [3, 2, 1] both equal 6.

[20, 10, -80, 10, 10, 15, 35]
at index 0, the left side is []
the right side is [10, -80, 10, 10, 15, 35]
They both are euqal to 0 when added.
index 0 is the place where the left side and right side are equal





*/
function findEvenIndex(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    let leftSideSum = arr1.slice(0, i).reduce((acc, ele) => {return acc + ele}, 0);
    let rightSideSum = arr1.slice(i + 1).reduce((acc, ele) => {return acc + ele}, 0);
    if (leftSideSum === rightSideSum) {
      return i;
    }
  }
  return -1;
}





console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3);
console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1);
console.log(findEvenIndex([1, 2, 3, 4, 5 ,6]) === -1);
console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3);
console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0);
console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6);
console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3);

