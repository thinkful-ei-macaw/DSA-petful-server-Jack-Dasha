class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(item) {
    const node = new _Node(item);
    if (this.first === null) {
      this.first = node;
    }
    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }

  dequeue() {
    if (!this.first) {
      return;
    }
    const node = this.first;
    this.first = node.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }

  show() {
    if (this.first !== null) return this.first.value;
    return -1;
  }

  all() {
    if (this.first === null) return null;
    let current = this.first;
    let result = [current.value];
    while (current.next !== null) {
      current = current.next;
      result.push(current.value);
    }
    return result;
  }
}

module.exports = Queue;
