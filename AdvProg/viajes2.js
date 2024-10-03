viajeros = [
    {name: "Alejo",
    identification: "123",
    mail: "alejo123@hotmail.com",
    viajes: [
        {
            departure: "Medellín",
            destination: "Huila",
            totalcost: 550
        },
        {
            departure: "Barrancabermeja",
            destination: "Barranquilla",
            totalcost: 300
        }
    ]},
    {name: "Pepo",
    identification: "456",
    mail: "pepo456@hotmail.com",
    viajes: [
        {
            departure: "Cali",
            destination: "Cartagena",
            totalcost: 400
        },
        {
            departure: "Bucaramanga",
            destination: "Bogotá",
            totalcost: 200
        }
    ]}
]

function calctotal(array) {
    cantidadviajes = array.length
    var e = 0, sumaviaje = 0
    while (e < cantidadviajes) {
        
        sumaviaje = sumaviaje + array[e++].totalcost
    }
    return sumaviaje;
    
}

function imprimirviajeros(arreglo) {
    var i = 0, ArrayLen = arreglo.length
    while(i < ArrayLen){
        console.log("El viajero "+(i+1)+" se llama: "+arreglo[i].name)
        console.log("Su cédula es: "+arreglo[i].identification)
        console.log("Su correo eléctronico es: "+arreglo[i].mail)
        
        var totalviaje = calctotal(arreglo[i].viajes)
        
        console.log("Gastó un total de "+totalviaje)
        i = i+1
    }
}

imprimirviajeros(viajeros)