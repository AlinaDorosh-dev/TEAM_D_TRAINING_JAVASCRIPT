//function ejercicio8()
let long = prompt("Please enter the password length (8 - 16)");
let minus = prompt("You want to include lowerscase? (y for yes, n for no)");
let mayus = prompt("You want to include capital letters? (y for yes, n for no)");
let num = prompt("You want to include numbers? (y for yes, n for no)");
let simb = prompt("You want to include symbols? (y for yes, n for no)");


let eleccion = Math.floor(Math.random() * (max + min + 1)) + min;
for(let i = 8; i < 16; i++){
    if(long = min== 8 && max == 16 && min == y && mayus == y && num == y && simb == y){
        let caracter1 = String.fromCharCode(Math.floor(Math.random()*String.fromCharCode));
        password += caracter1
    }
}
console.log(password);
//const minus = "abcdefghijklmnñopqrstuvwxyz";
//const mayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
//
//let contraseña = "";
//for (let i = 0; i < 8; i++) {
//  let eleccion = Math.floor(Math.random() * 3 + 1);
//  if (eleccion == 1) {
//    let caracter1 = minus.charAt(Math.floor(Math.random() * minus.length));
//    contraseña += caracter1;
//  } else if (eleccion == 2) {
//    const caracter2 = mayus.charAt(Math.floor(Math.random() * mayus.length));
//    contraseña += caracter2;
//  } else {
//    let num = Math.floor(Math.random() * 10);
//    contraseña += num;
//  }
//}
//
//console.log(contraseña);
