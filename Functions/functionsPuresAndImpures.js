//funciones puras e impuras
/***Side effects:
    1. Modificar varibales globales
    2. Modificar parámetros
    3. Solicitudes http
    4. Imprimir mensajes en pantalla o en consola
    5. Manipulacion del DOM
    6. Obtener la hora actual
**/
//Funcion pura
function sum(a, b){
    return a + b;
}
function square(x){
    return x*x;
}
function addTen(y){
    return y + 10;
}
//Funcion impura
function sum(a, b){
    cnsole.log("A: ", a);
    return a + b;
}

let total = 0;
function sumWithSideEffect(a)
{
    total += a;
    return total;
}
const number = 5;
const finalResult = addTen(square(number));
console.log(finalResult);
