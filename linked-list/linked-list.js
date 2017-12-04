function LinkedList() {
  this.head = new Node();
  this.tail = new Node();
  this.number_of_elements = 0;
  this.count = function() {
    return this.number_of_elements;
  }
  this.head.next = this.tail;
  this.tail.previous = this.head;
  this.pop = function() {
    this.head = this.head.next;
    this.number_of_elements--;
    return this.head.value;
  }
  this.push = function(value) {
    this.head.value = value;
    head = new Node();
    head.next = this.head;
    this.head.previous = head;
    this.head = head;
    this.number_of_elements++;
  }
  this.shift = function() {
    this.tail = this.tail.previous;
    this.number_of_elements--;
    return this.tail.value;
  }
  this.unshift = function(value) {
    this.tail.value = value;
    tail = new Node();
    tail.previous = this.tail;
    this.tail.next = tail;
    this.tail = tail;
    this.number_of_elements++;
  }
  this.delete = function(value) {
    node = head.next;
    while (node.value != value) {
      node = node.next;
      if (!node) {
        return -1;
      }
    }
    node.previous.next = node.next;
    node.next.previous = node.previous;
    this.number_of_elements--;
  }
}

function Node() {
  this.previous = null;
  this.next = null;
  this.value = null;
}

module.exports = LinkedList;
