import express from 'express';
import { check, validationResult } from 'express-validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// User model
import User from '../models/User.js';

//config
const router = express.Router();

// http://localhost:5000/register
router.post(
	'/',
	[
		check('name', 'Please provide a name').not().isEmpty(),
		check('email', 'Please provide a valid email').isEmail(),
		check('password', 'Please provide 6 character long password').isLength({
			min: 6,
		}),
	],
	async (req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ error: errors.array() });
		}
		const { name, email, password } = req.body;
		try {
			let user = await User.findOne({ email });
			if (user) {
				return res.status(400).json({ msg: 'User already exists' });
			}
			user = new User({
				name,
				email,
				password,
			});
			const salt = await bcrypt.genSalt(10);
			user.password = await bcrypt.hash(password, salt);

			await user.save();

			const payload = {
				user: {
					id: user.id,
				},
			};

			jwt.sign(
				payload,
				process.env.SECRET,
				{
					expiresIn: 3600,
				},
				(err, token) => {
					if (err) throw err;
					res.send({ token });
				}
			);
		} catch (err) {
			console.error(err.message);
			res.status(500).send('Server Error');
		}
	}
);

export default router;
