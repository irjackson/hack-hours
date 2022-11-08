function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Given the root of a binary search tree, determine the sum of all the values.
Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

*/

const bstSum = root => {
  const leftVal = root.left ? bstSum(root.left) : 0;
  const rightVal = root.right ? bstSum(root.right) : 0;

  return root.value + leftVal + rightVal;
};

let root = new BinarySearchTree(4);
root.left = new BinarySearchTree(2);
root.right = new BinarySearchTree(7);
root.left.left = new BinarySearchTree(1);
root.left.right = new BinarySearchTree(3);
root.right.right = new BinarySearchTree(9);
root.right.right.left = new BinarySearchTree(8);

console.log(bstSum(root));