/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    var sum = 0;
    
    if(root == null)
        return sum;
    
    if(root.val >= L && root.val <= R)
        sum += root.val;
    
    return sum + rangeSumBST(root.left, L, R) + rangeSumBST(root.right, L, R);
};

/*
TEST CASE

[10,5,15,3,7,null,18]
7
15

32

[10,5,15,3,7,13,18,1,null,6]
6
10

23

*/