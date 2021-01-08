import express from 'express';
import { check, validationResult } from 'express-validator';

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
	(req, res) => {
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			return res.status(400).json({ error: errors.array() });
		}
		res.send('Success');
		const { name, email, password } = req.body;
	}
);

export default router;
