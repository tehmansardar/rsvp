import React, { useReducer } from 'react';
import GuestContext from './GuestContext';
import guestReducer from './GuestReducer';
import {
	TOGGLE_FILTER,
	SEARCH_GUEST,
	CLEAR_SEARCH,
} from '../guestContext/types';

const GuestState = (props) => {
	const initialState = {
		filterGuest: false,
		search: null,
		guests: [
			{
				id: 1,
				name: 'Tehman Sardar',
				phone: '111 222 3333',
				diet: 'Veg',
				isconfirmed: false,
			},
			{
				id: 2,
				name: 'Zeeshan Sardar',
				phone: '222 111 4444',
				diet: 'Non-Veg',
				isconfirmed: true,
			},
			{
				id: 3,
				name: 'Salman Sardar',
				phone: '111 222 3333',
				diet: 'Pasc',
				isconfirmed: false,
			},
		],
	};
	const [state, dispatch] = useReducer(guestReducer, initialState);

	const toggleFilter = () => {
		dispatch({
			type: TOGGLE_FILTER,
		});
	};

	const searchGuest = (guest) => {
		dispatch({
			type: SEARCH_GUEST,
			payload: guest,
		});
	};

	const clearSearch = () => {
		dispatch({
			type: CLEAR_SEARCH,
		});
	};

	return (
		<GuestContext.Provider
			value={{
				guests: state.guests,
				filterGuest: state.filterGuest,
				search: state.search,
				toggleFilter,
				searchGuest,
				clearSearch,
			}}
		>
			{props.children}
		</GuestContext.Provider>
	);
};

export default GuestState;
