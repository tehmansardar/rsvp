import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
	return (
		<div className='register'>
			<h1>Sign Up</h1>
			<form>
				<input type='text' name='name' placeholder='Name' />
				<input type='email' name='email' placeholder='Email' />
				<input type='password' name='password' placeholder='Password' />
				<input
					type='password'
					name='password2'
					placeholder='Confirm Password'
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
