import ControllerInventory from "../controllers/ControllerInventory.js";
import { Router } from "express";

const inventoryRouter = Router();

inventoryRouter
    .post('/crear', ControllerInventory.insertInventory)
    .put('/actualizar', ControllerInventory.updateInventory)

export default inventoryRouter;