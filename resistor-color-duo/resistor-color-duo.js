const COLORS = ["black", "brown", "red", "orange", "yellow",
                "green", "blue",  "violet", "grey", "white"];

export const value = (code) => {
  return parseInt(code.map((col) => COLORS.indexOf(col).toString()).join(""));
};
