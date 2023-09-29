import funMapping from "../dto/transformDTO.js";
import Model from "../models/Model.js";
import { ProductSchema } from "../dto/modelDTO.js";

class ControllerProduct{

    static async insertProduct(req, res){
      const datos = req.body;
      const transformDatos = {
        ...datos,
        price_product: parseFloat(datos.price_product),
        available_product: true
      };
        const validation = ProductSchema.safeParse(transformDatos);
        if (!validation.success) {
          console.log(validation.error.errors.map(
            (error) => `${error.path} - ${error.message}`
          ))
            return res.status(400).json({
              message: validation.error.errors.map(
                (error) => `${error.path} - ${error.message}`
              ),
            });
        }
        const transformData = funMapping(validation.data, "products");
        const result = await Model.insertProduct(transformData);
        res.json(result);
    }

    static async updateProduct(req,res){
      const datos = req.body;
      const transformDatos = {
        ...datos,
        price_product: parseFloat(datos.price_product),
        available_product: (datos.available_product == "true") 
      };
        const validation = ProductSchema.safeParse(transformDatos);
        if (!validation.success) {
            return res.status(400).json({
              message: validation.error.errors.map(
                (error) => `${error.path} - ${error.message}`
              ),
            });
        }
        const id = parseInt(req.params.id);
        const transformData = funMapping(validation.data, "products");

        const result = Model.updateProduct(id, transformData)
        res.json(result);
    }
}

export default ControllerProduct;