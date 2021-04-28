require('dotenv').config();
require('./utils/passport');

const express = require('express');
const passport = require('passport');
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

app.use((err, req, res, next) => {
	// await errorHandler(err)
	console.error(err);

	res.status(500).json({
		success: false,
		message: 'Internal Server Error',
		error: error?.message || error,
	});
});

// app.get('/api/produtos', (req, res) => {
// 	return res.json([
// 		{
// 			codigo: '12912381923',
// 			valor: 240.0,
// 			data: new Date().toISOString(),
// 			porcentagemCashback: 10,
// 			valorCashback: 24.0,
// 			status: 1,
// 		},
// 	]);
// });

const PORT = process.env.PORT || 9000;

app.listen(PORT, () =>
	console.log(`Boti-Cashback backend server running on port ${PORT}`)
);
