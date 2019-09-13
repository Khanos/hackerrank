let swap = (items, leftindex, rightindex) => {
    let temp = items[leftindex];
    items[leftindex] = items[rightindex];
    items[rightindex] = temp;
};
let partition = (items, left, right) => {
    let pivot = items[Math.floor((left + right)/2)];
    let i = left;
    let j = right;
    while(i <= j){
        while(items[i] < pivot){
            i++;
        }
        while(items[j] > pivot){
            j--;
        }
        if(i <= j){
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}
let quicksort = (items, left, right) => {
    let index;
    if(items.length > 1) {
        index = partition(items, left, right);
        if(left < index-1){
            quicksort(items, left, index-1);
        }
        if(index < right){
            quicksort(items, index, right);
        }
    }
    return items;
}

let items = [1,4,2,6,6,2,8,9]
let result = quicksort(items, 0, items.length-1);
console.log(result);