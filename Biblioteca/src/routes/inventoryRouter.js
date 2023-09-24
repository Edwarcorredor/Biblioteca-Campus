import ControllerInventory from "../controllers/ControllerInventory";
import { Router } from "express";

const inventoryRouter = Router();

inventoryRouter
    .post('/', ControllerInventory.insertInventory)
    .put('/', ControllerInventory.updateInventory)

export default inventoryRouter;