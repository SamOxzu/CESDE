function message1() {
    console.log("Hola mundo desde Función...");
}

let message2 = () => console.log("Hola desde otra función")
function callback1(fmessage) {
    fmessage()
}

// Ejecutar callback1
callback1(message1);
// message2();
callback1(message2);

function fsaludar(nombre) {
    console.log(`Hi, ${nombre}`);
}

function greeting1(fngreeting) {
    var name = "Pepito Perez";
    fngreeting(name)
}

// Ejecutar greeting que es el callback
greeting1(fsaludar)

// Generar una función que permita invocar otra función que permita elevr un número a cualquier potencia

function poten(n1,n2) {
    console.log();
}