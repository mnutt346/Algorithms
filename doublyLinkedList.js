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
