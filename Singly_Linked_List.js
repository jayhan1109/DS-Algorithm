class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) return;
    let prev = this.head;
    let cur = this.head;
    let returnVal;

    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }

    returnVal = cur.val;
    this.tail = prev;
    prev.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return returnVal;
  }

  shift() {
    if (!this.head) return;
    let returnVal = this.head.val;

    this.head = this.head.next;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return returnVal;
  }

  unshift(val) {
    const curHead = this.head;
    const newHead = new Node(val);

    if (!this.head) {
      this.head = newHead;
      this.tail = newHead;
    } else {
      this.head = newHead;
      newHead.next = curHead;
      this.length++;
    }

    return newHead;
  }

  get(idx) {
    if (idx < 0 || !this.head || idx >= this.length) return null;
    if (idx === 0) return this.head;

    let cur = this.head;
    for (let i = 0; i < idx; i++) {
      cur = cur.next;
    }

    return cur;
  }

  set(idx, val) {
    let cur = this.get(idx);
    if (!cur) {
      return false;
    }

    cur.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;

    if (idx === 0) {
      this.unshift(val);
    } else if (idx === this.length) {
      this.push(val);
    } else {
      let prev = this.get(idx - 1);
      let next = prev.next;
      let newNode = new Node(val);
      prev.next = newNode;
      newNode.next = next;
      length++;
    }
    return true;
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;

    if (idx === 0) {
      this.shift();
    } else if (idx === this.length - 1) {
      this.pop();
    } else {
      let prev = this.get(idx - 1);
      let cur = prev.next;
      prev.next = cur.next;
      this.length--;
    }
    return true;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

let single = new SinglyLinkedList();
single.push("HELLO");
single.push("GOOD BYE");
single.push("asdfasdf");
single.push("123123123");
