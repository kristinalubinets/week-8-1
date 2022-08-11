class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    insert(data) {
        let newNode = new Node(data);
        let current = this.root;

        if(!this.root) this.root = newNode; 

        while(current !== null) {
            console.log('current=' + current.data)
            if(data === current.data) return ;

            if(data < current.data) {
                if(!current.left) {
                    current.left = newNode;
                    //return this;
                }
                current = current.left;
            } else {
                if(!current.right) {
                    current.right = newNode;
                    //return this;
                }
                current = current.right;
            }
            this.size++;              
        }     
    }
    find(data) {
        let current = this.root;

        if(!this.root) return false;
        let found = false
        
        while(!found) {
            if(data < current.data) {
                current = current.left;
            } else if (data < current.data) {
                current = current.right;
            } else {
                found = current;
            }
        }
        if (!current) return undefined;        
        return found;
    }
    // delete(data) {

    // }
    inOrder() {  
        const foo = (root) => {   
            if(!root) return ;    

            if (root) {
                foo(root.left);
                console.log(root);
                foo(root.right);
            }
        }
        foo(this.root);
    }
    preOrder() {
        const foo = (root) => {
            if(!root) return ;

            if(root) {
                console.log(root);
                foo(root.left);
                foo(root.right);
            }
        }
        foo(this.root);
    }
    postOrder() {
        const foo = (root) => {
            if(!root) return ;

            if(root) {
                foo(root.left);
                foo(root.right);
                console.log(root);
            }
        }
        foo(this.root)
    }
    depthOfBST() {

        const depthF = (root) => {
            if(!root) return 0;   
            let lDepth = depthF(root.left);
            let rDepth = depthF(root.right);
    
            return Math.max(lDepth, rDepth)+1;
        }
        return depthF(this.root)-1;
    }
    depth() {
        let depth = 0;
        if(!this.root) return 0;
        else {
            let curr = this.root;
            while(curr !== null) {
                depth++;
                //console.log('(depth=' + depth + ')');
                if(curr.left === null) {
                    curr = curr.right
                } else if (curr.right === null) {
                    curr = curr.left;
                } else {
                    this.depth(curr.left);
                    this.depth(curr.right);
                }
            }
        }
        return depth;
    }
    deleteAt(data) {
        let curr = this.root;
        if(!this.root) return false;
        while(curr.left.data !== data || curr.right.data !== data) {
            if(data < curr.data) {
                curr = curr.left;
            } else if (data > curr.data) {
                curr = curr.right;
            } 
        } 
        if(curr.left.data === data) {
            curr.left = null;
        }
        if(curr.right.data === data) {
            curr.right = null;
        }
        return true;
    }
    bfs() {
        let queue = [];
        let visited = [];
        let currentNode = this.root;

        queue.push(currentNode);
        while(queue.length !== 0) {

            currentNode = queue.shift();
            visited.push(currentNode.data);

            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);  
        }
        return visited;
    }

}

//let r = new Node(8);
//let tree = new BST(8);

let tree = new BST();
tree.insert(8);

tree.insert(3)
tree.insert(10)
tree.insert(6)
tree.insert(1)
tree.insert(14);
tree.insert(15);

console.log('size is_' + tree.size);
// console.log('--------------------')
console.log(tree.inOrder(8));
// console.log('--------------------')
// console.log(tree.find(3))

// console.log('--------------------')
// console.log(tree.preOrder(8));
// console.log('--------------------')
// console.log(tree.postOrder(8));
// console.log('--------------------')

console.log('tree.depthOfBST()------' + tree.depthOfBST())
//console.log('depth()===' + tree.depth());     <----not working 
//console.log(tree.deleteAt(6))                 <----not working 
//console.log(tree.inOrder(8));
console.log(tree.bfs())









var invertTree = function(root) {    
    const recursiveFn = node => {     
   
        if (node === null) return;  // Exit case for recursion

        [node.right, node.left] = [node.left, node.right]; // Swap
        
        recursiveFn(node.left);
        recursiveFn(node.right);
    }
    
    recursiveFn(root)
    
  return root;
};