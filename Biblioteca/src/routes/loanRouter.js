import { Router } from "express";
import ControllerLoan from "../controllers/ControllerLoans.js";

const loanRouter = Router();

loanRouter
    .post('/crear', ControllerLoan.insertLoan)
    .put('/actualizar/:id', ControllerLoan.updateLoan)

export default loanRouter;