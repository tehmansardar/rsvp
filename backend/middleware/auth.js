import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
	// Get token from header
	const token = req.header('auth-token');

	if (!token) {
		return res.status(401).json({ msg: 'No token, Access denied' });
	}

	try {
		const decoded = jwt.verify(token, process.env.SECRET);
		req.user = decoded.user;
		next();
	} catch (err) {
		res.status(401).json({ msg: 'Invalid Token' });
	}
};
export default auth;
