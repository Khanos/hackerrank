// This implementation relays on the Map object
function HashTableBuilder(size) {
    let interface = {};
    let storage = new Map();

    interface.add = (key, value) => {
        return storage.set(key, value);
    };

    interface.remove = (key) => {
        return storage.delete(key);
    };

    interface.search = (key) => {
        return storage.get(key);
    };

    interface.print = () => {
        return storage;
    };

    return interface;
};  

// let myHashTable = HashTableBuilder();
// console.time('Test');
// myHashTable.add('aaa', {a:1,b:3});
// myHashTable.add('aab', [1,2,3,4,5]);
// myHashTable.add('abb', 'hash');
// myHashTable.add('bbb', 6);
// myHashTable.add('bab', 6);
// myHashTable.add('baa', 6);
// let table = myHashTable.print();
// myHashTable.remove('bbb');
// let aab = myHashTable.search('aab');
// let aaa = myHashTable.search('aaa');
// let abb = myHashTable.search('abb');
// console.timeEnd('Test');