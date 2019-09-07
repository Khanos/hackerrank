/*const dragons = [
    'cool dragon',
    'angry dragon',
    'nasty dragon'
];
const iterator = dragons.__proto__[Symbol.iterator](); // Symbol are unique keys
const iterator2 = dragons.entries(); // The same thing
console.log(typeof iterator);
console.log(typeof iterator2);
console.log(dragons);
*/
const makeDragon = () => {
    const dragonSizes = ['tiny', 'medium', 'big', 'extreme'];
    const dragonAbilities = ['fire', 'ice', 'lightning', 'magic'];
    const dragons = ['cool dragon', 'angry dragon', 'nasty dragon'];
    return randomItem(dragonSizes) + ' ' + randomItem(dragonAbilities) + ' ' + randomItem(dragons);
}

makeDragon()

