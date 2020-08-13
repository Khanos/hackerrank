// Complete the luckBalance function below.
function luckBalance(k, contests) {
    let luck = contests.reduce((prev, next) => prev + next[0], 0);;
    let importants = contests.filter((item) => item[1] === 1);
    if(importants.length <= k){
        return luck;
    } else {
        let hasToWin = importants.length - k;
        if(hasToWin > 0){
            importants = importants.sort((prev, next) => prev[0] - next[0]);
            for(let i = 0; i < hasToWin; i++){
                luck -= importants[i][0] * 2;
            }
            return luck;
        } else {
            luck -= importants.reduce((prev, next) => (prev + next[0]) * 2, 0);
            return luck;
        }
    }
}

let k = 0;
let contests = [ [ 5, 1 ], [ 2, 1 ], [ 1, 1 ], [ 8, 1 ], [ 10, 0 ], [ 5, 0 ] ];
console.log(luckBalance(k, contests));