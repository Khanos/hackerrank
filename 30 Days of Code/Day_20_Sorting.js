var a = [ 1,2,3 ];
let doSwap = (indexA, indexB) => {
  let temp = a[indexA];
  a[indexA] = a[indexB];
  a[indexB] = temp;
  return;
}

let swap = true;
let numSwaps = 0;
let n = a.length - 1;

do {
  swap = false;
  for (let i = 0; i < n; i++) {
    if (a[i] > a[i+1]) {
      doSwap(i, i+1);
      numSwaps++;
      swap = true;
    }
  }
  n--;
} while (swap);

console.log(`Array is sorted in ${numSwaps} swaps.`);
console.log(`First Element: ${a.shift()}`);
console.log(`Last Element: ${a.pop()}`);
