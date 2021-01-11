import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';

const url = process.env.URL;

const connectDB = async () => {
	try {
		await mongoose.connect(url, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: true,
		});
		console.log('Connected to mongoDB');
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
};

export default connectDB;
