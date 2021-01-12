import { useReducer } from 'react';
// import axios from '../axios';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setToken from '../../utils/setToken';
import {
	SUCCESS_REGISTER,
	SUCCESS_LOGIN,
	FAIL_REGISTER,
	FAIL_LOGIN,
	SET_ERROR,
	CLEAR_EEROR,
	LOG_OUT,
	SET_USER,
	AUTH_ERROR,
} from '../types';

const AuthState = (props) => {
	const initialState = {
		user: null,
		userAuth: null,
		errors: null,
	};

	const [state, dispatch] = useReducer(authReducer, initialState);

	// get user
	const getUser = async () => {
		if (localStorage.token) {
			setToken(localStorage.token);
		}
		try {
			const res = await axios.get('/auth');
			dispatch({
				type: SET_USER,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: AUTH_ERROR,
				payload: error,
			});
		}
	};

	// register User
	const registerUser = async (userData) => {
		const config = {
			header: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post('/register', userData, config);
			// In res.data TOken would generate on Successfull register
			dispatch({
				type: SUCCESS_REGISTER,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: FAIL_REGISTER,
				payload: error.response.data,
			});
		}
	};

	// login User
	const loginUser = async (userData) => {
		const config = {
			header: {
				'Content-Type': 'application/json',
			},
		};

		try {
			const res = await axios.post('/auth', userData, config);
			// In res.data TOken would generate on Successfull login
			dispatch({
				type: SUCCESS_LOGIN,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: FAIL_LOGIN,
				payload: error.response.data,
			});
		}
	};

	// logout user
	const logoutUser = () => {
		dispatch({
			type: LOG_OUT,
		});
	};

	const setError = (err) => {
		dispatch({
			type: SET_ERROR,
			payload: err,
		});
	};

	const clearError = () => {
		dispatch({
			type: CLEAR_EEROR,
		});
	};

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				userAuth: state.userAuth,
				errors: state.errors,
				getUser,
				registerUser,
				loginUser,
				logoutUser,
				setError,
				clearError,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};
export default AuthState;
