import { Router } from "express";
import ControllerProduct from "../controllers/ControllerProduct";

const productRouter = Router();

productRouter
    .post('/', ControllerProduct.insertProduct)
    .put('/', ControllerProduct.updateProduct)

export default productRouter