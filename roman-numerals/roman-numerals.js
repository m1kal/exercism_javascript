const DECIMAL = [1,5,10,50,100,500,1000];
const ROMAN = 'IVXLCDM';

function toRoman(value){
  var temp = value;
  var output = '';
  for(var radix_idx=ROMAN.length-1; radix_idx>=0; radix_idx--) {
    while (temp >= DECIMAL[radix_idx]) {
      output += ROMAN[radix_idx];
      temp -= DECIMAL[radix_idx];
    }
  }
  return (fix_repetitions(output));
}

function fix_repetitions(string) {
  for(var radix_idx=0; radix_idx<ROMAN.length; radix_idx++) {
    original = ROMAN[radix_idx].repeat(4);
    fixed = ROMAN.substr(radix_idx,2);
    string = string.replace(original,fixed);
    original =ROMAN[radix_idx+1]+ROMAN[radix_idx]+ROMAN[radix_idx+1];
    fixed = ROMAN[radix_idx]+ROMAN[radix_idx+2];
    string = string.replace(original,fixed);
  }
  return string;
}

module.exports = toRoman;
