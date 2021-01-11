import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const { email, password } = user;

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};
	const onsubmit = (e) => {
		e.preventDefault();
		console.log({ email, password });
	};
	return (
		<div className='login'>
			<h1>Sign in</h1>
			<form onSubmit={onsubmit}>
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

				<input type='submit' value='Sign Up' className='btn' />
			</form>
			<div className='question'>
				<p>
					Don't have account? <Link to='/register'>Sign up</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
