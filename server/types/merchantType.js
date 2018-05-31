const mongoose = require('mongoose')
const graphQL = require('graphql')
const ProductType = require('./productType')
const Merchant = mongoose.model('merchant')

const {
	GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLList
} = graphQL

const MerchantType = new GraphQLObjectType({
	name: 'MerchantType',
	fields: () => ({
		id: { type: GraphQLID },
		firstName: { type: GraphQLString },
		lastName: { type: GraphQLString },
		address: { type: GraphQLString },
		products: {
			type: new GraphQLList(ProductType),
			resolve(parentValue) {
				return Merchant.findProducts(parentValue.id)
			}
		}
	})
})

module.exports = MerchantType