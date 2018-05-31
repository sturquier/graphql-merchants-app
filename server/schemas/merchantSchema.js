const mongoose = require('mongoose')
const Schema = mongoose.Schema

const merchantSchema = new Schema({
	firstName: {
		type: String
	},
	lastName: {
		type: String
	},
	address: {
		type: String
	},
	products: [{
		type: Schema.Types.ObjectId,
		ref: 'product'
	}]
})

mongoose.model('merchant', merchantSchema)

module.exports = merchantSchema