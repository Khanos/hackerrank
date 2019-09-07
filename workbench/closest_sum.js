// input arr1 = [1,2,3,4,5]
//       arr2 = [1,2,3,4,5]
// eSum = 0
let arr1 = [1,2,3,4,5,14,87,45,33,12,55,43,45,65,22,3,43,23,55,66,75,34];
let arr2 = [1,2,3,4,5,12,14,54,23,33,13,23,43,6,45,87,65,33,49,87,67,2];
let eSum = 50
let sumEach = (value, arr, eSum) => {
    let sum = 0;
    for(let i=0; i<arr.length;i++){
        sum = value + arr[i];
        if(sum >= eSum){
            return [i, sum];
        }
    }
    return [arr.length-1,sum]
}

let closest_sum = (arr1, arr2, eSum) => {
    let sum=[];
    for(let i=0;i<arr1.length;i++){
        sum = sumEach(arr1[i], arr2, eSum);
        if(sum[1] == eSum){
            return 'arr1: '+arr1[i]+', arr2: '+arr2[sum[0]]+', closest sum= '+ sum[1]
        }
    }
    return 'There is no match values'
}

console.time('closest_sum_first_attemp');
console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
console.log('eSum: ', eSum);
console.log(closest_sum(arr1,arr2,eSum));
console.timeEnd('closest_sum_first_attemp');
// Time complexity: O(n^2) it's a loop inside a loop;
console.log('--------------------------------------------')

// left out approach
let closest_sum_2 = (arr1, arr2, eSum, ePercent) => {
    let newArr1 = arr1.sort((prev,curr) => prev-curr);
    let newArr2 = arr2.sort((prev,curr) => curr-prev);
    console.log('newArr1: ', newArr1);
    console.log('newArr2: ', newArr2);
    console.log('eSum: ', eSum);
    let closestSumArr = [];
    let sum = 0;
    let yindex = 0;
    let merror = eSum*ePercent;
    for(let i=0;i<newArr1.length;i++){
        if(!newArr2[yindex]){
            break;
        }
        sum = newArr1[i] + newArr2[yindex];
        if(sum > eSum){
            i--;
            yindex++;
        }
        if(Math.abs(eSum-sum)<merror){
            closestSumArr.push([sum, 'Arr1: '+i, 'Arr2: '+yindex]);
        }
    }
    return closestSumArr;
}
// Time complexity: O(n) because we are using only one loop.
console.time('closest_sum_second_attemp');
console.log(closest_sum_2(arr1,arr2,eSum, 0.01));
console.timeEnd('closest_sum_second_attemp');