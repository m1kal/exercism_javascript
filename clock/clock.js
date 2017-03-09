function Clock(hours, minutes) {
  this.hours = (hours + Math.floor(minutes / 60)).mod(24);
  this.minutes = minutes.mod(60);
  
  this.toString = function(){
    return this.hours.pad() + ":" +this.minutes.pad();
  };
  this.equals = function(other) {
    return (this.toString() === other.toString());
  };
  this.plus = function(minutes) {
    return new Clock(this.hours, this.minutes + minutes);
  };
  this.minus = function(minutes) {
    return this.plus(-minutes);
  };
}

Number.prototype.pad = function() {
  return (this < 10 ? "0" : "") + this;
};

Number.prototype.mod = function(value) {
  return (this % value + value) % value;
};

function at(hours, minutes = 0) {
  return new Clock(hours, minutes);
}

module.exports =  {at};
