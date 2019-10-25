function rot13(str) { // LBH QVQ VG!
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let cipher = new Map();
    letters.forEach((letter, index) => {
        if(index+13<letters.length){
            cipher.set(letter, index+13);
        }else{
            cipher.set(letter, index-13);
        }
    })
    let strArr = str.split('');
    let result = strArr.map(letter => {
        if(/^[A-Z]+$/.test(letter)){
            return letters[cipher.get(letter)];        
        } else {
            return letter;
        }
    })
    return result.join('');
}

// Change the inputs below to test
console.log(rot13("SERR YBIR?"));