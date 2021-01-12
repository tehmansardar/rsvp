import React, { useReducer } from 'react';
import axios from 'axios';
import GuestContext from './GuestContext';
import guestReducer from './GuestReducer';
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

const GuestState = (props) => {
	const initialState = {
		filterGuest: false,
		search: null,
		editAble: null,
		guests: [],
		error: null,
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

	// Get Guest
	const getGuests = async () => {
		try {
			const res = await axios.get('/guests');
			dispatch({
				type: GET_GUEST,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: GUEST_ERROR,
				payload: error.response.data,
			});
		}
	};

	// Add Guest
	const addGuest = async (guest) => {
		const config = {
			'Content-Type': 'application/json',
		};
		try {
			const res = await axios.post('/guests', guest, config);
			dispatch({
				type: ADD_GUEST,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: GUEST_ERROR,
				payload: error.response.msg,
			});
		}
	};

	const removeGuest = async (id) => {
		try {
			await axios.delete(`/guests/${id}`);
			dispatch({
				type: REMOVE_GUEST,
				payload: id,
			});
		} catch (error) {
			dispatch({
				type: GUEST_ERROR,
				payload: error.response.msg,
			});
		}
	};

	const updateGuest = async (guest) => {
		const config = {
			headers: {
				Content_Type: 'application/json',
			},
		};
		try {
			const res = await axios.put(`/guests/${guest._id}`, guest, config);
			dispatch({
				type: UPDATE_GUEST,
				payload: res.data,
			});
		} catch (error) {
			dispatch({
				type: GUEST_ERROR,
				payload: error.response.msg,
			});
		}
	};

	const editGuest = (guest) => {
		dispatch({
			type: EDIT_GUEST,
			payload: guest,
		});
	};

	const clearEdit = () => {
		dispatch({
			type: CLEAR_EDIT,
		});
	};

	return (
		<GuestContext.Provider
			value={{
				guests: state.guests,
				filterGuest: state.filterGuest,
				search: state.search,
				editAble: state.editAble,
				toggleFilter,
				searchGuest,
				clearSearch,
				getGuests,
				addGuest,
				removeGuest,
				updateGuest,
				editGuest,
				clearEdit,
			}}
		>
			{props.children}
		</GuestContext.Provider>
	);
};

export default GuestState;
