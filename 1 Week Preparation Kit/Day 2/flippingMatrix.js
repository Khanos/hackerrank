function flippingMatrix(matrix) {
    // Write your code here
    console.log(JSON.stringify(matrix));
    const n = matrix.length;
    let maxSum = 0;
    for (let i = 0; i < n/2; i++) {
        for (let j = 0; j < n/2; j++) {
            maxSum += Math.max(matrix[i][j], matrix[i][n-j-1], matrix[n-i-1][j], matrix[n-i-1][n-j-1])
        }
    }
    
    return maxSum;
}

const matrix = [
    [ 112, 42, 83, 119 ],
    [ 56, 125, 56, 49 ],
    [ 15, 78, 101, 43 ],
    [ 62, 98, 114, 108 ]
  ]

console.log(JSON.stringify(flippingMatrix(matrix)));