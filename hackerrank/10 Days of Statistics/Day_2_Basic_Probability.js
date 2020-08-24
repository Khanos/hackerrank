// Find at must sum
function getDiceSums(n){
  let dice = [1, 2, 3, 4, 5, 6]
  let sum = [];
  for(let sideA of dice){
    for(let sideB of dice){
        if(sideA+sideB <= n){
          sum.push([sideA, sideB]);
        }
    }
  }
  return sum
}
// Their sum will be at most 9.
let favorableOutcome = getDiceSums(9).length;
// All possible outcome
let totalOutcome = 6 * 6;
// In a single toss of 2 fair (evenly-weighted) six-sided dice, find the probability that their sum will be at most 9.
let prob = favorableOutcome / totalOutcome;
console.log('Probability that their sum will be at most 9: ', `${favorableOutcome} / ${totalOutcome}`);

