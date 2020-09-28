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
llist.addNode(llist, 2);
llist.addNode(llist, 3);
llist.addNode(llist, 4);

console.log('---------------------------------------------------------------');
// Complete the removeDuplicates function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function removeDuplicates(head) {
    console.log(JSON.stringify(head));
    let current = head;
    let next = null;
    let value = null;
    let result = new SinglyLinkedListNode(current.data);
    while(current){
        next = current.next;
        value = current.data;
        if(next){
            if(value !== next.data){
                result.addNode(result, next.data);
            }
        }
        current = current.next;
    }
    return result;
}
console.log('---------------------------------------------------------------');
let result = removeDuplicates(llist);
console.log(JSON.stringify(result));