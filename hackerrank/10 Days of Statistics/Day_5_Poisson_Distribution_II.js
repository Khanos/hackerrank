
function processData(input) {
  let x = parseFloat(input.split(' ')[0]);
  let a = 160 + 40 * (x + Math.pow(x, 2));
  let y = parseFloat(input.split(' ')[1]);
  let b = 128 + 40 * (y + Math.pow(y, 2));
  console.log(a.toFixed(3));
  console.log(b.toFixed(3));
}
processData('0.88 1.55');