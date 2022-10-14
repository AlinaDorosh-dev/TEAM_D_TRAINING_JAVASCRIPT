//Exercise 4 Algorithms2
// let promedio = (temperaturas) => {
//   let tempMaxima = Math.max(...temperaturas);
//   let tempMinima = Math.min(...temperaturas);

//   let promedio = (tempMaxima + tempMinima) / 2;

//   console.log("La temperatura promedio en Sevilla fué de: " + promedio);
// };

// promedio([31.7, 30.7, 32.5, 29.4, 31.6, 28.5, 31.7]);

//Exercise 7 Algorithms2
// let min = 0;
// let max = 10;
// let intentos = 0;
// let aleatorio = Math.floor(Math.random() * max - min + 1) + min;
// let numero;

// for (intentos; intentos < 3; intentos++) {
//   numero = parseInt(prompt("Enter a number between " + min + " and " + max));

//   if (numero >= min && numero <= max) {
//     if (numero < aleatorio) {
//       alert("Try it again");
//     } else if (numero > aleatorio) {
//       alert("Try it again.");
//     } else if (numero == aleatorio) {
//       break;
//     }
//   } else {
//     alert("Sorry! Good luck in love");
//   }
// }

// if(numero == aleatorio){
//   alert("You win!")
// } else{
//   alert("Sorry! Good luck in love")
// }
function iniciar() {
  let intentos = 3;
  let num = Math.floor(Math.random() * 10 + 1);
  while (intentos > 0) {
    let numPlayer = prompt("Write a number:" + intentos + "attempts");
    if (numPlayer == num) alert("You win!");
    break;
  }
  if (numPlayer > num) {
    alert("Try it again.");
  }
  if (numPlayer < num) {
    alert("Try it again.");
  }
  vidas--;
}
if(vidas==0){
  alert("Sorry, Good luck in love")
}
