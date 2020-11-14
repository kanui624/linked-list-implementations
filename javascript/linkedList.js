class Node {
  constructor(nodeData, nextNode = null) {
    this.nodeData = nodeData;
    this.nextNode = nextNode;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // Instantiate a new Node
  // Pass the input as the nodeData argument in the Node class
  // Pass the current head object as the nextNode
  // Set the new Node object as the head
  // increment the length of the list by 1
  addNode(input) {
    this.head = new Node(input, this.head);
    this.length++;
  }
}

const singly = new SinglyLinkedList();

singly.addNode(10);
singly.addNode(1);
// const dick = singly.insert(1);
// const shit = singly.add(8);

console.log(singly);
