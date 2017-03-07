function SpaceAgeBase (value) {
 SECONDS_IN_HOUR = 3600;
 HOURS_IN_DAY = 24;
 DAYS_IN_YEAR = 365.25;
 SECONDS_IN_YEAR = SECONDS_IN_HOUR * HOURS_IN_DAY * DAYS_IN_YEAR;
 PERIOD_RATIOS = {
   mercury: 0.2408467, venus: 0.61519726, earth: 1.0, mars: 1.8808158,
   jupiter: 11.862615, saturn: 29.447498, uranus: 84.016846, neptune: 164.79132
 };

  this.onPlanet = function() {
    return Math.round(this.seconds/SECONDS_IN_YEAR/PERIOD_RATIOS[this.planet]*100)/100;
  }
}

SpaceAge = new Proxy(SpaceAgeBase, {
 construct: function(target,args){
   var spaceAge = new Proxy(new SpaceAgeBase, {
     get: function(target,name){
       if (name.substr(0,2)=="on") {
         target.planet = name.substr(2).toLowerCase();
         return target.onPlanet;
       }
       return target[name];
     }
   });
   spaceAge.seconds = args[0];
   return spaceAge;
 }
});

module.exports = SpaceAge;
