// ### 1.-Desarrollo 3 ###
// Pedimos al usuario los dos valores:
let max = parseInt(prompt("Enter max limit (Number)"));
let min = parseInt(prompt("Enter min limit (Number)"));

// Comprobamos que los valores introducidos por el usuario sean correctos

if (isNaN(max) == false && isNaN(min) == false) {
  // Creamos e introducimos dentro 20 números aleatorios entre el max y el min ingresados por el usuario inclusive estos.
  let n = Array(20)
    .fill()
    .map(() => Math.floor(Math.random() * (max - min + 1)) + min);

  // Imprimimos por consola el array
  console.log(n);

  // Ahora especificamos el valor máximo y mínimo dentro del array:
  let maxV = Math.max(...n);
  let minV = Math.min(...n);

  // Imprimimos por pantalla el resultado
  console.log(`Min value: ${minV}\nMax value: ${maxV}`);
} else {
    console.error("############## Error ##############\n  El valor introducido no es válido");
}
