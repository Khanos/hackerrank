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
llist3.insertNode(4);

let llist4 = new SinglyLinkedList();
llist4.insertNode(1);

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
    function getValuesFromTail(head){
        let values = [];
        while(head){
            values.push(head.data);
            head = head.next;
        }
        return values.reverse();
    }
    let mergeValue;
    let headAValues = getValuesFromTail(headA);
    let headBValues = getValuesFromTail(headB);
    console.log(headAValues);
    console.log(headBValues);
    let index
    for(index = 0; index < headAValues.length; index++){
        if(headAValues[index] !== headBValues[index]){
            break;
         }
         if(index < headAValues.length-1 && index < headBValues.length-1){
            mergeValue = headAValues[index];
         }
    }
    return mergeValue ? mergeValue : null;
}
console.log('---------------------------------------------------------------');
let result = findMergeNode(llist.head, llist2.head);
console.log(JSON.stringify(result));
let result2 = findMergeNode(llist3.head, llist4.head);
console.log(JSON.stringify(result2));