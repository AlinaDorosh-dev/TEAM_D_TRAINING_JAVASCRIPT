// // ESTADÍSTICA DE TEXTO --------------------

// let wordCount = prompt("Add some text");
// // WORD LENGTH --------------
// console.log(`Length: ${wordCount.length}`);
// // LENGTH WITHOUT SPACES ----------
// console.log(`Length without white-space: ${wordCount.split(" ").length}`);
// // UNIQUE WORDS ------------
// const countUnique = new Set(wordCount.split(" ")).size;
// console.log(`Unique words: ${countUnique}`);
// // PERCENT OF UNIQUE WORDS -------------09
// const percentUnique = Math.round((countUnique / wordCount.length) * 100);
// console.log(`Percent of unique words: ${percentUnique}%`);
// // SHORTEST WORD -------------
// function findShortestWord(wordCount) {
//     var words = wordCount.split(' ');
//     var shortest = words.reduce((shortestWord, currentWord) => {
//       return currentWord.length < shortestWord.length ? currentWord : shortestWord;
//     }, words[0]);
//     return shortest;
//   }
//   console.log(findShortestWord(wordCount));
// //   LONGEST WORD-----
// function getLongestWord(wordCount) {
//   let words = wordCount.split(" ");
//   let maxLength = 0;
//   let longestWord = "";

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > maxLength) {
//       maxLength = words[i].length;
//       longestWord = words[i];
//     }
//   }
//   console.log(longestWord);
// }

// getLongestWord(wordCount);
// // AVARAGE WORD COUNT-------

// const averageWordLength = wordCount => {
//    if(!wordCount.includes(' ')){
//       return wordCount.length;
//    };
//    const { length: strLen } = wordCount;
//    const { length: numWords } = wordCount.split(' ');
//    const average = (strLen - numWords + 1) / numWords;
//    return average.toFixed(2);
// };
// console.log(averageWordLength(wordCount));

// EX. 2/3 HORA DEL SISTEMA + NOMBRE USUARIO:
let userName = prompt("Add user name")
const fechaDehoy = new Date();
let hour = fechaDehoy.getHours();
let minutes = fechaDehoy.getMinutes();
console.log(hour, ":", minutes);
const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
let welcomeText = "";
if (hour < 12 ) welcomeText = welcomeTypes[0];
else if (hour < 18) welcomeText = welcomeTypes[1];
else welcomeText = welcomeTypes [2];

function greeting(welcomeText, userName) {
alert(`${welcomeText}`)

}

greeting(`${welcomeText} ${userName}`);



