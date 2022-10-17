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
        console.log(`${userName} WINS!!!!! Your balance now:${actualBalance}€`);
      } else if (computersCardNumber > usersCardNumber) {
        actualBalance = initialBalance - parseInt(bet);
        console.log(
          `You lose. Virtual gamer WINS!!!!! Your balance now:${actualBalance}€`
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
      alert(`Betting benefits: ${totalBenefit}€`); //Withdraw money from the bank
      alert(`Total balance:${actualBalance}€`);
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
