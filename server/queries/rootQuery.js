const graphQL = require('graphql')
const MerchantQueryType = require('./merchantQuery')

const {
	GraphQLObjectType
} = graphQL

const RootQueryType = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		merchants: MerchantQueryType.merchants,
	}
})

module.exports = RootQueryType