function processData(input) {
  let n = parseInt(input.split('\n')[0]);
  let X = input.split('\n')[1].split(' ').map(element => parseInt(element));
  let W = input.split('\n')[2].split(' ').map(element => parseInt(element));
  let nume = X.map((value, index) => value * W[index]).reduce((prev, next) => prev+next, 0);
  let deno = W.reduce((prev, next) => prev+next, 0);
  let weightedMedian = (nume/deno).toFixed(1);
  console.log(weightedMedian);
}

let input = '5\n10 40 30 50 20\n1 2 3 4 5';
console.log(processData(input));