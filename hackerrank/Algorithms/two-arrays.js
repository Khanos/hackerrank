// Complete the twoArrays function below.
function twoArrays(k, A, B) {
    let sumA = A.reduce((sum, currentValue) => sum+currentValue);
    let sumB = B.reduce((sum, currentValue) => sum+currentValue);
    let tot = (sumA + sumB) / A.length;
    return tot === k ? 'YES' : 'NO'
}
let k, A, B;
k = 10;
A = [ 2, 1, 3 ];
B = [ 7, 8, 9 ];
console.log(twoArrays(k, A, B));
k = 5;
A = [ 1, 2, 2, 1 ];
B = [ 3, 3, 3, 4 ];
console.log(twoArrays(k, A, B));
k = 5;
A = [ 1,1,1,1,1 ];
B = [ 4,4,4,4,4 ];
console.log(twoArrays(k, A, B));