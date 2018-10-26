//let magazine = [ 'give', 'me', 'one', 'grand', 'today', 'night' ];
let note = [ 'give', 'one', 'grand', 'today' ];
// let magazine = ['two', 'times', 'three', 'is', 'not', 'four'];
// let note = ['two', 'times', 'two', 'is', 'four'];
let magazine = [];
for (let index = 0; index < 3000; index++) {
    magazine.push('give');
    
}
console.log(magazine)
function checkMagazine(magazine, note) {
    if(magazine.length < note.length){
        console.log('No');
        return true;
    }
    let magazine_hashed = {};
    magazine.forEach((current, index) => {
        magazine_hashed[current] = index;
    });
    for(let value of note){
        if(typeof magazine_hashed[value] == 'undefined'){
            console.log('No');
            return true;
        }
        delete magazine_hashed[value];
    }
    console.log('Yes');
    return true;
}

checkMagazine(magazine, note);