/*
Estructura de datos

key / value
Objeto{
  propiedad: valor,
  propiedad2: valor2,
  propiedad3: valor3
}

*/

const persona ={
    nombre: "Mara",
    edad: 30,
    direccion:{
        calle: "calle 55 sur # 104-48, Bogota, Colombia",
        ciudad: "Bogotá"
    },
    saludar(){
        console.log("Hola! mi nombre es "+ persona.nombre);
    }
}
console.log(persona);
persona.saludar();

// agregar propiedad
persona.telefono = "318 3918222";
console.log(persona.telefono);

// agregar funcion a objeto
persona.despedir = () => {
  console.log("Adios!");
}
persona.despedir();

// Borrar propiedades y metodos
///Propiedad
delete persona.telefono;
/// Metodo
delete persona.despedir;
console.log(persona);