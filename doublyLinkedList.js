class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // *********** push value to end of list ***********
  push(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // *********** pop value off end of list ***********
  pop() {
    if (!this.length) {
      return undefined;
    }
    let poppedTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedTail.prev;
      this.tail.next = null;
      poppedTail.prev = null;
    }
    this.length--;
    return poppedTail;
  }

  // *********** remove value from beginning of list ***********
  shift() {
    if (!this.length) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // *********** add value to beginning of list ***********
  unshift(val) {
    let newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // *********** get a node at a specified index ***********
  get(position) {
    if (position < 0 || position >= this.length) return null;
    let current;
    if (position <= Math.floor(this.length / 2)) {
      current = this.head;
      for (let i = 0; i < position; i++) {
        current = current.next;
      }
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > position; i--) {
        current = current.prev;
      }
    }
    return current;
  }

  // *********** set the value of a node at a specified index to a new value ***********
  set(val, position) {
    let foundNode = this.get(position);
    if (foundNode) {
      foundNode.value = val;
      return true;
    }
    return false;
  }
}

let list = new DoublyLinkedList();

list.push(1);
console.log(list);
list.push(2);
console.log(list);
list.pop();
console.log(list);
list.push(3);
list.push(4);
list.push(5);
console.log(list);
list.shift();
console.log(list);
list.unshift(2);
console.log(list);
console.log(list.push(6));
console.log(list.get(2));
console.log(list.get(1));
console.log(list.get(3));
console.log(list.get(5));
console.log(list.push(9));
console.log(list.push(8));
console.log(list);
list.set(7, 5);
console.log(list);
console.log(list.set(3, 10));
