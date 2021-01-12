import {
	TOGGLE_FILTER,
	SEARCH_GUEST,
	CLEAR_SEARCH,
	GET_GUEST,
	GUEST_ERROR,
	ADD_GUEST,
	REMOVE_GUEST,
	UPDATE_GUEST,
	EDIT_GUEST,
	CLEAR_EDIT,
} from '../types';

export default (state, { type, payload }) => {
	switch (type) {
		case TOGGLE_FILTER:
			return {
				...state,
				filterGuest: !state.filterGuest,
			};

		case SEARCH_GUEST:
			const reg = new RegExp(`${payload}`, 'gi');
			return {
				...state,
				search: state.guests.filter((guest) => guest.name.match(reg)),
			};

		case CLEAR_SEARCH:
			return {
				...state,
				search: null,
			};

		case GET_GUEST:
			return {
				...state,
				guests: payload,
				error: null,
			};

		case ADD_GUEST:
			return {
				...state,
				guests: [...state.guests, payload],
			};

		case REMOVE_GUEST:
			return {
				...state,
				guests: state.guests.filter((guest) => guest._id !== payload),
			};
		case UPDATE_GUEST:
			return {
				...state,
				guests: state.guests.map((guest) =>
					guest._id === payload._id ? payload : guest
				),
			};
		case EDIT_GUEST:
			return {
				...state,
				editAble: payload,
			};
		case CLEAR_EDIT:
			return {
				...state,
				editAble: null,
			};
		case GUEST_ERROR:
			return {
				...state,
				error: payload,
			};
		default:
			return state;
	}
};
