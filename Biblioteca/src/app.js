import express  from 'express';
import dotenv from 'dotenv'
import authRouter from './routes/authRouter.js';
import cors from 'cors'

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter)




// eslint-disable-next-line no-undef
let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, () => {
  console.log(`Server is running on http:${config.hostname}:${config.port}`);
});