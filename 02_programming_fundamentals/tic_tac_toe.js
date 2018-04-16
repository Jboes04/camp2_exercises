const readline = require ("readline");

const reader = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

const game = {
  map: [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' '],
  ],

  displayMap: function () {
    let nameInMap = "";
    for (let row = 0; row < this.map.length; row++) {
      for (let col = 0; col < this.map[row].length; col++) {
        nameInMap += this.map[row][col] + "|" ;
      }
      nameInMap += "\n";
    }
    return nameInMap;
  }
};

console.log(game.displayMap());

const gamer1 = "X";
const gamer2 = "O";
//let tab = Math.floor(Math.random() * Math.floor(100));

let player = (gamer) => {
  reader.question(`What is the choise of cell for ${gamer}?`, answer => {
    if(answer) {
      player(gamer2);
    } else {
      player(gamer1);
    }
  });
};
player(gamer1);





//     } else if (answer > tab) {
//       console.log("Too high,Try again");
//     } else if (answer < tab) {
//       console.log("Too low, Try again");
//     }
//     if( parseInt(answer, 10) === parseInt(tab, 10) ){
//       console.log("You won, Congrats");
//       reader.close();
//     }
//     else{
//       repeat();
//     }
//   }
//   );};
// repeat();
