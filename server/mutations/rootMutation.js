const graphQL = require('graphql')

const {
	GraphQLObjectType
} = graphQL

const MutationType = new GraphQLObjectType({
	name: 'MutationType',
	fields: () => ({

	})
})

module.exports = MutationType