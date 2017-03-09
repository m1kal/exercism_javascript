function Acronyms() {};

Acronyms.parse = function(input) {
    chars = input[0];
    regexp = /[a-z][A-Z]|[ -]\w/g;
    while (idx = regexp.exec(input)) {
      chars += idx[0][1];
    }
    return chars.toUpperCase();
};

module.exports = Acronyms;
