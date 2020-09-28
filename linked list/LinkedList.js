class SinglyLinkedListNode {
    constructor(data){
       this.data = data;
       this.next = null;
    }
}
class SinglyLinkedList {
    constructor(){
        this.head = null;
    }
    insertNode(data){
        function addNode(node, data){
            if(node.next == null){
                node.next = new SinglyLinkedListNode(data)
            } else {
                addNode(node.next, data);
            }
            return node;
        }
        if(!this.head){
            this.head = new SinglyLinkedListNode(data);
        } else {
            this.head = addNode(this.head, data);
        }
    }
}

module.exports = {SinglyLinkedListNode, SinglyLinkedList}