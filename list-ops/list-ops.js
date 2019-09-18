
export class List {
  constructor(values = []) {
   this.values = values;
   return this;
  }

  unshift(value) {
    this.values.unshift(value);
    return this;
  }

  push(value) {
    this.values.push(value);
    return this;
  }

  append(other) {
    return other.foldl((acc,elem)=>acc.push(elem),this);
  }

  concat(lists) {
    return lists.foldl((acc,elem)=>acc.append(elem), this);
  }

  filter(pred, list) {
    return this.foldl((acc, elem)=> pred(elem) ? acc.push(elem) : acc,
                      new List());
  }

  map(func) {
    return this.foldl((acc, elem)=> acc.push(func(elem)), new List());
  }

  length() {
    return this.foldl((acc,elem)=>acc+1,0);
  }

  foldl(func, initial) {
   var reduced = initial;
    for (var idx = 0; idx < this.values.length; idx++) {
      reduced  = func(reduced, this.values[idx]);
     }
   return reduced;
  }

  foldr(func, initial) {
    return this.reverse().foldl(func, initial);
  }

  reverse() {
   return this.foldl((acc, elem)=> acc.unshift(elem), new List());
  }
}

