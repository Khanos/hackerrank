let mylist = [0, 1, 2, 5, 7, 3, 8, 10, 14, 11, 19, 21, 15, 16, 12, 27, 13, 17];
let value = 19
function binarysearch(list, value, isOrdered){
    if (!isOrdered){
        list = list.sort(function(prev, curr){return prev-curr});
    }
    if(list.length == 1){
        if (list[0] == value){
            return value+" was found!"
        } else {
            return "Not found!"
        }
    }
    let left = list.slice(0, Math.round(list.length/2));
    let right = list.slice(Math.round(list.length/2), list.length);
    if(value <= left[left.length-1]){
        return binarysearch(left, value, true);
    } else {
        return binarysearch(right, value, true);
    }
}
 console.log(binarysearch(mylist, 17, false));