// See Sparta courses for the exercise summary

// Coffee Machine usage. Insert your code above this comment
const machine = {
  litersOfCoffee: 0,
  expressoQauantity: 0.08,
  longCoffeQuantity: 0.15,

  serveCoffee: function ( quantity ) {
    if (this.litersOfCoffee < quantity) {
      return false;
    }
    this.litersOfCoffee -= quantity;
    return true;
  },
  expresso: function (){
    if (this.litersOfCoffee < this.expressoQauantity){
      return false;
    }
    this.litersOfCoffee -= this.expressoQauantity;
    return true;
  },
  // solution make it efficience for change value of expresso quantitues of coffee
  longCoffee: function(){
    return this.serveCoffee(this.longCoffeQuantity);
  }
};

//console.log(machine.litersOfCoffee);
//console.log(machine.expresso());
//console.log(machine.litersOfCoffee);

// machine.fillWithLitersOfCoffee(10);
// console.log(machine.expresso()); // => true
// console.log(machine.litersOfCoffee); // => 9.92
// console.log(machine.longCoffee()); // => true
// console.log(machine.litersOfCoffee); // => 9.77
// // some more people ordering coffee here
// console.log(machine.litersOfCoffee); // => 0.02
// console.log(machine.expresso()); // => false

module.exports = machine;
