class Persona {
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola! mi nombre es ${this.nombre}`);
    }
}

const persona1 = new Persona("Mara", "Guerrero",30);
persona1.saludar();