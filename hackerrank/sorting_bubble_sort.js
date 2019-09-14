// Given an array of integers, sort the array in ascending order using the Bubble Sort algorithm above.
function countSwaps(a) {
    let count = 0;
    function swap(left, right, index){
        a[index] = right;
        a[index+1] = left;
        count++;
    }
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < a.length-1; j++){
            if(a[j]>a[j+1]){
                swap(a[j],a[j+1], j)
            }
        }
    }
    console.log('Array is sorted in ' + count + ' swaps.');
    console.log('First Element: ' + a[0]);
    console.log('Last Element: ' + a[a.length-1]);
}
let arr = [3, 2, 1];
console.time('First Attempt');
countSwaps(arr);
console.log(arr)
console.timeEnd('First Attempt');