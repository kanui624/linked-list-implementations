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

LinkedList.prototype.addToBack = function (input) {
  let newNode = new Node(input);

  if (!this.head) {
    this.head = newNode;
    return this.head;
  } else {
    let tail = this.head;
    while (tail.nextNode !== null) {
      tail = tail.nextNode;
    }
    tail.nextNode = newNode;
    return this.head;
  }
};
let list = new LinkedList();