import funMapping from "../dto/transformDTO.js";
import Model from "../models/Model.js";
import { InventorySchema } from "../dto/modelDTO.js";

class ControllerInventory{

    static async insertInventory (req, res){
      const datos = req.body;
      const transformDatos = {
        ...datos,
        status_inventory: "In stock",
        stock_inventory: parseInt(datos.stock_inventory),
        entryDate_inventory: new Date(datos.entryDate_inventory),
        quantity_inventory: parseInt(datos.stock_inventory)
      };   
      const validation = InventorySchema.safeParse(transformDatos);
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
      const transformData = funMapping(validation.data, "inventory");
      console.log(transformData);
      const result = await Model.insertInventory(transformData);
      res.json(result);
    }

    static async updateInventory(req, res){
      const datos = req.body;
      const transformDatos = {
        ...datos,
        stock_inventory: parseInt(datos.stock_inventory),
        entryDate_inventory: new Date(datos.entryDate_inventory),
        quantity_inventory: parseInt(datos.quantity_inventory)
      };
        const validation = InventorySchema.safeParse(transformDatos);
        if (!validation.success) {
            return res.status(400).json({
              message: validation.error.errors.map(
                (error) => `${error.path} - ${error.message}`
              ),
            });
        }
        const id = parseInt(req.params.id);
        const transformData = funMapping(validation.data, "inventory");
        const results = await Model.updateInventory(id, transformData);
        res.json(results); 
    }

    /* static async getInventory(req, res){
      const name = req.query.name;

    } */
}

export default ControllerInventory;