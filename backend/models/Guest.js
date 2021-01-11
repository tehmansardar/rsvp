import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'users',
	},
	name: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
		required: true,
	},
	diet: {
		type: String,
		default: 'Non-Veg',
	},
	isconfirmed: {
		type: Boolean,
		default: false,
	},
});
export default mongoose.model('guest', guestSchema);
