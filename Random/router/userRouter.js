import Express from "express";
import { fomrularioRegistro } from "../controllers/userController";
const userRoute = express.Router();

userRoute.get('/registro', fomrularioRegistro);

export {
    userRoute
}