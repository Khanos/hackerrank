// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.
/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    const n = arr.length;
    const sortedArr = arr.sort((a,b) => a-b);
    const minSum = sortedArr.slice(0, n-1).reduce((acc, curr) => acc + curr);
    const maxSum = sortedArr.slice(1).reduce((acc, curr) => acc + curr);
    console.log(minSum, maxSum);
}

const arr = [ 1, 2, 3, 4, 5 ];
miniMaxSum(arr);