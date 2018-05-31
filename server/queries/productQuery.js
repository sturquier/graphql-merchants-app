const mongoose = require('mongoose')
const graphQL = require('graphql')
const ProductType = require('../types/productType')
const Product = mongoose.model('product')

const {
	GraphQLList,
	GraphQLNonNull,
	GraphQLID
} = graphQL

const ProductQueryType = {
	// Find all products
	products: {
		type: new GraphQLList(ProductType),
		resolve() {
			return Product.find({})
		}
	},
	// Find a single product
	product: {
		type: ProductType,
		args: { id: { type: new GraphQLNonNull(GraphQLID) }},
		resolve(parentValue, { id }) {
			return Product.findById(id)
		}
	}
}

module.exports = ProductQueryType