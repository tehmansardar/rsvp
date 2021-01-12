import {
	SUCCESS_REGISTER,
	SUCCESS_LOGIN,
	FAIL_REGISTER,
	FAIL_LOGIN,
	SET_ERROR,
	CLEAR_EEROR,
	LOG_OUT,
} from '../types';

export default (state, { type, payload }) => {
	switch (type) {
		case SUCCESS_REGISTER:
		case SUCCESS_LOGIN:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				userAuth: true,
				errors: null,
			};
		case FAIL_REGISTER:
		case FAIL_LOGIN:
		case LOG_OUT:
			localStorage.removeItem('token');
			return {
				...state,
				userAuth: null,
				errors: payload,
			};
		case SET_ERROR:
			return {
				...state,
				errors: payload,
			};
		case CLEAR_EEROR:
			return {
				...state,
				errors: null,
			};
		default:
			return state;
	}
};
