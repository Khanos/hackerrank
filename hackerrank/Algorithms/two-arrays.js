// Complete the twoArrays function below.
function twoArrays(k, A, B) {
    let A_ = A.sort((a,b)=>{return a-b});
    let B_ = B.sort((a,b)=> a-b);
    A_ = A_.reverse();
    let response;
    for(const index in A_){
        if(A_[index]+B_[index] === k){
            response = 'YES';
        } else {
            response = 'NO';
            break;
        }
    }
    return response;
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