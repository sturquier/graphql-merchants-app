const mongoose = require('mongoose')
const graphQL = require('graphql')
const ProductType = require('../types/productType')
const Product = mongoose.model('product')

const {
	GraphQLID
} = graphQL

const ProductMutationType = {
	// Delete a single product
	deleteProduct: {
		type: ProductType,
		args: { id: { type: GraphQLID }},
		resolve(parentValue, { id }) {
			return Product.remove({ _id: id })
		}
	}
}

module.exports = ProductMutationType