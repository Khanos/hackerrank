// Complete the countTriplets function below.
function countTriplets(arr, r) {
  let count = 0;
  let sortedArr = arr.sort((a,b)=> a-b);
  const valuesMap = new Map();
  for(let value of sortedArr){
    let currentValue = valuesMap.get(value);
    if(!currentValue){
      valuesMap.set(value, 1);
    } else {
      valuesMap.set(value, currentValue + 1);
    }
  }
  for(let value of sortedArr){
    let i = 1;
    let j = valuesMap.get(value*r) || 0;
    let k = valuesMap.get(value*r*r) || 0;
    count = count + (i*j*k);
  }
  return count;
}
let arr =[125, 1, 5, 5, 25];
let r = 5;
console.log(countTriplets(arr, r));