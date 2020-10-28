function processData(input) {
  let T = input.split('\n');
  T.shift();
  for (let el of T) {
    let isPrime = true;
    if(el > 1) {
      for (let i=2; i*i <= el; i++) {
        if (el % i === 0) {
          isPrime = false;
          break;
        }
      }
    } else {
      isPrime = false;
    }

    if (isPrime) {
      console.log('Prime');
    } else {
      console.log('Not prime');
    }
  }
}


let input = '3\n12\n5\n7'
processData(input);