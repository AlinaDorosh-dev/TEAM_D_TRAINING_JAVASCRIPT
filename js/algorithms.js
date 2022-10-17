// ESTADÍSTICA DE TEXTO --------------------
function textStats(wordCount) {

wordCount = prompt("Add some text");
// WORD LENGTH --------------
let commas = wordCount.replace(/,/g, "");
console.log(`Length: ${commas.length}`);

// LENGTH WITHOUT SPACES ----------
console.log(`Length without white-space: ${wordCount.split(" ").length}`);
// UNIQUE WORDS ------------
const countUnique = new Set(wordCount.split(" ")).size;
console.log(`Unique words: ${countUnique}`);
// PERCENT OF UNIQUE WORDS -------------09
const percentUnique = Math.round((countUnique / wordCount.length) * 100);
console.log(`Percent of unique words: ${percentUnique}%`);
// SHORTEST WORD -------------
function findShortestWord(wordCount) {
    commas = wordCount.replace(/,/g, "");
    var words = commas.split(" ");
    var shortest = words.reduce((shortestWord, currentWord) => {
        return currentWord.length < shortestWord.length ? currentWord : shortestWord;
    }, words[0]);
    return shortest;
}
console.log("The shortest word is: ", findShortestWord(wordCount));
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
  console.log("The longest word is: ", longestWord);
}

getLongestWord(wordCount);
// AVARAGE UNIQUE WORD COUNT-------

const averageWordLength = wordCount => {
   if(!wordCount.includes(" ")){
      return wordCount.length;
   };
   const { length: strLen } = wordCount;
   const { length: numWords } = wordCount.split(", ");
   const average = (strLen - numWords + 1) / numWords;
   return average.toFixed(2);
};
console.log("This is the avarage word length: ", Math.round(averageWordLength(wordCount)));
}
textStats ("This is the text statistics function")
// EX. 2/3 HORA DEL SISTEMA + NOMBRE USUARIO:
function dayGreetings(greetings) {

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

function greeting(welcomeText) {
alert(`${welcomeText}`)

}

greeting(`${welcomeText} ${userName}`);
}
dayGreetings("This is the greetings function")

// GENERANDO NUMEROS ALEATORIOS 7/3 ------------------------
function randomNumbers(generator) {
    

const nums = new Set();
while(nums.size !== 100) {
  nums.add(Math.floor(Math.random() * 500) + 1);
}

console.log([...nums]);
const arr =[...nums];
const odds = arr.filter(number => {
    return number % 2 !==0;
});
console.log(odds);
const evens = arr.filter(number => {
    return number % 2 === 0;
});
let highestToLowest = evens.sort((a, b) => b-a);
console.log(highestToLowest);
}
randomNumbers("This is the random number generator")


