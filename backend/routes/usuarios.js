const { compare, hash } = require('bcrypt');
const { Router } = require('express');
const Usuario = require('../db/models/Usuario');
const { jwtSign } = require('../utils/jwt');

const router = Router();

module.exports = function usuarioRoutes() {
	router.post('/', async (req, res) => {
		try {
			const us = await Usuario.findOne({ email: req.body.email }).lean();
			if (us) {
				return res
					.status(400)
					.json({ success: false, errors: { email: 'Email já cadastrado' } });
			}

			const passwordHashed = await hash(req.body.senha, 10);

			const usuario = await Usuario.create({
				...req.body,
				senha: passwordHashed,
			});

			return res
				.status(201)
				.json({ success: true, usuario: { _id: usuario._id } });
		} catch (err) {
			return res.status(500).json({ success: false, err });
		}
	});

	// login route
	router.post('/login', async (req, res) => {
		try {
			const usuario = await Usuario.findOne({ email: req.body.email }).lean();

			const match = await compare(req.body.senha, usuario.senha);

			const { _id, nome, email, cpf, createdAt } = usuario;

			if (!match) {
				return res
					.status(400)
					.json({ success: false, errors: { senha: 'Senha incorreta' } });
			}

			const token = await jwtSign({ id: _id, nome, email, cpf, createdAt }, {});

			return res.status(200).json({ success: true, payload: { token } });
		} catch (err) {
			return res.status(500).json({ success: false, err });
		}
	});

	return router;
};
