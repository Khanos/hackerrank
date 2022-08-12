// Complet the getSequenceSum function bellow.
function getSequenceSum(i, j, k) {
    const [start, middle, end] = [i, j, k];

    // Sum from start to middle
    const sum1Array = Array.from({length: parseInt(middle-start)}, (_, index) => start + index);
    const sum1 = sum1Array.reduce((acc, el) => acc + el, 0);

    // Sum from middle to end
    const sum2Array = Array.from({length: parseInt(middle-end+1)}, (_, index) => middle - index)
    const sum2 = sum2Array.reduce((acc, el) => acc + el, 0);

    return sum1 + sum2;
};

function getSequenceSum2(i, j, k) {
    const getSum = (n) => {
        return Array.from(Array(n).keys()).reduce((acc, el) => acc + el, 0);
    }
    
    // First half of the equation
    const iTimes = parseInt(j-i) ;
    const positiveSummation = getSum(iTimes) + (i*iTimes);

    // Second half of the equation
    const jTimes = parseInt(j-k) ;
    const negativeSummation = -getSum(jTimes) + (j*jTimes);

    return positiveSummation + negativeSummation + k;
};

const i = 0, j = 5, k = -1000;
console.time('getSequenceSum');
const result = getSequenceSum(i, j, k);
console.timeEnd('getSequenceSum');
console.time('getSequenceSum2');
const result2 = getSequenceSum2(i, j, k);
console.timeEnd('getSequenceSum2');
console.log(result, result2);