// Metodos que modifican el array original (Mutabilidad)
//push()
const countries = ['USA','Colombia','Venezuela'];
const newCountries = countries.push('Canada', 'Argentina');

console.log(countries);
console.log(newCountries); // devuelve el nuevo lenght del array

// pop()
const removeCountry = countries.pop()

console.log(countries);
console.log(removeCountry); // devuelve el valor eliminado