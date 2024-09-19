/** Black friday
 * Precio producto
 * porcentaje de descuento
 * function nombre(parametro1, parametro2..){
 *   codigo que cambie el valor
 *   return valor;
 * }
 * //lamada de la funcion
 * nombre(argumento1, argumento2);
 */
function calculateDiscountedPrice(price, percentageDiscount){
    const discount = price * (percentageDiscount/100);
    priceWithDiscount = price - discount;
    return priceWithDiscount;
}
const originalPrice = 100;
const percentageDiscount =  20;
const finalPrice = calculateDiscountedPrice(originalPrice, percentageDiscount);

console.log("Original price: " + originalPrice);
console.log("Discount: " + percentageDiscount);
console.log("Price With Discount: " + finalPrice);