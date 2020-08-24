function getStandardDeviation(input) {
  let N = parseInt(input.split('\n')[0]);
  let values = input.split('\n')[1].split(' ').map(item => parseInt(item));
  let sum = values.reduce((accu, value) => accu+value, 0);
  let mean = Number((sum / N).toFixed(1));
  let sqrDist = values.map(item => (item-mean)**2).reduce((accu, value) => accu + value, 0);
  let standardDeviation = Number(Math.sqrt(sqrDist/N).toFixed(1));
  console.log(standardDeviation);
  return standardDeviation;
}
let input = '5\n10 40 30 50 20'
getStandardDeviation(input);