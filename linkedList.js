class linkedList {
  constructor(head = null) {
    this.head = head;
  }
  append(value) {
    if (!this.head) {
      this.head = new node(value);
      return this;
    }
    let last = this.getLast();
    last.next = new node(value);
    return last;
  }

  prepend(value) {
    if (!this.head) {
      this.head = new node(value);
      return this;
    }
    let previusHead = this.head;
    this.head = new node(value);
    this.head.next = previusHead;
    return this;
  }
  pop() {
    if (!this.head) return null;

    if (!this.head.next) {
      this.head = null;
      return;
    }
    let nodeBeforeEnd = this.at(this.size() - 2);
    nodeBeforeEnd.next = null;
    return this.head;
  }
  contains(value) {
    if (!this.head) return null;

    let node = this.head;
    while (node !== null) {
      if (value === node.value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
  toString() {
    if (!this.head) return null;

    let output = '';
    let node = this.head;
    while (node.next !== null) {
      output = output + ' ' + node.value + ' ->';
      node = node.next;
    }
    return output + ' ' + node.value + ' -> null';
  }
}

class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const list = new linkedList();
console.log(list.append(1));
console.log(list.append(2));
console.log(list.prepend(0));
console.log(list.pop());
console.log(list.contains(1));
console.log(list.toString());
