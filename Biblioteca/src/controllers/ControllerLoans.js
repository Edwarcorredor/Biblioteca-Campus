import funMapping from "../dto/transformDTO.js";
import Model from "../models/Model.js";
import { LoanSchema } from "../dto/modelDTO.js";

class ControllerLoan{

    static async insertLoan(req, res){
        const validation = LoanSchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({
              message: validation.error.errors.map(
                (error) => `${error.path} - ${error.message}`
              ),
            });
        }

        const transformData = funMapping(validation, "loans");
        const result = await Model.insertLoan(transformData);
        res.json(result);
    }
}

export default ControllerLoan