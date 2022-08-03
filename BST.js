/* Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)      
  }
 
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    let sum ;    
  
    if(!root) return 0;

    if (root.val >= low && root.val <= high) {
        sum = root.val;
    } else {
        sum = 0;
    }
    
    if(root.val >= low) 
        sum += rangeSumBST(root.left, low, high)
    if(root.val <= high) 
        sum += rangeSumBST(root.right, low, high)
                    
    return sum;
};


let rangeSumBST = (root, low, high) => {
    if (!root) return 0;
    else if (root.val < low) return rangeSumBST(root.right, low, high);
    else if (root.val > high) return rangeSumBST(root.left, low, high);
    else return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
};


let rangeSumBST = function(root, L, R) {
    function dfs(root, res = 0){
      if(!root) return res;
      if(root.val >= L && root.val <= R ) res += root.val
      if(root.val > L) res += dfs(root.left)
      if(root.val < R) res += dfs(root.right)
      return res;
    }
    
    return dfs(root)
};

/******************************************************************************* non-recursive  ******************************************************************/
 /* Definition for a binary tree node.
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)      
  }
 
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

 var rangeSumBST = function(root, L, R) {
    
    let sum = 0;
    const stack = [];
    let curr = root;
    
    while(stack.length || curr !== null) {
        while(curr !== null){
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        if(curr.val >= L && curr.val <= R){
            sum += curr.val;
            if(curr.val === R){
                return sum;
            }
        }
        curr = curr.right;     
    }
    return sum;
};