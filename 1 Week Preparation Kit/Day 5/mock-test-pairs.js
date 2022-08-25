// Given an array of integers and a target value, determine the number of pairs of array elements tha have a difference equal to a target value.
function pairs(k, arr) {
    // Write your code here
    let count = 0;
    // arr.forEach((el, index) => {
    //     if(index < arr.length - 1){
    //         const restArray = [...arr].slice(index + 1);
    //         restArray.forEach(restEl => {
    //             if(Math.abs(el - restEl) === k){
    //                 count++;
    //             }
    //         })
    //     }
    // }); Fail on 6  test cases
    // change the above code to use the for loop
    // for(let i = 0; i < arr.length; i++){
    //     for(let j = i + 1; j < arr.length; j++){
    //         if(Math.abs(arr[i] - arr[j]) === k){
    //             count++;
    //         }
    //     }
    // }
    // optimize the above code 
    // use the reduce method to reduce the array to a single value
    const sortedArr = arr.sort((a, b) => a-b);
    const memo = {};
    sortedArr.forEach(el => {
        if(memo[el]){
            count++
        }
        memo[el+k] = true;
    })
    return count;


    return count;
}

const k = 2, arr = [ 1, 5, 3, 4, 2 ];
console.log(pairs(k, arr)); // 3