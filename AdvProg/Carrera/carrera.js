import express from 'express';
const app = express();

app.get('/', function (req,res){
    res.send("Hello World");
});

app.post('/list', function (req,res){
    res.send("Método Post");
});

app.post('/cappuccino', function(req,res){
    res.send("Nombre: Vainilla, Azúcar: 20mg, Leche: Deslactosada, Canela: Sí")
});

app.listen(3000);