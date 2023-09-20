import express  from 'express';
import dotenv from 'dotenv'
import loginRouter from './routes/loginRouter.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use('/auth', loginRouter)


let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, () => {
  console.log(`Server is running on http:${config.hostname}:${config.port}`);
});