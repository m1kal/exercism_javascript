function score(string) {
  if (string == null) {
    return 0;
  }
  return string.toLowerCase().split('').reduce(function(acc,char) {
    return acc + val(char);
  },0);
}

function val(char) {
  const SCORES = {'qz':10,'jx':8,'k':5,'fhvwy':4,'bcmp':3,'dg':2,'aeioulnrst':1};
  for (var key in SCORES) {
    if (key.indexOf(char) > -1) {
      return SCORES[key];
    }
  }
}

module.exports = score;
