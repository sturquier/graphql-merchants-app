const mongoose = require('mongoose')
const merchantSchema = require('../schemas/merchantSchema')

merchantSchema.statics.findProducts = function(merchantId) {
	return this.findById(merchantId)
		.populate('products')
		.then(merchant => merchant.products)
}

mongoose.model('merchant', merchantSchema)

module.exports = merchantSchema