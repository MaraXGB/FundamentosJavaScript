// Metodos que iteran un array
// Metodos no modifican el array original (Inmutabilidad)

//find()

const multiple0f5 = [5,10,15,20];
const firstNumberGreaterThan10 =  multiple0f5.find(number => number >10);

console.log(multiple0f5);
console.log(firstNumberGreaterThan10);

// findIndex()

const randomNumber = [6,14,27,56,48];
const indexNumber = randomNumber.findIndex(number => number > 50);
console.log(randomNumber);
console.log(indexNumber);