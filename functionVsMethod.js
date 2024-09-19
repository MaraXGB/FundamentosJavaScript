/**
 * 1. pasar funciones como argumento -> callback
 * 
 */

// function a(){}
// function b (a){}
// b(a);

// //Returnar funciones -> Declaracion de funciones
// function a(){
//     function b(){}
//     return b;
// }

// // Asignar funciones a variable -> Expresión de funcion
// const a = function(){}

// //Tener propiedades y metodos
// function a(){}
// const obj = {}
// a.call(obj)

// //Anidar funciones -> Nested functiones
// function a(){
//     function b(){
//         function c(){}
//     }
//     b();
// }
// a();

//Almacenar funciones en objetos
const rocket = {
    name: "Falcon 9",
    launchMessage: function launchMessage(){
        console.log("Despegando!");
    }
}
rocket.launchMessage();