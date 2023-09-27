import { Router } from "express";
import ControllerLoan from "../controllers/ControllerLoans.js";

const loanRouter = Router();

loanRouter
    .post('/', ControllerLoan.insertLoan)
    .put('/:id', ControllerLoan.updateLoan)

export default loanRouter;