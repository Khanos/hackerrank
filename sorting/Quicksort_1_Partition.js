function quickSort(arr) {
    // Write your code here
    const p = arr.shift();
    const main = arr.reduce((acc, curr) => {
        if (curr < p) {
            acc.left.push(curr);
        } else {
            acc.right.push(curr);
        }
        return acc;
    }, {left:[] , right:[]});
    console.log([...main.left, p, ...main.right])
    return [...main.left, p, ...main.right];
}

// const arr = [ 4, 5, 3, 7, 2 ] // Expected 3 2 4 5 7;
const arr = [5,7,4,3,8] // Expected 3 4 5 8 7;

quickSort(arr);