const graphQL = require('graphql')
const MerchantMutationType = require('./merchantMutation')

const {
	GraphQLObjectType
} = graphQL

const MutationType = new GraphQLObjectType({
	name: 'MutationType',
	fields: {
		addMerchant: MerchantMutationType.addMerchant,
	}
})

module.exports = MutationType