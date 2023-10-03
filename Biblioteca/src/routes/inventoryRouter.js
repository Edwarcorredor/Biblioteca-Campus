import ControllerInventory from "../controllers/ControllerInventory.js";
import { Router } from "express";

const inventoryRouter = Router();

inventoryRouter
    .post('/create', ControllerInventory.insertInventory)
    .put('/update/:id', ControllerInventory.updateInventory)
    //.get('/obtener', ControllerInventory. )

export default inventoryRouter;