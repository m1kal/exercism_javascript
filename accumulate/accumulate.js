function accumulate(collection, operation){
  var output = [];
  collection.forEach(item => {output.push(operation(item))})
  return output;
}

module.exports = accumulate;
