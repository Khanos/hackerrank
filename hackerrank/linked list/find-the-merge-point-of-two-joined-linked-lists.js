let LinkedList = require('./LinkedList');
let SinglyLinkedList = LinkedList.SinglyLinkedList;

let llist = new SinglyLinkedList();
llist.insertNode(1);
llist.insertNode(2);
llist.insertNode(3);

let llist2 = new SinglyLinkedList();
llist2.insertNode(1);
llist2.insertNode(3);

let llist3 = new SinglyLinkedList();
llist3.insertNode(3);
llist3.insertNode(4);

let llist4 = new SinglyLinkedList();
llist4.insertNode(1);
llist4.insertNode(4);
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
    function reverse(head) {
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
    console.log(JSON.stringify(headA));
    console.log(JSON.stringify(headB));
    console.log('-----------------------');
    let promises = [Promise.resolve(reverse(headA)), Promise.resolve(reverse(headB))];
    Promise.all(promises).then(values => {
        let currentA = values[0];
        let currentB = values[1];
        console.log(JSON.stringify(currentA));
        console.log(JSON.stringify(currentB));
        let merged = null;
        while(currentA && currentB && currentA.data === currentB.data){
            merged = currentA.data;
            currentA = currentA.next;
            currentB = currentB.next;
        }
        return merged ? merged : null;
    })
}
console.log('---------------------------------------------------------------');
let result = findMergeNode(llist.head, llist2.head);
console.log(JSON.stringify(result));
// let result2 = findMergeNode(llist3.head, llist4.head);
// console.log(JSON.stringify(result2));