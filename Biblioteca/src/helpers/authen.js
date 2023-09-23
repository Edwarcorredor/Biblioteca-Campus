import bcrypt from "bcrypt";
import Model from "../models/Model.js";

const login = async ({email, password}) => {
    try {
        if (!email || !password){
            throw new Error("Faltan datos", 400);
        }
        const user = await Model.loginUser(email);
        
        if (!user){
            throw new Error("Usuario no encontrado", 400);
        }
            
        const valid = await bcrypt.compare(password, user.password);
        if (!valid){
            throw new Error("Contraseña o correo incorrectos", 400);
        }   
        return user;

    } catch (error) {
        return error; 
    }
};

export default login;