require('dotenv').config();
require('./utils/passport');

const express = require('express');
const passport = require('passport');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const dbConnect = require('./db/connect');
const usuarioRoutes = require('./routes/usuarios');
const comprasRoutes = require('./routes/compras');
const cashbackRoutes = require('./routes/cashback');

// Connect to db
dbConnect();

const app = express();

// Json body middleware
app.use(express.json());
app.use(cors());
app.use(passport.initialize());
app.use(
	morgan(
		':remote-addr :remote-user :method :url HTTP/:http-version :status :res[content-length] - :response-time ms'
	)
);

app.use('/api/usuarios', usuarioRoutes());
app.use('/api/compras', comprasRoutes());
app.use('/api/cashback', cashbackRoutes());

if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('frontend/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
	});
}

app.use((err, req, res, next) => {
	// await errorHandler(err)
	console.error(err);

	res.status(500).json({
		success: false,
		message: 'Internal Server Error',
		error: err?.message || err,
	});
});

const PORT = process.env.PORT || 9000;

app.listen(PORT, () =>
	console.log(`Boti-Cashback backend server running on port ${PORT}`)
);
