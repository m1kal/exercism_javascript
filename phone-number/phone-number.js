function PhoneNumber(formatted) {
  this.formatted = formatted;
  this.number = function(){
    return this.formatted.replace(/[\(\)\-\. ]/g,"")
               .replace(/1(\d{10})/,"$1")
               .replace(/(.{11}.*|^.{0,9}$)/,"0000000000")
  }
  this.areaCode = function() {
    return this.number().substring(0,3)
  }
  this.toString = function(){
    return '(' + this.areaCode() + ') ' +
      this.number().substring(3,6) + '-' + this.number().substring(6)
  }
}

module.exports = PhoneNumber
