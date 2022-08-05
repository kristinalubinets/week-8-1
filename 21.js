/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    
    let list = new ListNode();
    let head = list;
    
    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val) {
            list.next = list1;
            list1 = list1.next; 
        } else {
            list.next = list2;
            list2 = list2.next
        }
        list = list.next;
    }
    
    if(!list1) list.next = list2
    else if(!list2) list.next = list1
    
    return head.next
};



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    
    let list = new ListNode();
    let head = list;
    
    let curr1 = list1;
    let curr2 = list2;
    
    while(curr1 && curr2) {                 // list1 !== null && list2 !== null
                                            // console.log('cur1= ' + curr1.val + ' ,curr2= ' + curr2.val)
        if(curr1.val < curr2.val) {
            list.next = curr1;
            curr1 = curr1.next;
        } else {
            list.next = curr2;
            curr2 = curr2.next;
        }
        list = list.next;
    }

    if(curr1 === null) {
        while(curr2 !== null) {
            list.next = curr2;
            list = list.next;
            curr2 = curr2.next
        }
    } else {
        while(curr1 !== null) {
            list.next = curr1;
            list = list.next;
            curr1 = curr1.next;
        }
    }
    
    return head.next;
};
