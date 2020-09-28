// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
let arr = [1,2,3,4,5,6]
function miniMaxSum(arr) {
    let sortedArr = arr.sort(function(prev, curr){ return prev-curr});
    let minSum = 0;
    let maxSum = 0;
    for(let i = 0; i < 4; i++){
        minSum += sortedArr[i];
        maxSum += sortedArr[sortedArr.length-(i+1)];
    }
    console.log(minSum + ' ' + maxSum)
}

console.time('First attempt');
miniMaxSum(arr)
console.timeEnd('First attempt');