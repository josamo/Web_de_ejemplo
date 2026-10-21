
function EleccionAleatoria(){
    const opciones = ['piedra', 'papel', 'tijera'];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

let partidas = 0;
let ganadas = 0;
let empatadas = 0;
let perdidas = 0;

function PiedraPapelTijera(jugador){
    let selección = jugador;
    const maquina = EleccionAleatoria();
    partidas++;
 
if (seleccion == maquina) {
  document.getElementById("pantalla").value = "Empate";
  empatadas++;
}
else if (selección == "piedra" && maquina == "tijera" || selección == "papel" && maquina == "piedra"
    || selección == "tijera" && maquina == "papel"){
    document.getElementById("pantalla").value = "Gana el jugador";
    ganadas++;
}

else {
    document.getElementById("pantalla").value = "Gana la maquina";
    perdidas++;
}
document.getElementById("jugada-jugador").textContent = "Tu elección: " + jugador;
document.getElementById("jugada-maquina").textContent = "Elección de la máquina: " + maquina;
document.getElementById("partidas").textContent = "Partidas jugadas: " + partidas;
document.getElementById("ganadas").textContent = "Partidas ganadas: " + ganadas;
document.getElementById("empatadas").textContent = "Partidas empatadas: " + empatadas;
document.getElementById("perdidas").textContent = `Partidas perdidas: ${perdidas}`;
}

