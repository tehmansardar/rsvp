import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/authContext/authContext';

const Login = (props) => {
	const [user, setUser] = useState({
		email: '',
		password: '',
	});
	const { email, password } = user;

	const { loginUser, clearError, userAuth, errors } = useContext(AuthContext);

	useEffect(() => {
		if (userAuth) {
			props.history.push('/');
		}
	}, [userAuth, props.history]);

	const handleChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
		clearError();
	};
	const onsubmit = (e) => {
		e.preventDefault();
		loginUser({ email, password });
		clearError();
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
				{errors !== null && (
					<button className='danger'>
						{errors.msg ? errors.msg : errors.errors[0].msg}
						<span onClick={() => clearError()}>X</span>
					</button>
				)}
				<p>
					Don't have account? <Link to='/register'>Sign up</Link>
				</p>
			</div>
		</div>
	);
};

export default Login;
