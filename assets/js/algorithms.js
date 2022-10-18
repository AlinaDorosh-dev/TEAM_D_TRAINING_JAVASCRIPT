//Exercise 4 Algorithms2 FRAN
function ex4Alg2() {
  function mediaTemperatura(temperatura) {
    let i = 0;
    let summ = 0;
    let ArrayLen = temperatura.length;
    while (i < ArrayLen) {
      summ = summ + temperatura[i++];
    }
    return summ / ArrayLen;
  }
  const temperature = [31.7, 30.7, 32.5, 29.4, 31.6, 28.5, 31.7];
  let a = mediaTemperatura(temperature);
  console.log(`Temperatura media de los ultimos 7 dias es: ${a.toFixed(1)}`);
}

//ex4Alg2();

//Exercise 7 Algorithms2 FRAN
function ex7Alg2(){
let min = 0;
let max = 10;
let numberRandom = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(numberRandom);
let guessNumber;
let centinela = false;
let tries = 3;
function anyLuck(){
  while (!centinela && tries >= 1) {
    if (tries == 3) {
      guessNumber = parseInt(prompt(`Insert a number, tries ${tries}`));
    } else {
      guessNumber = parseInt(prompt(`Try again, you have ${tries} tries`));
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
  }};
  anyLuck();
}


//ex7Alg2();
