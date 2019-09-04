//  Find Sets Of Numbers That Add Up To a given number
// Ex: [2, 4, 6, 10] and 16 -> 2 -> [2, 4, 10] and [6, 10] are the only subArray that sums to 16
let count_sets = (arr, totals) => {
    return rec(arr, totals, arr.lenth -1);
}

let rec = (arr, totals, i) => {
    if(totals == 0){
        return 1
    } else if (totals < 0){
        return 0
    } else if (i < 0){
        return 0
    } else if (totals < arr[i]){
        return rec(arr, totals, i-1);
    } else {
        return rec(arr, totals-arr[i], i-1) + rec(arr, totals, i-1);
    }
}
let arr = [2,4,6,10];
console.log(count_sets(arr, 16));