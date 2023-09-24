import express  from 'express';
import dotenv from 'dotenv'
import authRouter from './routes/authRouter.js';
import cors from 'cors'
import passportConfig from "./helpers/passportHelpert.js"
import userRouter from './routes/userRouter.js'; 
import loanRouter from './routes/loanRouter.js';
import reservationRouter from './routes/reservationRouter.js';
import inventoryRouter from './routes/inventoryRouter.js';

dotenv.config();
const app = express();

app
  .use(cors())
  .use(express.json())
  .use('/auth', authRouter)
  .use(passportConfig.initialize())
  .use(passportConfig.authenticate('bearer', { session: false }))
  .use('/user', userRouter)
  .use('/loan', loanRouter)
  .use('/reservation', reservationRouter)
  .use('inventory', inventoryRouter)


// eslint-disable-next-line no-undef
let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, () => {
  console.log(`Server is running on http:${config.hostname}:${config.port}`);
});