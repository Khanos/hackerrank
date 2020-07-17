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

let llist1 = new SinglyLinkedListNode(1);
llist1.addNode(llist1, 2);

let llist2 = new SinglyLinkedListNode(1);
llist2.addNode(llist2, 2);

console.log('---------------------------------------------------------------');
// Complete the CompareLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function CompareLists(llist1, llist2) {
    while(llist1.next){
        if(llist1.data !== llist2.data){
            return 0;
        }
        llist1 = llist1.next;
        llist2 = llist2.next;
    }
    if(llist1 && llist2){
        if(llist1.data !== llist2.data){
            return 0;
        } else {
            return 1;
        }
    } else {
        if(llist1 !== llist2){
            return 0;
        } else {
            return 1;
        }
    }

}
console.log('---------------------------------------------------------------');
let result = CompareLists(llist1, llist2);
console.log(result);