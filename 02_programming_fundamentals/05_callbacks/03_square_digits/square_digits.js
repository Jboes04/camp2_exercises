// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer
function square (num1) {
  return Math.pow(num1, 2);
}

function squareDigits(number) {
  // Your code here
  let caract = number.toString();
  let result = "";
  for (let i = 0; i < caract.length; i++) {
    result = result + square(caract[i]);
  }
  return parseInt(result, 10);
}
console.log(squareDigits(9129));

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
