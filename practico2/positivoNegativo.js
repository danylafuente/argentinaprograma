const readline = require('readline-sync');
let numero = readline.question('Ingresa un numero: ');
if (numero > 0) {
    console.log("El numero es positivo");
} else if (numero == 0){
    console.log("El numero es cero");
} else if (numero < 0) {
    console.log("El numero es negativo");
} else {
    console.log("No es un numero");
}

