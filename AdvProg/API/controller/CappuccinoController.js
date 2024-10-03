import mongoose from 'mongoose';
//const capu = require ('../model/Cappuccinno')
import Cappuccino from '../model/Cappuccinno.js';


export class CappuccinoController 
{
    constructor()
    {
        console.log ('we created a controller');
    }

    saveCappuccinoExample(req, res)
    {
        mongoose.connect(
            'mongodb+srv://amanoisgod:dragonballzkai@clustercappuccino.x7hwl3q.mongodb.net/?retryWrites=true&w=majority', 
             () =>
             console.log('connected to Mongo Atlas') // mensaje de éxito al conectarse a la base de datos
        );

        console.log('saving caramel cappuccino as an example');
        
        //imprimimos el cuerpo de la petición recibida
        console.log(req.body);
        const cappuccinoToStore = new Cappuccino(
            {
                name: req.body.name,
                price: req.body.price,
                size: req.body.size,
                sugar_type: req.body.sugar_type,
                cinnamon: req.body.cinnamon
            }
        );
        console.log(cappuccinoToStore);

        cappuccinoToStore.save();
        res.send("caramel cappuccino saved");
    }    
}


//return res.json(users);
//return res.status(500).end();