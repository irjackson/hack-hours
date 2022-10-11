function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}


/*

Given the root of a binary search tree, determine the difference of the maximum
and minimum value.

Note that the function signature is NOT defined as a method on the
BinarySearchTree prototype. Instead, we provide the root as an argument to the
function.

Ex:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

returns 8, becuase 9 - 1 = 8

*/

const bstMinMax = root => {
  const min = node => {
    if (node.left) return min(node.left);
    return node.value;
  }

  const max = node => {
    if (node.right) return max(node.right);
    return node.value;
  }

  return max(root) - min(root);
};

let root = new BinarySearchTree(4);
root.left = new BinarySearchTree(2);
root.right = new BinarySearchTree(7);
root.left.left = new BinarySearchTree(1);
root.left.right = new BinarySearchTree(3);
root.right.right = new BinarySearchTree(9);
root.right.right.left = new BinarySearchTree(8);

console.log(bstMinMax(root));
