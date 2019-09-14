function Sorts(){
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
    };

    return{
        bubbleSort: function(arr){
            let n = arr.length;
            function swap(left, right, index){
                arr[index] = right;
                arr[index+1] = left;
            }
            for(let i = 0; i < n; i++){
                for(let j = 0; j < n-1; j++){
                    if(arr[j]>arr[j+1]){
                        swap(arr[j], arr[j+1], j)
                    }
                }
            }
            return arr;
        },
        quickSort: function(arr, Left, Right){
            let index;
            let left = Left || 0;
            let right = Right || arr.length-1;
            if(arr.length > 1) {
                index = partition(arr, left, right);
                if(left < index-1){
                    this.quickSort(arr, left, index-1);
                }
                if(index < right){
                    this.quickSort(arr, index, right);
                }
            }
            return arr;
        }
    }
}
module.exports = Sorts;