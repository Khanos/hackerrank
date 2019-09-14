const SortsBuilder = require('../utils/sorts');


let sorts = new SortsBuilder();

let a = [4,6,7,3,2,1];
sorts.quickSort(a);
console.log(a);