import { Router } from "express";
import ControllerProduct from "../controllers/ControllerProduct.js";

const productRouter = Router();

productRouter
    .post('/crear', ControllerProduct.insertProduct)
    .put('/actualizar/:id', ControllerProduct.updateProduct)

export default productRouter