//Ejercicio 5
let msg = prompt("Insert the text");

let answers = {
  replaceChars: false,
  capitalize: false,
  replaceSpaces: false,
};

function stringManager(msg, answers) {
  let option1 = prompt("Replace chars by signs? y/n");
    if (option1 == "y") {
    answers.replaceChars = true;
  }
  if (answers.replaceChars == true) {
    console.log(msg);
    let replacedA = msg.replace(/a/g, "@");
    let replacedE = replacedA.replace(/e/g, "3");
    let replacedI = replacedE.replace(/i/g, "1");
    let replacedO = replacedI.replace(/o/g, "0");
    let replacedS = replacedO.replace(/s/g, "$");
    console.log(replacedS);
  }

  let option2 = prompt("Capitalize? y/n");

  if (option2 == "y") {
    answers.capitalize = true;
  }
  if (answers.capitalize == true) {
    console.log(msg);
    let splitedMsg = msg.split(" ");

    for (let index = 0; index < splitedMsg.length; index++) {
      splitedMsg[index] =
        splitedMsg[index].charAt(0).toUpperCase() + splitedMsg[index].slice(1);
    }
    console.log(splitedMsg.join(" "));
  }

  let option3 = prompt("Replace spaces with commas? y/n");
  if (option3 == "y") {
    answers.replaceSpaces = true;
  }
  if (answers.replaceSpaces == true) {
    console.log(msg);
    let splitedMsg = msg.split(" ");
    for (let index = 0; index < splitedMsg.length; index++) {
      if (splitedMsg[index].endsWith(",")) {
        splitedMsg[index] = splitedMsg[index].slice(0, -1);
      }
    }
    console.log(splitedMsg.toString(","));
  }
}

stringManager(msg, answers);
