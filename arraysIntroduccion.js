//Formatos de arrays
// 1. new Array() or Array()
const fruits = Array('apple', 'banana', 'orange');
console.log(fruits);

const jusOneNumber = Array (12);
console.log(jusOneNumber);

const numbers = Array(1,2,3,4,5);
console.log(numbers);

//2. Array literal syntax
const oneNumber = [4];
console.log(oneNumber);

const emptyArray = [];
console.log(emptyArray);

const sports = ['soccer', 'tennis', 'rugby'];
console.log(sports);

const recipeIngredients = [
    'Flour',
    true,
    2,
    {
        ingredients: 'Milk',
        quantity: '1 cup'
    },
    false
];
console.log(recipeIngredients);

//Accesing array elements

const firstFruit = fruits[0];
console.log(firstFruit);

//lenght property
const numberOfFruits = fruits.length;
console.log(numberOfFruits);

// Mutability - agrega al mismo array un nuevo elemento
fruits.push('watermelon');
console.log(fruits);

//Inmutability -> agrega en nueva variable el array fruit y le agrega nuevo array
const newFruits = fruits.concat(['grape', 'kiwi']);
console.log(fruits);
console.log(newFruits);

// Cheking arrays with Array.isArray() -> return bool
const isArray = Array.isArray(fruits);
console.log(isArray);

//Practical exercise: sum all elements of an array
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);