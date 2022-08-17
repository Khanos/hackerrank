/**
 * Two players are playing a game of Tower Breakers! 
 * Player P1 always moves first, and both players always play optimally.
 * The rules of the game are as follows:
 * Initially there are n towers.
 * Each tower is of height m.
 * The players move in alternating turns.
 * In each turn, a player can choose a tower of height x and reduce its height to y, 
 * where 1 <= y > x and y evenly divides x.
 * If the current player is unable to make a move, they lose the game.
 * Given the values of n and m, determine which player will win. 
 * If the first player wins, return P1. Otherwise, return P2.
 * @param {Number} n - the number of towers
 * @param {Number} m - The height of each tower
 */
// function towerBreakers(n, m) {
//     const findTheMaxDivisor = (number) => {
//         for (let i = parseInt(number/2); i > 0; i--) {
//             if (number % i === 0) {
//                 return i;
//             }
//         }
//     }
//     let towers = new Array(n).fill(m);
//     // Write your code here
//     let currentPlayer = 1;
//     let noWinner = true;
//     while (noWinner) {
//         const move = towers.filter(el => el > 1);
//         if (move[0]) {
//             const maxDivisor = findTheMaxDivisor(move[0]);
//             if (move.length === 1) {
//                 noWinner = false;
//             } else {
//                 if(maxDivisor === 1) {
//                     move.shift();
//                 } else {
//                     move[0] = maxDivisor;
//                 }
//                 towers = move;
//                 currentPlayer = currentPlayer === 1 ? 2 : 1;
//             }
//         } else {
//             noWinner = false;
//         }
//     }
//     return currentPlayer === 1 ? 'P1' : 'P2';
// }
function towerBreakers(n, m) {
    // Write your code here
    return m === 1 || n % 2 === 0 ? 2 : 1;
}

const n = 1000000;
const m = 1000000;
console.log(towerBreakers(n, m));