let LinkedList = require('./LinkedList');
let SinglyLinkedList = LinkedList.SinglyLinkedList;

let llist = new SinglyLinkedList();
llist.insertNode(1);
llist.insertNode(2);
llist.insertNode(3);

let llist2 = new SinglyLinkedList();
llist2.insertNode(1);
llist2.insertNode(2);
llist2.insertNode(3);

let llist3 = new SinglyLinkedList();
llist3.insertNode(1);
llist3.insertNode(2);
llist3.insertNode(3);

let llist4 = new SinglyLinkedList();
llist4.insertNode(1);
llist4.insertNode(3);

console.log('---------------------------------------------------------------');
/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode(headA, headB) {
    console.log(JSON.stringify(headA));
    console.log(JSON.stringify(headB));
    let position = 0;
    let value = null;
    function getValue(head, position) {
        let values = [];
        if(head){
            values.push(head.data);
            while(head.next){
                head = head.next;
                values.push(head.data);
            }
        }
        return values[position] ? values[position] : null;
    }
    let targetList = headB;
    while(headA){
        while(targetList){
            if(headA.next.data === getValue(targetList.next, position)){
                targetList.next = null;
                value = headA.next.data;
            }
            targetList = targetList.next;
            position++;
        }
        if(value){
            headA = null;
        } else {
            headA = headA.next;
            targetList = headB;
            position = 0;
        }
    }
    return value;
}
console.log('---------------------------------------------------------------');
let result = findMergeNode(llist.head, llist2.head);
console.log(JSON.stringify(result));
let result2 = findMergeNode(llist3.head, llist4.head);
console.log(JSON.stringify(result2));