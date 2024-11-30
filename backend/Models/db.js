import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const MONGO_URI = process.env.MONGO_CONN;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDb connected....!");
  })
  .catch((err) => {
    console.log("Mongodb connection error", err);
  });
