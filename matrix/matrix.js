class Matrix {
  constructor(input) {
    this.values = input.split("\n").map(
      (row) => {return row.split(/\s/).map(
        (elem) => {return Number(elem);
        });
    });
  }
  get rows(){
    return this.values;
  }

  get columns(){
    return this.values[0].map(
      (elem, col_idx) => {
        return this.values.map(
          (row, row_idx) => { return row[col_idx];
        });
    });
  }

}

module.exports = Matrix;
