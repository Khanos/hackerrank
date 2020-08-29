
function processData(input) {
  function factorial(n) {
    let arr = [];
    for (let value = 1; value <= n; value++) {
      arr.push(value);
    }
    return arr.reduce((accu, value) => accu * value, 1)
  }
  function poissonDist(k, l){
    return ((Math.pow(l,k)) * (Math.pow(Math.E,-l))) /factorial(k);
  }
  let l = input.split('\n')[1];
  let k = input.split('\n')[0];
  console.log(poissonDist(k, l).toFixed(3));
}
processData('2.5\n5');