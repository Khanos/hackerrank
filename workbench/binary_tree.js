class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(data) {
        let newNode = new Node(data);
        if(this.root === null){
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode){
        if(newNode.data < node.data){
            if(node.left === null){
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if(node.right === null){
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    remove(data){
        this.root = this.removeNode(this.root, data);
    }
    removeNode(node, key){
        if(node === null){
            return null;
        } else if (key < node.data){
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
        } else {
            if(node.left === null && node.right === null){
                node = null;
                return node;
            }
            if(node.left === null){
                node = node.right;
                return node;
            }
            if(node.right === null){
                node = node.left;
                return node;
            }
            let aux = this.findMinNode(node.right); 
            node.data = aux.data; 
            node.right = this.removeNode(node.right, aux.data); 
            return node; 
        }
    }
    findMinNode(node){ 
        if(node.left === null) 
            return node; 
        else
            return this.findMinNode(node.left); 
    }
    search(node, data){ 
        if(node === null){
            return null; 
        }else if(data < node.data){
            return this.search(node.left, data); 
        }else if(data > node.data){
            return this.search(node.right, data); 
        } else {
            return node; 
        }
    } 
    getRootNode(){ 
        return this.root; 
    } 
    inorder(node){ 
        if(node !== null) 
        { 
            this.inorder(node.left); 
            console.log(node.data); 
            this.inorder(node.right); 
        } 
    } 
    preorder(node){ 
        if(node != null) 
        { 
            console.log(node.data); 
            this.preorder(node.left); 
            this.preorder(node.right); 
        } 
    } 
    postorder(node){ 
        if(node != null) 
        { 
            this.postorder(node.left); 
            this.postorder(node.right); 
            console.log(node.data); 
        } 
    }
}
let mybinarytree = new BinarySearchTree(); 
  
// Inserting nodes to the BinarySearchTree 
mybinarytree.insert(15); 
mybinarytree.insert(25); 
mybinarytree.insert(10); 
mybinarytree.insert(7); 
mybinarytree.insert(22); 
mybinarytree.insert(17); 
mybinarytree.insert(13); 
mybinarytree.insert(5); 
mybinarytree.insert(9); 
mybinarytree.insert(27); 
let root = mybinarytree.getRootNode();
mybinarytree.inorder(root)
console.log('End')