function insertionSort1(n, arr) {
    // Write your code here
    let i = n - 2;
    const e = arr[n-1];
    
    while (i >= 0 && e <= arr[i]){
        arr[i+1] = arr[i];
        console.log(arr.join(' '));
        i--;
    }
    arr[i+1] = e; 
    console.log(arr.join(' '));
}

// const n = 10;
// const arr = [ 2, 3, 4, 5, 6, 7, 8, 9, 11, 10 ];

const n = 5;
const arr = [ 2, 4, 6, 8, 3 ];

insertionSort1(n, arr);