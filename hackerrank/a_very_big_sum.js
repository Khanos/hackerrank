//Calculate and print the sum of the elements in an array, keeping in mind that some of those integers may be quite large.
function aVeryBigSum(ar) {
    console.log(ar)
    var excess = null;
    var digitsum = 0;
    var lastindex = 0;
    var result = [];
    var current = '';
    var maxDigits = ar[0].toString().length;
    for (var i = 0; i < maxDigits; i++) {
        if(ar[i]){
            maxDigits = maxDigits < ar[i].toString().length ? ar[i].toString().length : maxDigits;    
        }
        for (var j = 0; j < ar.length; j++) {
            current = ar[j].toString();
            lastindex = -(i + 1);
            digitsum += Math.abs(lastindex) <= current.length ? parseInt(current.substr(lastindex, 1)) : 0;
        }
        if (digitsum <= 9) {
            if (excess) {
                digitsum += excess;
                excess = null;
            } 
            result.unshift(digitsum.toString());
        } else { 
            if (excess) {
                digitsum += excess;
            } 
            result.unshift(digitsum.toString().substr(-1, 1));
            excess = parseInt(digitsum.toString().substr(0, 1));
        }
        digitsum = 0;
    }
    if(excess){
        result.unshift(excess);
    }
    return parseInt(result.join(''));
}

//let arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
// let arr = [101, 102, 1003, 104]
let arr = [9999999999, 9999999999, 9999999999, 9999999999];

let result = aVeryBigSum(arr);
console.log('Result: ',result)