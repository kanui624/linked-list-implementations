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
}
