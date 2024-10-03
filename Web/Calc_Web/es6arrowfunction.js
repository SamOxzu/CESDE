// Función Tradicional
function resta(a1,a2) {
    return a1 - a2;
}

// Función Anónima
let restaf = function(a1,a2) {
    return a1 - a2;
}

// Función Flecha
let restaaf = (a1,a2) => a1 - a2;
let restaaf1 = (a1,a2) => {return a1 - a2};

console.log(resta(8,2));
console.log(restaf(8,2));
console.log(restaaf(8,2));

// Crear, con las 3 funciones (Tradicional, Anónima y Flecha), un algoritmo que permita multiplicar 3 números

// Función Tradicional
function mult(a1,a2,a3) {
    return a1 * a2 * a3;
}

// Función Anónima
let multf = function(a1,a2,a3) {
    return a1 * a2 * a3;
}

// Función Flecha
let multaf = (a1,a2,a3) => a1 * a2 * a3;

console.log(mult(8,2,7));
console.log(multf(8,2,7));
console.log(multaf(8,2,7));