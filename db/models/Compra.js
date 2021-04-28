const Usuario = require('./Usuario');

const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

const CompraSchema = new mongoose.Schema({
	status: {
		type: Number,
		required: true,
		default: 0,
	},
	codigo: {
		type: String,
		required: true,
	},
	valor: {
		type: Number,
		required: true,
	},
	data: {
		type: Date,
		required: true,
	},
	cashback: {
		porcentagem: {
			type: Number,
			required: false,
		},
		valor: {
			type: Number,
			required: false,
		},
	},
	usuario: {
		type: ObjectId,
		required: true,
		ref: Usuario,
	},
});

module.exports = Compra = mongoose.model('Compra', CompraSchema);
