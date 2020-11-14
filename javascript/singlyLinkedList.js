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

  // ADDNODETOFRONT:
  // Instantiate a new Node
  // Pass the input as the nodeData argument in the Node class
  // Pass the current head object as the nextNode
  // Set the new Node object variable as the head
  // increment the length of the list by 1
  addNodeToFront(input) {
    let newHeadNode = new Node(input, this.head);
    this.head = newHeadNode;
    this.length++;
  }

  // ADDNODETOBACK:
  // Instantiate a new Node in a variable
  // Define a variable representative of the current head node
  // If there's not a head node then set it to the new instance
  // else set the currentHead variable to the current head
  // and while there is a nextNode in the head of the list:
  // set the currentHead to the nextNode value
  // When we reached the end of the list set the last nextNode value to the new Node instance
  // then increment the length of the list
  addNodeToBack(input) {
    let newTailNode = new Node(input);
    let currentHead;

    if (!this.head) {
      this.head = newTailNode;
    } else {
      currentHead = this.head;
      while (currentHead.nextNode) {
        currentHead = currentHead.nextNode;
      }

      currentHead.nextNode = newTailNode;
    }
    this.length++;
  }

  // PRINTLIST:
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

singly.addNodeToFront(3);
singly.addNodeToFront(2);
singly.addNodeToFront(1);
singly.addNodeToBack(4);

singly.printList();
