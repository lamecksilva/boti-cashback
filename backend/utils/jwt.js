const { sign } = require('jsonwebtoken');
const { HASH_KEY } = process.env;

async function jwtSign(data, options = {}) {
	return new Promise((resolve, reject) => {
		sign(data, HASH_KEY, { ...options }, (err, isValid) => {
			if (err) {
				reject(err);
			} else {
				resolve(isValid);
			}
		});
	});
}

module.exports = { jwtSign };
