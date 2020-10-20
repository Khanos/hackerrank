class AdvancedArithmetic {
  divisorSum(n){
    return new Error('NotImplementedError');
  }
}

class Calculator extends AdvancedArithmetic {
  constructor(){
    super();
  }
  divisorSum(n){
    let arr = new Array.from({length: Math.round(n/2)}, (el,i) => index+1);
    let sum = arr.reduce((acc, el) => {
      if (n % el === 0) {
        acc += el;
      }
      return acc;
    }, 1+n)
  }
}

let test = new Calculator;
console.log(test.divisorSum(6));