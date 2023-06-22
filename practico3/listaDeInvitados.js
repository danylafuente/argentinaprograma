let personas =["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro", "Emilia"];
let rechazados = [];
let admitidos = [];
for (let i = 0; i < personas.length; i++) {
    if (personas[i] ==="Jose" || personas[i]==="Sofia") {
        rechazados.push(personas[i]);
    } else {
        admitidos.push(personas[i]);
    }
}

let listaAdm = "La lista de invitados admitidos es:";
let listaRec = "La lista de invitados rechazados es:";

let j = 0;
while (j < 2) {    //EXTRA iteramos 2 veces los bucles de impresión de listas, el segundo ciclo imprime la lista ordenada.
    for (let i = 0; i < admitidos.length-1; i++) {
        listaAdm +=" "+admitidos[i]+",";
    }
    listaAdm = listaAdm.slice(0, -1)+" y "+admitidos[admitidos.length - 1]+"."; //caso borde
    
    for (let i = 0; i < rechazados.length-1; i++) {
        listaRec += " "+rechazados[i]+",";
    }
    listaRec = listaRec.slice(0, -1)+" y "+rechazados[rechazados.length - 1]+"."; //caso borde
    
    console.log(listaAdm);
    console.log(listaRec);
    rechazados.sort();  //EXTRA, ordena alfabeticamente el array
    admitidos.sort();   //EXTRA
    listaAdm = "La lista ordenada de invitados admitidos es:";  //EXTRA
    listaRec = "La lista ordenada de invitados rechazados es:";  //EXTRA
    j++;
}

//EXTRA, opción alternativa de ejercicio EXTRA, repitiendo la tarea anterio en vez de iterarla 2 veces
/*
let rechazadosOrd = structuredClone(rechazados).sort();  //EXTRA, clona los arrays y los ordena
let admitidosOrd = structuredClone(admitidos).sort();  //EXTRA

let listaAdmOrd = "La lista ordenada de invitados admitidos es:";
let listaRecOrd = "La lista ordenada de invitados rechazados es:";

for (let i = 0; i < admitidosOrd.length-1; i++) {
    listaAdmOrd +=" "+admitidosOrd[i]+",";
}
listaAdmOrd = listaAdmOrd.slice(0, -1)+" y "+admitidosOrd[admitidosOrd.length - 1]+"."; //caso borde

for (let i = 0; i < rechazadosOrd.length-1; i++) {
    listaRecOrd += " "+rechazadosOrd[i]+",";
}
listaRecOrd = listaRecOrd.slice(0, -1)+" y "+rechazadosOrd[rechazadosOrd.length - 1]+"."; //caso borde

console.log(listaAdmOrd);
console.log(listaRecOrd);
*/