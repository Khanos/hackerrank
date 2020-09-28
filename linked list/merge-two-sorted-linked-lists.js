class SinglyLinkedListNode {
    constructor(data){
        this.data = data;
        this.next = null;
     }
     insertNode(node, data){
         if(node.next == null){
             node.next = new SinglyLinkedListNode(data)
         } else {
             this.insertNode(node.next, data);
         }
         return node;
     }
}

let llist1 = new SinglyLinkedListNode(1);
llist1.insertNode(llist1, 2);
llist1.insertNode(llist1, 3);

let llist2 = new SinglyLinkedListNode(3);
llist2.insertNode(llist2, 4);

console.log('---------------------------------------------------------------');
// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    let mergedList;
    let keppGoing = true;
    if(head1.data > head2.data){
        mergedList = new SinglyLinkedListNode(head2.data);
        head2 = head2.next;
    } else {
        mergedList = new SinglyLinkedListNode(head1.data);
        head1 = head1.next;
    }
    while(keppGoing){
        if(head1 !== null && head2 !== null){
            if(head1.data > head2.data){
                mergedList.insertNode(mergedList, head2.data);
                head2 = head2.next;
            } else {
                mergedList.insertNode(mergedList, head1.data);
                head1 = head1.next;
            }
        } else {
            if(head1 === null && head2 === null){
                keppGoing = false;
            } else {
                if(head1 !== null){
                    mergedList.insertNode(mergedList, head1.data);
                    head1 = head1.next;
                } else {
                    mergedList.insertNode(mergedList, head2.data);
                    head2 = head2.next;
                }
            }
        }
    }
    console.log(JSON.stringify(mergedList))
    return mergeLists;
}
console.log('---------------------------------------------------------------');
let result = mergeLists(llist1, llist2);
console.log(result);