// Complete the countTriplets function below.
function countTriplets(arr, r) {
  let count = 0;
  let sortedArr = arr.sort((a,b)=> a-b);
  let valuesArr = new Array(sortedArr.length+1).fill(0);
  for(let value of sortedArr){
    valuesArr[value] = valuesArr[value]+1;
  }
  for(let index in sortedArr){
    let i = 1;
    let j = valuesArr[sortedArr[index]*r] || 0;
    let k = valuesArr[sortedArr[index]*r*r] || 0;
    count = count + (i*j*k);
  }
  return count;
}
let arr =[ 1, 5, 5, 25, 125];
let r = 5;
console.log(countTriplets(arr, r));