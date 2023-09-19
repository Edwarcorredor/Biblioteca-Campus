import bcrypt from "bcrypt";
import ModelAuthen from "../models/ModelAuthen.js";

const login = async ({email, password}) => {
    try {
        if (!email || !password){
            return { status: 400, message: "Faltan datos" };
        }
        const user = await ModelAuthen.login(email);

        if (!user){
            return { status: 400, message: "Usuario no encontrado" };
        }
            
        const valid = await bcrypt.compare(password, user.password);
        if (!valid){
            return { status: 400, message: "Contraseña o correo incorrectos" };
        }   
        return user;

    } catch (error) {
        return error; 
    }
};

export default login;