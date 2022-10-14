//Exercise 1

// let x = "palindrome";
// x.length;
// console.log(x +' '+ x.length);

// console.log("the index is 0 ' "+ x.charAt(0)+"'");
// console.log("the index is 1 ' "+ x.charAt(1)+"'");
// console.log("the index is 2 ' "+ x.charAt(2)+"'");
// console.log("the index is 3 ' "+ x.charAt(3)+"'");
// console.log("the index is 4 ' "+ x.charAt(4)+"'");
// console.log("the index is 5 ' "+ x.charAt(5)+"'");
// console.log("the index is 6 ' "+ x.charAt(6)+"'");
// console.log("the index is 7 ' "+ x.charAt(7)+"'");
// console.log("the index is 8 ' "+ x.charAt(8)+"'");
// console.log("the index is 9 ' "+ x.charAt(9)+"'");

//Exercise 2

// let y = "no lemon, no melon";
// y.length;

// console.log(y + " " + y.length);

// console.log("the index is 18 ' " + y.charAt(18) + "'");
// console.log("the index is 17 ' " + y.charAt(17) + "'");
// console.log("the index is 16 ' " + y.charAt(16) + "'");
// console.log("the index is 15 ' " + y.charAt(15) + "'");
// console.log("the index is 14 ' " + y.charAt(14) + "'");
// console.log("the index is 13 ' " + y.charAt(13) + "'");
// console.log("the index is 12 ' " + y.charAt(12) + "'");
// console.log("the index is 11 ' " + y.charAt(11) + "'");
// console.log("the index is 10 ' " + y.charAt(10) + "'");
// console.log("the index is 9 ' " + y.charAt(9) + "'");
// console.log("the index is 8 ' " + y.charAt(8) + "'");
// console.log("the index is 7 ' " + y.charAt(7) + "'");
// console.log("the index is 6 ' " + y.charAt(6) + "'");
// console.log("the index is 5 ' " + y.charAt(5) + "'");
// console.log("the index is 4 ' " + y.charAt(4) + "'");
// console.log("the index is 3 ' " + y.charAt(3) + "'");
// console.log("the index is 2 ' " + y.charAt(2) + "'");
// console.log("the index is 1 ' " + y.charAt(1) + "'");
// console.log("the index is 0 ' " + y.charAt(0) + "'");

//Exercise 3

for (let index = 1; index <= 4; index++) {
    let asterisco = '';
    for (let index2 = 1; index2 <= 4; index2++) {
        asterisco += '****\n'
        if (index2==4) {
            console.log(asterisco+'\n');
        }
    }
}
