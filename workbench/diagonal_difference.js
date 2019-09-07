// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
function diagonalDifference(arr) {
    // Write your code here
    let negativeIndex = arr.length -1;
    let downDiagSum = 0;
    let upDiagSum = 0;
    for(var i = 0; i < arr.length; i++){
        downDiagSum += arr[i][i];
        upDiagSum += arr[i][negativeIndex-i];
    };
    let diagonalSum = Math.abs(downDiagSum - upDiagSum);
    return diagonalSum;
}
console.time('First Atempt');
let arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];
let result = diagonalDifference(arr);
console.log(result);
console.timeEnd('First Atempt');