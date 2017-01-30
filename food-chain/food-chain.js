function FoodChain(){
  const INTRO = "I know an old lady who swallowed a ";
  const ANIMALS = ["fly","spider", "bird", "cat", "dog", "goat", "cow"];
  const COMMENT = "I don't know why she swallowed the fly. Perhaps she\'ll die.\n"
  const SPIDER= " that wriggled and jiggled and tickled inside her";
  const ANIMAL_COMMENT = ['', '.\nIt wriggled and jiggled and tickled inside her.\n',
   '.\nHow absurd to swallow a bird!\n',
   '.\nImagine that, to swallow a cat!\n',
   '.\nWhat a hog, to swallow a dog!\n',
   '.\nJust opened her throat and swallowed a goat!\n',
   '.\nI don\'t know how she swallowed a cow!\n'
 ];
  const HORSE = 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n';

  this.verses = function(start, end){
    if (start > end) {
      return ""
    }
    else {
      return this.verse(start) + "\n" + this.verses(start + 1, end)
    }
  }

  this.verse = function(num_verse){
    if (num_verse == 8) {
      return HORSE;
    }
    else {
      return INTRO + ANIMALS[num_verse - 1] +
      ANIMAL_COMMENT[num_verse - 1] +
       //this.spider_description(num_verse - 1) +
       this.reasons(num_verse - 1) +
       ((num_verse == 1) ? ".\n" : "") + COMMENT;
     }
  }

  this.reasons = function(verse){
    if (verse == 0) {
      return "";
    }
    return this.reason(verse) + ".\n" + this.reasons(verse - 1)
  }

  this.reason = function(verse){
    if (verse > 0) {
      return "She swallowed the " + ANIMALS[verse] +
       " to catch the " + ANIMALS[verse - 1] + this.spider_description(verse);//+ ".\n"
    }
    else {
      return ""
    }
  }

  this.spider_description = function(verse) {
    return (verse == 2) ? SPIDER : ""
  }
}

module.exports = FoodChain;
