import express from 'express';
const app = express();

import {CappuccinoController} from './controller/CappuccinoController.js';
const myLilController =  new CappuccinoController();

import parser from 'body-parser';
app.use(parser.json());

app.get('/', function (req, res){
    res.send("hello world");
});

app.post('/list', function (req, res){
    res.send("metodo post");
});

app.post('/saveCappuccinoExample', myLilController.saveCappuccinoExample)


app.listen(1336);
