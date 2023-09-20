import conexion from "../config/atlas.js";
import getNextSequenceValue from "../db/autoIncrement.js";
import { hash } from "bcrypt";

const db = await conexion();
const Usuarios = db.collection('users');

export default class Model {

    /**
     ** Funcion para verificar si existe el vendedor con ese correo
     */

    static async login(email) {
        try {
            const getUser = await Usuarios.findOne({ email: email });
            return getUser;
        } catch (error) {
            return error;
        }
    }

    static async registerUser(datos){
        try{
            const checkEmail = await Usuarios.findOne({ email: datos.email });
            if (checkEmail) {
                return "Correo ya registrado"
            }
            const userInsert = await Usuarios.insertOne({
                _id: await getNextSequenceValue(db, "users"),
                ...datos,
                password: await hash(datos.password, 10),
            });
            return userInsert;
        }catch (error) {
            console.log("🚀 ~ file: user.controller.js:14 ~ userPost ~ error:", error);
            return error 
        }     
    }
}