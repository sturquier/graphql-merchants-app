const graphQL = require('graphql')
const MerchantMutationType = require('./merchantMutation')
const ProductMutationType = require('./productMutation')

const {
	GraphQLObjectType
} = graphQL

const MutationType = new GraphQLObjectType({
	name: 'MutationType',
	fields: {
		addMerchant: MerchantMutationType.addMerchant,
		deleteMerchant: MerchantMutationType.deleteMerchant,
		addProductToMerchant: MerchantMutationType.addProductToMerchant,
		deleteProduct: ProductMutationType.deleteProduct
	}
})

module.exports = MutationType