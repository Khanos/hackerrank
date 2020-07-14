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

console.log('---------------------------------------------------------------');
// Complete the insertNodeAtHead function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtHead(head, data) {
    if(!head){
        return new SinglyLinkedListNode(data);
    } else {
        let node = new SinglyLinkedListNode(data);
        node.next = head;
        return node;
    }
}
linkedlist = insertNodeAtHead(null, 141);
linkedlist = insertNodeAtHead(linkedlist, 302);
linkedlist = insertNodeAtHead(linkedlist, 164);
linkedlist = insertNodeAtHead(linkedlist, 530);
linkedlist = insertNodeAtHead(linkedlist, 474);
console.log(linkedlist)

console.log('---------------------------------------------------------------');