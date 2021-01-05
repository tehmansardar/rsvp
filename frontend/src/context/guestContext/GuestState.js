import React, { useReducer } from 'react';
import GuestContext from './GuestContext';
import guestReducer from './GuestReducer';

const GuestState = (props) => {
	const initialState = {
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

	return (
		<GuestContext.Provider value={{ guests: state.guests }}>
			{props.children}
		</GuestContext.Provider>
	);
};

export default GuestState;
