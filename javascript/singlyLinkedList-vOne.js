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

  addNodeToFront(input) {
    let newHeadNode = new Node(input, this.head);
    this.head = newHeadNode;
    this.nodeCount++;
  }

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

  addNodeAtIndex(input, index) {
    if (index < 0 || index > this.nodeCount) {
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

  getNodeAtIndex(index) {
    if (index < 0 || index > this.nodeCount) {
      console.log(`Index ${index} is out of Range`);
      console.log(`Node Count: ${this.nodeCount}`);
    } else {
      let currentNode = this.head;
      let count = 0;
      while (currentNode) {
        if (count === index) {
          console.log(`${currentNode.nodeData} is at index[${index}]`);
        }
        count++;
        currentNode = currentNode.nextNode;
      }
    }
  }

  removeNodeAtIndex(index) {
    if (index < 0 || index > this.nodeCount) {
      console.log(
        `Cannot remove node at index[${index}], it's out of range. List unchanged:`
      );
    } else {
      let currentNode = this.head;
      let previousNode;
      let count = 0;

      if (index === 0) {
        this.head = currentNode.nextNode;
      } else {
        while (count != index) {
          count++;
          previousNode = currentNode;
          currentNode = currentNode.nextNode;
        }
        previousNode.nextNode = currentNode.nextNode;
      }
      console.log(
        `nodeData: ${currentNode.nodeData} at index[${index}] was removed. Updated list:`
      );
      this.nodeCount--;
    }
  }

  clearLinkedList() {
    this.head = null;
    this.nodeCount = 0;
    console.log('Clear list was called, list data was erased');
  }

  printList() {
    if (this.head && this.nodeCount != 0) {
      let currentHead = this.head;
      while (currentHead) {
        console.log(currentHead.nodeData);
        currentHead = currentHead.nextNode;
      }
    } else {
      console.log('No List Data');
    }
  }
}

const singly = new SinglyLinkedList();

singly.addNodeToFront(32);
singly.addNodeToFront(26);
singly.addNodeToFront(15);
singly.addNodeToBack(48);
singly.addNodeAtIndex(51, 3);

singly.printList();
singly.removeNodeAtIndex(0);
console.log('---------------------');
singly.getNodeAtIndex(2);
singly.printList();
singly.removeNodeAtIndex(12);
singly.printList();
singly.clearLinkedList();
singly.printList();
