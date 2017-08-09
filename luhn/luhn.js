function Luhn(input) {
  this.valid = false;
  var number = input.replace(/\s/g,'');
  if (/^[0-9]{2,}$/.test(number)) {
    var checksum = number.split('').reverse().reduce(
      function(sum,digit,idx) {

        return sum + digit * (1 + (idx % 2)) % 9
      },
      0
    );
    this.valid = (checksum % 10 == 0);
  }
};

module.exports = Luhn;
