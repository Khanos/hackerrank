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

let linkedlist = new SinglyLinkedListNode(5);
let dataArr = [6, 2, 19, 7, 4, 15, 9];
for (const item of dataArr) {
    addNode(linkedlist, item);
}

console.log('---------------------------------------------------------------');
// Complete the reversePrint function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function reversePrint(head) {
    let data = new Array();
    let linkedList = head;
    while(linkedList.next){
        data.push(linkedList.data);
        linkedlist = linkedList.next;
    }
    data.push(linkedList.data);
    data.reverse();
    for(const value of data){
        console.log(value);
    }
    return;
}
reversePrint(linkedlist);
console.log('---------------------------------------------------------------');
console.log('end')