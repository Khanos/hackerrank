// The values rolled by each die will be different
function getDiceWithDiffDie(){
  let dice = [1, 2, 3, 4, 5, 6]
  let sum = [];
  for(let sideA of dice){
    for(let sideB of dice){
        if(sideA != sideB){
          sum.push([sideA, sideB]);
        }
    }
  }
  return sum
}
// All possible outcome
let totalOutcome = 6 * 6;
let favorableOutcome = getDiceWithDiffDie();
favorableOutcome = favorableOutcome.reduce((accu, value) => value[0]+value[1] == 6 ? accu + 1: accu, 0);
console.log('Probability that the values rolled by each die will be different and the two dice have a sum of 6.', `${favorableOutcome} / ${totalOutcome}`);

