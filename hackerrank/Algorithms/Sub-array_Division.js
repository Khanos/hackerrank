// Complete the birthday function below.
function birthday(s, d, m) {
  return s.reduce((acc, el, index) => {
    if(index + m <= s.length){
      let sum = s.slice(index, index+m).reduce((acc, el) => acc+=el, 0);
      if(sum === d){
        acc++;
      }
    }
    return acc;
  }, 0);
}

const s = [1, 2, 1, 3, 2];
const d = 3;
const m = 2;

console.log(birthday(s, d, m));