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

  insertNodeAtIndex(input, index) {
    if (index < 0 || index > this.listLength) {
      return null;
    } else if (index === this.listLength) {
      return this.addTail(input);
    } else if (index === 0) {
      return this.addHead(input);
    }

    let prev = this.findNode(index - 1),
      newNode = new Node(input),
      temp = prev.nextNode;

    prev.nextNode = newNode;
    newNode.nextNode = temp;
    newNode.previousNode = prev;

    this.listLength++;
    return true;
  }

  removeAtIndex(index) {
    if (index < 0 || index >= this.listLength) {
      return null;
    } else if (index === this.listLength) {
      return this.removeTail();
    } else if (index === 0) {
      return this.removeHead();
    }
    let removed = this.findNode(index);

    removed.previousNode.nextNode = removed.nextNode;
    removed.nextNode.previousNode = removed.previousNode;

    this.listLength--;
    return removed;
  }

  findNode(index) {
    let currentNode;
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (index <= this.length / 2) {
      currentNode = this.head;
      for (let i = 0; i < index; i++) {
        currentNode = currentNode.nextNode;
      }
    } else {
      currentNode = this.tail;
      for (let i = this.listLength; i > index; i--) {
        currentNode = currentNode.previousNode;
      }
    }
    return currentNode;
  }

  updateNode(input, index) {
    let node = this.findNode(index);
    if (node) {
      node.node = input;
    }
    return node;
  }

  printList() {
    console.log(this.listLength);
    console.log(this.head);
  }
}

const newList = new doublyLinkedList();
newList.addHead(3);
newList.addHead(2);
newList.addTail(4);
newList.updateNode(10, 0);
// newList.insertNodeAtIndex(8, 1);
// newList.removeHead();
// newList.removeTail();
// const rem = newList.removeAtIndex(0);
newList.printList();
