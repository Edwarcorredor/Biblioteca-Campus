import { Router } from "express";
import ControllerProduct from "../controllers/ControllerProduct.js";

const productRouter = Router();

productRouter
    .post('/', ControllerProduct.insertProduct)
    .put('/', ControllerProduct.updateProduct)

export default productRouter