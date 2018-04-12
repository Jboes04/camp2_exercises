// See Sparta courses for the exercise summary
const car = {
  speed: 0,
  distance: 0,
  start: function() {
    this.speed = 0;
    this.distance = 0;
    return this;
  },
  changeSpeed: function (speedValue) {
    this.speed = speedValue;
    return this;
  },
  drive: function (minutesValue) {
    this.distance += ((this.speed / 60) * minutesValue);
    return this;
  },
  showDistance: function () {
    console.log(`${this.distance} Km`);
    return this;
  }
};
//console.log(car.speed + " " + car.minutes);
car.start().changeSpeed(90).drive(80)
  .changeSpeed(130).drive(45)
  .changeSpeed(50).drive(30)
  .showDistance();

//console.log(car.speed + " " + car.minutes);




module.exports = car;
