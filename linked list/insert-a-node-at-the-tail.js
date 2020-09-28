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
// Complete the insertNodeAtTail function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtTail(head, data) {
    console.log(head, data)
    if(!head){
        return new SinglyLinkedListNode(data);
    }
    if(!head.next){
        head.next = new SinglyLinkedListNode(data);
    } else {
        insertNodeAtTail(head.next, data);
    }

    return head;

}
linkedlist = insertNodeAtTail(null, 141);
linkedlist = insertNodeAtTail(linkedlist, 302);
linkedlist = insertNodeAtTail(linkedlist, 164);
linkedlist = insertNodeAtTail(linkedlist, 530);
linkedlist = insertNodeAtTail(linkedlist, 474);

console.log('---------------------------------------------------------------');