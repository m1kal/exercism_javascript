const COLORS = ["black", "brown", "red", "orange", "yellow",
                "green", "blue", "violet", "grey", "white"];

function colorCode(code) {
  return COLORS.indexOf(code);
}

module.exports = {COLORS, colorCode};

