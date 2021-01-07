// importing
import express from 'express';
import connectDB from './config/db.js';
import router from './routes/register.js';
// app config
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json({ extended: true }));
app.use('/register', router);

// DB config
connectDB();

// api routes

// listen
app.listen(port, () => console.log(`Running on Port ${port}`));
