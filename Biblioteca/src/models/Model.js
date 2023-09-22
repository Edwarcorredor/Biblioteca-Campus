import conexion from "../config/atlas.js";
import getNextSequenceValue from "../db/autoIncrement.js";
import { hash } from "bcrypt";

const db = await conexion();
const Usuarios = db.collection('users');
const Prestamos = db.collection('loans');

export default class Model {

    /**
     ** Funcion para verificar si existe el vendedor con ese correo
     */

    static async loginUser(email) {
        try {
            const getUser = await Usuarios.findOne({ email: email });
            return getUser;
        } catch (error) {
            return error;
        }
    }

    /**
     * * Funcion para registrar el usuario
     */

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
    /**
     * *Funcion para actualizar la información del usuario
     */
    static async updateUser(datos) {
        try{
            const checkEmail = await Usuarios.findOne({ email: datos.email });
            if(checkEmail.email !== datos.email || !checkEmail) {
                return "Ya existe el email"
            }

            const filter = { _id: datos._id };
            datos.password = await hash(datos.password, 10);
            const update = { $set: datos };
            const result = await Usuarios.updateOne(filter, update);

            return result
        } catch (error) {
            return error
        }

    }

    static async insertLoan(datos){
        try{
            const loanInsert = await Prestamos.insertOne({
                _id: getNextSequenceValue(db, "loans"),
                ...datos
            })
            return loanInsert
        } catch (error) {
            return error 
        }
    }

    static async updateLoan(datos){
        try{
            const filter = { _id:datos._id};
            const loanUpdate = await Prestamos.updateOne(filter, {$set: {status: datos.status}})
            return loanUpdate
        } catch(error){
            return error
        }
    }

    

}