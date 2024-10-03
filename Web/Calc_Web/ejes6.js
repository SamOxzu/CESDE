console.log("Hola mundo, desde JS");
// Definición de Variables
//Si se usa let no se puede redeclarar la variable, mientras que con var sí. Se recomienda usar let siempre.
let nombre = "Pepito Perez";
let salario = 2500000;

// Impresión de JS Básico
console.log("El nombre es:"+nombre);
console.log("El salario es:"+salario);

// Impresión de JS Avanzado
console.log(`El nombre del empleado es ${nombre} y el salario es ${salario}`); // Se usa la tilde invertida para poder aplicar esto
let estado = false;
//operador ternario
/*if (estado) {
    console.log("el empleado esta activo");
}
else{
    console.log("el empleado NO esta activo");
}*/
console.log(estado ? "Activo":"Inactivo"); // una especie rara de if que se toma menos lineas, derecha true e izquierda false(resumen de lo de arriba°)
let bono  = !estado && salario < 3000000 ? 100000:0 //mas fcil que el if:) el condicional va hasta el ? (esto se llama Operador Ternario)
console.log(`el valor del bono es : ${bono}`);
// 14-02-2022
// Listas o Arreglos
arrnros = [56,78,34,89,10];
// recorrer la lista arrnros
for (let pos = 0; pos < arrnros.length; pos++)
{
    console.log(`El dato o número es: ${arrnros[pos]}`);
}

// otra forma de recorrer esa lista
/*
for (nro of arrnros)(
    console.log(numero)
)
*/

for (nro of arrnros)
{
    // %: Módulo de un número (dividido por dos)
    if (nro % 2 == 0)
    {
        console.log(`${nro} X 10 = ${nro * 10}`);
    }
}

for (let num = 1; num < 11; num++)
{
    console.log(`8 X ${num} = ${num*8}`);
}

// Objetos: Son datos de la siguiente forma: {key1: value1, key2:value2, key3:value3...}
datosper = {"cedula":10,"nombre":"Fulano Detal","estado":true,"salario":3500000};
console.log(`Cedula: ${datosper["cedula"]}, Nombre: ${datosper["nombre"]}, Estado: ${datosper["estado"]?"Activo":"Inactivo"}`)

// Ciclo para recorrer un objeto
for (let campo in datosper){
    console.log(`${campo}:${datosper[campo]}`)
}
/*15/02/2022
manejo de funciones
una funcion es un conjunto de instruccione que permite ser invocadas por un progama principal u otra funcion*/
function mensaje(params) {
    console.log("hola mundo desde la funcion mensajes con js");
}

//llamar o invocar la funcion
mensaje()
function promedionotas(n1,n2) {
    if (typeof n1 == "number" && typeof n2 == "number") {
        return (n1+n2) / 2
    }
    else{
        return "los datos enviados no son numericos"
    }
  
}
//utilizar la funcion promedio notas
console.log(promedionotas(5,3));
console.log(promedionotas(2,4));
console.log(promedionotas(2.3, 4.5));
notaprom = promedionotas(4.2,3.6);
console.log(`èl promedio de las notas es: ${notaprom}`);
notap = promedionotas(4,5);
console.log(`mi promedio es: ${notap}`);
if (promedionotas (3,4) > 3) {
    console.log("aprueba");
}
 else {
      console.log("reprueba");    
 }
// Generar funciones para:

// 1. Retornar el costo de cualquier producto, enviando la cantidad y el valor unitario (ambos datos deben ser numéricos)
function costo(cant,val) {
    if (typeof cant == "number" && typeof val == "number") {
        return (cant*val);
    }
    else{
        return "los datos enviados no son numericos";
    }    
}
costotal = costo(6,500);
console.log(`El costo total es: ${costotal}`);

// 2. Retornar Aprueba, Habilita o Reprueba si la definitiva de 3 notas (notal= 25%, nota2 = 25% y nota3-50%)
function promedionotas(n1,n2,n3) {
    if (typeof n1 == "number" && typeof n2 == "number" && typeof n3 == "number") {
        nota1 = n1*0.25;
        nota2 = n2*0.25;
        nota3 = n3*0.50;
        notatotal = nota1+nota2+nota3;
        
        if (notatotal >= 3.0) {
            return "Aprueba";
        }
        else if (notatotal <= 2.9 && notatotal > 2.0) {
            return "Habilita";
        }
        else{
            return "Pierde";
        }
    }
    else{
        return "los datos enviados no son numericos";
    }  
}
informe = promedionotas(4.5,2.5,5.0);
console.log(`El estudiante ${informe}`);

// ***** 3. Retornar la serie de fibonacci de los primeros N numeros de ésta
/*
inicio
ant = 0
sig = 1
imprima ant, sig
para i = 1,7 haga
suma = ant + sig
imprima suma
ant = sig
sig  = suma
fin para
fin
*/ 

function fibonacci(cantnumeros) {
    ant = 0;
    sig = 1;
    fibonacci = ant + ","+sig +",";
    for (let i = 3; i <= cantnumeros; i++) {
        suma = ant + sig;
        fibonacci = fibonacci + suma +","
        //console.log(suma);
        ant = sig;
        sig = suma;
         
    }
    return fibonacci
}


//ejecutr la funcion fibo
console.log(fibonacci(11));

// 4. Retornar el factorial de cualquier número

function factorial(num) {
    if (typeof num == "number")
    {
        let r = 1;
        for(let i = num; i>0; i--){
            
            r *= i;
        }
        return `${r}`
    }
    else{
        return "el dato enviado no es numerico";
    }

}
pepe = factorial(5);
console.log(`El factorial del número introducido es ${pepe}`);

// 5. Retornar el valor en letras (monto escrito) de cualquier número del 1 al 10 */
function escrito(num) {
    if (typeof num == "number")
    {
        switch (num) {
            case 1:
                return "Uno.";
            case 2:
                return "Dos.";
            case 3:
                return "Tres.";
            case 4:
                return "Cuatro.";
            case 5:
                return "Cinco.";
            case 6:
                return "Seis.";
            case 7:
                return "Siete.";
            case 8:
                return "Ocho.";
            case 9:
                return "Nueve.";
            case 10:
                return "Diez.";
        }
    }
}

esc = escrito(9);
console.log(`El número ingresado fue el ${esc}`);