import { useReducer } from 'react';
// import axios from '../axios';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import {
	SUCCESS_REGISTER,
	SUCCESS_LOGIN,
	FAIL_REGISTER,
	FAIL_LOGIN,
} from '../types';

const AuthState = (props) => {
	const initialState = {
		userAuth: null,
		errors: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	// register User
	const registerUser = async (userData) => {
		const config = {
			header: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post('/register', userData, config);
			console.log(res.data);
		} catch (error) {
			console.log(error.response.data);
		}
	};

	return (
		<AuthContext.Provider
			value={{ userAuth: state.userAuth, errors: state.errors, registerUser }}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
export default AuthState;
