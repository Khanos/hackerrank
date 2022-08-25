function legoBlocks(n, m) {
    // Write your code here
    console.log(n, m)
    const factorial = (n) => {
        if (n === 0) {
            return 1
        }
        return n * factorial(n - 1) 
    }
    const choose = (n, r) => factorial(n)/(factorial(r)*factorial(n-r));
    let blocksPerColumn = 0;
    for (let index = 0; index < n; index++) {
        blocksPerColumn += choose(n, index);
    }
    return parseInt(blocksPerColumn ** (m-1));
}

const n = 3, m = 2;
console.log(legoBlocks(n, m));