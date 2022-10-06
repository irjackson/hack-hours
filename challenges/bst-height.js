function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

/*

Find the tallest height of a binary search tree.

Ex. the tallest height of:

     4
   /   \
  2     7
 / \     \
1   3     9
         /
        8

is 3, because the tallest height of the tree connects the numbers 4 - 7 - 9 - 8
and has 3 links.

*/

const bstHeight = tree => {
  if (tree === null) return -1;

  let left = bstHeight(tree.left);
  let right = bstHeight(tree.right);

  return Math.max(left, right) + 1;
};

let root = new BinarySearchTree(4);
root.left = new BinarySearchTree(2);
root.right = new BinarySearchTree(7);
root.left.left = new BinarySearchTree(1);
root.left.right = new BinarySearchTree(3);
root.right.right = new BinarySearchTree(9);
root.right.right.left = new BinarySearchTree(8);

console.log(bstHeight(root));