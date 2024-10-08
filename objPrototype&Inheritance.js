class Animal{
    constructor(nombre, tipo){
        this.nombre = nombre;
        this.tipo = tipo;
    }
    emitirSonido(){
        console.log("El animal emite un sonido");
    }
}

class Perro extends Animal{
    constructor(nombre, tipo, raza){
        super(nombre,tipo);
        this.raza = raza;
    }
    emitirSonido(){
        console.log("El perro ladra");
    }
    correr(){
        console.log(`${this.nombre} corre muy rapido`);
    }
}
const perro1 = new Perro("Mailo", "Perro", "Cocker");

console.log(perro1);
perro1.correr();
perro1.emitirSonido();

Perro.prototype.nuevoMetodo = function(){
    console.log("Este es un nuevo metodo");
};

perro1.nuevoMetodo();