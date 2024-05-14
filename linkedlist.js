// ======================= linked list ==================

class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Print the linked list elements
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.element);
            current = current.next;
        }
    }

    // Insert an element at a given index
    insertAt(element, index) {
        if (index < 0 || index > this.size) {
            console.log("Please enter a valid index number");
            return false;
        }

        // Create a new node
        let node = new Node(element);
        let current = this.head;
        let previous;
        
        // If inserting at the beginning of the list
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            // Traverse to the correct position
            for (let i = 0; i < index; i++) {
                previous = current;
                current = current.next;
            }
            // Insert node
            node.next = current;
            previous.next = node;
        }

        this.size++;
        return true;
    }

    // Add an element to the end of the list
    add(element) {
        let node = new Node(element);
        let current;

        // If the list is empty, add the node as the head
        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            // Traverse to the end of the list
            while (current.next) {
                current = current.next;
            }

            // Add the node at the end
            current.next = node;
        }

        this.size++;
    }

    
    removeElement(element) {
        let current = this.head;
        let previous = null;

        // Traverse the list to find the element
        while (current !== null) {
            if (current.element === element) {
                if (previous === null) {
                    // Element is at the head
                    this.head = current.next;
                } else {
                    // Bypass the current node
                    previous.next = current.next;
                }
                this.size--;
                return current.element;
            }
            previous = current;
            current = current.next;
        }

        // Element not found
        return null;
    }
}

// Create a new LinkedList instance and add elements
let singleLinked = new LinkedList();

singleLinked.add(1);
singleLinked.add(2);
singleLinked.add(3);

// Print the linked list
singleLinked.printList();
