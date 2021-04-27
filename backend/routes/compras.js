const { Router } = require('express');
const passport = require('passport');
const Compra = require('../db/models/Compra');

const router = Router();

module.exports = function comprasRoutes() {
	router.post(
		'/',
		passport.authenticate('jwt', { session: false }),
		async (req, res) => {
			try {
				const { valor } = req.body;

				const porcentagemCashback = valor > 500 ? 10 : 5;
				const valorCashback = (valor / 100) * porcentagemCashback;

				const compra = await Compra.create({
					...req.body,
					usuario: req.user._id,
					cashback: {
						porcentagem: porcentagemCashback,
						valor: valorCashback,
					},
				});

				return res.status(201).json({ success: true, payload: compra });
			} catch (err) {
				console.error(err);

				return res.status(500).json({ success: false, err });
			}
		}
	);

	router.get(
		'/usuario/:id',
		passport.authenticate('jwt', { session: false }),
		async (req, res) => {
			try {
				const compras = await Compra.find({ usuario: req.params.id }).lean();

				return res.status(200).json({ success: true, payload: compras });
			} catch (err) {
				console.error(err);

				return res.status(500).json({ success: false, err });
			}
		}
	);

	router.get(
		'/id/:id',
		passport.authenticate('jwt', { session: false }),
		async (req, res) => {
			try {
				const compra = await Compra.findOne({ _id: req.params.id }).lean();

				return res.status(200).json({ success: true, payload: compra });
			} catch (err) {
				return res.status(500).json({ success: false, err });
			}
		}
	);

	return router;
};
