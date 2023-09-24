import Model from "../models/Model";
import funMapping from "../dto/transformDTO";
import { ReservationSchema } from "../dto/modelDTO";

class ControllerReservation{

  static async insertReservation(req, res){
      const validation = ReservationSchema.safeParse(req.body);
      if (!validation.success) {
          return res.status(400).json({
            message: validation.error.errors.map(
              (error) => `${error.path} - ${error.message}`
            ),
          });
      }
  
      const transformData = funMapping(validation, "reservations");
      const result = await Model.insertReservation(transformData);
      res.json(result);
    }
    
  static async updateReservations(req, res) {
  const validation = ReservationSchema.safeParse(req.body);
  if (!validation.success) {
      return res.status(400).json({
      message: validation.error.errors.map(
          (error) => `${error.path} - ${error.message}`
      ),
      });
  }
  const id = req.params.id;
  const transformData = funMapping(validation, "reservations");
  const result = await Model.updateReservation(id, transformData);
  res.json(result);
  }

}

export default ControllerReservation;