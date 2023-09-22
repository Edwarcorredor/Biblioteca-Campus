
import {userSchema} from "../dto/modelDTO.js";
import funMapping from "../dto/transformDTO.js";
import Model from "../models/Model.js";
import  login from "../helpers/authen.js";
import { crearToken } from "../config/jwt.js";

class ControllerUser {

  static async loginUser(req, res) {
    try {
        const user = await login(req.body);
        if (!user._id){
          throw new Error(user);
        }    
        const token = await crearToken(user);
        res.status(200).json({ JWT:token, Info:"Usuario logueado correctamente." });
    } catch (err) {
      console.log(err.message);
      res.status(400).json({ error: err.message });
    }
  }
  static async registerUser(req, res) {
    const validacion = userSchema.safeParse(req.body);
    if (!validacion.success) {
      return res.status(400).json({
        message: validacion.error.errors.map(
          (error) => `${error.path} - ${error.message}`
        ),
      });
    }
    const transforUser = funMapping(validacion.data, "users");
    const result = await Model.registerUser(transforUser);
    res.json(result);
  }
  /*
  static async getUser(req, res) {
    const {sub} = req.user
    res.json(await ModelUser.getUser(sub));
  }

  static async setUser(req, res) {
    const validacion = userShema.safeParse(req.body);
    if (!validacion.success) {
      return res.status(400).json({
        message: validacion.error.errors.map(
          (error) => `${error.path} - ${error.message}`
        ),
      });
    }
    const transforUser = funMapping(validacion.data, "user");
    const result = await ModelUser.setUser(transforUser);
    res.json(result);
  }

  static async updateUser(req, res) {
    const {sub} = req.user
    const validacion = userShema.safeParse(req.body);
    if (!validacion.success) {
      return res.status(400).json({
        message: validacion.error.errors.map(
          (error) => `${error.path} - ${error.message}`
        ),
      });
    }
    const transforUser = funMapping(validacion.data, "user");
    const result = await ModelUser.updateUser(transforUser, sub);
    res.status(200).json(result);
  }

  static async deleteUser(req, res) {
    const {sub} = req.user
    const result = await ModelUser.deleteUser(sub);
    res.json(result);
  }*/
}

export default ControllerUser;
