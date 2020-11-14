class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Create push method
  push(val) {
    // Instantiate a new Node
    const newNode = new Node(val);
    // If the list is empty, make a node head and tail
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    // Increment length by 1
    this.length++;
    // Return the list
    return this;
  }
}
