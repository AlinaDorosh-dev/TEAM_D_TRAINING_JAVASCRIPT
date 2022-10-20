// Ejercicio 8
//Generador de contraseñas

//Parte de codigo de Alina

let password = [];
let passwordString;

let passwordLength = prompt(
  "Please enter the lenth of your password between 8 and 16 characters"
);
if (passwordLength < 8 || passwordLength > 16) {
  alert("You can insert numbers only between 8 and 16. Please try again");
} else if (isNaN(passwordLength)) {
  alert("You can insert only numeric value between 8 and 16. Please try again");
}

password.length = parseInt(passwordLength);

//Dejo esta parte comentada para no tenerque introdusir al prompt cada vez que hago la prueba

/* let capitalLetter = prompt(
  "Do you want include capital letter in your pasword? y/n"
);
if (capitalLetter == "y") {
  capitalLetter=true;
} else if (capitalLetter == "n") {
  capitalLetter = false;
} else {
  alert('Only "y" or "n" can be accepted')
};

let lowercaseLetter = prompt(
  "Do you want include lowercase letter in your pasword? y/n"
);
if (lowercaseLetter == "y") {
  lowercaseLetter = true;
} else if (lowercaseLetter == "n") {
  lowercaseLetter = false;
} else {
  alert('Only "y" or "n" can be accepted');
};
let number = prompt("Do you want include number in your pasword? y/n");
if (number == "y") {
  number = true;
} else if (number == "n") {
  number = false;
} else {
  alert('Only "y" or "n" can be accepted');
};
let symbol = prompt("Do you want include symbol in your pasword? y/n");
if (symbol == "y") {
  symbol = true;
} else if (symbol == "n") {
  symbol = false;
} else {
  alert('Only "y" or "n" can be accepted');
}; */

//Cuatro variables para hacer pruebas
//Cuando el Switch este completo se eliminaran y se descomentará la parte de arriba
let capitalLetter = true;
let lowercaseLetter = true;
let number = true;
let symbol = false;
let min;
let max;
let randomGenerator = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

//15 probables combinaciones de la respuesta del usario
switch (true) {
  //Nº1.Solo minusculas
  case (capitalLetter == false &&
    lowercaseLetter == false &&
    number == false &&
    symbol == false) ||
    (capitalLetter == false &&
      lowercaseLetter == true &&
      number == false &&
      symbol == false):
    for (let index = 0; index < password.length; index++) {
      password[index] = String.fromCharCode(randomGenerator(97, 122));
    }
    break;
  //Nº2.Solo mayusculas
  case capitalLetter == true &&
    lowercaseLetter == false &&
    number == false &&
    symbol == false:
    for (let index = 0; index < password.length; index++) {
      password[index] = String.fromCharCode(randomGenerator(65, 90));
    }
    break;
  //Nº3.Solo simbolos
  case capitalLetter == false &&
    lowercaseLetter == false &&
    number == false &&
    symbol == true:
    for (let index = 0; index < password.length; index++) {
      password[index] = String.fromCharCode(randomGenerator(33, 47));
    }
    break;
  //Nº4.Solo numeros
  case capitalLetter == false &&
    lowercaseLetter == false &&
    number == true &&
    symbol == false:
    for (let index = 0; index < password.length; index++) {
      password[index] = randomGenerator(0, 9);
    }
    break;
  //Nº5.Mayusculas, minusculas,numeros y simbolos
  case capitalLetter == true &&
    lowercaseLetter == true &&
    number == true &&
    symbol == true:
    password[0] = String.fromCharCode(randomGenerator(65, 90)); //Al menos una mayuscula
    password[1] = String.fromCharCode(randomGenerator(97, 122)); // Al menos una minuscula
    password[2] = randomGenerator(0, 9); //Al menos un numero
    password[3] = String.fromCharCode(randomGenerator(33, 48)); //Al menos un simbolo
    for (let index = 4; index < password.length; index++) {
      //Resto random
      password[index] = String.fromCharCode(randomGenerator(33, 122));
    }
    password.sort(() => Math.random() - 0.5); //Mezclamos el array para que no salga siempre en el mismo index.
    break;
  //Nº6.Mayusculas y minusculas
  case capitalLetter == true &&
    lowercaseLetter == true &&
    number == false &&
    symbol == false:
    password[0] = String.fromCharCode(randomGenerator(65, 90)); //Al menos una mayuscula
    password[1] = String.fromCharCode(randomGenerator(97, 122)); // Al menos una minuscula
    //de 2 a 5 con mayusculas
    for (let index = 2; index < 6; index++) {
      password[index] = String.fromCharCode(randomGenerator(65, 90));
    }
    //Resto con minusculas
    for (let index = 6; index < password.length; index++) {
      password[index] = String.fromCharCode(randomGenerator(97, 122));
    }
    password.sort(() => Math.random() - 0.5); //Mezclamos el array para que no salga siempre en el mismo index.
    break;
  //Nº7. Mayusculas,minusculas y numeros
  case capitalLetter == true &&
    lowercaseLetter == true &&
    number == true &&
    symbol == false:
    password[0] = String.fromCharCode(randomGenerator(65, 90)); //Al menos una mayuscula
    password[1] = String.fromCharCode(randomGenerator(97, 122)); // Al menos una minuscula
    password[2] = randomGenerator(0, 9); //Al menos un numero
    //de 3 a 5 con mayusculas
    for (let index = 3; index < 6; index++) {
      password[index] = String.fromCharCode(randomGenerator(65, 90));
    }
    // 6 y 7 con numero
    for (let index = 6; index < 8; index++) {
      password[index] = randomGenerator(0, 9);
    }
    //Resto con minusculas
    for (let index = 8; index < password.length; index++) {
      password[index] = String.fromCharCode(randomGenerator(97, 122));
    }
    password.sort(() => Math.random() - 0.5); //Mezclamos el array para que no salga siempre en el mismo index.
    break;

  //Nº8. Mayusculas,minusculas y simbolos
  case capitalLetter == true &&
    lowercaseLetter == true &&
    number == false &&
    symbol == true:
    password[0] = String.fromCharCode(randomGenerator(65, 90)); //Al menos una mayuscula
    password[1] = String.fromCharCode(randomGenerator(97, 122)); // Al menos una minuscula
    password[2] = String.fromCharCode(randomGenerator(33, 48)); //Al menos un simbolo
    //de 3 a 5 con mayusculas
    for (let index = 3; index < 6; index++) {
      password[index] = String.fromCharCode(randomGenerator(65, 90));
    }
    // 6 y 7 con simbolo
    for (let index = 6; index < 8; index++) {
      password[index] = String.fromCharCode(randomGenerator(97, 122));
    }
    //Resto con minusculas
    for (let index = 8; index < password.length; index++) {
      password[index] = String.fromCharCode(randomGenerator(97, 122));
    }
    password.sort(() => Math.random() - 0.5); //Mezclamos el array para que no salga siempre en el mismo index.
    break;

  //Parte de codigo de Dani Vallejo

  //Nº9. Minusculas y numeros
  case capitalLetter == true &&
    lowercaseLetter == false &&
    number == true &&
    symbol == false:
    password[0] = String.fromCharCode(randomGenerator(65, 90)); //Al menos una mayuscula
    password[1] = randomGenerator(0, 9); //Al menos un numero
    //de 2 a 5 con mayusculas
    for (let index = 2; index < 6; index++) {
      password[index] = String.fromCharCode(randomGenerator(65, 90));
    }
    //Resto con numeros
    for (let index = 6; index < password.length; index++) {
      password[index] = randomGenerator(0, 9);
    }
    password.sort(() => Math.random() - 0.5); //Mezclamos el array para que no salga siempre en el mismo index.
    break;
  //Nº10. Minusculas y simbolos
  case capitalLetter == false &&
    lowercaseLetter == true &&
    number == false &&
    symbol == true:
    password[0] = String.fromCharCode(randomGenerator(97, 122)); //Al menos una minuscula
    password[1] = String.fromCharCode(randomGenerator(33, 48)); //Al menos un simbolo
    //de 2 a 5 minusculas
    for (let index = 2; index < 6; index++) {
      password[index] = String.fromCharCode(randomGenerator(97, 122));
    }
    //Resto con simbolos
    for (let index = 6; index < password.length; index++) {
      password[index] = String.fromCharCode(randomGenerator(33, 48));
    }
    password.sort(() => Math.random() - 0.5); //Mezclamos el array para que no salga siempre en el mismo index.
    break;
  //Nº11. Mayusculas y numeros
  case capitalLetter == true &&
    lowercaseLetter == false &&
    number == true &&
    symbol == false:
    password[0] = String.fromCharCode(randomGenerator(65, 90)); //Al menos una mayuscula
    password[1] = randomGenerator(0, 9); //Al menos un numero
    //de 2 a 5 con mayusculas
    for (let index = 2; index < 6; index++) {
      password[index] = String.fromCharCode(randomGenerator(65, 90));
    }
    //Resto con numeros
    for (let index = 6; index < password.length; index++) {
      password[index] = randomGenerator(0, 9);
    }
    password.sort(() => Math.random() - 0.5); //Mezclamos el array para que no salga siempre en el mismo index.
    break;
  //Nº12. Mayusculas y simbolos
  case capitalLetter == true &&
    lowercaseLetter == false &&
    number == false &&
    symbol == true:
    password[0] = String.fromCharCode(randomGenerator(65, 90)); //Al menos una mayuscula
    password[1] = String.fromCharCode(randomGenerator(33 ,48));//Al menos un simbolo
    //de 2 a 5 con mayusculas
    for (let index = 2; index < 6; index++) {
      password[index] = String.fromCharCode(randomGenerator(65, 90));
    }
    //Resto con simbolos
    for (let index = 6; index < password.length; index++) {
      password[index] = String.fromCharCode(randomGenerator(33, 48));
    }
    password.sort(() => Math.random() - 0.5); //Mezclamos el array para que no salga siempre en el mismo index.
    break;
  //Nº13. Simbolos y numeros
  case capitalLetter == false &&
    lowercaseLetter == false &&
    number == true &&
    symbol == true:
    password[0] = randomGenerator(0, 9); //Al menos un numero
    password[1] = String.fromCharCode(randomGenerator(33 ,48));//Al menos un simbolo
    //de 2 a 5 con numeros
    for (let index = 2; index < 6; index++) {
      password[index] = String.fromCharCode(randomGenerator(0, 9));
    }
    //Resto con simbolos
    for (let index = 6; index < password.length; index++) {
      password[index] = String.fromCharCode(randomGenerator(33, 48));
    }
    password.sort(() => Math.random() - 0.5); //Mezclamos el array para que no salga siempre en el mismo index.
    break;
  //Nº14. Mayusculas, numeros y simbolos
  case capitalLetter == true &&
    lowercaseLetter == false &&
    number == true &&
    symbol == true:
    password[0] = String.fromCharCode(randomGenerator(65, 90));//Al menos una mayuscula
    password[1] = randomGenerator(0, 9); //Al menos un numero
    password[2] = String.fromCharCode(randomGenerator(33 ,48));//Al menos un simbolo
    //de 3 a 5 con mayusculas
    for (let index = 3; index < 6; index++) {
      password[index] = String.fromCharCode(randomGenerator(65, 90));
    }
    //6 y 7 con numero
    for (let index = 6; index < 8; index++) {
      password[index] = String.fromCharCode(randomGenerator(0, 9));
    }
    //Resto con simbolos
    for (let index = 6; index < password.length; index++) {
      password[index] = String.fromCharCode(randomGenerator(33, 48));
    }
    password.sort(() => Math.random() - 0.5); //Mezclamos el array para que no salga siempre en el mismo index.
    break;
   //Nº15. Minusculas, numeros y simbolos
   case capitalLetter == true &&
   lowercaseLetter == false &&
   number == true &&
   symbol == true:
   password[0] = String.fromCharCode(randomGenerator(97, 122));//Al menos una mayuscula
   password[1] = randomGenerator(0, 9); //Al menos un numero
   password[2] = String.fromCharCode(randomGenerator(33 ,48));//Al menos un simbolo
   //de 3 a 5 con minusculas
   for (let index = 3; index < 6; index++) {
     password[index] = String.fromCharCode(randomGenerator(97, 122));
   }
   //6 y 7 con numero
   for (let index = 6; index < 8; index++) {
     password[index] = String.fromCharCode(randomGenerator(0, 9));
   }
   //Resto con simbolos
   for (let index = 6; index < password.length; index++) {
     password[index] = String.fromCharCode(randomGenerator(33, 48));
   }
   password.sort(() => Math.random() - 0.5); //Mezclamos el array para que no salga siempre en el mismo index.
   break;
  default:
    alert("ERROR");
    break;
}
passwordString = password.join("");
console.log(passwordString);

//Exprecion regular para comprobar la contraseña que incluye las 4 opciones

/*function checkPassword(passwordString) {
  const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return re.test(passwordString);
}
console.log(checkPassword(passwordString));

 */
