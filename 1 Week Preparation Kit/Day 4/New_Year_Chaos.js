function minimumBribes(q) {
    // Write your code here
    let bribes = 0;
    for (let i = 0; i < q.length; i++) {
        if (q[i] - (i + 1) > 2) {
            return 'Too chaotic';
        }
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                bribes++;
            }
        }
    }
    return bribes;
}

const q = [ 2, 1, 5, 3, 4 ];
console.log(minimumBribes(q));