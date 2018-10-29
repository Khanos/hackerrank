const makeDragon = require('./utils/make-dragon');

const dragonArmy = {
    [Symbol.iterator]: () => {
        return {
            next: () => {
                const enoughDragonsSpawned = Math.random() > 0.75;
                if(!enoughDragonsSpawned)
                    return {
                        value: makeDragon(),
                        done: false
                    }
                return {done: true}
            }
        }
        
    }
}
for (const dragon of dragonArmy){
    console.log(dragon);
}
//console.log(dragonArmy)
//console.log(makeDragon());