function processData(input) {
  let m = parseFloat(input.split('\n')[0].split(' ')[0]);
  let sd = parseFloat(input.split('\n')[0].split(' ')[1]);
  let x = parseFloat(input.split('\n')[1]);
  let y = parseFloat(input.split('\n')[2]);
  //Enter your code here
  function erf(x) {
    let a1 = 0.254829592,
      a2 = -0.284496736,
      a3 = 1.421413741,
      a4 = -1.453152027,
      a5 = 1.061405429,
      p = 0.3275911

    let sign = 1

    if (x < 0)
      sign = -1

    x = Math.abs(x)

    // A&S formula 7.1.26
    let t = 1.0 / (1.0 + p * x)
    let y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x)

    return sign * y
  }

  function cumulativeDistribution(m, sd, x) {
    return 1 / 2 * (1 + erf((x - m) / (sd * Math.sqrt(2))))
  }
  let probX = (1 - cumulativeDistribution(m, sd, x)) * 100;
  let probY = (1 - cumulativeDistribution(m, sd, y)) * 100;
  let probYc = cumulativeDistribution(m, sd, y) * 100;
  console.log(probX.toFixed(2));
  console.log(probY.toFixed(2));
  console.log(probYc.toFixed(2));
  return;
}
processData('70 10\n80\n60');