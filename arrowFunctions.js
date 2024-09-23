const greeting = function(name){
    return `Hi, ${name}`;
}
//Arrow function - explicit return
const newGreeting = (name) => {
    return `Hi, ${name}`;
}
//ArrowFunction - implicit return
const newImplicitGreeting = name => `Hi, ${name}`;
const newImplicitGreetingWithTwoParameters = (name, lastname) => `Hi, ${name} ${lastname}`;

//Lexical Binding
const finctionalCharacter = {
    name: "Uncle Ben",
    messageWithTraditionalFunction: function (message){
        console.log(`${this.name} say: ${message}`)
    },
    messageWithArrowFunction: (message) =>
        console.log(`${this.name} say: ${message}`)
}
finctionalCharacter.messageWithTraditionalFunction("Beware with doctor octopus.");
finctionalCharacter.messageWithArrowFunction("With reat power comes great responsability.");
