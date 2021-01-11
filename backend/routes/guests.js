// importing
import express from 'express';

// middleware
import auth from '../middleware/auth.js';

//config
const router = express.Router();

// Guest Model
import Guest from '../models/Guest.js';

// api routes
router.get('/', auth, async (req, res) => {
	try {
		const guests = await Guest.find({ user: req.user.id });
		res.status(200).json(guests);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

export default router;
