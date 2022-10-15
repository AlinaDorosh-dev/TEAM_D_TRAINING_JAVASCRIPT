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

  stringManager = function (msg, answers) {
    let option1 = prompt("Replace chars by signs? y/n");
    console.log("%c" + msg, "font-weight:bold; font-size: 15px;color: blue");
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
    }

    let option2 = prompt("Capitalize? y/n");

    if (option2 == "y") {
      answers.capitalize = true;
    }
    if (answers.capitalize == true) {
      let splitedMsg = msg.split(" ");

      for (let index = 0; index < splitedMsg.length; index++) {
        splitedMsg[index] =
          splitedMsg[index].charAt(0).toUpperCase() +
          splitedMsg[index].slice(1);
      }
      console.log(
        "%c" + splitedMsg.join(" "),
        "font-weight:bold; font-size: 12px;color: green"
      );
    }

    let option3 = prompt("Replace spaces with commas? y/n");
    if (option3 == "y") {
      answers.replaceSpaces = true;
    }
    if (answers.replaceSpaces == true) {
      let splitedMsg = msg.split(" ");
      for (let index = 0; index < splitedMsg.length; index++) {
        if (splitedMsg[index].endsWith(",")) {
          splitedMsg[index] = splitedMsg[index].slice(0, -1);
        }
      }
      console.log(
        "%c" + splitedMsg.toString(","),
        "font-weight:bold; font-size: 12px;color: orange"
      );
    }
  };
  stringManager(msg, answers);
};

//ex5Alg2(stringManager);

//Ejercicio 3 PDF-Algoritmos3 /Alina

let ex3Alg3 = function () {
  const hello = "Hello world";
  let colors = [];

  for (let index = 0; index < 10; index++) {
    function colorGenerator() {
      let color =
        "#" +
        Math.floor(Math.random() * 2 ** 24)
          .toString(16)
          .padStart(0, 6);
      return color;
    }
    let randomColor = colorGenerator();
    do {
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

//Ejercicio 5 PDF-Algoritmos3 /Alina
let ex5Alg3 = function () {
  let numbers = [];

  for (let i = 0; i < 4; i++) {
    let min = 0;
    let max = 9;
    numbers[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //console.log(numbers);

  let letters = [];

  for (let i = 0; i < 3; i++) {
    let charactersAllowed = "BCDFGHJKLMNPRSTVWXYZ";
    letters[i] =
      charactersAllowed[Math.floor(Math.random() * charactersAllowed.length)];
  }
  //console.log(letters);

  let carRegistration = numbers.join("") + letters.join("");

  console.log(
    `%c Your new car registration number is`, `font-weight:bold; font-size: 20px;color: #288BA8 `);
  console.log(`%c ${carRegistration}`,`font-weight:bold; font-size: 20px;color: #F06000 `);
};

//ex5Alg3();
