const container = require ("./container");

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

module.exports = machine;
