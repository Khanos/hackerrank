class SinglyLinkedListNode {
    constructor(data){
       this.data = data;
       this.next = null;
    }
    addNode(node, data){
        if(node.next == null){
            node.next = new SinglyLinkedListNode(data)
        } else {
            this.addNode(node.next, data);
        }
        return node;
    }
}

let llist = new SinglyLinkedListNode(1);
llist.addNode(llist, 2);
llist.addNode(llist, 3);
llist.addNode(llist, 4);
llist.addNode(llist, 5);

console.log('---------------------------------------------------------------');
// Complete the reverse function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reverse(head) {
    console.log(JSON.stringify(head));
    let revr = null;
    let curr = head;
    let next = null;
    while(curr){
        next = curr.next;
        curr.next = revr;
        revr = curr;
        curr = next;
    }
    return revr;
}
console.log('---------------------------------------------------------------');
let result = reverse(llist);
console.log(JSON.stringify(result));