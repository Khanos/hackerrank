let LinkedListBuilder = require('../utils/linkedlist-builder');

let linkedList = new LinkedListBuilder();
let head;

linkedList.append(5);
linkedList.append(4);
linkedList.append(3);
head = linkedList.getHead();
console.log('----------',linkedList.toString());
linkedList.append(7);
linkedList.insert(2, 8);
head = linkedList.getHead();
console.log('----------',linkedList.toString());
linkedList.removeAt(2);
head = linkedList.getHead();
console.log('----------',linkedList.toString());
console.log(linkedList.indexOf(15));
console.log(linkedList.isEmpty());
console.log(linkedList.size());