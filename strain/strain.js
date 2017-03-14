function strain(){}

function pushIfTrue(array, elem, callback){
  if (callback(elem)) {
    array.push(elem);
  }
}

strain.keep = function(array, callback){
  var output = [];
  array.forEach(elem => pushIfTrue(output, elem, callback));
  return output;
}

strain.discard = function(array, callback) {
  return this.keep(array, arg=>!callback(arg));
}

module.exports = strain;
