// Manejo de Strings
//Inciso a.
let cita = "Tres tristes tigres comen trigo en un trigal";
let substring = "tigres comen trigo";
let tamañoDeCita = cita.length;
console.log("El tamaño de la cita es: "+tamañoDeCita);
// Inciso b.
let indice = cita.indexOf(substring);
console.log("El indice del substring es: "+indice);
//Inciso c.
citaRevisada = cita.slice(0,indice)+substring;
console.log(citaRevisada);
