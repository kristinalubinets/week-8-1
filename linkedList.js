//Implementing a List Node in js
class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

//Implementing a Linked List in js
class LinkedList{
    constructor(head = null) {
        this.head = head;
    }
}


let node1 = new ListNode(2);
let node2 = new ListNode(5);

node1.next = node2;

let list = new LinkedList(node1);

console.log(list.head)
console.log(list.head.next)