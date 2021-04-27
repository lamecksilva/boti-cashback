const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema(
	{
		nome: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		cpf: {
			type: String,
			required: true,
		},
		senha: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = Usuario = mongoose.model('Usuario', UsuarioSchema);
