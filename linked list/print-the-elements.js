class SinglyLinkedListNode {
    constructor(data){
       this.data = data;
       this.next = null;
    }
}
let addNode = (node, data) => {
   if(node.next == null){
       node.next = new SinglyLinkedListNode(data)
   } else {
       addNode(node.next, data);
   }
   return node;
}

let linkedlist = new SinglyLinkedListNode(5);
let dataArr = [6, 2, 19, 7, 4, 15, 9];
for (const item of dataArr) {
    addNode(linkedlist, item);
}

console.log('---------------------------------------------------------------');
// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
    console.log(head.data);
    if(head.next){
        printLinkedList(head.next);
    }
}
printLinkedList(linkedlist);
console.log('---------------------------------------------------------------');
console.log('end')