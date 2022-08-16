// Given an array of integers, where all elements but one occur twice, find the unique element.
/* Example
Input: [1, 2, 3, 4, 3, 2, 1]
Output: 4
*/

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
    const frequencyArr = Array.from({length: 100}, () => 0);
    a.forEach(num => {
        frequencyArr[num]++;
    });
    return frequencyArr.findIndex(num => num === 1);
}

const a = [ 0, 0, 1, 2, 1 ];
console.log(lonelyinteger(a));