import React, { useReducer } from 'react';
import GuestContext from './GuestContext';
import guestReducer from './GuestReducer';
import {
	TOGGLE_FILTER,
	SEARCH_GUEST,
	CLEAR_SEARCH,
	ADD_GUEST,
	REMOVE_GUEST,
	UPDATE_GUEST,
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

	const addGuest = (guest) => {
		guest.id = Date.now();
		guest.isconfirmed = false;

		dispatch({
			type: ADD_GUEST,
			payload: guest,
		});
	};

	const removeGuest = (id) => {
		dispatch({
			type: REMOVE_GUEST,
			payload: id,
		});
	};

	const updateGuest = (guest) => {
		dispatch({
			type: UPDATE_GUEST,
			payload: guest,
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
				addGuest,
				removeGuest,
				updateGuest,
			}}
		>
			{props.children}
		</GuestContext.Provider>
	);
};

export default GuestState;
