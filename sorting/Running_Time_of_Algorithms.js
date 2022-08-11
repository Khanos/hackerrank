function insertionSort1(n, arr) {
    // Write your code here
    let count = 0;
    let i = n - 2;
    const e = arr[n-1];
    
    while (i >= 0 && e < arr[i]){
        arr[i+1] = arr[i];
        count++;
        i--;
    }
    arr[i+1] = e; 
    return [arr, count];
}

function runningTime(arr) {
    // Write your code here
    let arrayToSort = arr;
    let times = 0;
    for(let i=0; i<arr.length; i++){
        if(i!==0){
            const left = arrayToSort.filter((el, index) => index <= i);
            const sortedLeft = insertionSort1(left.length, Array.from(left));
            if(sortedLeft[0].join('') !== left.join('')) {
                times +=  sortedLeft[1];
            }
            const right = arrayToSort.filter((el, index) => index > i);
            arrayToSort = [...sortedLeft[0], ...right];
        }
    }
    console.log(times);
}

const arr = [2, 1, 3, 1, 2] // Expected 4;
// const arr = [1, 1, 2, 2, 3, 3, 5, 5, 7, 7, 9, 9] // Expected 0;

runningTime(arr);