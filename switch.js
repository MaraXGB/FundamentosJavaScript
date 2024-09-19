let frutaUsuario = "Uvas";

switch(frutaUsuario){
    case "Manzanas":
        console.log("Las manzanas tienen un precio de: 20$ el kilo");
        break;
    case "Peras":
        console.log("Las peras tienen un precio de: 24$ el kilo");
        break;
    case "Bananas":
        console.log("Las bananas tienen un precio de: 14$ el kilo");
        break;
    case "Mangos":
    case "Fresas":
        console.log("Las fresas y los mangos tienen un precio de: 18$ el kilo");
        break;
    default:
        console.log(`Lo siento, no contamos con ${frutaUsuario}, deseas al mas?`);
}