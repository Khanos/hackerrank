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
//     return anagrams.lengthS
// }


// let s = randomStr({size: 12, type: ['letters']});
// console.log('result', sherlockAndAnagrams('abcd'));

// let randomStr = require('./utils/random-str');
// function getIndexArray(start, length){
//     let arr = [];
//     for(let i=0;i<length;i++){
//         arr.push(i+start);
//     }
//     return arr;
// }

// function findAnagram(str, s, rootIndex){
//     let response = [];
//     let findIt;
//     for (let index = 0; index + str.length <= s.length; index++) {
//         let newStr = s.slice(index, rootIndex+index+str.length);
//         findIt = true;
//         //console.log("Esta ", str, " dentro de: ", newStr)
//         for (let i = 0; i < str.length; i++) {
//             if(newStr.indexOf(str[i]) == -1){
//                 findIt = false;
//                 break;
//             }
//             newStr = newStr.slice(0, newStr.indexOf(str[i])) + newStr.slice(newStr.indexOf(str[i]) + 1, newStr.length);
//         }
//         if (findIt){
//             response.push(getIndexArray(rootIndex, str.length), getIndexArray(rootIndex+index+str.length, str.length))
//         }
//     }
//     return response;
// }
// // console.log("for ba");
// // console.log(findAnagram("b", "a", 0))

// function sherlockAndAnagrams(s) {
//     let finish = false;
//     let tempArr = false;
//     let anagramsArray = [];
//     let n = 1;
//     while (!finish){
//         for (let i = 0; i + n < s.length; i++){
//             anagram = s.slice(i,i+n);
//             stringToSearch = s.slice(i+1,s.length);
//             tempArr = findAnagram(anagram, stringToSearch, i)
//             console.log("Esta ", anagram, " dentro de: ", stringToSearch, " ? ", tempArr)
//             if (tempArr.length > 0){
//                 anagramsArray.push(tempArr);
//             }
//         }
//         console.log("---------------------------")
//         n++;
//         if(n>=s.length){
//             finish = true;
//         }
//     }
//     //console.log("----------------------------")
//     console.log(anagramsArray)
//     return anagramsArray.length;
// }
// // sherlockAndAnagrams("abba");
// console.log(sherlockAndAnagrams("kkkk"));

// Third Attempt
// let countAnagrams = (key, s) => {
//     if(key.length > s.length){
//         return false;
//     }
//     if(key.length == 1){
//         if(s.indexOf(key) != -1){
//             return true;
//         }
//         return false;
//     }
//     if(countAnagrams(key.substr(0,1), s) && countAnagrams(key.substr(1,s.lenght), s)){
//         return true
//     }
//     return false;
// }
// let decompose = (s) => {
//     if(s.length > 2){
//         let left = s.substr(1, s.length).split('').sort().join('');
//         let right = s.substr(0, s.length-1).split('').sort().join('');
//         arr.push(left);
//         arr.push(right);
//         if(left.length > 1 && right.length > 1){
//             decompose(left);
//             decompose(right);
//         }
//     }
// };
let sherlockAndAnagrams = (s) => {
    let arr = [];
    let count = 0;
    for(let i = 1; i < s.length; i++){
        for(let j = 0; j <= s.length-i; j++){
            arr.push(s.substr(j,i).split('').sort().join(''));
        }
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = 0+i; j < arr.length; j++){
            if(i!=j){
                if(arr[i] == arr[j]){
                    count++;
                }
            }
        }
    }
    return count;
};

console.time('Third Attempt');
let s = 'aaaa';
let result = sherlockAndAnagrams(s);
console.log(result);
console.timeEnd('Third Attempt');