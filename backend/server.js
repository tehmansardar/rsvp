// importing
import express from 'express';
import connectDB from './config/db.js';
import register from './routes/register.js';
import auth from './routes/auth.js';
import guests from './routes/guests.js';
// app config
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(express.json({ extended: true }));
app.use('/register', register);
app.use('/auth', auth);
app.use('/guests', guests);

// DB config
connectDB();

// api routes

// listen
app.listen(port, () => console.log(`Running on Port ${port}`));
