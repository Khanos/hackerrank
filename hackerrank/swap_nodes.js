// WORKING IN PROGRESS
/*
 * Complete the swapNodes function below.
 */
class Tree {
    constructor() {
        this.root = null;
        this.addNode = (val, root) => {
            let node = new Node(val, root)
            if (this.root == null) {
                this.root = node;
            } else {
                this.root.addValue(val, root);
            }
        };
    }
}
class Node {
    constructor(val, root) {
        this.root= root;
        this.left = null;
        this.right = null;
        this.val = val;
        this.addValue = (val, root) => {
            if (this.left == null){
                this.left = new Node(val);
            } else if (this.right == null) {
                this.right = new Node(val);
            } else {
                this.root.addValue(val);
            }  
        }
    }
}
let tree = new Tree();
tree.addNode(1, null);
tree.addNode(2, );
tree.addNode(3);
tree.addNode(4);
tree.addNode(5);
tree.addNode(6);
tree.addNode(7);
console.log('End')