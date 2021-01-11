// importing
import express from 'express';
import { check, validationResult } from 'express-validator';

// middleware
import auth from '../middleware/auth.js';

//config
const router = express.Router();

// Guest Model
import Guest from '../models/Guest.js';

// api routes

// @route Get /guests
// @des Get guests
// @access Private
router.get('/', auth, async (req, res) => {
	try {
		const guests = await Guest.find({ user: req.user.id });
		res.status(200).json(guests);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

// @route POST /guests
// @des Add new guest
// @access Private
router.post(
	'/',
	auth,
	[
		check('name', 'Please Place the name').not().isEmpty(),
		check('phone', 'Please provide the phone').not().isEmpty(),
	],
	async (req, res) => {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			return res.status(400).json({ errors: errors.array() });
		}

		const { name, phone, diet, isconfirmed } = req.body;

		try {
			const newGuest = await new Guest({
				user: req.user.id,
				name,
				phone,
				diet,
				isconfirmed,
			});
			const guest = await newGuest.save();
			res.json(guest);
		} catch (error) {
			console.error(error.message);
			res.status(500).send('server Error');
		}
	}
);

export default router;
