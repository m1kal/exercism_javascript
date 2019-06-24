function Triangle(number_of_rows) {
  this.rows = [[1]];
  for (var row = 1; row < number_of_rows; row++) {
    var left = [0].concat(this.rows[row - 1]);
    var right = this.rows[row - 1].concat([0]);
    this.rows.push(left.map((elem,idx) => elem + right[idx]));
  }
  this.lastRow = this.rows[number_of_rows - 1];
}

module.exports = Triangle;

