const randomItem = require('./random-item');
const makeDragon = () => {
    const dragonSizes = ['tiny', 'medium', 'big', 'extreme'];
    const dragonAbilities = ['fire', 'ice', 'lightning', 'magic'];
    const dragons = ['cool dragon', 'angry dragon', 'nasty dragon'];
    return randomItem(dragonSizes) + ' ' + randomItem(dragonAbilities) + ' ' + randomItem(dragons);
}
module.exports = makeDragon