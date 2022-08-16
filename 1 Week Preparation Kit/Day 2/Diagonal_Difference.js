// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    const n = arr.length;
    const leftToRight = arr.map((row, i) => row[i]).reduce((acc, curr) => acc + curr);
    const rightToLeft = arr.map((row, i) => row[(n - 1) - i]).reduce((acc, curr) => acc + curr);
    return Math.abs(leftToRight - rightToLeft);
}

const arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];
console.log(diagonalDifference(arr));