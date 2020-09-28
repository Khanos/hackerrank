function dynamicArray(n, queries) {
    // Write your code here
    let response = [];
    let seqList = [];
    for (let index = 1; index <= n; index++) {
        seqList.push([])
    }
    let lastAnswer = 0;
    for(let element of queries){
        let index = (element[1] ^ lastAnswer) % n;
        let seq = seqList[index];
        if(element[0] === 1){
            seq.push(element[2]);
        } else {
            lastAnswer = seq[element[2] % seq.length]
            response.push(lastAnswer);
        }
    }
    return response;
}

let n = 2;
 let queries = [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ];
// let queries = [ [ 1, 0, 5 ], [ 1, 1, 7 ], [ 2, 0, 1 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ];
console.log(dynamicArray(n, queries));