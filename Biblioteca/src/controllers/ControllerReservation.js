import Model from "../models/Model.js";
import funMapping from "../dto/transformDTO.js";
import { ReservationSchema } from "../dto/modelDTO.js";

class ControllerReservation{

  static async insertReservation(req, res){
  const datos = req.body;
  const transformDatos = {
    ...datos,
    date_reservation: new Date(datos.date_reservation),
    status_loan: "pending",
    quantity_loan: parseInt(datos.quantity_loan)
  };
  const validation = ReservationSchema.safeParse(transformDatos);
  if (!validation.success) {
      return res.status(400).json({
        message: validation.error.errors.map(
          (error) => `${error.path} - ${error.message}`
        ),
      });
  }
  const transformData = funMapping(validation.data, "reservations");
  transformData.userId = req.user._id
  console.log(transformData);
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

  const transformData = funMapping(validation, "reservations");
  const result = await Model.updateReservation(transformData);
  res.json(result);
  }

}

export default ControllerReservation;