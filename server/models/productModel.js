const mongoose = require('mongoose')
const productSchema = require('../schemas/productSchema')

/**
 *	Pre-save hook. Mongoose middleware
 */
productSchema.pre('save', function(done) {
	if (!this.name) {
		done(new Error('Please fill in the name'))
	} else if (!this.description) {
		done(new Error('Please fill in the description'))
	} else if (!this.price) {
		done(new Error('Please fill in the price'))
	} else {
		done()
	}
})

mongoose.model('product', productSchema)

module.exports = productSchema