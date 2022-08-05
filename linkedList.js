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
    insertAt(data, index) {
        if(index <= 0 || this.size < index) return "Index can't be zero or negative!";

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
    deleteFirst() {
        if(this.head !== null) {
            this.head = this.head.next;
        }
        return this.head;
    }
    deleteLast() {
        if(this.head !== null) {
            let previous = this.head;
            let current = this.head;
            while(current.next !== null) {
                previous = current;
                current = current.next;
            }
            previous.next = null;
        }
    }
    deleteAt(index) {
        if(this.head !== null) {
            if(index === 1) return this.deleteFirst();

            let current = this.head;
            let previous;
            let leng = 1;

            while(leng !== index) {
                previous = current;
                current = current.next;
                leng++;
            }
            previous.next = current.next;
        }
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
    reverseList()
}

let node1 = new ListNode(1);
let node3 = new ListNode(3);
let node2 = new ListNode(2);


let list = new LinkedList(node1);

list.insertEnd(5);
list.insertEnd(7);

list.insertHead(-1);

list.insertAt(0, 2);
list.insertAt(200, 4);

//list.deleteFirst(); //works
//list.deleteLast(); //works
//list.deleteAt(4); //works
//console.log('length=' + list.length()) works

list.printList();