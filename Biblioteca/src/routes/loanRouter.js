import { Router } from "express";
import ControllerLoan from "../controllers/ControllerLoans.js";

const loanRouter = Router();

loanRouter
    .post('/create', ControllerLoan.insertLoan)
    .put('/update/:id', ControllerLoan.updateLoan)

export default loanRouter;