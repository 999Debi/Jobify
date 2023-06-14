import 'express-async-errors'
import express from 'express';
const app=express();
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
const __dirname = dirname(fileURLToPath(import.meta.url));


import helmet from "helmet";
import xss from 'xss-clean';
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";


// db and authenticateUser
import connectDB from './db/connect.js';


//Routes
import authRouter from './routes/authRoute.js'
import jobsRouter from './routes/jobsRoute.js'

// middleware
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';
import authenticateUser from "./middleware/authenticateUser.js";

if(process.env.NODE_ENV !== "production"){
  app.use(morgan('dev'))
}

app.use(express.json())
app.use(cookieParser());
// only when ready to deploy
app.use(express.static(path.resolve(__dirname, './client/build')));
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.use('/api/v1/auth',authRouter)
app.use('/api/v1/jobs',authenticateUser,jobsRouter)

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(errorHandlerMiddleware)
app.use(notFoundMiddleware);



const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();