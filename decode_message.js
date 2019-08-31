// given a string of numbers, return the number of way a message can be form 
// if each number in the srting correspond to the index of a letter.
// '11' -> 'aa', 'l' -> Alphabet[1] = 'a' but also Alphabet[11] = 'l'

// message = '1111' // 'aaaa', 'kaa', 'kk', 'aka', 'aak'
message = '11111111111111111111111111111111111111'
// O(2^n)
let decodeAt = (str, n) => {
    let result = 0;
    if(n == 0){
        return 1;
    }
    let index = str.length - n;
    if (Number(str[index]) == 0){
        return 0;
    } 
    result = decodeAt(str, n-1);
    if (n>=2 && Number(str[index]+str[index+1])<=26){
        result += decodeAt(str, n-2);
    }
    return result;
};
let decode = (str) => {
    let result = decodeAt(str, str.length);
    return result;
}

// imput -> string of numbers (integers)
// message = '12' // 'ab','L'
// Output -> Number
console.time('decode');
console.log(decode(message));
console.timeEnd('decode');

console.log('----------------------------------------------')
// O(n)
let decodeAtwMem = (str, n, nodes) => {
    let result = 0;
    if(n == 0){
        return 1;
    }
    let index = str.length - n;
    if (Number(str[index]) == 0){
        return 0;
    } 
    if (nodes[n] != null){
        return nodes[n]
    }
    result = decodeAtwMem(str, n-1, nodes);
    if (n>=2 && Number(str[index]+str[index+1])<=26){
        result += decodeAtwMem(str, n-2, nodes);
        nodes[n-2] = result;
    }
    nodes[n] = result;
    return result;
};
let decodewMem = (str) => {
    let nodes = new Array(str.length).fill(null);
    let result = decodeAtwMem(str, str.length, nodes);
    return result;
}

// imput -> string of numbers (integers)
// message = '12' // 'ab','L'
// Output -> Number
console.time('decodewMem')
console.log(decodewMem(message));
console.timeEnd('decodewMem')