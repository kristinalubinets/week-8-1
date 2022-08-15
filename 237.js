//237. Delete Node in a Linked List
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {    
    node.val = node.next.val;
    node.next = node.next.next;      
};

// we actually do NOT remove the given node, since we are given only node that we want to remove and no access to the head, 
//we can rewrite the value of given node to the value of the next node and remove that next node.