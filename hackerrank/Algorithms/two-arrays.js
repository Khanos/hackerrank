// Complete the twoArrays function below.
// function twoArrays(k, A, B) {
//     let sumA = A.reduce((sum, currentValue) => sum+currentValue);
//     let sumB = B.reduce((sum, currentValue) => sum+currentValue);
//     let tot = (sumA + sumB) / A.length;
//     return tot >= k ? 'YES' : 'NO'
// }

// Complete the twoArrays function below.
function twoArrays(k, A, B) {
    let A_ = A.sort((a,b)=>b-a);
    let B_ = B.sort((a,b)=>a-b);
    let pairs = [];;
    for(const index_a in A_){
        for(const index_b in B_){
            if(A[index_a]+B[index_b] >= k){
                pairs.push(`${index_a}_${index_b}`);
                B.splice(index_b, 1);
                break;
            }
        }
    }
    return pairs.length === A.length ? 'YES' : 'NO';
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
A = [ 1, 2, 2, 1 ];
B = [ 3, 3, 3, 4 ];
console.log(twoArrays(k, A, B));