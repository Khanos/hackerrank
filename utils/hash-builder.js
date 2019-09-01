const hash = (key, size) => {
    let hashedkey = 0;
    for(let i=0; i < key.length; i++){
        hashedkey += key.charCodeAt(i);
    }
    return hashedkey % size
}

function HashTableBuilder(limit){
    const storageLimit = limit;
    let interface = {};
    let storage = [];
    
    interface.add = (key, value) => {
        let index = hash(key, storageLimit);
        if(!storage[index]){
            storage[index] = [[key,value]];
        } else {
            let inserted = false;
            for(let i=0; i < storage[index].length; i++){
                if(storage[index][i][0] == key){
                    storage[index][i] = [key,value]; 
                    inserted = true;
                    break;
                }
            }
            if(!inserted){
                storage[index].push([key, value]);
            }
        }
    };
    
    interface.remove = (key) => {
        let index = hash(key, storageLimit);
        if(storage[index].length === 1 && storage[index][0] === key){
            delete storage[index];
        } else {
            let deleted = false;
            for(let i = 0; i < storage[index].length; i++){
                if(storage[index][i][0] === key){
                    deleted = true;
                    delete storage[index][i];
                    break;
                }
            }
        }
        return deleted;
    };

    interface.search = (key) => {
        let index = hash(key, storageLimit);
        if(!storage[index]){
            return null;
        } else {
            for(let i = 0; i < storage[index].length; i++){
                if(storage[index][i][0] === key){
                    return storage[index][i];
                }
            }
        }
    };

    interface.print = () => {
        return storage
    }

    return interface;
}

module.exports = HashTableBuilder;