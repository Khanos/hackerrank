function processData(input) {
  function geometric(n,p,x){
    let q = 1 - p;
    return ((q**(n-x))*p);
  }
  let p = parseFloat(input.split('\n')[0].split(' ')[0]) / parseFloat(input.split('\n')[0].split(' ')[1]);
  let n = parseFloat(input.split('\n')[1]);
  let sum = 0;
  for (let value = 1; value <= n; value++) {
    sum += geometric(n,p,value);
  }
  console.log(sum.toFixed(3));
  return true;
}
processData('1 3\n5');