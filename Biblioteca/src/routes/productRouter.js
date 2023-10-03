import { Router } from "express";
import ControllerProduct from "../controllers/ControllerProduct.js";

const productRouter = Router();

productRouter
    .post('/create', ControllerProduct.insertProduct)
    .put('/update/:id', ControllerProduct.updateProduct)

export default productRouter