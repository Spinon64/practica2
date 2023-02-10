function greet(){
    console.log("Hello");
}
greet();

console.log(greet);

function logGreeting(fn){
    fn();
}
logGreeting(greet);

let greetMe = function(){
    console.log("Hello from the function expression");
}
greetMe();

let greetme =()=> {console.log("Hello arrow");}

let saludo =(nombre, tratamiento)=>{
    console.log("hola" + " " + tratamiento + " " + nombre);
}
saludo("chava", "sr.");

let cuadrado = numero => {
    return numero * numero;
}
console.log(cuadrado(4));

let cuadrado2 = numero => numero * numero;
console.log(cuadrado2(2));

let logGreeting3 = (miParametro1) => miParametro1();
logGreeting3(greet);

let logGreeting2 = (miParametro) => miParametro();
logGreeting2(function(){
    console.log("Hello from a function created o the fly")
})

let color = "roja"; 
let talla = "M"; 
let modelo = "Clasica"; 

console.log(`Juan tiene una playera ${color} de talla ${talla} y modelo ${modelo}`)