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

let list = new LinkedList();
