import express  from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());


// eslint-disable-next-line no-undef
let config = JSON.parse(process.env.MY_SERVER);
app.listen(config, () => {
  console.log(`Server is running on http:${config.hostname}:${config.port}`);
});