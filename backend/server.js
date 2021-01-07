// importing
import express from 'express';
import connectDB from './config/db.js';
// app config
const app = express();
const port = process.env.PORT || 5000;

// middleware

// DB config
connectDB();

// api routes

// listen
app.listen(port, () => console.log(`Running on Port ${port}`));
