
function processData(input) {
  function factorial(n) {
    if (n <= 1) return 1
    for (let i = n; i-- > 1;){
      n *= i
    }
    return n;
  }
  function poissonDist(l, k){
    return (Math.pow(l,k) * Math.pow(Math.E,-l)) / factorial(k);
  }
  let l = input.split('\n')[0];
  let k = input.split('\n')[1];
  console.log(poissonDist(l, k).toFixed(3));
}
processData('2.5\n5');