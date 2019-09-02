const hash = (key, size) => {
    let asciiCode = 0;
    for(let i = 0; i < key.length; i++){
        asciiCode += key.charCodeAt(i);
    }
    return asciiCode % size;
};

function HashTableBuilder(size){
    let interface = {};
    let storage = [];

    interface.add = (key, value) => {
        let index = hash(key, size);
        if(!storage[index]){
            let obj = {};
            obj[key] = value;
            storage[index] = obj;
        } else {
            storage[index][key] = value;
        }
    };

    interface.remove = (key) => {
        let index = hash(key, size);
        return delete storage[index][key];
    };

    interface.search = (key) => {
        let index = hash(key, size);
        return storage[index][key] ? storage[index][key] : key+' Not Found'
    };

    interface.print = () => {
        return storage;
    };

    return interface;
};

let myHashTable = new HashTableBuilder(10);
// console.time('Test');
// console.log(hash('thiss a test', 5))
// myHashTable.add('aaa', {a:1,b:3});
// myHashTable.add('aab', [1,2,3,4,5]);
// myHashTable.add('abb', hash);
// myHashTable.add('bbb', 6);
// myHashTable.add('bab', 6);
// myHashTable.add('baa', 6);
// let table = myHashTable.print();
// myHashTable.remove('bbb');
// let aab = myHashTable.search('aab');
// let aaa = myHashTable.search('aaa');
// let abb = myHashTable.search('abb');
// console.timeEnd('Test');