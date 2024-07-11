class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class CostumDoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // Method to append a new node to the end of the list

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  // Method to prepend a new node to the beginning of the list

  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
  }

  // Method to delete a node by its value
  delete(data) {
    if (!this.head) {
      return;
    }

    let current = this.head;
    if (current.data === data) {
      if (current.next) {
        current.next.prev = null;
      } else {
        this.tail = null;
      }
      this.head = current.next;
      return;
    }

    // Traverse to find the node with the data
    while (current) {
      if (current.data === data) {
        if (current.next) {
          current.next.prev = current.prev;
        } else {
          this.tail = current.prev;
        }

        if (current.prev) {
          current.prev.next = current.next;
        }
        return;
      }
      current = current.next;
    }
  }

  //Print the List

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
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

const list = new CostumDoublyLinkedList();
list.append(25);
list.append(55);
list.append(85);
list.printList();
console.log("Size",list.size());
list.prepend(10);
list.printList();
console.log("Size",list.size());
list.delete(85);
list.printList();
console.log("Size",list.size());
