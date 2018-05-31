const mongoose = require('mongoose')
const graphQL = require('graphql')
const Product = mongoose.model('product')

const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLFloat
} = graphQL

const ProductType = new GraphQLObjectType({
	name: 'ProductType',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLString },
		description: { type: GraphQLString },
		price: { type: GraphQLFloat },
		merchant: {
			type: require('./merchantType'),
			resolve(parentValue) {
				return Product.findById(parentValue)
					.populate('merchant')
					.then(product => {
						return product.merchant
					})
			}
		}
	})
})

module.exports = ProductType