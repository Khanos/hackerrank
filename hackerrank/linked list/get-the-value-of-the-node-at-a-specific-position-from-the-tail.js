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
addNode(linkedlist, 302);
addNode(linkedlist, 164);
addNode(linkedlist, 530);
addNode(linkedlist, 474);

console.log('---------------------------------------------------------------');
// Complete the getNode function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function getNode(head, positionFromTail) {
    let values = [head.data];
    while(head.next){
        head = head.next;
        values.push(head.data);
    }
    values.reverse();
    return values[positionFromTail];
}
console.log(linkedlist)
getNode(linkedlist, 0);
console.log('---------------------------------------------------------------');