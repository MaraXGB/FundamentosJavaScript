// Metodos que iteran un array
// Metodos no modifican el array original (Inmutabilidad)

//map()
const numbers = Array(1,2,3,4,5);
const squareNumbers = numbers.map(num => num*num);
console.log(numbers);
console.log(squareNumbers); // devuelve en forma de array

//forEach()

const colors = ['red','pink','blue'];
const iteratedColors = colors.forEach(color => console.log(color));
console.log(colors);
console.log(iteratedColors);  // returna undefined

// Ejercicio: Fahrenheit to Celsius conversor
const temperaturesInFahrenheit = [32,68,95,212];
const temperaturasInCelsius = temperaturesInFahrenheit.map(fahrenheit => (5/9) * (fahrenheit -32));
console.log('Temperaturas en Fahrenheit: ',temperaturesInFahrenheit);
console.log('Temperaturas en Celsius: ',temperaturasInCelsius);

// Ejercicios: suma de elementos en un array
const newNumbers = [9,8,7,6,5];
let sum =0;
newNumbers.forEach(number => {
    sum+= number;
})
console.log(newNumbers);
console.log(sum);