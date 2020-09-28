function processData(input) {
  function geometric(n,p){
    let q = 1 - p;
    return ((q**(n-1))*p).toFixed(3);
  }
  let p = parseFloat(input.split('\n')[0].split(' ')[0]) / parseFloat(input.split('\n')[0].split(' ')[1]);
  let n = parseFloat(input.split('\n')[1]);
  console.log(geometric(n,p));
  return true;
}
processData('1 3\n5');