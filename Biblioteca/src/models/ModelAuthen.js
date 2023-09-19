import conexion from "../config/atlas.js";

const db = await conexion();


export default class ModelAuthen {

    /**
     ** Funcion para verificar si existe el vendedor con ese correo
     */

    static async login(email) {
        try {
            const con = db.collection("usuarios");
            const getUser = await con.findOne({ email: email });
            return getUser;
        } catch (error) {
            return error;
        }
    }
}