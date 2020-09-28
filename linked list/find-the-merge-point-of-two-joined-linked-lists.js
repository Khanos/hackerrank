let LinkedList = require('./LinkedList');
let SinglyLinkedList = LinkedList.SinglyLinkedList;

let fillList = (list, n) => {
    for(let i = 1 ; i <= n ; i=i+Math.round(Math.random()*10)+1){
      list.insertNode(i);
    }
    return list;
}

let llist = new SinglyLinkedList();
llist = fillList(llist, 2000);

let llist2 = new SinglyLinkedList();
llist2 = fillList(llist2, 2000);

console.log(JSON.stringify(llist));
console.log(JSON.stringify(llist2));

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
    let reverse = (head) => {
        let arr = [];
        while(head){
            arr.unshift(head.data);
            head = head.next;
        }
        arr.pop();
        return arr;
    };
    let arrA = reverse(headA);
    let arrB = reverse(headB);
    let currentA, currentB;
    let merged = null;
    for(const index in arrA){
        currentA = arrA[index];
        currentB = arrB[index];
        if(currentA !== currentB){
            break;
        }
        merged = currentA;
    }
    return merged ? merged : null;
}
console.log('---------------------------------------------------------------');
let result = findMergeNode(llist.head, llist2.head);
console.log(JSON.stringify(result));
// let result2 = findMergeNode(llist3.head, llist4.head);
// console.log(JSON.stringify(result2));