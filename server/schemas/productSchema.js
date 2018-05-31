const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
	name: {
		type: String
	},
	description: {
		type: String
	},
	price: {
		type: Number,
		min: 0
	},
	merchant: {
		type: Schema.Types.ObjectId,
		ref: 'merchant'
	}
})

module.exports = productSchema