const numeroSecreto = Math.floor(Math.random() * 10 + 1);
//const numeroJugador = parseInt(prompt("Adivina el numero secreto entre el 1 al 10"));
const numeroJugador = 4;
console.log(`Este el el numero con el que juegas ${numeroJugador}`);

if(numeroJugador === numeroSecreto){
    console.log("Felicidades! adivinaste el numero secreto");
}
else if(numeroJugador < numeroSecreto){
    console.log("El numero es menor, intenta de nuevo");
}
else if(numeroJugador > numeroSecreto){
    console.log("El numero es mayor, intenta de nuevo");
}
