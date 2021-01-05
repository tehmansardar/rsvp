import React, { useState, useContext } from 'react';
import GuestContext from '../../context/guestContext/GuestContext';
const GuestForm = () => {
	const { addGuest } = useContext(GuestContext);

	const [guest, setGuest] = useState({
		name: '',
		phone: '',
		diet: 'Non-Veg',
	});

	const handleChange = (e) => {
		setGuest({
			...guest,
			[e.target.name]: e.target.value,
		});
	};

	const onsubmit = (e) => {
		e.preventDefault();
		addGuest(guest);
		setGuest({
			name: '',
			phone: '',
			diet: 'Non-Veg',
		});
	};

	const { name, phone, diet } = guest;
	return (
		<div className='invite-section'>
			<h1>Invite Someone</h1>
			<form onSubmit={onsubmit}>
				<input
					type='text'
					placeholder='Name'
					name='name'
					onChange={handleChange}
					value={name}
				/>
				<input
					type='text'
					placeholder='Phone'
					name='phone'
					onChange={handleChange}
					value={phone}
				/>
				<p className='options-label'>Dietary</p>
				<div className='options'>
					<label className='container'>
						Non-veg
						<input
							type='radio'
							name='diet'
							value='Non-Veg'
							onChange={handleChange}
							checked={diet === 'Non-Veg'}
						/>
						<span className='checkmark'></span>
					</label>
					<label className='container'>
						Vegan
						<input
							type='radio'
							name='diet'
							value='Veg'
							onChange={handleChange}
							checked={diet === 'Veg'}
						/>
						<span className='checkmark'></span>
					</label>
					<label className='container'>
						Pascatarian
						<input
							type='radio'
							name='diet'
							value='Pasc'
							onChange={handleChange}
							checked={diet === 'Pasc'}
						/>
						<span className='checkmark'></span>
					</label>
				</div>
				<input type='submit' value='Add Guest' className='btn' />
			</form>
		</div>
	);
};

export default GuestForm;
