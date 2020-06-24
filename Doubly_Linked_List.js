class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.length === 1) {
      this.head.next = newNode;
      this.tail = newNode;
      this.tail.prev = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop() {
    const res = this.tail;
    if (this.length === 0) return null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      let prevNode = this.tail.prev;
      prevNode.next = null;
      this.tail = prevNode;
      this.length--;
    }

    return res;
  }

  shift() {
    if (this.length === 0) return null;

    let res = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      let nextNode = this.head.next;
      nextNode.prev = null;
      this.head = nextNode;
      this.length--;
    }

    return res;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else if (this.length === 1) {
      this.head = newNode;
      this.head.next = this.tail;
      this.tail.prev = this.head;
      this.length++;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.length++;
    }

    return newNode;
  }

  get(idx) {
    if (this.length === 0) return null;
    if (idx > this.length - 1 || idx < 0) return null;

    if (idx === 0) return this.head;

    const middle = Math.floor(this.length / 2);
    let target;
    if (idx < middle) {
      target = this.head;
      for (let i = 0; i < idx; i++) {
        target = target.next;
      }
    } else {
      target = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        target = target.prev;
      }
    }
    return target;
  }

  set(idx, val) {
    let targetNode = this.get(idx);
    if (targetNode) {
      targetNode.val = val;
      return true;
    }

    return false;
  }

  insert(idx, val) {
    let res;
    if (idx === 0) {
      res = this.unshift(val);
    } else if (idx === this.length) {
      res = this.push(val);
    } else {
      let prevNode = this.get(idx - 1);
      let nextNode = this.get(idx);
      let newNode = new Node(val);
      prevNode.next = newNode;
      newNode.prev = prevNode;
      newNode.next = newNode;
      nextNode.prev = newNode;
      this.length++;
      res = newNode;
    }
    return res;
  }

  remove(idx) {
    let res;
    if (this.length === 0 || idx < 0 || idx >= this.length) return null;
    if (idx === 0) {
      res = this.shift();
    } else if (idx === this.length - 1) {
      res = this.pop();
    } else {
      let prevNode = this.get(idx - 1);
      let nextNode = this.get(idx + 1);
      res = prevNode.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
      this.length--;
    }
    return res;
  }
}

let double = new DoublyLinkedList();
double.push("Hello");
double.push("Nice");
double.push("YOYOYOYO");
double.push("Coffee");
double.push("eeeeeeee");
