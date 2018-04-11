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

/* solution 1:
function getRandomIntUpTo(max) {
  return Math.floor(Math.random() * max) + 1;
}
const valueToBeFound = getRandomIntUpTo(100);
console.log(valueToBeFound);

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const questionAsked = "Guess the number I chose: ";

function anotherTry(question) {
  reader.question(question, numberInput => {
    const numberTried = parseInt(numberInput, 10);
    if (numberTried === valueToBeFound) {
      console.log("You won!");
      reader.close();
    } else if (numberTried > 100 || numberTried < 1) {
      console.log("Too bad");
      anotherTry("The number is between 1 and 100\n");
    } else if (numberTried < valueToBeFound) {
      anotherTry("Too low\n");
    } else if (numberTried > valueToBeFound) {
      anotherTry("Too high\n");
    } else {
      anotherTry("This is not a number\n");
    }
  });
}

anotherTry(questionAsked);

Solution 2:

function getRandomIntUpTo(max) {
  return Math.floor(Math.random() * max) + 1;
}
const valueToBeFound = getRandomIntUpTo(100);
console.log(valueToBeFound);

const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const questionAsked = "Guess the number I chose: ";

function anotherTry(question) {
  reader.question(question, numberInput => {
    const numberTried = parseInt(numberInput, 10);

    if (numberTried > 100 || numberTried < 1) {
      console.log("Too bad");
      anotherTry("The number is between 1 and 100\n");
      return;
    } else if (isNaN(numberTried)) {
      anotherTry("This is not a number\n");
      return;
    }

    if (numberTried === valueToBeFound) {
      console.log("You won!");
      reader.close();
    } else if (numberTried < valueToBeFound) {
      anotherTry("Too low\n");
    } else if (numberTried > valueToBeFound) {
      anotherTry("Too high\n");
    }
  });
}

anotherTry(questionAsked);
*/
