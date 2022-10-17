//Exercise 4 Algorithms2
function mediaTemperatura(temperatura) {
  var i = 0,
    summ = 0,
    ArrayLen = temperatura.length;
  while (i < ArrayLen) {
    summ = summ + temperatura[i++];
  }
  return summ / ArrayLen;
}
var temperature = [31.7, 30.7, 32.5, 29.4, 31.6, 28.5, 31.7];
var a = mediaTemperatura(temperature);
console.log(Math.floor(a));
//Exercise 7 Algorithms2

// let min = 0;
// let numberRandom = Math.floor(Math.random() * (max - min + 1)) + min;
// let max = 10;
// console.log(numberRandom);
// let guessNumber;
// let centinela = false;
// let tries = 3;

// while (!centinela && tries >= 1) {
//   if (tries == 3) {
//     guessNumber = parseInt(prompt(`Insert a number, tries ${tries}`));
//   } else {
//     guessNumber = parseInt(
//       prompt(`Try again, you have ${tries} tries`)
//     );
//   }

//   if (numberRandom == guessNumber) {
//     centinela = true;
//   }
//   tries--;
// }
// if (centinela) {
//   alert("You win!");
// } else {
//   alert("Sorry, Good luck in love!");
// }
