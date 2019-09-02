const HashTableBuilder = require('./utils/hash-builder');

// Imput
let arr = [1,2,3,2,3,1,1];
let findOdd = (arr) => {
    let myHashTable = HashTableBuilder(4);
    let current;
    for(let i=0; i<arr.length; i++){
        current = myHashTable.search(arr[i])
        if(!current){
            myHashTable.add(arr[i],1);
        } else {
            myHashTable.add(arr[i], current[1]+1);
        }
    }
    let oddArr = myHashTable.print()[0];
    let candidates = []
    for(let i=1; i<oddArr.length; i++){
        if(oddArr[i-1][1] !== oddArr[i][1]){
            candidates = [[oddArr[i-1][0], oddArr[i-1][1]], [oddArr[i][0], oddArr[i][1]]];
        } else {
            if(candidates[0][1] === oddArr[i]){
                return candidates[1];
            } else {
                return candidates[0];
            }    
        }
    }
};

console.time('First Attempt')
console.log(arr)
console.log(findOdd(arr))
console.timeEnd('First Attempt')