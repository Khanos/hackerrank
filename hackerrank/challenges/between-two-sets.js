/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
  // Write your code here
  let prospects = {};
  for(let count = a[a.length-1]; count<=b[0]; count++){
    prospects[count] = true;
  }
  let count = 0;
  for(let item in prospects){
    let isFactorOfA = true;
    for(let value of a){
      if(Number(item) % value !== 0){
        isFactorOfA = false;
      }
    }
    let isFactorOfB = true;
    for(let value of b){
      if(value % Number(item) !== 0){
        isFactorOfB = false;
      }
    }
    if(isFactorOfA && isFactorOfB){
      count++;
    } else {
      prospects[item] = false;
    }
  }
  return count;
}
let a = [ 2, 4 ];
let b = [ 16, 32, 96 ];
console.log(getTotalX(a, b));