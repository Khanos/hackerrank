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

  // Start of function getHeight
  this.getHeight = function(root) {
      // Add your code here
      if (root === null) {
        return -1;
      } else {
        return 1 + (Math.max(this.getHeight(root.left), this.getHeight(root.right)));
      }
  }; // End of function getHeight
}; // End of function BinarySearchTree


var _input = '7\n3\n5\n2\n1\n4\n6\n7';
var tree = new BinarySearchTree();
var root = null;

var values = _input.split('\n').map(Number);

for (var i = 1; i < values.length; i++) {
    root = tree.insert(root, values[i]);
}

console.log(tree.getHeight(root));