let randomStr = require('./utils/random-str');

// function sherlockAndAnagrams(s) {
//     let anagrams = [];
//     let _s = s.split('').reverse().join('');
//     let str = '';
//     for(let index in s){
//         if (s[index] == _s[index]){
//             str += s[index]
//             anagrams.push(str);
//         } else {
//             str = '';
//         }
//     }
//     return anagrams.length
// }


// let s = randomStr({size: 12, type: ['letters']});
// console.log('result', sherlockAndAnagrams('abcd'));

let randomStr = require('./utils/random-str');

function sherlockAndAnagrams(s) {
    let anagrams = [];
    let _s = '';
    let n = 1;
    for(let index in s){
        _s = s.slice(index, n)
        if(_s.indexOf(str))
    }
    return anagrams.length
}


//let s = randomStr({size: 100, type: ['letters']});
console.log('result', sherlockAndAnagrams('kkkk'));