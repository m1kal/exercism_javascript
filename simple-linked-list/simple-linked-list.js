export class Element {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

export class List {
  constructor(array = []) {
    this.length = 0;
    this.head = null;
    for (var value of array)
      this.add(new Element(value));
  }

  add(element) {
   element.next = this.head;
   this.head = element;
   this.length +=1;
  }

  toArray() {
    var element = this.head;
    var array = [];
    while (element) {
      array = [...array, element.value];
      element = element.next
    }
    return array;
 }
 
  reverse() {
    return new List(this.toArray());
  }
}

