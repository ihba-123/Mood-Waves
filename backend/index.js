import express from 'express'
const app = express();
import './Models/db.js'
import bodyParser from 'body-parser';
import cors from 'cors'
import router from './Routes/AuthRouter.js';

import dotenv from "dotenv"
dotenv.config();

const PORT = process.env.PORT || 8080

app.get('/api',(req,res) => {
  res.send("START");
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth',router);


app.listen(PORT , () => {
  console.log(`Server is running on the port ${PORT}`)
})