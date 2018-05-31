const graphQL = require('graphql')

const {
	GraphQLObjectType
} = graphQL

const RootQueryType = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: () => ({

	})
})

module.exports = RootQueryType