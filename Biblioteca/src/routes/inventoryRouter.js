import ControllerInventory from "../controllers/ControllerInventory.js";
import { Router } from "express";

const inventoryRouter = Router();

inventoryRouter
    .post('/create', ControllerInventory.insertInventory)
    .put('/update/:id', ControllerInventory.updateInventory)
    .get('/list', ControllerInventory.getInventory)

export default inventoryRouter;