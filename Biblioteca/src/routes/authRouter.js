import { Router } from 'express';
import ControllerUser from '../controllers/ControllerUser.js';
const authRouter = Router();

authRouter.post('/login', ControllerUser.loginUser);
authRouter.post('/register', ControllerUser.registerUser);

export default authRouter;