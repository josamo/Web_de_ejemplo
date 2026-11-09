function EleccionAleatoria(){
    const opciones = ['piedra', 'papel', 'tijera'];
    return opciones[Math.floor(Math.random() * opciones.length)];
}



let partidas = 0;
let ganadas = 0;
let empatadas = 0;
let perdidas = 0;

function PiedraPapelTijera(jugador){
    let seleccion = jugador;
    const maquina = EleccionAleatoria();
    partidas++;

const iconos = {
    
        empate: "../imagenes/empate.png",
        ganador: "../imagenes/win.png",
        perdedor: "../imagenes/lose.png"
    }; 

if (seleccion == maquina) {
  document.getElementById("pantalla").value = "Empate";
  empatadas++;
  document.getElementById("imagen-resultado").src = iconos.empate;
}
else if (seleccion == "piedra" && maquina == "tijera" || seleccion == "papel" && maquina == "piedra"
    || seleccion == "tijera" && maquina == "papel"){
    document.getElementById("pantalla").value = "Gana el jugador";
    ganadas++;
    document.getElementById("imagen-resultado").src = iconos.ganador;
}

else {
    document.getElementById("pantalla").value = "Gana la maquina";
    perdidas++;
    document.getElementById("imagen-resultado").src = iconos.perdedor;
    }
}
document.getElementById("jugada-jugador").textContent = "Tu elección: " + jugador;
document.getElementById("jugada-maquina").textContent = "Elección de la máquina: " + maquina;
document.getElementById("partidas").textContent = "Partidas jugadas: " + partidas;
document.getElementById("ganadas").textContent = "Partidas ganadas: " + ganadas;
document.getElementById("empatadas").textContent = "Partidas empatadas: " + empatadas;
document.getElementById("perdidas").textContent = `Partidas perdidas: ${perdidas}`;


