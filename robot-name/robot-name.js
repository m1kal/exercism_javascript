function Robot(){
  this.reset();
}

Robot.prototype.reset = function(){
    this.name = Robot.generateName();
}

Robot.usedNames = "";

Robot.generateName = function(){
  nameString = this.randomString();
  if (this.usedNames.match(nameString)) {
    return this.generateName()
  }
  this.usedNames +=nameString;
  return nameString;
}

Robot.randomString = function() {
  return Math.random().toString(36).toUpperCase().match(/[A-Z]{2}/) +
    Math.random().toString().match(/[0-9]{3}/);
}

module.exports = Robot;
