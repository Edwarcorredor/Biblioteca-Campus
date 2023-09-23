import conexion from "../config/atlas.js";
import getNextSequenceValue from "../db/autoIncrement.js";
import { hash } from "bcrypt";

const db = await conexion();
const Usuarios = db.collection('users');
const Prestamos = db.collection('loans');
const Reservations = db.collection('reservations');
const Inventory = db.collection('inventory');
const Products = db.collection('products');

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

    static async insertReservation(datos){
        try{
            const reservationInsert = await Reservations.insertOne({
                _id: getNextSequenceValue(db, "reservations"),
                ...datos
            })
            return reservationInsert
        } catch (error) {
            return error 
        }
    }

    static async updateReservation(datos){
        try{
            const filter = { _id:datos._id};
            const reservationUpdate = await Reservations.updateOne(filter, {$set: {status: datos.status}})
            return reservationUpdate
        } catch(error){
            return error
        }
    }

    static async insertInventory(datos){
        try{
            const inventoryInsert = await Inventory.insertOne({
                _id: getNextSequenceValue(db, "inventory"),
                ...datos
            });
            return inventoryInsert
        }catch(error){
            return error
        }
    }

    static async updateInventory(datos){
        try{
            const inventoryUpdate = await Inventory.updateOne({_id: datos._id},
                {$set: {datos}});
            return inventoryUpdate
        }catch(error){
            return error
        }
    }

    static async insertProduct(datos){
        try{
            const productInsert = await Products.insertOne({
                _id: getNextSequenceValue(db, "products"),
                ...datos
            });
            return productInsert
        }catch(error){
            return error
        }
    }

    static async updateProduct(datos){
        try{
            const productUpdate = await Products.updateOne({_id: datos._id},
                {$set: {datos}});
            return productUpdate
        }catch(error){
            return error
        }
    }
}