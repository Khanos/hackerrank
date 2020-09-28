function alternatingCharacters(s) {
    let current = s[0];
    let newStr = current;
    for(const letter of s){
        if(current != letter) {
            current = letter;
            newStr += current;
        }
    }
    return s.length - newStr.length;
}
let strings = [
    'AAAA',
    'BBBBB',
    'ABABABAB',
    'BABABA',
    'AAABBB'
]
for(const s of strings){
    console.log(alternatingCharacters(s));
}