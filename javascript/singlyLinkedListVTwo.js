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

LinkedList.prototype.printLinkedList = function () {
  console.log(JSON.stringify(this.head, null, 4));
};

let list = new LinkedList();
list.addToFront(3);
list.addToFront(2);
list.addToFront(1);
list.addToEnd(4);
list.addToEnd(4);
list.insertAtIndex(0, 300);
list.printLinkedList();
