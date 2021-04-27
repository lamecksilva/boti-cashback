const passport = require('passport');
const { ExtractJwt, Strategy } = require('passport-jwt');

const Usuario = require('../db/models/Usuario');

const { HASH_KEY } = process.env;

const options = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey: HASH_KEY,
};

passport.use(
	new Strategy(options, async (jwtPayload, done) => {
		try {
			const user = await Usuario.findOne({ _id: jwtPayload.id }).lean();

			if (!user) {
				return done(null, false);
			}

			return done(null, user);
		} catch (err) {
			return done(err, false);
		}
	})
);
