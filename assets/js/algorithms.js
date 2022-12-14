//Algorithms 2 Exercise 1 / CORAL
const exercise1 = () => {
  let word = "palindrome";
  console.log(word.length);
  [...word].forEach((letter) => {
    console.log(letter);
  });
};
// exercise1()
//Algorithms 2 exercise 2/ CORAL
const exercise2 = () => {
  let palindrome = "no lemon, no melon";
  let reverse = [...palindrome].reverse();
  console.log(reverse.join(""));
};
//exercise2();
// Algorithms 2 exercise 3 / CORAL

const exercise3 = () => {
  for (let index = 1; index <= 4; index++) {
    let asterisco = "";
    for (let index2 = 1; index2 <= 4; index2++) {
      asterisco += "****\n";
      if (index2 == 4) {
        console.log(asterisco + "\n");
      }
    }
  }
};
//exercise3();

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

//Ejercicio 5 PDF-Algoritmos2 /Alina
let msg;
let answers;
let stringManager;
let ex5Alg2 = function (stringManager) {
  msg = prompt("Insert the text");

  answers = {
    replaceChars: false,
    capitalize: false,
    replaceSpaces: false,
  };
  let splitedMsg = msg.split(" "); //Convert frase in array of words
  let msgToLetterArray = [...msg]; //Convert frase in array of letters

  stringManager = function (msg, answers) {
    let option1 = prompt("Replace chars by signs? y/n");
    console.log("%c" + msg, "font-weight:bold; font-size: 15px;color: blue");
    let startTime = performance.now(); //Start timer of execution
    if (option1 == "y") {
      answers.replaceChars = true;
    }
    if (answers.replaceChars == true) {
      let replacedA = msg.replace(/a/g, "@");
      let replacedE = replacedA.replace(/e/g, "3");
      let replacedI = replacedE.replace(/i/g, "1");
      let replacedO = replacedI.replace(/o/g, "0");
      let replacedS = replacedO.replace(/s/g, "$");
      console.log(
        "%c" + replacedS,
        "font-weight:bold; font-size: 12px;color: red"
      );
      let letterCounter = 0; // Counter of changed characters
      for (let i = 0; i < msgToLetterArray.length; i++) {
        let finalText = [...replacedS]; //Convert final text to array of letters
        if (msgToLetterArray[i] !== finalText[i]) {
          // Compare initial letters array to final letters array
          letterCounter++;
        }
      }
      let wordCounter = 0; //Counter of changed words
      for (let i = 0; i < splitedMsg.length; i++) {
        let arrayOfChangedWords = replacedS.split(" "); //Convert changed frase to array of words
        if (splitedMsg[i] !== arrayOfChangedWords[i]) {
          //Compare two arrays
          wordCounter++;
        }
      }
      console.log(
        `${letterCounter} characters and ${wordCounter} words changed`
      );
      let endTime = performance.now(); //Stop timer of execution
      console.log(
        `Work done in ${(endTime - startTime).toFixed(2)} milliseconds`
      );
    }

    let option2 = prompt("Capitalize? y/n");

    if (option2 == "y") {
      answers.capitalize = true;
    }
    if (answers.capitalize == true) {
      for (let index = 0; index < splitedMsg.length; index++) {
        splitedMsg[index] =
          splitedMsg[index].charAt(0).toUpperCase() + //In array of words change every first character to Uppercase
          splitedMsg[index].slice(1); //Join with the rest of word
      }
      console.log(
        "%c" + splitedMsg.join(" "), //Convert array in final frase
        "font-weight:bold; font-size: 12px;color: green"
      );
    }

    let option3 = prompt("Replace spaces with commas? y/n");
    if (option3 == "y") {
      answers.replaceSpaces = true;
    }
    if (answers.replaceSpaces == true) {
      for (let index = 0; index < splitedMsg.length; index++) {
        if (splitedMsg[index].endsWith(",")) {
          //Remove commas from original frase
          splitedMsg[index] = splitedMsg[index].slice(0, -1);
        }
      }
      console.log(
        "%c" + splitedMsg.toString(","), //Convert array to final frase
        "font-weight:bold; font-size: 12px;color: orange"
      );
    }
  };
  stringManager(msg, answers);
};

//ex5Alg2(stringManager);

// ESTAD??STICA DE TEXTO --------------------
//Exercise 6 Algorithms2//Oliver
function textStats(wordCount) {
  wordCount = prompt("Add some text");
  // WORD LENGTH --------------
  let commas = wordCount.replace(/,/g, "");
  console.log(`Length: ${wordCount.length} characters`);
  console.log(`Words: ${wordCount.split(" ").length} `);

  // LENGTH WITHOUT SPACES ----------
  console.log(
    `Length without white-space: ${wordCount.replace(/ /g, "").length}`
  );
  // UNIQUE WORDS ------------
  const countUnique = new Set(wordCount.split(" ")).size;
  console.log(`Unique words: ${countUnique}`);
  // PERCENT OF UNIQUE WORDS -------------
  const percentUnique = Math.round(
    (countUnique / wordCount.split(" ").length) * 100
  );

  console.log(`Percent of unique words: ${percentUnique}%`);
  // SHORTEST WORD -------------
  //   function getShortestWord(wordCount) {
  //     commas = wordCount.replace(/,/g, "");
  //     let words = commas.split(" ");
  //     let maxLength = 0;
  //     let shortestWord = "";

  //     for (let i = 0; i < words.length; i++) {
  //       if (words[i].length > maxLength) {
  //         maxLength = words[i].length;
  //         shortestWord = words[i];
  //       }
  //     }
  //     console.log("The shortest word is: ", shortestWord.length);
  //   }
  // getShortestWord(wordCount);
  function findShortestWord(wordCount) {
    commas = wordCount.replace(/,/g, "");
    var words = commas.split(" ");
    var shortest = words.reduce((shortestWord, currentWord) => {
      return currentWord.length < shortestWord.length
        ? currentWord
        : shortestWord;
    }, words[0]);
    return shortest;
  }
  console.log(
    "The shortest word: ",
    findShortestWord(wordCount).length,
    "characters"
  );
  //   LONGEST WORD-----
  function getLongestWord(wordCount) {
    commas = wordCount.replace(/,/g, "");
    let words = commas.split(" ");
    let maxLength = 0;
    let longestWord = "";

    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        longestWord = words[i];
      }
    }
    console.log("The longest word is: ", longestWord.length, "characters");
  }

  getLongestWord(wordCount);
  // AVARAGE UNIQUE WORD COUNT-------
  let NoSpacesNoCommas = commas.replace(/ /g, "").length;
  let averageWordLength = Math.round(
    NoSpacesNoCommas / wordCount.split(" ").length
  );
  console.log("This is the avarage word length: " + averageWordLength);
}
//textStats("This is the text statistics function");

//Exercise 7 Algorithms2 FRAN
function ex7Alg2() {
  let min = 0;
  let max = 10;
  let numberRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(numberRandom);
  let guessNumber;
  let centinela = false;
  let tries = 3;
  function anyLuck() {
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
    }
  }
  anyLuck();
}

//ex7Alg2();

// Ejercicio 8
//Generador de contrase??as

//Parte de codigo de Alina
const ex8Alg2 = () => {
  let password = [];
  let passwordString;

  let passwordLength = prompt(
    "Please enter the lenth of your password between 8 and 16 characters"
  );
  if (passwordLength < 8 || passwordLength > 16) {
    alert("You can insert numbers only between 8 and 16. Please try again");
  } else if (isNaN(passwordLength)) {
    alert(
      "You can insert only numeric value between 8 and 16. Please try again"
    );
  }

  password.length = parseInt(passwordLength);

  let capitalLetter = prompt(
    "Do you want include capital letter in your pasword? y/n"
  );
  if (capitalLetter == "y") {
    capitalLetter = true;
  } else if (capitalLetter == "n") {
    capitalLetter = false;
  } else {
    alert('Only "y" or "n" can be accepted');
  }

  let lowercaseLetter = prompt(
    "Do you want include lowercase letter in your pasword? y/n"
  );
  if (lowercaseLetter == "y") {
    lowercaseLetter = true;
  } else if (lowercaseLetter == "n") {
    lowercaseLetter = false;
  } else {
    alert('Only "y" or "n" can be accepted');
  }
  let number = prompt("Do you want include number in your pasword? y/n");
  if (number == "y") {
    number = true;
  } else if (number == "n") {
    number = false;
  } else {
    alert('Only "y" or "n" can be accepted');
  }
  let symbol = prompt("Do you want include symbol in your pasword? y/n");
  if (symbol == "y") {
    symbol = true;
  } else if (symbol == "n") {
    symbol = false;
  } else {
    alert('Only "y" or "n" can be accepted');
  }
  let min;
  let max;
  let randomGenerator = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  //15 probables combinaciones de la respuesta del usario
  switch (true) {
    //N??1.Solo minusculas
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
    //N??2.Solo mayusculas
    case capitalLetter == true &&
      lowercaseLetter == false &&
      number == false &&
      symbol == false:
      for (let index = 0; index < password.length; index++) {
        password[index] = String.fromCharCode(randomGenerator(65, 90));
      }
      break;
    //N??3.Solo simbolos
    case capitalLetter == false &&
      lowercaseLetter == false &&
      number == false &&
      symbol == true:
      for (let index = 0; index < password.length; index++) {
        password[index] = String.fromCharCode(randomGenerator(33, 47));
      }
      break;
    //N??4.Solo numeros
    case capitalLetter == false &&
      lowercaseLetter == false &&
      number == true &&
      symbol == false:
      for (let index = 0; index < password.length; index++) {
        password[index] = randomGenerator(0, 9);
      }
      break;
    //N??5.Mayusculas, minusculas,numeros y simbolos
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
    //N??6.Mayusculas y minusculas
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
    //N??7. Mayusculas,minusculas y numeros
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

    //N??8. Mayusculas,minusculas y simbolos
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
        password[index] = String.fromCharCode(randomGenerator(33, 48));
      }
      //Resto con minusculas
      for (let index = 8; index < password.length; index++) {
        password[index] = String.fromCharCode(randomGenerator(97, 122));
      }
      password.sort(() => Math.random() - 0.5); //Mezclamos el array para que no salga siempre en el mismo index.
      break;

    //Parte de codigo de Dani Vallejo

    //N??9. Minusculas y numeros
    case capitalLetter == false &&
      lowercaseLetter == true &&
      number == true &&
      symbol == false:
      password[0] = String.fromCharCode(randomGenerator(97, 122)); //Al menos una minuscula
      password[1] = randomGenerator(0, 9); //Al menos un numero
      //de 2 a 5 con minusculas
      for (let index = 2; index < 6; index++) {
        password[index] = String.fromCharCode(randomGenerator(97, 122));
      }
      //Resto con numeros
      for (let index = 6; index < password.length; index++) {
        password[index] = randomGenerator(0, 9);
      }
      password.sort(() => Math.random() - 0.5); //Mezclamos el array para que no salga siempre en el mismo index.
      break;
    //N??10. Minusculas y simbolos
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
    //N??11. Mayusculas y numeros
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
    //N??12. Mayusculas y simbolos
    case capitalLetter == true &&
      lowercaseLetter == false &&
      number == false &&
      symbol == true:
      password[0] = String.fromCharCode(randomGenerator(65, 90)); //Al menos una mayuscula
      password[1] = String.fromCharCode(randomGenerator(33, 48)); //Al menos un simbolo
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
    //N??13. Simbolos y numeros
    case capitalLetter == false &&
      lowercaseLetter == false &&
      number == true &&
      symbol == true:
      password[0] = randomGenerator(0, 9); //Al menos un numero
      password[1] = String.fromCharCode(randomGenerator(33, 48)); //Al menos un simbolo
      //de 2 a 5 con numeros
      for (let index = 2; index < 6; index++) {
        password[index] = randomGenerator(0, 9);
      }
      //Resto con simbolos
      for (let index = 6; index < password.length; index++) {
        password[index] = String.fromCharCode(randomGenerator(33, 48));
      }
      password.sort(() => Math.random() - 0.5); //Mezclamos el array para que no salga siempre en el mismo index.
      break;
    //N??14. Mayusculas, numeros y simbolos
    case capitalLetter == true &&
      lowercaseLetter == false &&
      number == true &&
      symbol == true:
      password[0] = String.fromCharCode(randomGenerator(65, 90)); //Al menos una mayuscula
      password[1] = randomGenerator(0, 9); //Al menos un numero
      password[2] = String.fromCharCode(randomGenerator(33, 48)); //Al menos un simbolo
      //de 3 a 5 con mayusculas
      for (let index = 3; index < 6; index++) {
        password[index] = String.fromCharCode(randomGenerator(65, 90));
      }
      //6 y 7 con numero
      for (let index = 6; index < 8; index++) {
        password[index] = randomGenerator(0, 9);
      }
      //Resto con simbolos
      for (let index = 6; index < password.length; index++) {
        password[index] = String.fromCharCode(randomGenerator(33, 48));
      }
      password.sort(() => Math.random() - 0.5); //Mezclamos el array para que no salga siempre en el mismo index.
      break;
    //N??15. Minusculas, numeros y simbolos
    case capitalLetter == false &&
      lowercaseLetter == true &&
      number == true &&
      symbol == true:
      password[0] = String.fromCharCode(randomGenerator(97, 122)); //Al menos una minuscula
      password[1] = randomGenerator(0, 9); //Al menos un numero
      password[2] = String.fromCharCode(randomGenerator(33, 48)); //Al menos un simbolo
      //de 3 a 5 con minusculas
      for (let index = 3; index < 6; index++) {
        password[index] = String.fromCharCode(randomGenerator(97, 122));
      }
      //6 y 7 con numero
      for (let index = 6; index < 8; index++) {
        password[index] = randomGenerator(0, 9);
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
  alert(`Your new password: ${passwordString}`);

  //Exprecion regular para comprobar la contrase??a que incluye las 4 opciones

  function checkPassword(passwordString) {
    const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return re.test(passwordString);
  }

  let strongPassword = checkPassword(passwordString);
  if (strongPassword == true) {
    console.log("Generated password is strong");
  } else {
    console.log(
      "Generated password is weak. We sugggest you include all cappital letters, lowercase, numbers and symbols to make it strong"
    );
  }
};
//ex8Alg2();

// // ### 1.-Desarrollo 3 ###  ELIAS
// // Pedimos al usuario los dos valores:
function desarrollo31() {
  let max = parseInt(prompt("Enter max limit (Number)"));
  let min = parseInt(prompt("Enter min limit (Number)"));
  // Comprobamos que los valores introducidos por el usuario sean correctos

  if (isNaN(max) == false && isNaN(min) == false) {
    // Creamos e introducimos dentro 20 n??meros aleatorios entre el max y el min ingresados por el usuario inclusive estos.
    let n = Array(20)
      .fill()
      .map(() => Math.floor(Math.random() * (max - min + 1)) + min);

    // Imprimimos por consola el array
    console.log(n);

    // Ahora especificamos el valor m??ximo y m??nimo dentro del array:
    let maxV = Math.max(...n);
    let minV = Math.min(...n);

    // Imprimimos por pantalla el resultado
    console.log(`Min value: ${minV}\nMax value: ${maxV}`);
  } else {
    console.error(
      "############## Error ##############\n  El valor introducido no es v??lido"
    );
  }
}
//desarrollo31();

// EX. 2/3 //  Oliver
//HORA DEL SISTEMA + NOMBRE USUARIO:
function dayGreetings(greetings) {
  let userName = prompt("Add user name");
  const fechaDehoy = new Date();
  let hour = fechaDehoy.getHours();
  let minutes = fechaDehoy.getMinutes();
  console.log(hour, ":", minutes);
  const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
  let welcomeText = "";
  if (hour < 12) welcomeText = welcomeTypes[0];
  else if (hour < 18) welcomeText = welcomeTypes[1];
  else welcomeText = welcomeTypes[2];

  function greeting(welcomeText) {
    alert(`${welcomeText}`);
  }

  greeting(`${welcomeText} ${userName}`);
}
//dayGreetings("This is the greetings function");

//Ejercicio 3 PDF-Algoritmos3 /Alina

let ex3Alg3 = function () {
  const hello = "Hello world";
  let colors = [];

  for (let index = 0; index < 10; index++) {
    function colorGenerator() {
      //Generate random hex code
      let color =
        "#" +
        Math.floor(Math.random() * 2 ** 24)
          .toString(16) //Hex code with 16 characters
          .padStart(0, 6); //Take only first 6  characters
      return color;
    }
    let randomColor = colorGenerator();
    do {
      //Exclude repetition
      randomColor = colorGenerator();
    } while (colors.includes(randomColor));
    colors[index] = randomColor;
  }

  for (let i = 0; i < colors.length; i++) {
    console.log(`HEX-CODE:${colors[i]}`);
    console.log(
      `%c ${hello} `,
      `font-weight:bold; font-size: 20px;color: ${colors[i]}`
    );
  }
};

//ex3Alg3();

// ### 4.-Desarrollo 3 ### Elias
// Pedimos DNI al usuario
function desarrollo34() {
  let dni = prompt("Introduzca su DNI");
  let dniN = parseInt(dni.substring(0, 8));
  let dniL = dni.substring(8, 9);
  let checkLetter = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];

  if (dniL == checkLetter[dniN % 23]) {
    console.log("Valid DNI");
  } else {
    console.error("The data entered is wrong");
  }
}
//desarrollo34();

//Ejercicio 5 PDF-Algoritmos3 /Alina
let ex5Alg3 = function () {
  let numbers = [];

  for (let i = 0; i < 4; i++) {
    //Generate 4 random numbers and fill array
    let min = 0;
    let max = 9;
    numbers[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //console.log(numbers);

  let letters = []; //Generate 3 random letters and fill array

  for (let i = 0; i < 3; i++) {
    let charactersAllowed = "BCDFGHJKLMNPRSTVWXYZ";
    letters[i] =
      charactersAllowed[Math.floor(Math.random() * charactersAllowed.length)];
  }
  //console.log(letters);

  let carRegistration = numbers.join("") + letters.join(""); //Join two arrays in one string

  console.log(
    `%c Your new car registration number is`,
    `font-weight:bold; font-size: 20px;color: #288BA8 `
  );
  console.log(
    `%c ${carRegistration}`,
    `font-weight:bold; font-size: 20px;color: #F06000 `
  );
};

//ex5Alg3();

//Algorithms 3 exercise 6 / CORAL

const exercise6 = () => {
  function phrasesDisplay() {
    const arrayPhrases = [
      "Un mago no llega ni tarde ni pronto, llega cuando se lo propone",
      "Incluso la persona m??s peque??a puede cambiar el curso del futuro",
      "Preferir??a compartir una vida contigo que enfrentar todas las edades de este mundo sola",
      "Es un destino extra??o que suframos tanto miedo y dudemos tanto por una cosa tan peque??a, una cosa tan peque??a",
      "Este d??a no es de hombre, sino de todos. Reconstruyamos juntos este mundo para que podamos compartir los d??as en paz",
      "Cuando las cosas est??n en peligro alguien tiene que renunciar a ellas, perderlas, para que otros las conserven",
      "S??lo t?? puedes decidir qu?? hacer con el tiempo que se te ha dado",
      "Si con mi vida, o con mi muerte puedo protegerte, lo har??. Cuenta con mi espada",
      "Muchos de los que viven merecen morir y algunos de los que mueren merecen la vida",
      "??Tuk, insensato! ??T??rate t?? la pr??xima vez y l??branos de tu estupidez!",
      "??sta misi??n te ha sido encomendada, y si t?? no encuentras el camino, nadie lo har??",
      "Espera mi llegada con la primera luz del quinto d??a, al alba mira al este",
      "Certeza de muerte??? m??nima esperanza de ??xito??? ??a qu?? esperamos?",
      "No os dir??: no llor??is; pues no todas las l??grimas son amargas",
      "Yo llevar?? el Anillo, aunque no s?? c??mo",
      "No puedes pasar",
      "??Es que no soy ning??n hombre! Lo que tus ojos ven es una mujer. Soy ??owyn, hija de ??omund",
      "Lo s??, ha sido un error, no deber??amos ni haber llegado hasta aqu??, pero estamos aqu??, igual que en las grandes historias, se??or Frodo, las que realmente importan, llenas de oscuridad y de constantes peligros, esas de las que no quieres saber el final, porque.. ??C??mo van a acabar bien?",
      "??C??mo retomas el hilo de una vida vieja? ??C??mo contin??as, cuando en tu coraz??n empiezas a entender que no hay regreso posible?",
      "No habr?? amanecer para los hombres",
      "??No piensas seguirle? -.Frodo y su destino ya no es asunto nuestro -.Entonces todo ha sido en vano,la compa????a ha fracasado -.No si nosotros seguimos unidos",
    ];

    const randomPhrases =
      arrayPhrases[Math.floor(Math.random() * arrayPhrases.length)];
    console.log(randomPhrases);
  }
  // Every 10 secs
  const timerId = setInterval(() => phrasesDisplay(), 10000);

  // Stop after 2mins
  setTimeout(() => clearInterval(timerId), 120000);

  phrasesDisplay();
};
//exercise6();

// GENERANDO NUMEROS ALEATORIOS
////Exercise 7 Algorithms3//   Oliver ------------------------
function randomNumbers(generator) {
  const nums = new Set();
  while (nums.size !== 100) {
    nums.add(Math.floor(Math.random() * 500) + 1);
  }

  console.log([...nums]);
  const arr = [...nums];
  const odds = arr.filter((number) => {
    return number % 2 !== 0;
  });
  console.log(odds);
  const evens = arr.filter((number) => {
    return number % 2 === 0;
  });
  let highestToLowest = evens.sort((a, b) => b - a);
  console.log(highestToLowest);
}
//randomNumbers("This is the random number generator");

//Ejercicio 8 PDF-Algoritmos3 /Alina
function ex8Alg3() {
  const cardDeck = ["clubs", "hearts", "spades", "diamonds"];
  const cards = ["ACE", "KING", "QUEEN", "JACK", 10, 9, 8, 7, 6, 5, 4, 3, 2];
  const startBalance = 500;
  let initialBalance = startBalance;
  let actualBalance;
  let userName = prompt("Please enter your name").toUpperCase();
  let game = prompt(`HELLO ${userName}, DO YOU WANT TO PLAY A GAME? y/n`);
  let bet;
  if (game == "y") {
    letsPlay();
  }

  function letsPlay() {
    bet = prompt("Insert your bet");
    if (bet > initialBalance) {
      alert("The bet is above your ballance, please try again!");
    } else if (isNaN(bet)) {
      alert("You should enter only numeric values,please try again!");
    } else {
      let computersCardDeck =
        cardDeck[Math.floor(Math.random() * cardDeck.length)]; //Generate random deck for virtual player

      let computersCardNumber = cards[Math.floor(Math.random() * cards.length)]; //Generate random card number for virt. player
      console.log(
        `Virtual gamer get ${computersCardDeck}${computersCardNumber}`
      );

      let usersCardDeck = cardDeck[Math.floor(Math.random() * cardDeck.length)]; //Generate random deck for user

      let usersCardNumber = cards[Math.floor(Math.random() * cards.length)]; //Generate random card number for user

      console.log(`${userName} get ${usersCardDeck}${usersCardNumber}`);

      if (usersCardNumber == "JACK") {
        //If card number is string, convert it to number for comparison
        usersCardNumber = 11;
      } else if (usersCardNumber == "QUEEN") {
        usersCardNumber = 12;
      } else if (usersCardNumber == "KING") {
        usersCardNumber = 13;
      } else if (usersCardNumber == "ACE") {
        usersCardNumber = 14;
      }

      if (computersCardNumber == "JACK") {
        computersCardNumber = 11;
      } else if (computersCardNumber == "QUEEN") {
        computersCardNumber = 12;
      } else if (computersCardNumber == "KING") {
        computersCardNumber = 13;
      } else if (computersCardNumber == "ACE") {
        computersCardNumber = 14;
      }

      if (computersCardNumber < usersCardNumber) {
        actualBalance = initialBalance + parseInt(bet); //Convert bet from string to number
        console.log(`${userName} WINS!!!!! Your balance now:${actualBalance}???`);
      } else if (computersCardNumber > usersCardNumber) {
        actualBalance = initialBalance - parseInt(bet);
        console.log(
          `You lose. Virtual gamer WINS!!!!! Your balance now:${actualBalance}???`
        );
      } else {
        console.log("DRAW!");
        actualBalance = initialBalance;
      }
    }
    initialBalance = actualBalance;
  }

  if (actualBalance === 0) {
    alert(`${userName} You have lost all your money. Your balance is 0`);
  }

  do {
    let keepPlaying = prompt(`${userName} Do you want to keep playing? y/n`);
    if (keepPlaying == "y") {
      letsPlay(); //Call function to play again
    } else {
      let totalBenefit = actualBalance - startBalance;
      alert(`Betting benefits: ${totalBenefit}???`); //Withdraw money from the bank
      alert(`Total balance:${actualBalance}???`);
    }
  } while (actualBalance > 0);
}

//ex8Alg3();

//Ejercicio 9 PDF-Algoritmos3 /Alina

//Interactive version with user
function caesarCipher() {
  let secretMessage = prompt("Insert your message:");
  let choice = prompt(
    "Please insert 1 if you want to encrypt your message and 2 if you want to decipher it"
  );
  switch (choice) {
    case "1":
      encryptMessage();
      break;
    case "2":
      decipherMessage();
      break;
    default:
      alert("You can entre only 1 or 2. Please try again!");
      break;
  }

  function encryptMessage() {
    let secretCode = []; //Array of letter codes
    for (let i = 0; i < secretMessage.length; i++) {
      if (
        (secretMessage.charCodeAt(i) >= 88 &&
          secretMessage.charCodeAt(i) <= 90) ||
        (secretMessage.charCodeAt(i) >= 120 &&
          secretMessage.charCodeAt(i) <= 122)
      ) {
        secretCode.push(secretMessage.charCodeAt(i) - 23); //For letters xyz/XYZ
      } else {
        secretCode.push(secretMessage.charCodeAt(i) + 3);
      }
    }

    let arrayOfCodedLetters = [];

    for (let i = 0; i < secretCode.length; i++) {
      let codedLetter = String.fromCharCode(secretCode[i]); //Convert code to string
      arrayOfCodedLetters.push(codedLetter); //Push string to array
    }
    let codedMessage = arrayOfCodedLetters.join(""); //Convert array in string
    console.log(
      `Here is your message encrypted with Caesar Cipher: ${codedMessage}`
    );
  }

  function decipherMessage() {
    let secretCode = []; //Array of letter codes
    for (let i = 0; i < secretMessage.length; i++) {
      if (
        (secretMessage.charCodeAt(i) >= 65 &&
          secretMessage.charCodeAt(i) <= 67) ||
        (secretMessage.charCodeAt(i) >= 97 && secretMessage.charCodeAt(i) <= 99)
      ) {
        secretCode.push(secretMessage.charCodeAt(i) + 23); //For letters abc/ABC
      } else {
        secretCode.push(secretMessage.charCodeAt(i) - 3);
      }
    }

    let arrayOfUncodedLetters = [];

    for (let i = 0; i < secretCode.length; i++) {
      let codedLetter = String.fromCharCode(secretCode[i]); //Convert code to string
      arrayOfUncodedLetters.push(codedLetter); //Push string to array
    }
    let descipheredMessage = arrayOfUncodedLetters.join(""); //Convert array in string
    console.log(
      `Here is your message encrypted with Caesar Cipher: ${descipheredMessage}`
    );
  }
}
//caesarCipher();

//Llamadas

//Algoritmos2

//exercise1();             //palindrome             //Coral
//exercise2();               //no lemon              //Coral
//exercise3();               //asteriscos            //Coral
//ex4Alg2();                 //temperatura           //Fran
//ex5Alg2(stringManager);                            //Alina
//textStats();                                       //Oliver
//ex7Alg2();              //Good luck in love        //Fran
//ex8Alg2();             //Passwords                 //Alina y Dani Vallejo

//Algoritmos3

//desarrollo31();           //random array            //Elias
//dayGreetings();                                     //Oliver
//ex3Alg3();                //HEX                     //Alina
//desarrollo34();          //DNI                      //Elias
//ex5Alg3();               //Matriculas               //Alina
//exercise6();             //Motivacion               //Coral
//randomNumbers();                                    //Oliver
//ex8Alg3();               //Cartas                   //Alina
//caesarCipher();                                     //Alina
