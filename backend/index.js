require('dotenv').config();
require('./utils/passport');

const express = require('express');
const dbConnect = require('./db/connect');
const passport = require('passport');
const usuarioRoutes = require('./routes/usuarios');
const comprasRoutes = require('./routes/compras');
const cashbackRoutes = require('./routes/cashback');

// Connect to db
dbConnect();

const app = express();

// Json body middleware
app.use(express.json());
app.use(passport.initialize());

app.use('/api/usuarios', usuarioRoutes());
app.use('/api/compras', comprasRoutes());
app.use('/api/cashback', cashbackRoutes());

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
