class Frame {
  constructor(bonus) {
    this.rolls = []
    this.bonus = bonus
  }
  pins() {
    return this.rolls.reduce((acc, elem) => acc + elem, 0)
  }
  value() {
    return this.rolls.reduce((acc, elem, idx) => acc + elem*this.bonus[idx], 0)
  }
}

export class Bowling {
  constructor() {
    this.frames = []
    this.frame = new Frame([1, 1])
  }
  strike() {
    return this.frame.rolls[0] == 10
  }
  spare() {
    return !this.strike() && this.frame.pins() == 10
  }
  next_frame() {
    return this.frame.rolls.length == 2 || this.strike() ||
           this.frames.length >= 10
  }
  done() {
    return this.frames.length == 10 && this.frames[9].pins() < 10 ||
           this.frames.length == 11 && this.frames[10].bonus[1] == 0 ||
           this.frames.length == 12
  }
  bonus() {
    var last = this.frames[this.frames.length - 1].bonus[1]
    if (this.frames.length > 10)
      return [last, 0];
    var bonus =  this.strike() ? [last, 1] : this.spare() ? [1, 0] : [0, 0]
    return this.frames.length == 10 ? bonus : bonus.map(elem => elem + 1)
  }
  check_validity(roll) {
    if (this.done())
      throw "Cannot roll after game is over"
    if (roll < 0)
      throw "Negative roll is invalid"
    if ((roll > 10) || (roll + this.frame.pins() > 10))
      throw "Pin count exceeds pins on the lane"
    if (this.frames.length==11 && roll + this.frames[10].rolls[0] > 10 &&
       this.frames[10].rolls[0] < 10)
      throw "Pin count exceeds pins on the lane"
  }
  roll(x) {
    this.check_validity(x)
    this.frame.rolls.push(x);
    if (this.next_frame()) {
      this.frames.push(this.frame);
      this.frame = new Frame(this.bonus())
    }
  }
  score() {
    if (!this.done())
      throw "Score cannot be taken until the end of the game"
    return this.frames.reduce((acc, elem) => acc + elem.value(), 0);
  }
}

