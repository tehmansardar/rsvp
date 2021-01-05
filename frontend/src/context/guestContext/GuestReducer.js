import {
	TOGGLE_FILTER,
	SEARCH_GUEST,
	CLEAR_SEARCH,
	ADD_GUEST,
	REMOVE_GUEST,
} from '../guestContext/types';

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

		case ADD_GUEST:
			return {
				...state,
				guests: [...state.guests, payload],
			};

		case REMOVE_GUEST:
			return {
				...state,
				guests: state.guests.filter((guest) => guest.id !== payload),
			};

		default:
			return state;
	}
};
