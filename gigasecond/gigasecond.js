function Gigasecond(input) {
  this.start_date = input
  this.date = function() {
    return new Date (this.start_date.getTime()+1000000000000)
  }
};

module.exports = Gigasecond;
