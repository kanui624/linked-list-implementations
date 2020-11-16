class Node {
  constructor(node, nextNode = null, previousNode = null) {
    this.node = node;
    this.nextNode = nextNode;
    this.previousNode = previousNode;
  }
}

class doublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.listLength = 0;
  }

  addHead(input) {
    let newNode = new Node(input);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.previousNode = newNode;
      newNode.nextNode = this.head;
      this.head = newNode;
      this.listLength++;
      return this;
    }
  }

  addTail(input) {
    let newNode = new Node(input);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.nextNode = newNode;
      newNode.previousNode = this.tail;
      this.tail = newNode;
      this.listLength++;
      return this;
    }
  }

  removeHead() {
    let removed = this.head;
    if (!this.head) {
      return undefined;
    } else {
      this.head = this.head.nextNode;
      this.head.previousNode = null;
      this.length--;
      return removed;
    }
  }

  removeTail() {
    let removed = this.tail;
    if (!this.tail) {
      return undefined;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.tail = removed.previousNode;
    this.tail.nextNode = null;
    this.listLength--;
    return removed;
  }

  printList() {
    console.log(this.head);
  }
}

const newList = new doublyLinkedList();
newList.addHead(3);
newList.addHead(2);
newList.addTail(4);
newList.removeHead();
newList.removeTail();
newList.printList();
