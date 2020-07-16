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

let linkedlist = new SinglyLinkedListNode(16);
addNode(linkedlist, 13);
addNode(linkedlist, 7);

console.log('---------------------------------------------------------------');
// Complete the insertNodeAtPosition function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function insertNodeAtPosition(head, data, position) {
    let addNode = (node, data) => {
        if(node.next == null){
            node.next = new SinglyLinkedListNode(data)
        } else {
            addNode(node.next, data);
        }
        return node;
    }
    let index = 0;
    let current = head;
    if(position === 0){
        newNode.next = current;
        return newNode;
    }else{
        let list = new SinglyLinkedListNode(current.data);
        while(current.next){
            index++;
            if(position === index){
                addNode(list, data);
            } else {
                current = current.next;
                addNode(list, current.data);
            }
        }
        return list;
    }
}
console.log('---------------------------------------------------------------');
let result = insertNodeAtPosition(linkedlist, 1, 2);
console.log(result)