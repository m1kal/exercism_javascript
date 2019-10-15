export class WordProblem {
  constructor(question) {
    var questionMatch= /^What is (-?\d+)( (plus|minus|divided by|multiplied by) -?\d+)*\?$/.exec(question);
    if (questionMatch) {
      var re = /(plus|minus|multiplied by|divided by) (-?\d+)/g;
      var op;
      this.value = Number.parseInt(questionMatch[1]);
      while (op = re.exec(question))
        this.execute(op);
    }
  }

  execute(op) {
    switch (op[1]) {
      case "plus": this.value += Number.parseInt(op[2]);break;
      case "minus": this.value -= Number.parseInt(op[2]);break;
      case "multiplied by": this.value *= Number.parseInt(op[2]);break;
      case "divided by": this.value /= Number.parseInt(op[2]);break;
    }
  }

  answer() {
    if (this.value)
      return this.value;
    else
      throw ArgumentError;
  }
}

class ArgumentError extends Error {};

