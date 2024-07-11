// Define a Node class to represent each element

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Define a SinglyLinkedList class

class CostumSinglyLinkedList {
  constructor() {
    this.head = null;
  }

  // Method to append a new node to the end of the list

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // Method to prepend a new node to the beginning of the list

  prepend(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.data = newNode;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
  }

  // Method to delete a node by its value

  delete(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.node.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  // Method to search for a node by its value

  search(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  //Method to Print List

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  //Method to print Size of List

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
}

const list = new CostumSinglyLinkedList();
list.append(23);
list.append(65);
list.append(15);
list.printList();
console.log(list.search(30));
console.log("Size : ", list.size());
list.prepend(10);
list.printList();
console.log("Size : ", list.size());
list.delete(65);
list.printList();
console.log("Size : ", list.size());
