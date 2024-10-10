// const persona ={
//     nombre: "Edmara",
//     apellido: "Guerrero"
// }

// Constructor
function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

//Instancia
const persona1 = new Persona("Mara", "Guerrero", 30);
const persona2 = new Persona("Jorge", "Cerpa", 33);
console.log(persona1);
console.log(persona2);

// Agreagr a objeto propiedad General
Persona.prototype.telefono = "318 391 8222";
Persona.prototype.saludar = function(){
    console.log("Hola, me llamo "+ this.nombre);
};
// Especifico
persona1.nacionalidad = "Venezolana";
console.log(persona1);
console.log(persona2);


persona1.saludar();
persona2.saludar();