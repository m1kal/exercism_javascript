const COLORS = ["black", "brown", "red", "orange", "yellow",
                "green", "blue",  "violet", "grey", "white"];

export const value = (colors) => {
  return colors.map((color) => COLORS.indexOf(color))
               .reduce((value,digit)=> value * 10 + digit);
};
