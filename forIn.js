/*** for in - funciona en objetos
 *   objeto ={
 *      propiedad: valor,
 * }
 *   for(variable in objeto){
 *      codigo
 * }
 */
const listaDeCompras = {
    manzana: 5,
    pera: 3,
    naranja: 2,
    uva: 1
};
//fruta es la propiedad
for (fruta in listaDeCompras){
    console.log(fruta);
}
//listaDeCompras[fruta] es el valor
for (fruta in listaDeCompras){
    console.log(`${fruta} : ${listaDeCompras[fruta]}`);
}
