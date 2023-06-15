const readlineSync = require('readline-sync');
let numeroMes = readlineSync.questionInt('Ingresa un numero del 1 al 12, representando los meses: ');

let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

if (numeroMes > 12 || numeroMes < 1) {
    console.log('El numero ingresado esta fuera de rango, por favor ingrese un numero del 1 al 12.');
} else {
    let cantidadDeDias;
    if (numeroMes === 2){
        cantidadDeDias = 28;
    } else if (numeroMes === 4 || numeroMes === 6 || numeroMes === 9 || numeroMes === 11){
        cantidadDeDias = 30;
    } else {
        cantidadDeDias = 31;
    }
    console.log("La cantidad de dias del mes de "+meses[numeroMes-1]+" es "+cantidadDeDias);
}
// otra forma con Switch case
/*
if (numeroMes > 12 || numeroMes < 1) {
    console.log('El numero ingresado esta fuera de rango, por favor ingrese un numero del 1 al 12.');
} else {
    let cantidadDeDias;
    switch (numeroMes) {
        case 2:
            cantidadDeDias = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            cantidadDeDias = 30;
            break;
        default:
            cantidadDeDias = 31;
            break;
    }
    console.log("La cantidad de dias del mes de "+meses[numeroMes-1]+" es "+cantidadDeDias);
} */
// otra forma mas sencilla
/*
if (numeroMes > 12 || numeroMes < 1) {
    console.log('El numero ingresado esta fuera de rango, por favor ingrese un numero del 1 al 12.');
} else {
let cantidadDeDias = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
console.log("La cantidad de dias del mes de "+meses[numeroMes-1]+" es "+cantidadDeDias[numeroMes-1]);
} */
