// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.


/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const n = arr.length;
    const ratios = arr.reduce((acc, curr) => {
        if (curr > 0) {
            acc.positive++;
        } else if (curr < 0) {
            acc.negative++;
        } else {
            acc.zero++;
        }
        return acc;
    }, {positive: 0, negative: 0, zero: 0});

    // Printing the decimal value of each fraction with six decimal places
    console.log(parseFloat(ratios.positive/n).toFixed(6));
    console.log(parseFloat(ratios.negative/n).toFixed(6));
    console.log(parseFloat(ratios.zero/n).toFixed(6));
}

const arr = [ -4, 3, -9, 0, 4, 1 ];

plusMinus(arr);