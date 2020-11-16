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
}

const newList = new doublyLinkedList();
newList.addHead(3);
newList.addHead(2);

newList.addTail(4);

newList.printList();
