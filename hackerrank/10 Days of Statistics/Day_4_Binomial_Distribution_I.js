function processData(input) {
  function factorial(n) {
    let arr = [];
    for (let value = 1; value <= n; value++) {
      arr.push(value);
    }
    return arr.reduce((accu, value) => accu * value, 1)
  }

  function combination(n, x) {
    return factorial(n) / (factorial(x) * factorial(n - x));
  }

  function binomial(x, n, p) {
    return combination(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x)
  }

  function cumulativeProbability(n, p, i) {
    let s = 0
    for (let j = n + 1; j-- > i;) {
      s += binomial(j, n, p)
    }
    return s
  }

  let b = parseFloat(input.split(' ')[0]);
  let g = parseFloat(input.split(' ')[1]);
  let x = 3;
  let n = 6;
  let p =  b / (g + b);
  console.log(cumulativeProbability(n, p, x).toFixed(3));
}
processData('1.09 1');