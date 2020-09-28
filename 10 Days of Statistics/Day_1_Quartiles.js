function processData(input) {
  let n = parseInt(input.split('\n')[0]);
  let isOdd = n % 2 !== 0 ? true : false;
  let values = input.split('\n')[1].split(' ').map(element => parseInt(element));
  let orderedValues = values.sort((a,b)=> a-b);
  let [m1, m2] = [Math.floor((n - 1) / 2), Math.ceil((n - 1) / 2)];
  let lowerHalf, upperHalf;
  if(isOdd){
    lowerHalf = orderedValues.slice(0, m1);
    upperHalf = orderedValues.slice(m2+1, n);
  } else {
    lowerHalf = orderedValues.slice(0, m1+1);
    upperHalf = orderedValues.slice(m2, n);
  }

  let [h1, h2] = [Math.floor((lowerHalf.length - 1) / 2), Math.ceil((lowerHalf.length - 1) / 2)];
  let Q1 = (lowerHalf[h1] + lowerHalf[h2])/2;
  let Q2 = (orderedValues[m1] + orderedValues[m2])/2;
  Q2 = Number.isInteger(Q2) ? Q2 : Q2.toFixed(1);
  let Q3 = (upperHalf[h1] + upperHalf[h2])/2;
  console.log(Q1);
  console.log(Q2);
  console.log(Q3);
}
let input = '6\n7, 15, 36, 39, 40, 41';
processData(input)