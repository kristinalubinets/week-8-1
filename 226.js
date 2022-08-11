// 226. Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {

    if(!root) return root;

    [root.left, root.right] = [root.right, root.left]; //argument destructing

    invertTree(root.left);
    invertTree(root.right);

    return root;
}
/******* or without argument destructing *******/
var invertTree = function(root) {
    if (root == null) 
        return root;
    
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    
    invertTree(root.left);
    invertTree(root.right);
    
    return root;
};
/*********************************************** non-recursive approach  *************************************/
var invertTree = function(root) {
    if(!root) return root;
    
    let current;
    let temp;
    let queue = [root];
    
    while(queue.length > 0) {
        
        current = queue.shift();
        
        //[root.right, root.left] = [root.left, root.right];  not working here, why?
        
        temp = current.left;
        current.left = current.right;
        current.right = temp;
           
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);            
    }
    return root;
}