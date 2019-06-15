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
    let word = '';
    let rest = '';
    let count = 0;
    let anagramsArray = []
    for (let i = 0; i<s.lenght ; i++){
        console.log(s[i],'==')
        for(let j = i+1; j<s.lenght; j++){
            console.log(s[i],'==', s[j])
            if (s[i] == s[j]){
                anagramsArray.push([i,j]);
                break;
            }
        }
    }
    return anagramsArray;
}


//let s = randomStr({size: 100, type: ['letters']});
console.log('result', sherlockAndAnagrams('abba'));