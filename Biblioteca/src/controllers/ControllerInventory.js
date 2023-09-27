import funMapping from "../dto/transformDTO.js";
import Model from "../models/Model.js";
import { InventorySchema } from "../dto/modelDTO.js";

class ControllerInventory{

    static async insertInventory (req, res){
      const datos = req.body;
      const transformDatos = {
        ...datos,
        id_product: parseInt(datos.id_product),
        quantity_inventory: parseInt(datos.quantity_inventory),
        entryDate_inventory: new Date(datos.entryDate_inventory),
      };   
      const validation = InventorySchema.safeParse(transformDatos);
      if (!validation.success) {
          return res.status(401).json({
            message: validation.error.errors.map(
              (error) => `${error.path} - ${error.message}`
            ),
          });
      }
      const transformData = funMapping(validation.data, "inventory");
      const result = await Model.insertInventory(transformData);
      res.json(result);
    }

    static async updateInventory(req, res){
      const datos = req.body;
      const transformDatos = {
        ...datos,
        ID: parseInt(datos.ID),
        id_product: parseInt(datos.id_product),
        quantity_inventory: parseInt(datos.quantity_inventory),
        entryDate_inventory: new Date(datos.entryDate_inventory),
      };
        const validation = InventorySchema.safeParse(transformDatos);
        if (!validation.success) {
            return res.status(400).json({
              message: validation.error.errors.map(
                (error) => `${error.path} - ${error.message}`
              ),
            });
        }
        const transformData = funMapping(validation.data, "inventory");
        console.log(transformData);
        const results = Model.updateInventory(transformData);
        res.json(results); 
    }
}

export default ControllerInventory;