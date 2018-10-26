
// function twoStrings(s1, s2) {
//     let _s1 = Array.from(s1);
//     let _s2 = Array.from(s2);
//     let findOn = function(arr1,arr2){
//         for (let value of arr1){
//             if(arr2.indexOf(value) != -1){
//                 return 'YES';
//             }
//         }
//         return 'NO';
//     }
//     if( _s1.length < _s2 ){
//         return console.log(findOn(_s1,_s2));
//     } else {
//         return console.log(findOn(_s2,_s1));
//     }
// }

// twoStrings('hello de sds','hello');
// Terminated due to timeout :(


function twoStrings(s1, s2) {
    let findOn = function(str1,str2){
        for (let value of str1){
            if(str2.indexOf(value) != -1){
                return 'YES';
            }
        }
        return 'NO';
    }
    return s1.length < s2 ? findOn(s1,s2) : findOn(s2,s1)
}

let s1 = 'ksjadhfñkjsndclndlkdkladfakdfkasjdfkl';
let s2 = 'zzzzzzzzzzzzzzzzzzzzzzzzzzza';
let result = twoStrings(s1, s2);

console.log(result);