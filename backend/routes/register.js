import express from 'express';
const router = express.Router();

router.post('/', (req, res) => {
	res.send('User Registered');
});

export default router;