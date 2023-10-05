import { Router } from "express";
import ControllerReservation from "../controllers/ControllerReservation.js";

const reservationRouter = Router();

reservationRouter
    .post('/create', ControllerReservation.insertReservation)
    .put('/:id', ControllerReservation.updateReservations)

export default reservationRouter;