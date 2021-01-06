import React, { useState, useContext, useEffect } from 'react';
import GuestContext from '../../context/guestContext/GuestContext';
const GuestForm = () => {
	const { addGuest, editAble, updateGuest, clearEdit } = useContext(
		GuestContext
	);

	useEffect(() => {
		if (editAble !== null) {
			setGuest(editAble);
		} else {
			setGuest({
				name: '',
				phone: '',
				diet: 'Non-Veg',
			});
		}
	}, [editAble]);

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
		if (name !== '' && phone !== '') {
			if (editAble !== null) {
				updateGuest(guest);
				clearEdit();
			} else {
				addGuest(guest);
				setGuest({
					name: '',
					phone: '',
					diet: 'Non-Veg',
				});
			}
		} else {
			alert('Please Fill Form correctly');
		}
	};

	const { name, phone, diet } = guest;
	return (
		<div className='invite-section'>
			<h1>{editAble !== null ? 'Edit Guest' : 'Invite Someone'}</h1>
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
				<input
					type='submit'
					value={editAble !== null ? 'Update Guest' : 'Add Guest'}
					className='btn'
				/>
				{editAble !== null ? (
					<input
						type='button'
						className='btn clear'
						value='Cancel'
						onClick={clearEdit}
					/>
				) : null}
			</form>
		</div>
	);
};

export default GuestForm;
