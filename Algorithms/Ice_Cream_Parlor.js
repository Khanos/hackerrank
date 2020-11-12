let m = 4;
let arr = [ 2, 2, 4, 3 ];

function icecreamParlor(m, arr) {
  let pair = null;
  for (let i=1; i<=arr.length; i++) {
    if (arr[i-1] < m) {
      let newArr = arr.slice(i);
      for (let j=1; j<=newArr.length; j++) {
        if(newArr[j-1]<m) {
          let sum = arr[i-1] + newArr[j-1];
          if (sum === m) {
            pair = [i, j+i];
            break;
          }
        }
      }
    }
    if(pair) {
      break;
    }
  }
  return pair;
};

let result = icecreamParlor(m, arr);
console.log(result.join(" ") + "\n");