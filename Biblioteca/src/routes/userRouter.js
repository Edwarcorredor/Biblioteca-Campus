import { Router } from 'express';
import ControllerUser from '../controllers/ControllerUser.js';

const userRouter = Router();

userRouter
    .put('/actualizar', ControllerUser.updateUser)
    .get('/obtener', ControllerUser.getUser)

export default userRouter;