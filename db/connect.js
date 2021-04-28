const mongoose = require('mongoose');

module.exports = async function dbConnect() {
	try {
		await mongoose.connect(
			process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/boti_cashback',
			{
				dbName: 'boti_cashback',
				connectTimeoutMS: 10000,
				useUnifiedTopology: true,
				serverSelectionTimeoutMS: 5000,
				useNewUrlParser: true,
				keepAlive: true,
				poolSize: 10,
				useFindAndModify: false,
			}
		);

		console.log('MongoDB Connected');
	} catch (err) {
		console.error(err);
	}
};
