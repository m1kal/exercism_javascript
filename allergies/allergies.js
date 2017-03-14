function Allergies(value){
  MAP = ['eggs', 'peanuts', 'shellfish', 'strawberries',
         'tomatoes', 'chocolate', 'pollen', 'cats'];
  this.value = value;
  this.list = function(){
    return MAP.filter(function(element,index){
      return this.bit(this.value,index);
    },this);
  };
  this.bit = function(value,idx) {
    return (value >> idx) % 2;
  }
  this.allergicTo = function(allergen){
    return this.list().includes(allergen);
  }
}

module.exports = Allergies;
