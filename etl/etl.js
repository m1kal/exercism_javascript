function ETL(){
  this.transform = function(input){
    output = {}
    for (key in input) {
      input[key].forEach(function(val) {
        output[val.toLowerCase()] = Number(key);
      });
    }
    return output;
  }
}

module.exports = ETL;
