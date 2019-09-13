//Your task is to find out how many candles she can successfully blow out.
let ar = [3, 2, 1, 3];
function birthdayCakeCandles(ar) {
    let sortedAr = ar.sort(function(prev, curr){ return prev-curr});
    let count = 0;
    let height = sortedAr[sortedAr.length-1];
    for(let i=0; i < sortedAr.length; i++){
        if(height != sortedAr[sortedAr.length-(i+1)]){
            break;
        }
        count++;
    }
    return count;
}

console.time('First attempt');
console.log(birthdayCakeCandles(ar));
console.timeEnd('First attempt');