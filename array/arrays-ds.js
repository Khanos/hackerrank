// Complete the reverseArray function below.
function reverseArray(a) {
    let arr = [];
    for(const element of a){
        arr.unshift(element);
    }
    return arr;
}

let arr = [1, 4, 3, 2]
console.log(reverseArray(arr));