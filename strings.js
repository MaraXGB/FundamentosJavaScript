// Tipo de datos: string

let string1 = "Hola mundo";
let string2 = 'Javascript es genial';
let string3 = `${string1} feliz :)`;
let string4 = string1 + ' ' + string2;

console.log(string3);
console.log(string4);

let frase = 'Javascript es super genial';
console.log(frase.length); //cantidad de caracteres
console.log(frase.toLocaleLowerCase()); // todos caracteres en minuscula
console.log(frase.toLocaleUpperCase()); // todos caracteres en mayuscula
console.log(frase.substring(0,10)); // copia string (index, ultimo index +1)