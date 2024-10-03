import express from 'ex'
import { userRoute } from './router/userRouter';
import { dataBase } from './config/dataBase';
const app = express();
const puerto = 3000;
try {
    await dataBase.authenticate();
    dataBase.sync();
    console.log("La conexión a la base de datos es correcta")
} catch (error) {
    console.log('No se puede conectar a la base de datos')
    console.log('Motivo' + error)
}

app.use(express.urlencoded({extended:true}))
app.set('View engine', 'pug')
app.set(express.static('public'))
app.use(userRoute);

app.listen(puerto, ()=>{
    console.log(`Servidor corriendo en el puerto ${puerto}`);
})