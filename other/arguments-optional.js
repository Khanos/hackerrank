function addTogether(...arg) {
    if(arg.length > 1){
        if(typeof arg[1] === 'number'){
            return arg[0]+arg[1]
        } else {
            return undefined;
        }
    } else {
        if(typeof arg[0] === 'number'){
            return function(n){
                if(typeof n === "number"){
                    return n+arg[0];
                } else {
                    return undefined;
                }
            }
        } else {
            return undefined;
        }
    }
}
  
console.log(addTogether(2,3));
console.log(addTogether(2)(3));
console.log(addTogether(2, "3"));
console.log(addTogether(2)([3]));