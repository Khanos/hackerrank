// My first attempt, no cheating
// function binarysearch(list, value, isOrdered){
//     if (!isOrdered){
//         list = list.sort(function(prev, curr){return prev-curr});
//     }
//     if(list.length == 1){
//         if (list[0] == value){
//             return value+" was found!"
//         } else {
//             return "Not found!"
//         }
//     }
//     let left = list.slice(0, Math.round(list.length/2));
//     let right = list.slice(Math.round(list.length/2), list.length);
//     if(value <= left[left.length-1]){
//         if(value == left[0] || value == left[left.length-1]){
//             return value+" was found!"
//         } else {
//             return binarysearch(left, value, true);
//         }
//     } else {
//         if(value == right[0] || value == right[right.length-1]){
//             return value+" was found!"
//         } else {
//             return binarysearch(right, value, true);
//         }
//     }
// }
let mylist = [0, 1, 2, 5, 7, 8, 9, 11, 15, 17, 22, 54, 65];
let value = 65


// For unsorted arrays
let binarysearch = (list, value) => {
    if(list.length == 1){
        return list[0] == value ? value + ' Found it' : 'Not found!'
    } else {
        let middleIndex = Math.round(list.length/2);
        let left = list.slice(0, middleIndex);
        let right = list.slice(middleIndex, list.length);
        if(value == left[0] || value == left[left.length-1]){
            return value + ' Found it';
        } else if (value == right[0] || value == right[right.length -1]){
            return value + ' Found it';
        } else {
            return value < right[0] ? binarysearch(left, value) : binarysearch(right, value);
        }
    }
};
let binarysearch_v2 = (list, value) => {
    if(list.length == 1){
        return list[0] == value ? value + ' Found it' : 'Not found!'
    } else {
        let middleIndex = Math.round(list.length/2);
        let left = list.slice(0, middleIndex);
        let right = list.slice(middleIndex, list.length);
        return value < right[0] ? binarysearch(left, value) : binarysearch(right, value);
    }
};
let binarysearch_v3 = (list, value) => {
    let left = 0
    let right = list.length - 1;
    let middle;
    while(left <= right){
        middle = Math.round((left + right)/2);
        if(value < list[middle]){
            right = middle - 1;
        } else if (value > list[middle]){
            left = middle + 1;
        } else {
            return value + ' Founded at index: ' + middle;
        }
    }
    return value + ' Not found';
};
console.time('With validations');
console.log(binarysearch(mylist, value));
console.timeEnd('With validations');
console.time('With validations v2');
console.log(binarysearch_v2(mylist, value));
console.timeEnd('With validations v2');
console.time('With validations v3');
console.log(binarysearch_v3(mylist, value));
console.timeEnd('With validations v3');