/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

function pageCount(n, p) {
    // Write your code here
    let left = 0;
    let right = 0;
    for (let i = 1; i <= n; i = i + 2) {
        if (i < p) {
            left++;
        }
        if (i >= p && i < n) {
            right++;
        }
    }
    return Math.min(left, right);
}

let n = 5;
let p = 1;

console.log(pageCount(n, p));