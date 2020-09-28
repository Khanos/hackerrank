/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
  // Complete the function
  return ([... new Set(nums.sort((a,b) => b-a))])[1];
}

let nums = [2, 3, 6, 6, 5];
console.log(getSecondLargest(nums));