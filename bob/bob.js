var Bob = function() {};

Bob.prototype.hey = function(input) {
  if ((input == input.toUpperCase()) && (input != input.toLowerCase())) {
    return "Whoa, chill out!";
  }
  else if (input[input.length-1] == "?") {
    return "Sure.";
  }
  else if (!(/\S/).test(input)) {
    return "Fine. Be that way!";
  }
  else {
    return "Whatever.";
  }
};

module.exports = Bob;
