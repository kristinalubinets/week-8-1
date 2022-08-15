//104. Maximum Depth of Binary Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    let depthL; let depthR;
    
    if(root === null) return 0;    
      
        depthL =  maxDepth(root.left);
        depthR =  maxDepth(root.right);
    
    return Math.max(depthL+1, depthR+1);
};