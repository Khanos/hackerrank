// Start of function Node
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}; // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function(root, data) {
      if (root === null) {
          this.root = new Node(data);

          return this.root;
      }

      if (data <= root.data) {
          if (root.left) {
              this.insert(root.left, data);
          } else {
              root.left = new Node(data);
          }
      } else {
          if (root.right) {
              this.insert(root.right, data);
          } else {
              root.right = new Node(data);
          }
      }

      return this.root;
  };

  // Start of function levelOrder
  this.levelOrder = function(root) {
    let levelOrderTraversal = [];
    let queue = [root];
    while (queue.length > 0) {
      let tree = queue.shift();
      levelOrderTraversal.push(tree.data);
      if (tree.left !== null) {
        queue.push(tree.left);
      }
      if (tree.right !== null) {
        queue.push(tree.right)
      }
    }
    console.log(levelOrderTraversal.join(' '));
  }; // End of function levelOrder
}; // End of function BinarySearchTree

process.stdin.resume();
process.stdin.setEncoding('ascii');

var _input = '3\n5\n4\n7\n2\n1';

var tree = new BinarySearchTree();

var values = _input.split('\n').map(Number);

var root = values.reduce((acc, el) => {
  return tree.insert(acc, el);
}, null);
tree.levelOrder(root);