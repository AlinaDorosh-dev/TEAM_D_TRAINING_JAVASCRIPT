//Algorithms 2 Exercise 1

// const exercise1 = () => {
//   let word = "palindrome";
//   console.log(word.length);
//   [...word].forEach((letter) => {
// console.log(letter);
//   });
// };
// exercise1();

//Algorithms 2 exercise 2

// const exercise2 = () => {
//   let palindrome = "no lemon, no melon";
//   let reverse = [...palindrome].reverse();
//   console.log(reverse.join(""));
// };
// exercise2();

//Algorithms 2 exercise 3 (mio)

// for (let index = 1; index <= 4; index++) {
// let asterisco = '';
// for (let index2 = 1; index2 <= 4; index2++) {
// asterisco += '****\n'
// if (index2==4) {
// console.log(asterisco+'\n');
// }
// }
// }

//Algorithms 2 exercise 3 (corregido en clase)
// const exercise3 = () => {
// let result = "";
// let rows = 5;
// let columns = 10;
// for (let index = 0; index < rows; index++) {
// for (let index = 0; index < columns; index++){
// result += "*";
// }
// result += "\n";
// }
// console.log(result);
// };
// exercise3();

//Algorithms 2 exercise 6

function phrasesDisplay() {
  const arrayPhrases = [
    "Un mago no llega ni tarde ni pronto, llega cuando se lo propone",
    "Incluso la persona más pequeña puede cambiar el curso del futuro",
    "Preferiría compartir una vida contigo que enfrentar todas las edades de este mundo sola",
    "Es un destino extraño que suframos tanto miedo y dudemos tanto por una cosa tan pequeña, una cosa tan pequeña",
    "Este día no es de hombre, sino de todos. Reconstruyamos juntos este mundo para que podamos compartir los días en paz",
    "Cuando las cosas están en peligro alguien tiene que renunciar a ellas, perderlas, para que otros las conserven",
    "Sólo tú puedes decidir qué hacer con el tiempo que se te ha dado",
    "Si con mi vida, o con mi muerte puedo protegerte, lo haré. Cuenta con mi espada",
    "Muchos de los que viven merecen morir y algunos de los que mueren merecen la vida",
    "¡Tuk, insensato! ¡Tírate tú la próxima vez y líbranos de tu estupidez!",
    "Ésta misión te ha sido encomendada, y si tú no encuentras el camino, nadie lo hará",
    "Espera mi llegada con la primera luz del quinto día, al alba mira al este",
    "Certeza de muerte… mínima esperanza de éxito… ¿a qué esperamos?",
    "No os diré: no lloréis; pues no todas las lágrimas son amargas",
    "Yo llevaré el Anillo, aunque no sé cómo",
    "No puedes pasar",
    "¡Es que no soy ningún hombre! Lo que tus ojos ven es una mujer. Soy Éowyn, hija de Éomund",
    "Lo sé, ha sido un error, no deberíamos ni haber llegado hasta aquí, pero estamos aquí, igual que en las grandes historias, señor Frodo, las que realmente importan, llenas de oscuridad y de constantes peligros, esas de las que no quieres saber el final, porque.. ¿Cómo van a acabar bien?",
    "¿Cómo retomas el hilo de una vida vieja? ¿Cómo continúas, cuando en tu corazón empiezas a entender que no hay regreso posible?",
    "No habrá amanecer para los hombres",
    "¿No piensas seguirle? -.Frodo y su destino ya no es asunto nuestro -.Entonces todo ha sido en vano,la compañía ha fracasado -.No si nosotros seguimos unidos",
  ];

  const randomPhrases =
    arrayPhrases[Math.floor(Math.random() * arrayPhrases.length)];
  console.log(randomPhrases);
}

// Every 10 secs
const timerId = setInterval(() => phrasesDisplay(), 10000);

// Stop after 2mins
setTimeout(() => clearInterval(timerId), 120000);
