const { Router } = require('express');
const passport = require('passport');
const Compra = require('../db/models/Compra');

const router = Router();

module.exports = function cashbackRoutes() {
	router.get(
		'/total/:id',
		passport.authenticate('jwt', { session: false }),
		async (req, res) => {
			try {
				const compras = await Compra.countDocuments({
					usuario: req.params.id,
				}).lean();

				const comprasAprovadas = await Compra.find({ status: 1 }).lean();

				const cashbackTotal = comprasAprovadas.reduce(
					(acc, a) => acc + a.cashback.valor,
					0
				);

				return res.status(200).json({
					success: true,
					payload: {
						comprasAprovadas,
						totalCashback: cashbackTotal,
						totalCompras: compras,
					},
				});
			} catch (err) {
				return res.status(500).json({ success: false, err });
			}
		}
	);

	return router;
};
