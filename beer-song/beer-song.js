function BeerSong() {
  const BOTTLE = " bottle";
  const OF_BEER = " of beer";
  const ON_THE_WALL = " on the wall";
  const ACTION = "Take one down and pass it around, ";
  const GO_TO_STORE = "Go to the store and buy some more, ";
  const PERIOD = ".\n";
  const COMMA = ", ";
  const ZERO = "no more";

  this.sing = function (start_verse, end_verse = 0) {
    verses = ""
    for (idx = start_verse; idx > end_verse; idx--) {
      verses += this.verse(idx) + "\n"
    }
    return verses + this.verse(end_verse)
  }

  this.verse = function (verse_num) {
    return this.bottles_on_the_wall(verse_num).capitalize() +
      this.bottles(verse_num) + this.period_and_action(verse_num) +
      this.bottles_on_the_wall((verse_num || 100) - 1, true)
  }

  this.bottles_on_the_wall = function(number, second_variant = false) {
    return this.bottles(number, !second_variant) + ON_THE_WALL +
      (second_variant ? PERIOD : COMMA)
  }

  this.bottles = function(number, capitalize = false) {
    return (number || ZERO) + BOTTLE.pluralize(number) + OF_BEER
  }

  this.period_and_action = function(number) {
    return PERIOD + this.action(number)
  }

  this.action = function(number) {
    return GO_TO_STORE.repeat(!number) ||
      ACTION.replace("one".repeat(number),"it");
  }
}

String.prototype.capitalize = function(){
  return this[0].toUpperCase() + this.substring(1)
}

String.prototype.pluralize = function(number){
  return this + "s".repeat(!(!(number-1)))
}

module.exports = BeerSong
