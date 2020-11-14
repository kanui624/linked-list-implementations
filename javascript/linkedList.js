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
  addNodeToFront(input) {
    this.head = new Node(input, this.head);
    this.length++;
  }

  // Set the current head of the list to currentHead
  // while currentHead has a value:
  // console log that nodes value
  // update the currentHead variable with the nextNode value
  printList() {
    let currentHead = this.head;
    while (currentHead) {
      console.log(currentHead.nodeData);
      currentHead = currentHead.nextNode;
    }
  }
}

const singly = new SinglyLinkedList();

singly.addNodeToFront(10);
singly.addNodeToFront(1);
singly.printList();
