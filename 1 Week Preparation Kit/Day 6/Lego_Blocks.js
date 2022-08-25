function legoBlocks(height, width) {
    // Write your code here
    // First try
    // console.log(n, m)
    // const factorial = (n) => {
    //     if (n === 0) {
    //         return 1
    //     }
    //     return n * factorial(n - 1) 
    // }
    // const choose = (n, r) => factorial(n)/(factorial(r)*factorial(n-r));
    // let blocksPerColumn = 0;
    // for (let index = 0; index < n ; index++) {
    //     blocksPerColumn += choose(n, index);
    // }
    // return parseInt(blocksPerColumn ** (m-1));

    // Second Try
    const sum = (arr) => arr.reduce((a, b) => a + b, 0);
    const mod = Math.pow(10, 9) + 7;

    // Step 1: O(width)       
    // The number of combinations to build a single row
    // As only four kinds of sizes, so
    // base case: 
    // if width is 0, combination is 1
    // if width is 1, combination is 1
    // if width is 2, combination is 2
    // if width is 3, combination is 4
    const row_combinations = [1, 1, 2, 4];

    // Build row combinations up to current wall's width
    while (row_combinations.length <= width) {
        row_combinations.push(sum(row_combinations.slice(-4)) % mod);
    }

    // Step 2: O(width)
    // Compute total combinations 
    // for constructing a wall of height N of varying widths
    const total = [];
    for (let index = 0; index < row_combinations.length; index++) {
        total.push(Math.pow(row_combinations[index], height) % mod);
    }

    // Step 3: O(W^2)
    // Find the number of unstable wall configurations 
    // for a wall of height N of varying widths
    const unstable = [0, 0];


    // Divide the wall into left part and right part,
    // and calculate the combination of left part and right part.
    // From width is 2, we start to consider about violation.

    // function to calculate the combination of left part and right part.
    const combination = (currentWidth, leftWitdh) => {
        return ((total[leftWitdh] || 0) - (unstable[leftWitdh] || 0)) * (total[currentWidth - leftWitdh] || 0)
    }
    for (let index = 2; index < width + 1; index++) {
        const intArray = Array.from({length: index - 1}, (_, i) => i+1);
        const combArray = intArray.map(el => combination(el, index));
        const _result = sum(combArray);
        unstable.push(_result % mod);
    }

    return (total[width] - unstable[width]) % mod;
}

const n = 4, m = 5;
console.log(legoBlocks(n, m)); // 35714