class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 1;
    }
    insertEnd(data) {
        let newNode = new ListNode(data);

        if(this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;

            // iterate to the end of the list
            while(current.next) {
                current = current.next;
            }
            //insert node
            current.next = newNode;
        }
        this.size++;
        return this;
    }
    insertHead(data) {
        let newNode = new ListNode(data);

        if(this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
        return this.head;
    }
    insertAtIndex(data, index) {
        if(index < 0 || this.size < index) return false;

        if(index === 1) return this.insertHead(data);
        
        let current = this.head;
        let previous ;
        let newNode = new ListNode(data);

        if(this.head !== null) {
            let len = 1;

            while(len !== index) {
                previous = current;
                current = current.next;
                len++;
            }
            newNode.next = current;
            previous.next = newNode;
        }
        this.size++;
    }
    length() { 
        return this.size;
    }
    clear() {
        this.head = null;
    } 
    getLast() {
        let current = this.head;
        if(current != null) {
            while(current.next) {
                current = current.next;
            }
        }
        return current;
    }
    getFirst() {
        if(this.head != null) {
            return this.head;
        }
    }
    printList() {
        let current = this.head;
        if(current != null) {
            while(current) {
                console.log('current= ' + current.data)
                current = current.next;
            }
        }
    }
}

let node1 = new ListNode(1);
let node3 = new ListNode(3);
let node2 = new ListNode(2);


let list = new LinkedList(node1);

list.insertEnd(5);
list.insertEnd(7);

list.insertHead(-1);

list.insertAtIndex(0, 2);
list.insertAtIndex(200, 4)
list.printList();