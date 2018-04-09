/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:

   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.
*/
// boucle for dans la fonction
function fizzBuzz(list) {
  list = [1, 2, 3, 4, 5, 6];
  const message = "";
  if( list % 3 === 0) {
    console.log(message);
  }
  if ( list % 5 === 0) {
    message += 'Buzz';
  }
  if( list % 3 === 0 && list % 5 === 0) {
    message += 'FizzBuzz';
  }
  console.log( list );
}

fizzBuzz();

function fizzBuzz (list) {
  const fbArray = [];
  for ( let i = 0; i < list.length -1; i++) {
    if (list[i]%3 === O && list[i]%5 === 0) {
      fbArray.push ("FizzBuzz");
    } else if ( list[i]%3 === 0){
      fbArray.push ("Fizz");
    } else if (list[i]%5 === 0) {
      fbArray.push("Buzz");
    } else {
      fbArray.push(list[i]);
    }
  }
  return fbArray;
}

console.log(FizzBuzz ([1, 15]));

module.exports = fizzBuzz;
