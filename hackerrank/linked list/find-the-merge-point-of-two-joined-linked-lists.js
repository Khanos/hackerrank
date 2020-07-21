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
    let currentA = headA.next;
    let currentB = headB.next;
    function object_equals(x, y) {
        if (x === y) return true;
        // if both x and y are null or undefined and exactly the same

        if (!(x instanceof Object) || !(y instanceof Object)) return false;
        // if they are not strictly equal, they both need to be Objects

        if (x.constructor !== y.constructor) return false;
        // they must have the exact same prototype chain, the closest we can do is
        // test there constructor.

        for (var p in x) {
            if (!x.hasOwnProperty(p)) continue;
            // other properties were tested using x.constructor === y.constructor

            if (!y.hasOwnProperty(p)) return false;
            // allows to compare x[ p ] and y[ p ] when set to undefined

            if (x[p] === y[p]) continue;
            // if they have the same strict value or identity then they are equal

            if (typeof (x[p]) !== "object") return false;
            // Numbers, Strings, Functions, Booleans must be strictly equal

            if (!object_equals(x[p], y[p])) return false;
            // Objects and Arrays must be tested recursively
        }

        for (p in y)
            if (y.hasOwnProperty(p) && !x.hasOwnProperty(p))
                return false;
        // allows x[ p ] to be set to undefined

        return true;
    }
    //Do till the two nodes are the same
    while(!object_equals(currentA, currentB)){
        if(currentA.next == null){
            currentA = headB;
        }else{
            currentA = currentA.next;
        }
        if(currentB.next == null){
            currentB = headA;
        }else{
            currentB = currentB.next;
        }
    }
    return currentB.data;
}
console.log('---------------------------------------------------------------');
let result = findMergeNode(llist.head, llist2.head);
console.log(JSON.stringify(result));
// let result2 = findMergeNode(llist3.head, llist4.head);
// console.log(JSON.stringify(result2));