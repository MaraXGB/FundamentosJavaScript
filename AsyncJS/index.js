/**
 * promises()
 * Estados promesas
 * 1. pending - pendiente
 * 2. fullfilled - completado
 * 3. reject - rechazado
 * 
 * Callback
 * 1. resolve - resuelto
 * 2. Reject - rechazado
 * 
 * then() - despues de resulta la promesa
 * catch() - cuando no se resuelve la promesa puede devolver el error
 */

//Estructura
const promise = new Promise((resolve,reject) =>{
   setTimeout(() =>{
      let operationSuccessful = true;
      if(!operationSuccessful){
        resolve("La operación fue exitosa");
     }
     else {
         reject("Fallo la operación");
     }
   }, 2000); // Se debe resolver en 2 segundos
   
});
promise
   .then((successMessage) =>{
    console.log(successMessage);
   })
   .catch((errorMessage) =>{
      console.log(errorMessage);
   })