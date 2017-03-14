function accumulate(collection, operation){
  var output = [];
  for (var idx = 0; idx < collection.length; idx++) {
    output.push(operation(collection[idx]));
  }
  return output;
}

module.exports = accumulate;
