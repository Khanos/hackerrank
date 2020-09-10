function processData(input) {
  //Enter your code here
  function erf(x) {
    let a1 = 0.254829592;
    let a2 = -0.284496736;
    let a3 = 1.421413741;
    let a4 = -1.453152027;
    let a5 = 1.061405429;
    let p = 0.3275911;
    let sign = x < 0 ? -1 : 1;
    x = Math.abs(x)
    let t = 1.0 / (1.0 + p * x)
    let y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x)
    return sign * y
  }

  function cumulativeDistribution(m, sd, x) {
    return 1 / 2 * (1 + erf((x - m) / (sd * Math.sqrt(2))))
  }
  input = input.split('\n');
  let mx = parseInt(input[0]);
  let n = parseInt(input[1]);
  let m = parseInt(input[2]);
  let s = parseInt(input[3]);
  let sm = n * m;
  let ss = Math.sqrt(n) * s;
  console.log(cumulativeDistribution(sm, ss, mx).toFixed(4));
};