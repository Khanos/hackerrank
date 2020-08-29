function processData(input) {

  function binomial(x, n, p) {
    function combination(n, x) {
      function factorial(n) {
        let arr = [];
        for (let value = 1; value <= n; value++) {
          arr.push(value);
        }
        return arr.reduce((accu, value) => accu * value, 1)
      }
      return factorial(n) / (factorial(x) * factorial(n - x));
    }
    return combination(n, x) * Math.pow(p, x) * Math.pow(1 - p, n - x)
  }

  function cumulativeProbability(n, p, i) {
    let s = 0
    for (let j = n + 1; j-- > i;) {
      s += binomial(j, n, p)
    }
    return s
  }

  let p = parseFloat(input.split(' ')[0]) / 100;
  let n = parseFloat(input.split(' ')[1]);
  let r = 2;
  console.log(cumulativeProbability(n, 1 - p, n - r).toFixed(3));
  console.log(cumulativeProbability(n, p, r).toFixed(3));
}
processData('12 10');