const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let tab = Math.floor(Math.random() * Math.floor(100));

let repeat = () => {
  reader.question("Wich number do you choice?\n", answer => {
    //console.log(tab);
    if (isNaN(answer)){
      console.log("Error its not a number");
    } else if (answer <= 0 || answer > 100) {
      console.log("The Number is not between 1 and 100, Try again! ");
    } else if (answer > tab) {
      console.log("Too high,Try again");
    } else if (answer < tab) {
      console.log("Too low, Try again");
    }
    if( parseInt(answer, 10) === parseInt(tab, 10) ){
      console.log("You won, Congrats");
      reader.close();
    }
    else{
      repeat();
    }
  }
  );};
repeat();
