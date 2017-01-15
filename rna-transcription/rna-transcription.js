function DnaTranscriber(){
  this.toRna = function(input){
    rna = "";
    for (var iter = 0; iter < input.length; iter++) {
      switch(input[iter]) {
        case "C": rna += "G"; break;
        case "G": rna += "C"; break;
        case "A": rna += "U"; break;
        case "T": rna += "A";
      };
    };
    return rna;
  };
};

module.exports = DnaTranscriber;
