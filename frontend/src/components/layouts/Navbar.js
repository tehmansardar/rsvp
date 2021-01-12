import React, { useContext } from 'react';
import AuthContext from '../../context/authContext/authContext';
const Navbar = () => {
	const { logoutUser, clearError } = useContext(AuthContext);

	const onLogout = () => {
		logoutUser();
		clearError();
	};
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
			<ul>
				<li>Hello, Teman</li>
				<span className='sm-hide'>|</span>
				<li>
					<a href='' onClick={onLogout}>
						<span className='sm-hide'>Logout</span>
						<i className='fas fa-sign-out-alt'></i>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
