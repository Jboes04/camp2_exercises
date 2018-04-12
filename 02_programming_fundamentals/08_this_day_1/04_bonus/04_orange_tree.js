// See Sparta courses for the exercise summary
const orangeTree = {
  height: 0,
  age: 0,
  oranges: 0,
  alive: false,

  pickAnOrange: function(){
    if( this.oranges === 0) {
      return false;
    } else {
      this.oranges -= 1;
      return true;
    }
  },

  ageOneYear: function(){
    this.oranges = 0;
    if (this.alive) {
      this.age++;
      if (this.age < 10){
        this.height += 25;
      } else if (this.age >= 10 && this.age < 20) {
        this.height += 10;
      }
      if (this.age >= 5 && this.age < 10) {
        this.oranges += 10;
      } else if (this.age >= 10 && this.age < 20) {
        this.oranges += 20;
      } else if ( this.age >= 20 && this.age < 40) {
        this.oranges += 5;
      }
    }
  },

  seed: function(){
    this.height = 0;
    this.age = 0;
    this.oranges = 0;
    this.alive = true;
  },

};


let i = 0;
while(i<50){
  orangeTree.ageOneYear();
  i++;
}
console.log("taille : " + orangeTree.height);
console.log("age : " + orangeTree.age);
console.log("oranges : " + orangeTree.oranges);




module.exports = orangeTree;
