function insertionSort1(n, arr) {
    // Write your code here
    let i = n - 2;
    const e = arr[n-1];
    
    while (i >= 0 && e <= arr[i]){
        arr[i+1] = arr[i];
        i--;
    }
    arr[i+1] = e; 
    return arr
}

function insertionSort2(n, arr) {
    // Write your code here
    let arrayToSort = arr;
    for(let i=0; i<n; i++){
        if(i!==0){
            const left = arrayToSort.filter((el, index) => index <= i);
            const sortedLeft = insertionSort1(left.length, left);
            const right = arrayToSort.filter((el, index) => index > i);
            arrayToSort = [...sortedLeft, ...right];
            console.log(arrayToSort.join(' '));
        }
    }
}

// const n = 10;
// const arr = [ 2, 3, 4, 5, 6, 7, 8, 9, 11, 10 ];

const n = 6;
const arr = [1, 4, 3, 5, 6, 2];

insertionSort2(n, arr);