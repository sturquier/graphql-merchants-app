const graphQL = require('graphql')
const MerchantQueryType = require('./merchantQuery')
const ProductQueryType = require('./productQuery')

const {
	GraphQLObjectType
} = graphQL

const RootQueryType = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		merchants: MerchantQueryType.merchants,
		merchant: MerchantQueryType.merchant,
		products: ProductQueryType.products,
		product: ProductQueryType.product
	}
})

module.exports = RootQueryType