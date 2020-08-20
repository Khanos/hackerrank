// Complete the countTriplets function below.
function countTriplets(arr, r) {
  let count = 0;
  const map = {};
  const pairs = new Map();
  for (let i = arr.length - 1; i >= 0; i--) {
    let x = arr[i];
    let rx = x * r;
    let r2x = rx * r;
    let pairR = `${rx}-${r2x}`;
    let pairL = `${x}-${rx}`;
    if (pairs.get(pairR) !== undefined) count = count + pairs.get(pairR);
    if (pairs.get(pairL) == undefined) pairs.set(pairL, 0);
    pairs.set(pairL, pairs.get(pairL) + ((map[rx] == undefined) ? 0 : map[rx]));
    (map[x] == undefined) ? map[x] = 1: map[x]++;
  }
  return count;
}
let arr = [1, 5, 5, 25, 125];
let r = 5;
console.log(countTriplets(arr, r));