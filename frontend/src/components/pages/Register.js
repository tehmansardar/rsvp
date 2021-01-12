import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/authContext/authContext';
const Register = () => {
	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: '',
	});
	const { name, email, password, password2 } = user;
	const { registerUser } = useContext(AuthContext);
	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const onsubmit = (e) => {
		e.preventDefault();
		if (password !== password2) {
			console.log("Password don't match");
		} else {
			registerUser({ name, email, password });
		}
	};
	return (
		<div className='register'>
			<h1>Sign Up</h1>
			<form onSubmit={onsubmit}>
				<input
					type='text'
					name='name'
					placeholder='Name'
					value={name}
					onChange={handleChange}
				/>
				<input
					type='email'
					name='email'
					placeholder='Email'
					value={email}
					onChange={handleChange}
				/>
				<input
					type='password'
					name='password'
					placeholder='Password'
					value={password}
					onChange={handleChange}
				/>
				<input
					type='password'
					name='password2'
					placeholder='Confirm Password'
					value={password2}
					onChange={handleChange}
				/>
				<input type='submit' value='Sign Up' className='btn' />
			</form>
			<div className='question'>
				<p>
					Already have account? <Link to='/login'>Sign in</Link>
				</p>
			</div>
		</div>
	);
};

export default Register;
