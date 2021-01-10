// importing
import express from 'express';
import dotenv from 'dotenv';
import { check, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// middleware

// app config
const router = express.Router();
dotenv.config();

// DB config
import User from '../models/User.js';

// api routes
router.post(
	'/',
	[
		check('email', 'Please provide an email').isEmail(),
		check('password', 'Please provide the password').exists(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (!user) {
				return res.status(400).json({ msg: 'Invalid Email' });
			}
			// match password with bcrypt
			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch) {
				return res.status(400).json({ msg: 'Invalid Password' });
			}
			// assign webtoken
			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				process.env.SECRET,
				{
					expiresIn: 36000,
				},
				(err, token) => {
					if (err) throw err;
					res.json({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(400).send('Server Error');
		}
	}
);

export default router;
