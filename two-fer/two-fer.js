var TwoFer = function () {};

TwoFer.prototype.oneFer = function (who) {return "one for " + who;};

TwoFer.prototype.twoFer = function (who="you") {
  return [who, "me."]
         .map(this.oneFer)
         .join(", ")
         .replace(/^./, char => char.toUpperCase())
};

module.exports = TwoFer;
