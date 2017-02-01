function Robot(){
  this.name = RobotController.generateName();

  this.reset = function(){
    this.name = RobotController.generateName();
  }
}

function RobotController(){};

RobotController.usedNames = "";

RobotController.generateName = function(){
  nameString = this.randomString();
  if (this.usedNames.match(nameString)) {
    return this.generateName()
  }
  this.usedNames +=nameString;
  return nameString;
}

RobotController.randomString = function() {
  return Math.random().toString(36).toUpperCase().match(/[A-Z]{2}/) +
    Math.random().toString().match(/[0-9]{3}/);
}

module.exports = Robot;
