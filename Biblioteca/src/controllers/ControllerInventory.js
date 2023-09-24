import funMapping from "../dto/transformDTO";
import Model from "../models/Model";
import { InventorySchema } from "../dto/modelDTO";

class ControllerInventory{

    static async insertInventory (req, res){
        const validation = InventorySchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({
              message: validation.error.errors.map(
                (error) => `${error.path} - ${error.message}`
              ),
            });
        }
        const transformData = funMapping(validation, "inventory");
        const result = await Model.insertInventory(transformData);
        res.json(result);
    }

    static async updateInventory(req, res){
        const validation = InventorySchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({
              message: validation.error.errors.map(
                (error) => `${error.path} - ${error.message}`
              ),
            });
        }
        const transformData = funMapping(validation, "inventory");
        const id = req.params.id;
        const results = Model.updateInventory(id, transformData);
        res.json(results); 
    }
}

export default ControllerInventory;