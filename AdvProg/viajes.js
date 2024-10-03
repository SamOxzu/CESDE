let vector = [{CiudadOrigen:"Pereira", CiudadDestino:"Manizales", Precio:250000},{CiudadOrigen:"Manizales", CiudadDestino:"Quindio", Precio:300000},{CiudadOrigen:"Quindio", CiudadDestino:"Medellín", Precio:200000}]

/*for (let i = 0; i < vector.length; i++) {
    let SumaPrecio = vector.Precio[i];
}*/

function VectorProm(array) {
    var i = 0, summ = 0, ArrayLen = array.length;
    while (i < ArrayLen) {
        summ = summ + array[i++].Precio;
}
    return summ / ArrayLen;
}

var a = VectorProm(vector);

console.log(a)