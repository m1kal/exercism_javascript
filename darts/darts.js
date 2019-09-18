export const solve = (x, y) => {
  var r = Math.sqrt(x * x + y * y);
  return r <= 10 ? r <= 5 ? r <= 1 ? 10 : 5 : 1 : 0;
};

