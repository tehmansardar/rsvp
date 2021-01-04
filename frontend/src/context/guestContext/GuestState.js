import React, { useReducer } from 'react';
import GuestContext from './GuestContext';
import guestReducer from './GuestReducer';

const GuestState = (props) => {
	const initialState = {
		guests: [],
	};
	const [state, dispatch] = useReducer(guestReducer, initialState);
	return (
		<GuestContext.Provider value={{ guests: state.guests }}>
			{props.children}
		</GuestContext.Provider>
	);
};

export default GuestState;
