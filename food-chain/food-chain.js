const INTRO = "I know an old lady who swallowed a ";
const ANIMALS = [["fly"],
                 ["spider", "that wriggled and jiggled and tickled inside her"],
                 ["bird"], ["cat"], ["dog"], ["goat"], ["cow"], ["horse"]];
const SUMMARY = "I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n"
const SPIDER= " that wriggled and jiggled and tickled inside her";
const ANIMAL_COMMENT = ["", ".\nIt wriggled and jiggled and tickled inside her.\n",
 ".\nHow absurd to swallow a bird!\n",
 ".\nImagine that, to swallow a cat!\n",
 ".\nWhat a hog, to swallow a dog!\n",
 ".\nJust opened her throat and swallowed a goat!\n",
 ".\nI don\'t know how she swallowed a cow!\n",
 ".\nShe\'s dead, of course!\n"
];

function FoodChain(){
  this.verses = function(start, end){
    if (start > end) {
      return ""
    }
    else {
      return this.verse(start) + "\n" + this.verses(start + 1, end)
    }
  }

  this.verse = function(num_verse){
    animal = AnimalFactory.getAnimal(num_verse - 1);
    return INTRO + animal.name + animal.comment + animal.chain_of_reasons();
  }
}

function AnimalFactory(){};

AnimalFactory.getAnimal = function(number){
  if (number == 0) {
    return new Fly();
  }
  else if (number == 7) {
    return new Horse();
  }
  else {
    return new AnimalInChain(number)
  }
}

function Animal(number){
  this.number = number;
  this.name = ANIMALS[number][0];
  this.name_as_prey = ANIMALS[number].join(" ");
  this.comment = ANIMAL_COMMENT[number];
}

function AnimalInChain(number) {
  Animal.call(this,number)
  this.next_animal = AnimalFactory.getAnimal(number - 1);

  this.reason = function() {
    return "She swallowed the " + this.name +
     " to catch the " + this.next_animal.name_as_prey + ".\n";
  };

  this.chain_of_reasons = function() {
    return this.reason() + this.next_animal.chain_of_reasons()
  }
}

function Fly() {
  Animal.call(this, 0)
  this.chain_of_reasons = function(){
    return SUMMARY;
  }
  this.comment = ".\n";
}

function Horse() {
  Animal.call(this,7)
  this.chain_of_reasons = function(){
    return "";
  }
}

module.exports = FoodChain;
