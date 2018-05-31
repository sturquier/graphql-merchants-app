const mongoose = require('mongoose')
const merchantSchema = require('../schemas/merchantSchema')

/**
 *	Find all products of a single merchant
 */
merchantSchema.statics.findProducts = function(merchantId) {
	return this.findById(merchantId)
		.populate('products')
		.then(merchant => merchant.products)
}

/**
 *	Add a single product to a single merchant
 */
merchantSchema.statics.addProductToMerchant = function(merchantId, name, description, price) {
	const Product = mongoose.model('product')
	const Merchant = mongoose.model('merchant')

	return this.findById(merchantId).then(merchant => {
		const product = new Product({ name, description, price, merchant })
		merchant.products.push(product)

		const updatedMerchant = Merchant.findOneAndUpdate(
			{ _id: merchant._id },
			{ products: merchant.products }
		)

		return Promise.all([
			product.save(),
			updatedMerchant
		]).then(([product, merchant]) => merchant)
	})
}

mongoose.model('merchant', merchantSchema)

module.exports = merchantSchema