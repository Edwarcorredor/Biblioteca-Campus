import funMapping from "../dto/transformDTO.js";
import Model from "../models/Model.js";
import { ProductSchema } from "../dto/modelDTO.js";

class ControllerProduct{

    static async insertProduct(req, res){
        const validation = ProductSchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({
              message: validation.error.errors.map(
                (error) => `${error.path} - ${error.message}`
              ),
            });
        }
        const transformData = funMapping(validation, "products");
        const result = await Model.insertProduct(transformData);
        res.json(result);
    }

    static async updateProduct(req,res){
        const validation = ProductSchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({
              message: validation.error.errors.map(
                (error) => `${error.path} - ${error.message}`
              ),
            });
        }
        const transformData = funMapping(validation, "products");
        const result = Model.updateProduct(transformData)
        res.json(result);
    }
}

export default ControllerProduct;