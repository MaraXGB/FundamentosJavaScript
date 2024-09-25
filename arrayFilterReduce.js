// Metodos que iteran un array
// Metodos no modifican el array original (Inmutabilidad)

//filter()
const numbers = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = numbers.filter(number =>  number % 2 === 0);
console.log(numbers);
console.log(evenNumbers);

//reduce() - caso 1
const numbersReduce = [1,2,3,4,5];
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(numbersReduce);
console.log(sum);

//reduce() - caso 2
const words = ['apple','banana','hello','apple','hello','bye'];
const repitedWords =  words.reduce((accumulator,currentValue) => {
    if(accumulator[currentValue]){
        accumulator[currentValue]++;
    }
    else{
        accumulator[currentValue] = 1;
    }
    return accumulator;
},{});

console.log(repitedWords);