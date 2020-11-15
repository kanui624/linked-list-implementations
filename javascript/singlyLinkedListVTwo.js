// Singly Linked List Version Two
class Node {
  constructor(nodeData, nextNode = null) {
    this.nodeData = nodeData;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

LinkedList.prototype.addToFront = function (input) {
  let newNode = new Node(input);

  newNode.nextNode = this.head;

  this.head = newNode;

  return this.head;
};

LinkedList.prototype.addToEnd = function (input) {
  let newNode = new Node(input);
  if (!this.head) {
    this.head = newNode;
    return this.head;
  }
  let tail = this.head;
  while (tail.nextNode !== null) {
    tail = tail.nextNode;
  }
  tail.nextNode = newNode;
  return this.head;
};

LinkedList.prototype.getIndex = function (index) {
  let count = 0;
  let currentNode = this.head;
  while (currentNode) {
    if (count === index) {
      return currentNode;
    } else {
      count++;
      currentNode = currentNode.nextNode;
    }
  }
  return null;
};

LinkedList.prototype.insertAtIndex = function (index, input) {
  if (!this.head) {
    this.head = new Node(input);
    return;
  }
  if (index === 0) {
    this.head = new Node(input, this.head);
    return;
  }

  const previousNode = this.getIndex(index - 1);
  let newNode = new Node(input);
  newNode.nextNode = previousNode.nextNode;
  previousNode.nextNode = newNode;

  return this.head;
};

LinkedList.prototype.deleteHeadNode = function () {
  if (!this.head) {
    return;
  }
  this.head = this.head.next;
  return this.head;
};

LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) {
    return null;
  }
  if (!this.head.nextNode) {
    this.head = null;
    return;
  }
  let previousNode = this.head;
  let tail = this.head.nextNode;

  while (tail.nextNode !== null) {
    previousNode = tail;
    tail = tail.nextNode;
  }

  previousNode.nextNode = null;
  return this.head;
};

LinkedList.prototype.deleteAtIndex = function (index) {
  if (!this.head) {
    this.head = new Node(input);
    return;
  }

  if (index === 0) {
    this.head = this.head.nextNode;
    return;
  }

  const previousNode = this.getIndex(index - 1);

  if (!previousNode || !previousNode.nextNode) {
    return;
  }

  previousNode.nextNode = previousNode.nextNode.nextNode;
  return this.head;
};

LinkedList.prototype.printLinkedList = function () {
  console.log(JSON.stringify(this.head, null, 4));
};

let list = new LinkedList();
list.addToFront(3);
list.addToFront(2);
list.addToFront(1);
list.addToEnd(4);
list.addToEnd(4);
list.deleteLastNode();
list.deleteAtIndex(2);
list.insertAtIndex(1, 300);

list.printLinkedList();
