const graphQL = require('graphql')
const {
	GraphQLSchema
} = graphQL

const RootQueryType = require('../queries/rootQuery')
const MutationType = require('../mutations/rootMutation')

module.exports = new GraphQLSchema({
	query: RootQueryType,
	mutation: MutationType
})