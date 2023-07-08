const readlineSync = require('readline-sync');

const OPCIONES = ['piedra','papel','tijeras'];
const RESULTADOS = ['empate', 'Gana la computadora', 'Gana el usuario'];

function obtenerJugadaComputadora() {
    return OPCIONES[parseInt(Math.random()*3)];
}

function obtenerJugadaUsuario() {
    let jugada = readlineSync.question("Ingresa tu eleccion (piedra, papel o tijeras): ");
    jugada = jugada.toLowerCase();
    while (!OPCIONES.includes(jugada)) {
        jugada = readlineSync.question("Eleccion invalida, ingresa una opcion valida (piedra, papel o tijeras): ");
        jugada = jugada.toLowerCase();
      }
    return jugada;
}

function determinarGanador(computador, usuario) {
    if (computador === usuario) {
        return RESULTADOS[0];
    } else if (computador===OPCIONES[0]&&usuario===OPCIONES[2]||
                computador===OPCIONES[1]&&usuario===OPCIONES[0]||
                computador===OPCIONES[2]&&usuario===OPCIONES[1]) {
        return RESULTADOS[1];
    }else {
        return RESULTADOS[2];
    } 
}

//let jugadaComputador = obtenerJugadaComputadora();
//let jugadaUsuario = obtenerJugadaUsuario();
//let resultado = determinarGanador(jugadaComputador, jugadaUsuario);
//console.log(`La computadora eligio: ${jugadaComputador}`);
//console.log(`El usuario eligio: ${jugadaUsuario}`);
//console.log(`El resultado fue: ${resultado}`);

function determinarGanadorPartida () {
    let nroJugadas = readlineSync.questionInt("Ingresa el Nro de jugasdas que quieres que tenga la partida: ");
    let difCompUsr = 0
    let jugadaComputadorP;
    let jugadaUsuarioP;
    let resultadoP;
    /*la segunda condicion del while hace que el bucle termine cuando las jugadas ganadas por alguno
    de los jugadores (computadora o usuario) sea mayor a las que quedan por jugar */
    while ((nroJugadas > 0) && (nroJugadas >= Math.abs(difCompUsr))) {
        jugadaComputadorP = obtenerJugadaComputadora();
        jugadaUsuarioP = obtenerJugadaUsuario();
        resultadoP = determinarGanador(jugadaComputadorP, jugadaUsuarioP);
        if (resultadoP === RESULTADOS[1]) {
            difCompUsr++ ;
        } else if (resultadoP === RESULTADOS[2]) {
            difCompUsr-- ;
        }
        console.log(`La computadora eligio: ${jugadaComputadorP}`);
        console.log(`El usuario eligio: ${jugadaUsuarioP}`);
        console.log(`El resultado fue: ${resultadoP}`);
        //console.log("A favor de la computadora : "+difCompUsr);
        nroJugadas--;
    }
    let resultadoF;
    if (difCompUsr===0) {
        resultadoF = RESULTADOS[0];
    } else if (difCompUsr > 0) {
        resultadoF = RESULTADOS[1];
    } else{
        resultadoF = RESULTADOS[2];
    }
    return resultadoF;
}

let resultadoPartida = determinarGanadorPartida();
console.log("El resultado Final fue: "+resultadoPartida);