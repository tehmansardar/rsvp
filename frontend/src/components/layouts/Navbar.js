import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/authContext/authContext';
const Navbar = () => {
	const { logoutUser, clearError, userAuth, user } = useContext(AuthContext);

	const onLogout = () => {
		logoutUser();
		clearError();
	};

	const authLinks = (
		<Fragment>
			<li>Hello, {user && user.name}</li>
			<span className='sm-hide'>|</span>
			<li>
				<a href='' onClick={onLogout}>
					<span className='sm-hide'>Logout</span>
					<i className='fas fa-sign-out-alt'></i>
				</a>
			</li>
		</Fragment>
	);

	const guestLinks = (
		<Fragment>
			<li>
				<Link to='/register'>Register</Link>
			</li>
			<span className='sm-hide'>|</span>
			<li>
				<Link to='/login'>Login</Link>
			</li>
		</Fragment>
	);

	return (
		<div className='navbar'>
			<div className='logo'>
				<h1>
					<i className='fas fa-glass-cheers' />
					Party RSVP
				</h1>
				<p>
					Made with <span>❤</span> by Tehman Sardar
				</p>
			</div>
			<ul>{userAuth ? authLinks : guestLinks}</ul>
		</div>
	);
};

export default Navbar;
