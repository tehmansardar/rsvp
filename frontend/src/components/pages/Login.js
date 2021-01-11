import React from 'react';
import { Link } from 'react-router-dom';
const Login = () => {
	return (
		<div className='login'>
			<h1>Sign in</h1>
			<form>
				<input type='email' name='email' placeholder='Email' />
				<input type='password' name='password' placeholder='Password' />

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
