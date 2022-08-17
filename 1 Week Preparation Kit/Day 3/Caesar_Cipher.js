function caesarCipher(s, k) {
    // Write your code here
    const originalAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const shiftedAlphabet = originalAlphabet.split('').map(el => {
        const index = originalAlphabet.indexOf(el) + k;
        return originalAlphabet[index % originalAlphabet.length];
    }).join('');
    const cipherString = s.split('').reduce((acc, el) => {
        if (originalAlphabet.includes(el.toLowerCase())) {
            let letter = shiftedAlphabet[originalAlphabet.indexOf(el.toLowerCase())];
            if(el === el.toUpperCase()) {
                return acc + letter.toUpperCase();
            } else {
                return acc + letter;
            }
        } else {
            return acc + el;
        }
    }, '');
    return cipherString;

}
const s = '1X7T4VrCs23k4vv08D6yQ3S19G4rVP188M9ahuxB6j1tMGZs1m10ey7eUj62WV2exLT4C83zl7Q80M' 
const k = 27;
console.log(caesarCipher(s, k));