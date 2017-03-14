function Raindrops(){
  this.convert = function(value) {
    const MAPPINGS = {3: "Pling", 5: "Plang", 7: "Plong"};
    var expr = "";
    for (var factor in MAPPINGS) {
      expr += ((value % factor) == 0) ? MAPPINGS[factor] : "";
    }
    return (expr.length) ? expr : value.toString();
  }
}

module.exports = Raindrops;
