const { Router } = require('express');
const passport = require('passport');

const router = Router();

module.exports = function cashbackRoutes() {
	router.get(
		'/total',
		passport.authenticate('jwt', { session: false }),
		(req, res) => {
			try {
				console.log('total');

				return res.status(200).json({ success: true });
			} catch (err) {
				return res.status(500).json({ success: false, err });
			}
		}
	);

	return router;
};
