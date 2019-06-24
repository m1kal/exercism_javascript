const COLORS = ["black", "brown", "red", "orange", "yellow",
                "green", "blue",  "violet", "grey", "white"];

function colorValue (color) {
  return COLORS.indexOf(color);
}

function addDigit(value, digit) {
  return value * 10 + digit;
}

export const value = (colors) => {
 return colors.map(colorValue).reduce(addDigit);
};
