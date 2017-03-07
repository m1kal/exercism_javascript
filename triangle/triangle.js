function Triangle(a,b,c) {
  this.sides = [a, b, c].sort((x,y)=>x-y);

  this.invalid = function(a,b=0,c=0){
    return (a + b - c) <= 0;
  }

  this.kind = function() {
    if ((this.invalid(...this.sides)) || (this.invalid(this.sides[0]) )) {
      throw "Invalid";
    }
    switch (new Set(this.sides).size) {
      case 1:   return "equilateral";
      case 2:   return "isosceles";
      default:  return "scalene";
    }
  };
}

module.exports = Triangle;
