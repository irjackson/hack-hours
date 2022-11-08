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

const bstSum = tree => {
  const leftVal = root.left ? bstSum(root.left) : 0;
  const rightVal = root.right ? bstSum(root.right) : 0;

  return root.value + root.left + root.right;
};