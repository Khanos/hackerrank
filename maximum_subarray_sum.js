//Complete the maximumSum function in the editor below. It should return a long integer that represents the maximum value of subarray sum % m
// http://hr.gs/abaaed

// Complete the maximumSum function below.
let max = 0;
function findMaxMod(a, m){
    let localMax = 0;
    if (a.length == 2){
        localMax = (a[0]%m + a[1]%m) % m;
        max = localMax > max ? localMax : max;
        return max;
    } else {
        localMax = (findMaxMod(a.slice(0, parseInt(a.length/2)), m) + findMaxMod(a.slice(parseInt(a.length/2), a.length), m)) % m;
        max = localMax > max ? localMax : max;
        return max;
    }
}
function maximumSum(a, m) {
    let result = findMaxMod(a, m);
    return max;
}

let a = [3, 3, 9, 9, 5];
let m = 7;
console.time('First Attempt: ');
let result = maximumSum(a, m);
console.timeEnd('First Attempt: ');