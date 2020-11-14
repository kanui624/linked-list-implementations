class Node {
  constructor(nodeData, nextNode = null) {
    this.nodeData = nodeData;
    this.nextNode = nextNode;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.nodeCount = 0;
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
    this.nodeCount++;
  }

  // ADDNODETOBACK:
  // Instantiate a new Node and put it in a variable newTailNode
  // Define a variable to represent the current head node
  // If there isn't a head node then set it to the new instance
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
    this.nodeCount++;
  }

  // ADDNODEATINDEX:
  // Accept an input and index argument
  // If the index is 0 pass the input to the addNodeToFront method
  // If the index is the last index in the list pass the input to the addNodeToBack method
  // If the index passed is anywhere inbetween the already constructed list then:
  // Instantiate a new Node object with the input and place in a newNodeAtIndex variable
  // Define and currentNode and previousNode variables to work with
  // Set the currentNode to the head of the list
  // Set a count variable initialize to 0
  // while the count does not equal the index:
  // traverse the list iteratively setting the currentNode as the previousNode and incrementing the count
  // Once the count equals the index, set the nextNode of the node of the currentNode to the currentNode
  // Finally set the nextNode key of the new instance of the Node object to the currentNode
  // Set the nextNode key of the previousNode to the new Node instance
  // and increment the nodeCount
  addNodeAtIndex(input, index) {
    if (index > 0 && index > this.size) {
      return;
    } else if (index === 0) {
      this.addNodeToFront(input);
    } else if (index === this.nodeCount.length - 1) {
      this.addNodeToBack(input);
    } else {
      const newNodeAtIndex = new Node(input);
      let currentNode, previousNode;
      currentNode = this.head;
      let count = 0;
      while (count != index) {
        previousNode = currentNode;
        count++;
        currentNode = currentNode.nextNode;
      }

      newNodeAtIndex.nextNode = currentNode;
      previousNode.nextNode = newNodeAtIndex;
      this.nodeCount++;
    }
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
singly.addNodeAtIndex(300, 3);

singly.printList();
