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



function deleteNode(head, position) {
    if (head === null) {
        return null;
    };
    if(position === 0){
        return head.next;
    };
    head.next = deleteNode(head.next, --position);
    return head;
}
let dataArr = [6, 2, 19, 7, 4, 15, 9];
let linkedlist = new SinglyLinkedListNode(20);
dataArr.forEach((element) => {
    linkedlist = addNode(linkedlist, element);
});
linkedlist = deleteNode(linkedlist, 3);
console.log('----------------------------------')