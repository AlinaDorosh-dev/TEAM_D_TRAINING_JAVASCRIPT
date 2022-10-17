//Exercise 4 Algorithms2
// let promedio = (temperaturas) => {
//   let tempMaxima = Math.max(...temperaturas);
//   let tempMinima = Math.min(...temperaturas);

//   let promedio = (tempMaxima + tempMinima) / 2;

//   console.log("La temperatura promedio en Sevilla fué de: " + promedio);
// };

// promedio([31.7, 30.7, 32.5, 29.4, 31.6, 28.5, 31.7]);

//Exercise 7 Algorithms2
let min = 0;
let max = 10;
let numberRandom = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(numberRandom);
let guessNumber;
let centinela = false;
let tries = 3;

while (!centinela && tries >= 1) {
  if (tries == 3) {
    guessNumber = parseInt(prompt(`Insert a number, tries ${tries}`));
  } else {
    guessNumber = parseInt(
      prompt(`Try again, you have ${tries} tries`)
    );
  }

  if (numberRandom == guessNumber) {
    centinela = true;
  }
  tries--;
}
if (centinela) {
  alert("You win!");
} else {
  alert("Sorry, Good luck in love!");
}
